<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
    exit;
}

$inputRaw = file_get_contents('php://input');
$data = json_decode($inputRaw, true);

if (!$data) {
    $data = $_POST;
}

$fullName       = isset($data['fullName']) ? trim(strip_tags($data['fullName'])) : '';
$emailAddress   = isset($data['emailAddress']) ? trim(filter_var($data['emailAddress'], FILTER_SANITIZE_EMAIL)) : '';
$phoneNumber    = isset($data['phoneNumber']) ? trim(strip_tags($data['phoneNumber'])) : '';
$countryLocation= isset($data['countryLocation']) ? trim(strip_tags($data['countryLocation'])) : '';
$preferredBreed = isset($data['preferredBreed']) ? trim(strip_tags($data['preferredBreed'])) : '';
$inquiryType    = isset($data['inquiryType']) ? trim(strip_tags($data['inquiryType'])) : '';
$contactMessage = isset($data['contactMessage']) ? trim(strip_tags($data['contactMessage'])) : '';

if (empty($fullName) || empty($emailAddress) || empty($contactMessage)) {
    echo json_encode(['success' => false, 'error' => 'Please fill in required fields']);
    exit;
}

$to = 'info@everlypups.com';
$subject = "New Inquiry from EverlyPups: " . ($inquiryType ? $inquiryType : "General Contact");

$body  = "New Puppy Adoption Inquiry Received:

";
$body .= "Full Name: " . $fullName . "
";
$body .= "Email Address: " . $emailAddress . "
";
$body .= "Phone Number: " . $phoneNumber . "
";
$body .= "Country: " . $countryLocation . "
";
$body .= "Preferred Breed: " . $preferredBreed . "
";
$body .= "Inquiry Topic: " . $inquiryType . "

";
$body .= "Message:
" . $contactMessage . "

";
$body .= "--
Sent from EverlyPups Website Contact Form";

$headers  = "From: EverlyPups Website <info@everlypups.com>
";
$headers .= "Reply-To: " . $fullName . " <" . $emailAddress . ">
";
$headers .= "X-Mailer: PHP/" . phpversion() . "
";
$headers .= "Content-Type: text/plain; charset=UTF-8
";

@mail($to, $subject, $body, $headers, "-f info@everlypups.com");

echo json_encode(['success' => true]);
