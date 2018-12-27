<?php


function loginRequired($func, ...$params) {
    try {
        $json = json_decode(JWT::decode($_GET['jwt']));
        session_id($json->session_id);
        session_start();
        if ($_SESSION !== null) {
            if (is_callable($func)) {
                call_user_func($func, $params);
            }
        } else {
            echo json_encode(false);
        }
    } catch (Exception $e) {
        session_id('');
        echo json_encode(false);
    }
}
