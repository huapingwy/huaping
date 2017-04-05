<?php
    class Person {
        public $name = 'huaping';
    }

    $person = new Person();

    //echo __FILE__;

    //echo __DIR__;

    $arr = array("huaping", 3, "huang", "23");

    list($a,$b) = $arr;

    //print_r(array_change_key_case($arr, CASE_UPPER));
    echo "<pre>";
    //print_r(array_chunk($arr, 2));
    //print_r(array_column($arr), 'd')
    echo $a.$b;
?>