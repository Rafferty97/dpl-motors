<?php

function send_email($fields)
{
  $subject = 'Form Submission';
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= 'From: DPL Motors System <system@dplmotors.com.au>' . "\r\n";
  // $headers .= 'Bcc: alex@justsites.com.au' . "\r\n";

  $content = '<style>td { padding: 0.25em 0.5em; }</style><table>';
  foreach ($fields as $key => $value) {
    $key = str_replace('-', ' ', $key);
    $content .= '<tr><td><b>'. $key. '</b></td><td>'. $value. '</td></tr>';
  }
  $content .= '</table><br/>DPL MOTORS - Parts Form';

  //return mail('service@dplmotors.com.au', $subject, $content, $headers);
  return mail('websites@alexanderrafferty.com', $subject, $content, $headers);
}

function submit() {
  if (!$_SERVER['REQUEST_METHOD'] == 'POST') {
    header("HTTP/1.0 404 Not Found");
    exit;
  }
  if (!isset($_POST['year'])) return false;
  if (!isset($_POST['make'])) return false;
  if (!isset($_POST['model'])) return false;
  if (!isset($_POST['category'])) return false;
  if (!isset($_POST['message'])) return false;
  return send_email($_POST);
}

if (!submit()) {
  header("HTTP/1.0 400 Bad Request");
  exit;
}

?>

OKAY.
