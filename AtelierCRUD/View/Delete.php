<?php
include "C:/Users/sameh/OneDrive/Bureau/WEB/AltelierCRUD/Controller/employeC.php";
$employeC = new EmployeC();
$employeC->DeleteEmploye($_GET['id']);
header('Location: ListEmploye.php');
?>
