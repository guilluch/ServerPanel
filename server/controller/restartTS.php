<?php
include_once 'loginRequired.php';
include_once '../../omega-social/libs/JWT.php';

function restartTS() {
    exec('/home/teamspeak/teamspeak3-server/ts_server.sh restart', $output);
    echo json_encode($output);
}

loginRequired('restartTS');
