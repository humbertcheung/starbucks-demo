<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
// header('Access-Control-Allow-Headers:x-requested-with,content-type');

$username = $_POST['username'];
$password = $_POST['password'];

$data = array("status" => false, "msg" => "账号或密码错误");

if ($username == 'admin' && $password == '1111') {
    $data = array(
        "status" => true,
        "msg" => "登录成功",
        "result" => array(
            "userInfo" => array(
                "name" => "青风",
                "star" => 7,
                "phone" => '18555555555',
                "common_address" => [],
                "avatar" => 'http://img.keaitupian.cn/uploads/2021/06/03/db212bbc23c14118b35c23b0db7cd8bd.jpg'
            )
        )
    );
}

echo json_encode($data, JSON_UNESCAPED_UNICODE);