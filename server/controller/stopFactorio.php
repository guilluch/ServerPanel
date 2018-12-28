<?php
include_once 'loginRequired.php';
include_once '../../omega-social/libs/JWT.php';

function stopFactorio() {
    exec('/home/factorio/factorio_server/factorio.sh stop', $output);
    echo json_encode($output);
}

//loginRequired('stopFactorio');
