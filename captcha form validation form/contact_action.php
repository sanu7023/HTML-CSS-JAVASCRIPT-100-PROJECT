<?php session_start();
$fname=$_POST['fname']; 
$category=$_POST['category']; 
$mobile=$_POST['mobile']; 
$email=$_POST['email']; 
 $msg=$_POST['msg']; 
 $captcha_val=$_POST['captcha_val'];
 $error= array();
if(strlen($fname)<2){
            $error[] = 'Please enter Full Name using 3 charaters atleast.';
        }
 if(strlen($fname)>2){
            if(!preg_match("/^[a-zA-Z\s]+$/", $fname)){
            $error[] = 'Full Name:Characters Only (No digits or special charaters) ';
        } 
        }
          if(strlen($fname)>20){
            $error[] = 'Full Name: Max length 20 Characters Not allowed';
        }
          
           
         if($email ==''){
            $error[] = 'Please enter email';
        
        }

        if(strlen($email)!=''){
            if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $email)){
            $error[] = 'Enter Valid email id';
        } 
        }
         if(strlen($mobile)!=10){
            $error[] = 'Mobile: Please enter 10 digits mobile number without country code';
        }
        if(strlen($category)==''){
            $error[] = 'Please select service category';
        }
    
        if(strlen($msg)==''){
            $error[] = 'Please enter your message';
        
    }
    if($captcha_val ==''){
            $error[] = 'Please enter captcha';
        
        }
        if($captcha_val!='')
        {
              if ($_SESSION['captcha'] != $captcha_val)
        {
         $error[]='Invalid captcha'; 

         }

        }

         $erro=array(); 
         $i='<i class="fa fa-warning"></i>';
        foreach($error as $err)
        {
        $erro[]=$i.' '.$err;  
        }
        $error_str=implode('<br>', $erro); 
            if($error!=NULL)
            {
                $last_status='failed'; 
            }
        if($error==NULL){
            
            $FromName='7starfgrp';
$FromEmail='sanukumar702355@gmail.com';
 $to_email='sanukumar76696@gmail.com';
 $ReplyTo=$email;
$credits="All rights are reserved | ".$FromName; 
$headers  = "MIME-Version: 1.0\n";
     $headers .= "Content-type: text/html; charset=iso-8859-1\n";
     $headers .= "From: ".$FromName." <".$FromEmail.">\n";
      $headers .= "Reply-To: ".$ReplyTo."\n";
      $headers .= "X-Sender: <".$FromEmail.">\n";
       $headers .= "X-Mailer: PHP\n"; 
       $headers .= "X-Priority: 1\n"; 
       $headers .= "Return-Path: <".$FromEmail.">\n"; 
         $subject="You have received a contact message from  ".$FromName; 
     $msg=$message='Name:- '.$fname.'<br>Email:- ' .$email.'<br> Mobile Number:- '.$mobile.'<br> Service Category:- '.$category.'<br> Message:- '.$msg;
  if(mail($to_email, $subject, $msg, $headers,'-f'.$FromEmail) ){

     $last_status='success';
    } 
    else {
       $last_status="failed";
       $error_str="Server failed to send email , Please try again ...";
} 
        }
        $response = array(
        'errors' =>  $error_str,
        'status' => $last_status
    );
echo json_encode($response);

?>