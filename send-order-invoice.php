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

$customer       = isset($data['customer']) ? $data['customer'] : [];
$delivery       = isset($data['delivery']) ? $data['delivery'] : [];
$puppy          = isset($data['puppy']) ? $data['puppy'] : [];
$paymentMethod  = isset($data['paymentMethod']) ? trim(strip_tags($data['paymentMethod'])) : 'Requested Invoice';

$buyerName   = trim(($customer['firstName'] ?? '') . ' ' . ($customer['lastName'] ?? ''));
if (empty($buyerName)) $buyerName = 'Valued Customer';
$buyerEmail  = trim(filter_var($customer['email'] ?? '', FILTER_SANITIZE_EMAIL));
$buyerPhone  = trim(strip_tags($customer['phone'] ?? 'Not Provided'));

$puppyName   = trim(strip_tags($puppy['name'] ?? 'Puppy'));
$puppyBreed  = trim(strip_tags($puppy['breed'] ?? 'N/A'));
$puppyGender = trim(strip_tags($puppy['gender'] ?? 'N/A'));
$puppyAge    = trim(strip_tags($puppy['age'] ?? 'N/A'));
$puppyId     = trim(strip_tags($puppy['id'] ?? 'N/A'));
$puppyPrice  = isset($puppy['price']) ? '$' . number_format($puppy['price'], 2) : '$2,497.00';

$delOption   = trim(strip_tags($delivery['deliveryOption'] ?? 'N/A'));
$delAddress  = trim(strip_tags($delivery['locationText'] ?? ($delivery['streetAddress'] ?? 'N/A')));

$to = 'info@everlypups.com';
$subject = "🚨 NEW ORDER INVOICE REQUEST: " . $puppyName . " (" . $puppyBreed . ") - " . $paymentMethod;

$body  = "NEW ORDER INVOICE REQUEST RECEIVED
";
$body .= "====================================

";

$body .= "🐶 PUPPY DETAILS:
";
$body .= "  • Puppy Name: " . $puppyName . "
";
$body .= "  • Breed: " . $puppyBreed . "
";
$body .= "  • Gender / Age: " . $puppyGender . " • " . $puppyAge . "
";
$body .= "  • Puppy ID #: " . $puppyId . "
";
$body .= "  • Adoption Price: " . $puppyPrice . "

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

$body .= "💳 PAYMENT METHOD REQUESTED:
";
$body .= "  • Selected Method: " . $paymentMethod . "
";
$body .= "  • Amount Due: " . $puppyPrice . "

";

$body .= "====================================
";
$body .= "Action Required: Please send the " . $paymentMethod . " payment instructions / invoice to " . ($buyerEmail ?: $buyerName) . " to process the order.
";

$headers  = "From: EverlyPups Orders <info@everlypups.com>
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
