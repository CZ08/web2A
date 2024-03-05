<?php
class employe
{
   private ?string $id = null;
    private ?string $firstname = null;
    private ?string $lastname = null;
    private ?string $email = null;
    private ?string $dob = null;

    public function __construct( $a=null , $b , $c , $d , $e)
    {
        $this->id = $a;
        $this->firstname = $b;
        $this->lastname = $c;
        $this->email = $d;
        $this->dob = $e;
    } 

    public function getid(): ?string
    {
        return $this->id;
    }

    public function getfirstname(): ?string
    {
        return $this->firstname;
    }

    public function getlastname(): ?string
    {
        return $this->lastname;
    }

    public function getemail(): ?string
    {
        return $this->email;
    }

    public function getdob(): ?string
    {
        return $this->dob;
    }

     

    public function setfirstname(?string $firstname): void
    {
        $this->firstname = $firstname;
    }

    public function setlastname(?string $lastname): void
    {
        $this->lastname = $lastname;
    }

    public function setemail(?string $email): void
    {
        $this->email = $email;
    }

    public function setdob(?string $dob): void
    {
        $this->dob = $dob;

    }
}




?>