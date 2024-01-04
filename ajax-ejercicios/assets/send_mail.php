<?php

error_reporting(0);

if (isset($_POST)) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];

    $domain = $_SERVER["HTTP_HOST"];

    $to = "christophermjk@gmail.com";

    $subject_mail = "Contacto desde el formulario del sitio $domain";

    $message = "
        <p>
            Datos desde el formulario del sitio <b>$domain</b>
        </p>
        <ul>
            <li><b>Nombre: </b>$name</li>
            <li><b>Email: </b>$email</li>
            <li>Asunto: $subject</li>
            <li>Comentarios: $comments</li>
        </ul>
    ";

    $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset=utf-8\r\n" . "From: Envío Automático. No responder <no-reply@$domain>";

    $send_mail = mail($to, $subject_mail, $message, $headers);

    if ($send_mail) {
        $res = [
            "err" => false,
            "message" => "Tus datos han sido enviados"
        ];
    } else {
        $res = [
            "err" => true,
            "message" => "Error al enviar tus datos, intenta nuevamente"
        ];
    }

    // TODOS
    header("Access-Control-Allow-Origin:*");
    // ESPECÍFICO
    // header("Access-Control-Allow-Origin:https://dominio.x");

    header('Conteny-type: application/json');
    echo json_encode($res);
    exit;
}