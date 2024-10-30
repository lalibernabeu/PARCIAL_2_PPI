
<?php
    $servidor="localhost";
    $usuario="root";
    $password="";
    $bd="listado";

    $conn=new mysqli($servidor,$usuario,$password,$bd);
    if ($conn->connect_error){
        die("La conexion ha fallado".$conn->connect_error);
    }

    $sql="SELECT * FROM trabajadores";
    $resultado= $conn->query($sql);

    $trabajadores=array();
    if($resultado->num_rows>0){
        while($fila=$resultado->fetch_assoc()){
            $trabajadores[]=$fila;
        }
    }

    foreach($trabajadores as $trabajador){
        echo $trabajador ["id"]. "-". $trabajador["nombre_de_trabajador"]. "-". $trabajador["oficio"]."-".$trabajador["edad"]."años </br>";
    }

    $conn->close();
?>
