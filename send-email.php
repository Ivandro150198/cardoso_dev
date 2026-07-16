<?php
header('Content-Type: application/json; charset=utf-8');

// Rate limit and spam prevention should be added in production.

function sanitize_input($data) {
    return trim(htmlspecialchars($data, ENT_QUOTES, 'UTF-8'));
}

$response = [
    'success' => false,
    'message' => 'Erro ao processar o formulário.'
];

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    $response['message'] = 'Método não permitido.';
    echo json_encode($response);
    exit;
}

$name = sanitize_input($_POST['name'] ?? '');
$email = sanitize_input($_POST['email'] ?? '');
$subject = sanitize_input($_POST['subject'] ?? '');
$message = sanitize_input($_POST['message'] ?? '');
$website = sanitize_input($_POST['website'] ?? '');

if (!empty($website)) {
    http_response_code(422);
    $response['message'] = 'Spam detectado.';
    echo json_encode($response);
    exit;
}

if (strlen($name) < 3 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($message) < 10) {
    http_response_code(400);
    $response['message'] = 'Dados do formulário inválidos.';
    echo json_encode($response);
    exit;
}

// Substitua pelo seu email real
$to = 'ivandrotc11@gmail.com';
$subjectEmail = '[Contato do Site] ' . $subject;
$body = "Nome: {$name}\nEmail: {$email}\nAssunto: {$subject}\n\nMensagem:\n{$message}\n";
$headers = "From: {$name} <{$email}>\r\n";
$headers .= "Reply-To: {$email}\r\n";

$sent = mail($to, $subjectEmail, $body, $headers);

if (!$sent) {
    http_response_code(500);
    $response['message'] = 'Falha ao enviar o email. Tente novamente mais tarde.';
    echo json_encode($response);
    exit;
}

$response['success'] = true;
$response['message'] = 'Mensagem enviada com sucesso.';
http_response_code(200);
echo json_encode($response);
