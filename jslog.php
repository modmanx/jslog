<?php

error_reporting(E_ALL);
ini_set("show_errors", true);
if(!file_exists('jslog')){
        mkdir('jslog');
}

if(!file_exists('jslog/'.date('Y-m'))){
        mkdir('jslog/'.date('Y-m'));
}

header("Access-Control-Allow-Origin: *");

file_put_contents('jslog/'.date('Y-m').'/'.date('d').'.txt',
        date('Y-m-d H:i:s') . ' <=> ' . PHP_EOL . json_encode(array(
                'GET' => $_GET,
                'SERVER' => $_SERVER
        )).PHP_EOL, FILE_APPEND);

echo json_encode($_GET);
