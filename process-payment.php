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

$customer    = isset($data['customer']) ? $data['customer'] : [];
$delivery    = isset($data['delivery']) ? $data['delivery'] : [];
$puppy       = isset($data['puppy']) ? $data['puppy'] : [];
$flwResponse = isset($data['flwResponse']) ? $data['flwResponse'] : [];

$buyerName   = trim(($customer['firstName'] ?? '') . ' ' . ($customer['lastName'] ?? ''));
if (empty($buyerName)) $buyerName = 'Valued Customer';

$buyerEmail  = trim(filter_var($customer['email'] ?? '', FILTER_SANITIZE_EMAIL));
$buyerPhone  = trim(strip_tags($customer['phone'] ?? 'Not Provided'));

$puppyName   = trim(strip_tags($puppy['name'] ?? 'Puppy'));
$puppyBreed  = trim(strip_tags($puppy['breed'] ?? 'N/A'));
$puppyId     = trim(strip_tags($puppy['id'] ?? 'N/A'));
$puppyPrice  = isset($puppy['price']) ? '$' . number_format($puppy['price'], 2) : '$2,497.00';

$delOption   = trim(strip_tags($delivery['deliveryOption'] ?? 'N/A'));
$delAddress  = trim(strip_tags($delivery['locationText'] ?? ($delivery['streetAddress'] ?? 'N/A')));

$txRef       = isset($flwResponse['tx_ref']) ? $flwResponse['tx_ref'] : ('FLW-' . time());
$txId        = isset($flwResponse['transaction_id']) ? $flwResponse['transaction_id'] : 'N/A';
$flwStatus   = isset($flwResponse['status']) ? $flwResponse['status'] : 'successful';

$to = 'info@everlypups.com';
$subject = "💳 FLUTTERWAVE PAYMENT CONFIRMED: " . $puppyName . " (" . $puppyBreed . ") - " . $buyerName;

$body  = "FLUTTERWAVE TRANSACTION CONFIRMED
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

$body .= "💳 FLUTTERWAVE GATEWAY DETAILS:
";
$body .= "  • Gateway: Flutterwave Payment Gateway
";
$body .= "  • Transaction Ref: " . $txRef . "
";
$body .= "  • Transaction ID: " . $txId . "
";
$body .= "  • Status: " . strtoupper($flwStatus) . "

";

$body .= "====================================
";
$body .= "Action Required: Contact customer at " . ($buyerEmail ?: $buyerPhone) . " to coordinate delivery.
";

$headers  = "From: EverlyPups Flutterwave Gateway <info@everlypups.com>
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
