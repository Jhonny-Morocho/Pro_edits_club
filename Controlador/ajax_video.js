/*$(document).ready(function(){*/

	console.log("Soy el video");



	/*------------------------------AGREGAR VIDEO----------------------*/
	/*------------------------------AGREGAR VIDEO----------------------*/
	/*------------------------------AGREGAR VIDEO----------------------*/
	/*------------------------------AGREGAR VIDEO----------------------*/
	$('#id_crear_video').on('submit',function(e){
		e.preventDefault();
		console.log("soy crear video");
		// obtnemos los datos del formulario
		var datos=$(this).serializeArray();
		var crear="crear";
		console.log(datos);
		$.ajax({
			type:$(this).attr('method'),
			data:datos,crear,
			url:$(this).attr('action'),
			dataType:'json',
			success:function(data){
				console.log(data);
				var resultado=data;
				console.log(data.respuesta);
				if(resultado.respuesta==('exito')){
					swal(
						  'Registro Exitoso !'+resultado.resultado_video,
						  'Nuevo Video ingresado A la tabla de productos! ',
						  'success'
						)
				}else{
					console.log("Ubo un error");
					swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'Revise bien los datos ingresado!',
					  footer: '<a href>Ingresastes correctamente lo datos?</a>'
					})
				}
			}
		});
	});





///////////////////////////////////EDITAR VIDEO/////////////////////////////////////////
///////////////////////////////////EDITAR VIDEO/////////////////////////////////////////
///////////////////////////////////EDITAR VIDEO/////////////////////////////////////////
///////////////////////////////////EDITAR VIDEO/////////////////////////////////////////
///////////////////////////////////EDITAR VIDEO/////////////////////////////////////////

	$('#id_editar_video').on('submit',function(e){
		e.preventDefault();
		console.log("Click en editar video");
		// obtnemos los datos del formulario
		var datos=$(this).serializeArray();
		console.log(datos);
		$.ajax({
			type:$(this).attr('method'),
			data:datos,
			url:$(this).attr('action'),
			dataType:'json',//json
			success:function(data){
				console.log(data);
				var resultado=data;
			/*	console.log(data.respuesta);*/
				if(resultado.respuesta==('exito')){
					swal(
						  'Registro Exitoso! Titulo del video '+resultado.titulo_video,
						  'El precio del video es : $  '+resultado.precio,
						  'success'
						)
				}else{
					console.log("Ubo un error");
					swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'Revise bien los datos ingresado o es el mismo datos no lo as cambiado!',
					  footer: '<a href>Ingresastes correctamente lo datos?</a>'
					})
				}
			}
		});
	});




///////////////////////////////////EDITAR VIDEO/////////////////////////////////////////
///////////////////////////////////EDITAR VIDEO/////////////////////////////////////////
///////////////////////////////////EDITAR VIDEO/////////////////////////////////////////
///////////////////////////////////EDITAR VIDEO/////////////////////////////////////////
///////////////////////////////////EDITAR VIDEO/////////////////////////////////////////

	$('.borrar_registro_video').on('click',function(e){
		e.preventDefault();
		console.log("Click en borrar_registro_video ");

		var id=$(this).attr('data-id');
		var tipo=$(this).attr('data-tipo');// pueden venir n tipo de dara tipo
		var titulo=$(this).attr('data-titulo');
		console.log("ID :"+ id);
		console.log("Tipo: "+ tipo);
		console.log("titulo: "+ titulo);

		//BOTON DE ALERTA
		swal({
		  title: 'Estás seguro en eliminar ? '+titulo,
		  text: "No podrass revertir esto!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, Eliminar!'
		}).then((result) => {
		  if (result.value) {

				$.ajax({
					type:'post',// si no hay formulario entonces seria por pos
					data:{
						//aqui envio los datos al servidor
						'id':id,
						'registro':'eliminar'

					},
						url:'../Modelo/modelo_'+tipo+'.php',// mando al servidor con la opcion que sea(modelo_proveedor.php)
						success:function(data){// si el llamado es correcto nos regresa uno datos
						console.log(data);// me regresa un string y solo con convierto
						var resultado=JSON.parse(data);// lo convierto en objeto
						//impirmir
						console.log("Todo el resultado :"+resultado.respuesta);
						console.log("EL bojeto ahora el id :"+resultado.id_producto);
						/*console.log("EL ID EN JSON ES id :"+resultado.id_eliminado);*/
						/*			console.log("EL bojeto ahora el id :"+resultado.id_eliminado);*/
						if(resultado.respuesta=='exito'){
						jQuery('[data-id="'+resultado.id_producto +'"]').parents('tr').remove();	

						}else{// si no se puede elimnar presenta este mensaje
							// presenta eset mensaje si no se elimina de la base de datos
							swal({
							  type: 'error',
							  title: 'Oops...',
							  text: 'Algo salió mal!',
							  footer: '<a href>Why do I have this issue?</a>'
							})
						}				
					}
				});/// fin ajaxa
		    swal(// si se elimno presenta el mensaje de confirmacion

		      'Eliminado!',
		      'Tu archivo ha sido eliminado. id_cancion',
		      'success'
		    )
		  }
		})

	});


//});// fin document


