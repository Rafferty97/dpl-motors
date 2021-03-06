<?php

function send_email($fields)
{
  $subject = 'Form Submission';
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= 'From: DPL Motors System <system@dplmotors.com.au>' . "\r\n";
  // $headers .= 'Bcc: alex@justsites.com.au' . "\r\n";

  $content = '<style>td { padding: 0.25em 0.5em; }</style><table>';
  $isCustom = false;
  foreach ($fields as $key => $value) {
    if ($key == 'type-of-shed') {
      $isCustom = $value == 'custom';
    }
    if ($key == 'dimensions' && $isCustom) continue;
    if ($key == 'shed-span' && !$isCustom) continue;
    if ($key == 'shed-length' && !$isCustom) continue;
    if ($key == 'shed-height' && !$isCustom) continue;
    $key = str_replace('-', ' ', $key);
    $content .= '<tr><td><b>'. $key. '</b></td><td>'. $value. '</td></tr>';
  }
  $content .= '</table><br/>DPL MOTORS - Trade Form';

  return mail('alex@apheliondigital.com', $subject, $content, $headers);
}

function submit() {
  if (!$_SERVER['REQUEST_METHOD'] == 'POST') {
    header("HTTP/1.0 404 Not Found");
    exit;
  }
  if (!isset($_POST['companyName']) && !isset($_POST['abn'])) return false;
  if (!isset($_POST['email'])) return false;
  if (!isset($_POST['request'])) return false;
  return send_email($_POST);
}

if (!submit()) {
  header("HTTP/1.0 400 Bad Request");
  exit;
}

?>

OKAY.
