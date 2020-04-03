/*$(document).ready(function(){*/

	console.log("soy musica");

	

/////////////////////////////////////////////CREAR PRODUCTO/////////////////////////
/////////////////////////////////////////////CREAR PRODUCTO/////////////////////////
/////////////////////////////////////////////CREAR PRODUCTO/////////////////////////
/////////////////////////////////////////////CREAR PRODUCTO/////////////////////////
	$('#guardar_musica').on('submit',function(e){
		e.preventDefault();
		$(".progress-bar").attr("aria-valuenow", "0");
		$(".progress-bar").css("width", "0%");
		$(".sr-only").html("0% Complete (success)");
		console.log("Click");
		// obtnemos los datos del formulario
		var datos=new FormData(this);

		for (var pair of datos.entries()) {
		    console.log(pair[0]+ ', ' + pair[1]); 
		}
	/*	var datos=$(this).serializeArray();*/
	//==============ANIMACION FLECHAS GIRANDO==================//
		$("#guardar_musica").append("<div class='overlay'>"
			+"<i class='fa fa-refresh fa-spin'>"+"</i>"+"</div>");
		console.log(datos);
		$.ajax({
			xhr: function() {
				var xhr = new window.XMLHttpRequest();
				// Upload progress.
				xhr.upload.addEventListener("progress", function(evt){
					if (evt.lengthComputable) {
						var porcentaje = Math.floor(evt.loaded / evt.total * 100);
						$(".progress-bar").attr("aria-valuenow", porcentaje);
						$(".progress-bar").css({ 'background': 'Orange' });
						$(".progress-bar").css({ 'padding': '20px' });
						$(".progress-bar").css("width", porcentaje + "%");
						$(".sr-only").html(porcentaje + "% Completado");
						console.log(porcentaje);
					}
				}, false);
				
				return xhr;
			},
			type:"POST",
			data:datos,
			url:'../Modelo/modelo_musica.php',
			dataType:'json',
			// datos asicionales
			contentType:false,
			processData:false,
			async:true,
			cache:false,
			success:function(data){
				/*console.log(data);*/
				var resultado=data;
				console.log("Este es la data "+data);
				console.log("Resultado "+resultado.respuesta);
				/*console.log("Resultado "+resultado.post);*/
				/*console.log("Resultado "+resultado.file);*/

				/////////////////AGREGO ANIMACION DE CARGA///////////////////////

				///////////////////remover nodo////////////////
				if(resultado.respuesta=='exito'){
					swal(
						  'Se guardo Exitosamente !<br> '+resultado.titulo+"<br><h3> Precio</h3> "+resultado.precio,
						  'Numero de producto ! '+resultado.id_insertado,
						  'success'
						)

				$('.overlay').remove();
				}else{
					swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'No Se pudo Subir el Archivo!',
					  footer: '<a href>Ingresastes correctamente lo datos?</a>'
					})
				}

				
			}
		});
	});








	//////////////////////////////////////////EDITAR PRODUCTOS////////////////////////////
	//////////////////////////////////////////EDITAR PRODUCTOS////////////////////////////
	//////////////////////////////////////////EDITAR PRODUCTOS////////////////////////////
	//////////////////////////////////////////EDITAR PRODUCTOS////////////////////////////
	$('#editar_musica').on('submit',function(e){
		e.preventDefault();
		$(".progress-bar").attr("aria-valuenow", "0");
		$(".progress-bar").css("width", "0%");
		$(".sr-only").html("0% Complete (success)");
		// obtnemos los datos del formulario
		var datos=new FormData(this);
		// imprimir los valores de formdata
		for (var pair of datos.entries()) {
		    console.log(pair[0]+ ', ' + pair[1]); 
		}
	

		//==============ANIMACION FLECHAS GIRANDO==================//
		$("#editar_musica").append("<div class='overlay'>"
			+"<i class='fa fa-refresh fa-spin'>"+"</i>"+"</div>");

		console.log("metodo de envio ",$(this).attr('method'));
		console.log("url de envio ",$(this).attr('action'));
		console.log("datos a enviar ",datos);

		$.ajax({
			xhr: function() {
				var xhr = new window.XMLHttpRequest();
				// Upload progress.
				xhr.upload.addEventListener("progress", function(evt){
					if (evt.lengthComputable) {
						var porcentaje = Math.floor(evt.loaded / evt.total * 100);
						$(".progress-bar").attr("aria-valuenow", porcentaje);
						$(".progress-bar").css("width", porcentaje + "%");
						$(".sr-only").html(porcentaje + "% Completado");
						console.log(porcentaje);
					}
				}, false);
				// xhr.addEventListener("progress", function(evt){
				// 	if (evt.lengthComputable) {
				// 		var porcentaje = evt.loaded / evt.total;
				// 		console.log(porcentaje);
				// 	}
				// }, false);
				return xhr;
			},

			type:$(this).attr('method'),
			data:datos,
			url:$(this).attr('action'),
			dataType:'json',//json
			// datos asicionales
			contentType:false,
			processData:false,
			async:true,
			cache:false,
			success:function(data){
				/*console.log(data);*/
				/*console.log(data);*/
				var resultado=data;
				console.log("Este es la data "+data);
				console.log("Resultado "+resultado.respuesta);
				/*console.log("Resultado "+resultado.post);*/
				/*console.log("Resultado "+resultado.file);*/
				var archivo_el_mismo=resultado.resultado_cancion;
				console.log("archivo",archivo_el_mismo);
				if(resultado.respuesta=='exito'){
					swal(
						  'Se guardo Exitosamente! '+resultado.nombre_arhivo_edit,
						  'Informacion Actulizada ! '+resultado.resultado_cancion,
						  'success'
						)
		/*			setTimeout(function(){
						window.location.href='listado_mis_rmx.php';
					},2000);*/
		
				}else{
					swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'Algunos datos Estan Incompletos!',
					  footer: '<a href>Ingresastes correctamente lo datos?</a>'
					})
				}

				
			}
		});
	});

	/////////////////////////////////BORRAR LOGICO/////////////////////////////////
	/////////////////////////////////BORRAR LOGICO/////////////////////////////////
	/////////////////////////////////BORRAR LOGICO/////////////////////////////////


// este caso es x que no uno un formulario aqui enviio los datos desde ajax
// cuando hay un formulario el formulario lo envia a lo datos


	$('.borrar_registro_cancion').on('click',function(e){
		e.preventDefault();// es para q cuando haga click no brinque 
		console.log("soy borrar producto");
		var id=$(this).attr('data-id');
		var titulo_arhivo=$(this).attr('data-titulo-archivo');
		var tipo=$(this).attr('data-tipo');// pueden venir n tipo de dara tipo
		console.log("ID :"+ id);
		console.log("Tipo: "+ tipo);
		console.log("data-titulo-archivo "+ titulo_arhivo);
				
		//BOTON DE ALERTA
		swal({
		  title: 'Estás seguro?',
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
						'titulo_arhivo':titulo_arhivo,
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


