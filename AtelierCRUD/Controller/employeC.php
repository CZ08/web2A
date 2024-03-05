<?php

include "C:/Users/sameh/OneDrive/Bureau/WEB/AltelierCRUD/config.php";

class EmployeC
{ 
        public function ListEmploye(){
        $sql="SELECT * FROM employe";
        $db = config::getConnexion();
        try{
            $list = $db->query($sql);
            return $list;
        }
        catch (Exception $e){
            die('Message Erreur: '.$e->getMessage());
        }
    } 
    
         public function DeleteEmploye($id){
        $sql="DELETE FROM employe WHERE id = :id";
        $db = config::getConnexion();
        $req = $db->prepare($sql); 
        $req->bindValue(':id',$id); 
        try{
            $req->execute(); 
        }
        catch (Exception $e){
            die('Erreur: '.$e->getMessage()); 
        }
    }

    public function AddEmploye($employe){
        $sql="INSERT INTO employe VALUES (NULL,:firstname,:lastname,:email,:dob)";
        $db = config::getConnexion();
        $req = $db->prepare($sql); 
        $req->bindValue(':firstname',$employe->getfirstname());
        $req->bindValue(':lastname',$employe->getlastname());
        $req->bindValue(':email',$employe->getemail());
        $req->bindValue(':dob',$employe->getdob());
        try{
            $req->execute(); 
        }
        catch (Exception $e){
            die('Erreur: '.$e->getMessage()); 
        }
    }
     
  
}
?>



