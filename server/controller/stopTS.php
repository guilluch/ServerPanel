<?php

include_once '../../omega-social/libs/JWT.php';


try {
    $json = json_decode(JWT::decode($_GET['jwt']));
    session_id($json->session_id);
    session_start();
    if ($_SESSION !== null) {
        exec('/home/teamspeak/teamspeak3-server/ts_server.sh stop', $output);
        echo json_encode($output);
    } else {
        echo json_encode(false);
    }
} catch (Exception $e) {
    session_id('');
    echo json_encode(false);
}
