<?php
include "C:/Users/sameh/OneDrive/Bureau/WEB/AltelierCRUD/Controller/employeC.php";
 
$employeC = new EmployeC();
$listeEmployes = $employeC->ListEmploye();
print_r($listeEmployes);
?>
<!DOCTYPE html>
 
 
<html>

<head>
    
    <title>List of employes</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th,
        td {
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2
        }
    </style>
</head>

<body>

    <center>
        <h1>List of employes</h1>
        
    </center>
    <table border="1" align="center" width="70%">
        <tr>
            <th>Id Employe</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>

        <?php
        foreach ($listeEmployes as $employe) {
        
            echo "<tr>";
            echo "<td>" . $employe['id'] . "</td>";
            echo "<td>" . $employe['firstname'] . "</td>";
            echo "<td>" . $employe['lastname'] . "</td>";
            echo "<td>" . $employe['email'] . "</td>"; 
            echo "<td>" . $employe['dob'] . "</td>";
             echo "<td><a href='Update.php?id=" . $employe['id'] . "'>Update</a></td>";
             echo "<td><a href='Delete.php?id=" . $employe['id'] . "'>Delete</a></td>";
            echo "</tr>";
            
        }
        ?>

   
    </table>
</body>

</html>