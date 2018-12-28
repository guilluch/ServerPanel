<?php

exec("ls /home/factorio/factorio_server/saves | sed -e 's/\.zip$//'", $output);
echo json_encode($output);
