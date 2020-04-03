<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
		<meta name="viewport" content="width=device-width, initial-scale=1"> 
		<title>Fondos Animados</title>

		<link rel="stylesheet" type="text/css" href="Vista/css/particulas/normalize.css" />

		<link rel="stylesheet" type="text/css" href="Vista/css/particulas/demo.css" />

		<link rel="stylesheet" type="text/css" href="Vista/css/particulas/component.css" />

		<!-- ===========================REPRODUCTOR============================== -->
		<link rel="stylesheet" type="text/css" href="Vista/css/reprodctor/vpplayer.css" />

		<link href='http://fonts.googleapis.com/css?family=Raleway:200,400,800' rel='stylesheet' type='text/css'>

		<link href="Vista/css/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

		<link href="Vista/css/lib/font-awesome/css/font-awesome.css" rel="stylesheet">

		<link href="Vista/css/lib/reproductor/venobox/venobox.css" rel="stylesheet">
		  
			<!-- Main Stylesheet File -->
		<link href="Vista/css/style.css" rel="stylesheet">

	</head>

	<body>


	<div class="row">

		<div class="header col-xs-12 col-lg-12 col-ms-12 ">
			<?php 
			$id_producto=$_GET['id_producto'];

			if (!is_numeric($id_producto)) { 
			echo "<H1>Error de enlace No son numeros<H1>"; 
			}  
			else {
			// echo "Son numeros";
			}

			include_once'Modelo/bd_conexion.php';

			$sql="SELECT *FROM productos  where productos.activo='1' and productos.id='$id_producto'   ";
			$resultado=$conn->query($sql);

			try {
				
			} catch (Exception $e) {
				$error=$e->getMessage();
				echo $error;
			}
				
			while ($admin = $resultado->fetch_assoc()) {?> 		

			<input type="hidden" class="glyphicon glyphicon-play btn btn-success " type="submit" id="id_div" 
						path="biblioteca/<?php echo $admin['url_directorio'] ?>"
						nombre_cancion="<?php echo $admin['url_directorio']; ?>">
								
			</input>
			<img src="Vista/img_dj/logo_febrero.png" width="20%" style="text-align: center;">

				<h1>PREVIEW<span> <?php echo $admin['url_directorio'];  ?></span></h1>
				<a href="index.php" ><h1 style="background-color: red;">Ir a WWWW.ProeEditsClub.com</h1></a>

	

					<!--  scrip menu reproductor musica -->
				<div id="jquery-script-menu" style="padding-top: 100px;" >
							
					<div class="jquery-script-center padre_reproductor" style="">
						<div id="player" class="demo reproductor" ></div>
						
					</div>
				</div><!--  scrip menu reproductor musica -->
		
							
			<?php } ?>     

		 </div> <!--end class header -->
		

	</div> <!--  end row -->



	</body>
	<script src="Controlador/js/particulas/TweenLite.min.js"></script>
	<script src="Controlador/js/particulas/EasePack.min.js"></script>
	<script src="Controlador/js/particulas/rAF.js"></script>
	<script src="Controlador/js/particulas/demo-1.js"></script>
	<!-- ============================REPRODUCTOR============================= -->
	<!-- <script src="Controlador/js_reproductor.js"></script> -->
	<script src="Controlador/js/jquery/jquery.min.js"></script>
	<script src="Controlador/js/jquery/jquery.slim.min.js"></script>
	<script src="Controlador/js/bootstrap/bootstrap.min.js"></script>


	<script src="Controlador/js/reproductor/vpplayer.js"></script>


	<script>
		$(document).ready(function(){
		var titulo=$(this).attr('nombre_cancion');
		var path=$('.glyphicon-play').attr('path');//url y nombre del tema

		console.log("spy pach",path);

		$("#player").vpplayer({
		playerType: "audio",
		src: path,
		autoPlay: true,
/*				preloadMessage: "LOADING...ProeditsClub",*/
/*		playerColor: "red",
		displayColor: "blue",*/
		trackName: "BRYTIAGO FT DARELL - ASESINA REMIX - ACAPELLA - DEEJAYMIXX - 98.mp3"

		});


	});

	</script>






</html>