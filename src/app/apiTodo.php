<?php 
    $serverName = 'localhost';
    $DataBaseName = 'toDoList';
    $user = 'admin';
    $password = 'azertyuio';
    $db = new PDO($serverName, $DataBaseName, $user, $password);


    $selectAllFromToDo = "SELECT * FROM toDo";
    $request = $db->query($selectAllFromToDo);
    die("bonjour");




?>