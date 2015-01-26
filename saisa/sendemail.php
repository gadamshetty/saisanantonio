<div>

  <?php


  $msg = "Your request can not be processed, please contact us at info@saisanantonio.org";

  $to = 'info@saisanantonio.org'; 
  $smailtype = $_REQUEST['mailtype'];
  $name = $_REQUEST['sname'];
  $volunteer = $_REQUEST['svolunteer'];   
  $sponsoring = " ";
  $comments = " ";
  if (isset($_REQUEST['scomments'])){
    $comments = $_REQUEST['scomments'] ;
  }
  
  $email = '';
  if (isset( $_REQUEST['semail']) ){
    $email = $_REQUEST['semail'] ;
  }
  
  $phone = '';
  if (isset( $_REQUEST['sphone']) ){
    $email = $_REQUEST['sphone'] ;
  }
  
  if($smailtype == 3){
      $subject = "Suggestions from Devotees";
    }
    
  if($smailtype == 1){
    $subject = "Subscribe to Mailing List";
    
    if (isset($_REQUEST['svolunteer'])){
      $sponsoring = "Interested in Volunteer";
    }
    
  }
  
  if($smailtype == 2){
    $subject = "Food/Prasadam Sponsor";

    if (isset($_REQUEST['svolunteer1'])){
      $sponsoring = $sponsoring . "Food" . ", " ;
    }
    
    if (isset($_REQUEST['svolunteer2'])){
      $sponsoring = $sponsoring . "Prasadam" . ", " ;
    }
    
    if (isset($_REQUEST['svolunteer3'])){
      $sponsoring = $sponsoring . "Flowers/Garlands" . ", " ;
    }
    
    if (isset($_REQUEST['svolunteer4'])){
      $sponsoring = $sponsoring . "Other (Please see comments)" . ", " ;
    }

}
   
    if (strlen($_REQUEST['semail']) > 0)  {

      $message = '
      <html>
      <head>
        <title>Sri Shirdi Sai Baba San Antonio</title>
      </head>
      <body>
        <p>'.$subject.'</p>
        <table>
          <tr>
            <td>Name : </td><td>'.$name.'</td> 
          </tr>
          <tr>
            <td>Email : </td><td>' . $email . '</td>
          </tr>
          <tr>
            <td>Phone : </td><td>'.$phone.'</td>
          </tr>
          <tr>
            <td>Volunteer/Sponsoring : </td><td>'.$sponsoring.'</td>
          </tr>
          <tr>
            <td>Comments : </td><td>'.$comments.'</td>
          </tr> 
          </table>
      </body>
      </html>
      ';
      
      // To send HTML mail, the Content-type header must be set
      $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      $headers .= 'From: Sri Shirdi Sai San Antonio <info@saisanantonio.org>' . "\r\n";

      // Mail it
      mail($to, $subject, $message, $headers);
  
      $msg = "Thank you for your interest!";
    }
    else {
      $msg = "Please enter email id";
    }


  echo $msg
  
 


?>

 
  
</div>

