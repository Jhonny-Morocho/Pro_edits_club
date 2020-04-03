 	
	console.log("soy ajax pagar");


	//oferta
	var oferta=true;
	var limite=5;
	var descuento=0.30;


	//===================animacion espera==================
	function animacion(){
		var screen = $('#loading-screen');
		configureLoadingScreen(screen);
		$.get('http://jsonplaceholder.typicode.com/posts')
					 .done(function(result){

					 })
					 .fail(function(error){

					 })
	}



 	//===================BOTON PAGAR AJAX===================================//
	//===================BOTON PAGAR AJAX===================================//
	//===================BOTON PAGAR AJAX===================================//
	//===================BOTON PAGAR AJAX===================================//


$("#id_carrito_form").on('submit',function(e){
		e.preventDefault();
		////////////////ANIMACION ///////////////////

		/*animacion();*/

		var datos_opcion_pago=$(this).serializeArray();//obtengo valores de radios

		console.log("nome_radio",datos_opcion_pago[0].name);
		console.log("value_radio",datos_opcion_pago[0].value);
		
		
		var class_nombre_cancion=$(".tablita .class_nombre_cancion");
		var class_precio_cancion=$(".tablita .class_precio_cancion");
		var class_id_producto=$(".tablita button");
		var class_tota_cancelar=$(".suma_sub_total .total_span").text();

		console.log("class_tota_cancelar",class_tota_cancelar);
		console.log("class_nombre_cancion: ",class_nombre_cancion);
		console.log("class_nombre_cancion_longitud: ",class_nombre_cancion);
		console.log("class_precio_cancion: ",class_precio_cancion);
		console.log("class_id_cancion: ",class_id_producto);

		//=================DATA  SIN PROMOCION================//
		//=================DATA  SIN PROMOCION================//
		//=================DATA  SIN PROMOCION================//
		///creamoss array
		var nombre_cancion_Array=[];
		var precio_cancion_Array=[];
		var id_cancion_Array=[];



		for(var i=0;i< class_id_producto.length;i++){
			 nombre_cancion_Array[i]=$(class_nombre_cancion[i]).text();
			 precio_cancion_Array[i]=$(class_precio_cancion[i]).text();
			 id_cancion_Array[i]=$(class_id_producto[i]).attr("id_Producto");
		}
		console.log(id_cancion_Array);
		console.log(nombre_cancion_Array);
		console.log(precio_cancion_Array);


		//creamos la variable data que va a enviar la informacion por ajax
		var datos=new FormData();

		datos.append("id_cancion",id_cancion_Array);//adicionamo cada valor por q es un objeto
		datos.append("nombre_cancion",nombre_cancion_Array);
		datos.append("precio_cancion",precio_cancion_Array);
		datos.append("opcion_compra",datos_opcion_pago);
		datos.append("name_radio",datos_opcion_pago[0].name);
		datos.append("value_radio",datos_opcion_pago[0].value);
		datos.append("total_cancelar",class_tota_cancelar);

		var limite_actual=id_cancion_Array.length;
		console.log(limite_actual);



		//==================DATOS CON PROMOCION========================//
		//==================DATOS CON PROMOCION========================//
		//==================DATOS CON PROMOCION========================//
		///creamoss array
		var nombre_cancion_Array_promo=[];
		var precio_cancion_Array_promo=[];
		var id_cancion_Array_promo=[];



		for(var i=0;i< class_id_producto.length;i++){

			 nombre_cancion_Array_promo[i]=$(class_nombre_cancion[i]).text();

			 var precio_descuento=Number($(class_precio_cancion[i]).text())*descuento;

			 var pagar=(Number($(class_precio_cancion[i]).text()))-(precio_descuento);

			 precio_cancion_Array_promo[i]=pagar.toFixed(2);

			 id_cancion_Array_promo[i]=$(class_id_producto[i]).attr("id_Producto");
		}
		console.log(id_cancion_Array_promo);
		console.log(nombre_cancion_Array_promo);
		console.log(precio_cancion_Array_promo);

		//creamos la variable data que va a enviar la informacion por ajax
		var datos_promo=new FormData();

		datos_promo.append("id_cancion",id_cancion_Array_promo);//adicionamo cada valor por q es un objeto
		datos_promo.append("nombre_cancion",nombre_cancion_Array_promo);
		datos_promo.append("precio_cancion",precio_cancion_Array_promo);
		datos_promo.append("opcion_compra",datos_opcion_pago);
		datos_promo.append("name_radio",datos_opcion_pago[0].name);
		datos_promo.append("value_radio",datos_opcion_pago[0].value);

		promocion=descuento*class_tota_cancelar;
		total_pagar=class_tota_cancelar-promocion;

		datos_promo.append("total_cancelar",total_pagar.toFixed(2));

		var limite_actual=id_cancion_Array.length;
		console.log(limite_actual);




		//================================	CONDICION SI LA PROCION DE ACTIVA=====================================//
		//================================	CONDICION SI LA PROCION DE ACTIVA=====================================//
		//================================	CONDICION SI LA PROCION DE ACTIVA=====================================//
		//================================	CONDICION SI LA PROCION DE ACTIVA=====================================//
		//================================	CONDICION SI LA PROCION DE ACTIVA=====================================//
		//================================	CONDICION SI LA PROCION DE ACTIVA=====================================//


		if(oferta==true && limite_actual>=limite){//adquiere la oferta

			Swal.fire({
			  title: 'Felicidades tu compra tiene un descuento del '+(descuento*100)+
			  '% Ahora el monto a cancelar es :<br> $ ['+(total_pagar.toFixed(2))+"] antes "+" <del>["+class_tota_cancelar+"]</del> ",
			  text: "Para ignorar la publicidad aplasta continuar con la transaccion",

			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Continuar con la transaccion!'
			}).then((result) => {
			  if (result.value) {// si desea adquirir promocion
			   			animacion();
						$.ajax({
								url:"Pay_Pal/paypal_controlador.php",
								method:"POST",
								data:datos_promo,
								cache:false,
								contentType:false,
								processData:false,
								dataType:'json',//json
								success:function(respuesta){
					/*				window.location="paypal/carrito_pagar.php";*/
									console.log("respuesta",respuesta);

									/*mensaje_oferta();*/
									console.log("mensajes de paga");

									//===========PREGUNTO SI EXITE UNA SESSION PARA Q PUEDA COMPRAR===========///
									//===========PREGUNTO SI EXITE UNA SESSION PARA Q PUEDA COMPRAR===========///
									//===========PREGUNTO SI EXITE UNA SESSION PARA Q PUEDA COMPRAR===========///
									//1. caso 1 EL CLIENTE DEBE INCIAR SESION SOLO MENSAJE
									mensajes(respuesta.respuesta_session);//imprime el alert (no existe session)



									////============================CONFIRMACION DE PAYPAL PAGAR===============//
									////============================CONFIRMACION DE PAYPAL PAGAR===============//
									////============================CONFIRMACION DE PAYPAL PAGAR===============//
									////============================CONFIRMACION DE PAYPAL PAGAR===============//
									////============================CONFIRMACION DE PAYPAL PAGAR===============//

									if(respuesta.respuesta=='exito'){
										swal('Tu solicitud ha sido  procesada')
											swal({
											  position: 'center',
											  type: 'success',
											  title: 'Tu solicitud ha sido  procesada ',
											  showConfirmButton: false,
											  timer: 3000
												})
										console.log(respuesta);
										window.location=respuesta.url_paypal;
									}

									////============================PAGAR CON SALDO===============//
									////============================PAGAR CON SALDO===============//
									////============================PAGAR CON SALDO===============//
									////============================PAGAR CON SALDO===============//
									////============================PAGAR CON SALDO===============//
									if(respuesta.respuesta_saldo=='saldo_disponible'){
											swal({
											  title: 'Confirma la adquisición de los Rmx ?',
											  text: "Recuerda sera debitado de tu saldo ! cuentas con "+respuesta.total_saldo+ '$ en saldo',
											  type: 'warning',
											  showCancelButton: true,
											  confirmButtonColor: '#3085d6',
											  cancelButtonColor: '#d33',
											  confirmButtonText: 'Si, deseo los productos!'
											}).then((result) => {
											  if (result.value) {
											    swal(
											      'Has confirmado la compra, se esta procesando tu solicitud ....!',
											      'Recuerda pudes revisar tus productos en tu session cliente .',
											      'success'
											    )
											    setTimeout(function(){
													window.location.href=respuesta.url_pago_finalizado_saldo;
												},3000);//tiempo de espera
											  }
												
											})
									}
									//==============================MENSAJE NO TIENES SALDO=====================///
									//==============================MENSAJE NO TIENES SALDO=====================///
									//==============================MENSAJE NO TIENES SALDO=====================///
									mensajes(respuesta.respuesta_saldo);//imprime el alert (saldo no diponible)
								}
							}); /*end ajax*/ 
			  }// en if alert
			})

		}else{// se pregunta si quiere seguir con la trasaccion

			Swal.fire({
			  title: 'Total ha pagar sin descuento :<br> $ ['+class_tota_cancelar+"] <br>Aprovecha la oferta de hoy <br>"+"Por la adquisición de ["+limite+"] o mas edits <br>recibe un descuento del "+(descuento*100)+" % en tu compra",
			  text: "Para ignorar la publicidad aplasta , continuar con la transaccion ",

			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Continuar con la transaccion!'
			}).then((result) => {
			  if (result.value) {// si desea adquirir promocion
			   			animacion();
						$.ajax({
								url:"Pay_Pal/paypal_controlador.php",
								method:"POST",
								data:datos,
								cache:false,
								contentType:false,
								processData:false,
								dataType:'json',//json
								success:function(respuesta){
					/*				window.location="paypal/carrito_pagar.php";*/
									console.log("respuesta",respuesta);

									
									console.log("mensajes de paga");

									//===========PREGUNTO SI EXITE UNA SESSION PARA Q PUEDA COMPRAR===========///
									//===========PREGUNTO SI EXITE UNA SESSION PARA Q PUEDA COMPRAR===========///
									//===========PREGUNTO SI EXITE UNA SESSION PARA Q PUEDA COMPRAR===========///
									//1. caso 1 EL CLIENTE DEBE INCIAR SESION SOLO MENSAJE
									mensajes(respuesta.respuesta_session);//imprime el alert (no existe session)



									////============================CONFIRMACION DE PAYPAL PAGAR===============//
									////============================CONFIRMACION DE PAYPAL PAGAR===============//
									////============================CONFIRMACION DE PAYPAL PAGAR===============//
									////============================CONFIRMACION DE PAYPAL PAGAR===============//
									////============================CONFIRMACION DE PAYPAL PAGAR===============//

									if(respuesta.respuesta=='exito'){
										swal('Tu solicitud ha sido  procesada')
											swal({
											  position: 'center',
											  type: 'success',
											  title: 'Tu solicitud ha sido  procesada ',
											  showConfirmButton: false,
											  timer: 3000
												})
										console.log(respuesta);
										window.location=respuesta.url_paypal;
									}

									////============================PAGAR CON SALDO===============//
									////============================PAGAR CON SALDO===============//
									////============================PAGAR CON SALDO===============//
									////============================PAGAR CON SALDO===============//
									////============================PAGAR CON SALDO===============//
									if(respuesta.respuesta_saldo=='saldo_disponible'){
											swal({
											  title: 'Confirma la adquisición de los Rmx ?',
											  text: "Recuerda sera debitado de tu saldo ! cuentas con "+respuesta.total_saldo+ '$ en saldo',
											  type: 'warning',
											  showCancelButton: true,
											  confirmButtonColor: '#3085d6',
											  cancelButtonColor: '#d33',
											  confirmButtonText: 'Si, deseo los productos!'
											}).then((result) => {
											  if (result.value) {
											    swal(
											      'Has confirmado la compra, se esta procesando tu solicitud ....!',
											      'Recuerda pudes revisar tus productos en tu session cliente .',
											      'success'
											    )
											    setTimeout(function(){
													window.location.href=respuesta.url_pago_finalizado_saldo;
												},3000);//tiempo de espera
											  }
												
											})
									}
									//==============================MENSAJE NO TIENES SALDO=====================///
									//==============================MENSAJE NO TIENES SALDO=====================///
									//==============================MENSAJE NO TIENES SALDO=====================///
									mensajes(respuesta.respuesta_saldo);//imprime el alert (saldo no diponible)
								}
							}); /*end ajax*/ 
			  }// en if alert
			})
		}

		










		//=================MENSAJE DE ALERTA============================//
		//=================MENSAJE DE ALERTA============================//
		//=================MENSAJE DE ALERTA============================//
		//=================MENSAJE DE ALERTA============================//
		function mensajes(respuesta){

			var foo = respuesta;

				switch (foo) {

				  case "no_exite_session":
					//============================caso 1 NO EXISTE SESSION==================//
					//============================caso 1 NO EXISTE SESSION==================//
					//============================caso 1 NO EXISTE SESSION==================//
				  	console.log("soy el primer caso");
				    swal(
						  'Antes de comprar Inicia tu Session en la Pagina?',
						  'Recuerda si no tienes cuenta en la pagina puedes registrarte?',
						  'question'
						)
				    break;


				  case "saldo_insuficiente": 
				    //==============CASO 2 SALDO INSUFICIENTE=======================//
				    //==============CASO 2 SALDO INSUFICIENTE=======================//
				    //==============CASO 2 SALDO INSUFICIENTE=======================//
				    console.log("saldo INSUFICIENTE")
				    swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'No cuentas con suficiente saldo para realizar esta compra! '+respuesta.total_saldo+ '$',
					  footer: 'Puedes recargas tu saldo con nostros mas informacion en nuestras redes sociales'
					})

				    
				  default:
				    console.log('default');

				}
		}

});