<?php

include_once 'loginRequired.php';

function getPid($process) {
    exec('ps -C ' . $process . ' -o pid=', $output);
    if (empty($output)) {
        echo false;
    } else {
        echo json_encode($output[0]);
    }
}


loginRequired('getPid', ['ts3server']);
