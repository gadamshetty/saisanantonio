<h2> sending email 1......... </h2>

<?php


$to      = 'gadamshetty@gmail.com';
$subject = 'first subject1 from sai';
$message = 'first message';
      $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      $headers .= 'From: Naresh Gadamshetty <gadamshetty@gmail.com>' . "\r\n";

      // Mail it
      mail($to, $subject, $message, $headers);
?>


<h1> PHP Info file </h1>

<?php phpinfo();  ?>