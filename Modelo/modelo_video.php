<?php 
	include_once'bd_conexion.php';
	date_default_timezone_set('America/Guayaquil');
    $fecha_actual=date("Y-m-d");

    //variables
    @$id_genero=$_POST['id_genero'];
    @$enlace_descarga=$_POST['enlace_descarga'];
    @$enlace_frane=$_POST['enlace_frame'];
    @$dolares=$_POST['dolares'];
    @$centavos=$_POST['centavo'];
    @$id_proveedor=$_POST['id-proveedor'];
    @$titulo_video=$_POST['titulo_video'];
    @$tipo="video";




	/////////////////////////////////////////AGREGAR VIDEO//////////////////////
	/////////////////////////////////////////AGREGAR VIDEO//////////////////////
	/////////////////////////////////////////AGREGAR VIDEO//////////////////////
	/////////////////////////////////////////AGREGAR VIDEO//////////////////////

	if(@$_POST['registro-nuevo']=='nuevo'){

		$activo=1;
		$precio=$dolares.".".$centavos;
		
		//en url_directorio pongo los datos del frame o enlace de mega demo

		try{
		$stmt=$conn->prepare("INSERT INTO productos (
											precio, 
											url_descarga,
											url_directorio, 
											id_biblioteca,
											id_proveedor,
											activo,
											fecha_producto,
											tipo,
											frame) VALUES(?,?,?,?,?,?,?,?,?)");

			$stmt->bind_param("sssiiisss",
								$precio,
								$enlace_descarga,
								$titulo_video,
								$id_genero,
								$id_proveedor,
								$activo,
								$fecha_actual,
								$tipo,
								$enlace_frane);
			$stmt->execute();
			$id_insertado=$stmt->insert_id;

			if ($stmt->affected_rows) {
				$respuesta=array(
				'respuesta'=>'exito',
				'id_insertado'=>$id_insertado,
				'resultado_video'=>$titulo_video
				);

			}else{
				$respuesta=array(
					'respuesta'=>'error'
				);
			}
			$stmt->close();
			$conn->close();
		} catch (Exception $e) {
			$respuesta=array('respuesta'=> $e->getMessage());
		}

		die(json_encode($respuesta));
	}// fin  ingresar produto


	///////////////////////////////////////////EDITAR VIDEO/////////////////////
	///////////////////////////////////////////EDITAR VIDEO/////////////////////
	///////////////////////////////////////////EDITAR VIDEO/////////////////////
	///////////////////////////////////////////EDITAR VIDEO/////////////////////
	///////////////////////////////////////////EDITAR VIDEO/////////////////////

	if(@$_POST['registro-editar']=='editar'){
		try {

			$id_producto= $_POST['id-producto'];

			$precio=$dolares.".".$centavos;


			$stmt=$conn->prepare("UPDATE productos SET 
													precio=?, 
													url_descarga=?,
													url_directorio=?,
													id_biblioteca=?,
													frame=?
													 WHERE id=?");


			$stmt->bind_param("sssisi",
										$precio,
										$enlace_descarga,
										$titulo_video,
										$id_genero,
										$enlace_frane,
										$id_producto
									);
			$stmt->execute();

			if ($stmt->affected_rows) {
					$respuesta=array(
					'respuesta'=>'exito',
					'titulo_video'=>$titulo_video,
					'precio'=>$precio
					);

				}else{
					$respuesta=array(
						'respuesta'=>'error'
					);
				}



		} catch (Exception $e) {
			$respuesta=array('respuesta'=> $e->getMessage());
		}
		die(json_encode($respuesta));	

	}// fin  ingresar produto


	///////////////////////////ELIMNAR PRODUCTOS BORRADO LOGICO//////////////////
	///////////////////////////ELIMNAR PRODUCTOS BORRADO LOGICO//////////////////
	///////////////////////////ELIMNAR PRODUCTOS BORRADO LOGICO//////////////////
	///////////////////////////ELIMNAR PRODUCTOS BORRADO LOGICO//////////////////


	if(@$_POST['registro']=='eliminar'){
		//die(json_encode($_POST));// die imprime un mensaje del scrip


		try{
			$id_borrar=$_POST['id'];
			$stmt=$conn->prepare("UPDATE productos SET activo=? WHERE id=?
				");
			$estado=0;
				$stmt->bind_param("ii",$estado,$id_borrar);
				$stmt->execute();

				$id_insertado=$stmt->insert_id;

				if ($stmt->affected_rows) {
					$respuesta=array(
					'respuesta'=>'exito',
					'id_insertado'=>$id_insertado,
					'id_producto'=>$id_borrar,
					'resultado_cancion'=>'Borrado_Logico'
					);

				}else{
					$respuesta=array(
						'respuesta'=>'error'
					);
				}
				$stmt->close();
				$conn->close();
			} catch (Exception $e) {
				$respuesta=array('respuesta'=> $e->getMessage());
			}
		die(json_encode($respuesta));			
	}



?>

 