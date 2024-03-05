<?php
    include "../Controller/employeC.php";
    include "../Model/employe.php";
    $error = null;
    $emp = null;
    if(isset($_POST["fName"]) 
    && isset($_POST["lName"]) 
    && isset($_POST["email"]) 
    && isset($_POST["dob"])){
        if(!empty($_POST["fName"])
        && !empty($_POST["lName"])
        && !empty($_POST["email"])
        && !empty($_POST["dob"])){
            
            $emp = new Employe(null,
            $_POST["fName"],
            $_POST["lName"],
            $_POST["email"],
            (new DateTime($_POST["dob"]))->format('Y-m-d') // Remove trailing comma
            );
            $empC = new EmployeC();
            $empC->addEmploye($emp);
            header('Location:ListEmploye.php'); // Redirection vers la page ListEmploye.php
            exit; // Terminer l'exécution du script après la redirection
        }
        else{
            $error = "Missing info"; 
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
    }

    form {
        margin: 20px;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    label {
        display: inline-block;
        width: 100px;
        margin-bottom: 10px;
        font-weight: bold;
    }

    input[type="text"],
    input[type="email"] {
        width: 200px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
        transition: border-color 0.3s ease-in-out;
    }

    input[type="text"]:focus,
    input[type="email"]:focus {
        border-color: #4CAF50;
    }

    input[type="submit"],
    input[type="reset"] {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
    }

    input[type="submit"]:hover,
    input[type="reset"]:hover {
        background-color: #45a049;
    }
</style>
</head>
<body>
<form action="" method="POST">
        <table>
            <tr>
                <td><label for="">First Name</label></td>
                <td><input type="text" name="fName" id="fName"></td>
            </tr>
            <tr>
                <td><label for="">Last Name</label></td>
                <td><input type="text" name="lName" id="lName"></td>
            </tr>
            <tr>
                <td><label for="">Email</label></td>
                <td><input type="email" name="email" id="email"></td>
            </tr>
            <tr>
                <td><label for="">Date of Birth</label></td>
                <td><input type="date" name="dob" id="dob"></td>
            </tr>
            <tr>
                <td><input type="submit" value="Submit"></td>
                <?php
                    echo $error;
                ?>
                <td><input type="reset" value="Reset"></td>
            </tr>
        </table>
    </form>
</body>
</html>