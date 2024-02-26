<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
</head>
 
<body>
    <?php
    $testValue= false;
    $champs= ['nom', 'prenom','email','adresse','code_postal'];
    foreach($champs as $c) {
        if(empty($_GET[$c]))
        {
            $testValue=true ;
        }
    }
    if(!$testValue)  { ?>
    <h2>Tableau</h2>
 
    <table border="1">
        <tr>
            <td>Nom</td>
            <td>Prenom</td>
            <td>Adresse</td>
            <td>Email</td>
            <td>Code postal</td>
        </tr>
        <tr>
            <td> <?php echo   isset($_GET['nom']) ? $_GET['nom'] : ''    ?> </td>
            <td> <?php
             if(isset($_GET['prenom'])){
                echo $_GET['prenom'] ;
             } else {
                echo '';
             }
             ?> </td>
            <td> <?php echo isset($_GET['email']) ? $_GET['email'] : '' ?> </td>
            <td> <?php echo isset($_GET['adresse'])  ? $_GET['adresse']  : '' ?> </td>
            <td> <?php echo isset($_GET['code_postal']) ?  $_GET['code_postal'] : ''?> </td>
        </tr>
    </table>
 
<?php } else {
 
    echo '<p> champs manquants</p>';
}
?>
 
</body>
 
</html>