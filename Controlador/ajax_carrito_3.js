
//$(document).ready(function(){

	//variables

	//ACTIVAR PROMOCION//


	var cont_x=1;// numero de productos


//======================================FUNCIONES=====================================//
//======================================FUNCIONES=====================================//
//======================================FUNCIONES=====================================//
//======================================FUNCIONES=====================================//


	//=========== funcionForEach se imprime en la tabla de detalle productos.php=======///
	//=========== funcionForEach se imprime en la tabla de detalle productos.php=======///
	//=========== funcionForEach se imprime en la tabla de detalle productos.php=======///


	function funcionForEach(item,index){
			
		console.log("item",item);//Todo el obejto
		console.log("item.id_Producto",item.idProducto);

		var cantidad_productos=listaCarrito.length;//saber cuantos producto existe
		console.log("longitud_array_productos",cantidad_productos);;

		console.log(cantidad_productos);


		$(".tablita")
		.append(

                '<tr>'+'<td>'+(cont_x++)+'</td>'+
                 ' <TD>'+
                 '<button  class="quitar_Item_Carrito button_carrito btn btn-danger" id_Producto='
                 +item.idProducto+' precio_cancion='+item.precio+'><i  class="fa fa-trash" aria-hidden="true"></i></button>'
                 +'</TD>'+

                  '<TD class="class_nombre_cancion" nombre_cancion='+item.nombre_producto+'>'+item.nombre_producto+'</TD>'+
                  '<TD class="class_precio_cancion"><p classs="subtotales"><span>'+item.precio+'</span></p></TD>'+
                  
                '</tr>'
			);

	}




	/*=======================MENSAJE TOP CARRITO============*/
	/*=======================MENSAJE TOP CARRITO============*/
	/*=======================MENSAJE TOP CARRITO============*/
	/*=======================MENSAJE TOP CARRITO============*/
	function mensaje_top(precio,titulo){
		$('body').topAlertjs({
                    type: 'success',
                    message: 'Se agrego a tu carrito : '+titulo+"<br> "+"Precio : $"+precio+"<br>",
                    close: true,
                    duration: 8
           });
	}





	//==============================PRESENTO EN LA CESTA DEL ICONO DEL CARRITO==============//
	//==============================PRESENTO EN LA CESTA DEL ICONO DEL CARRITO==============//
	//==============================PRESENTO EN LA CESTA DEL ICONO DEL CARRITO==============//
	//==============================PRESENTO EN LA CESTA DEL ICONO DEL CARRITO==============//

	//5. 

	if(localStorage.getItem("cantidadCesta")!=null){//viene con informacion

		//5.3
		$(".cantidad_cesta").html(localStorage.getItem("cantidadCesta"));//lo q tiene almacenado
		

	}else{// si no tiene informacion lo volvemos a cero

		$(".cantidad_cesta").html("0");
	}



	//3. 
	///////==========================CUANDO RECARGA O INICA LA PAGINA TODO SE ACTUALIZA============///
	///////==========================CUANDO RECARGA O INICA LA PAGINA TODO SE ACTUALIZA============///
	///////==========================CUANDO RECARGA O INICA LA PAGINA TODO SE ACTUALIZA============///
	///////==========================CUANDO RECARGA O INICA LA PAGINA TODO SE ACTUALIZA============///
	///////==========================CUANDO RECARGA O INICA LA PAGINA TODO SE ACTUALIZA============///
	///////==========================CUANDO RECARGA O INICA LA PAGINA TODO SE ACTUALIZA============///
	if(localStorage.getItem("listaProductos")!=null){

		var listaCarrito=JSON.parse(localStorage.getItem("listaProductos"));

		//4.visualizar los productos en el carrito de compras en el detalle producto
		

		listaCarrito.forEach(funcionForEach);

		




	}else{//si esta vacio el localSotarge
		$(".tablita").html('<div class="well"><a style="cursor: pointer" href="index.php">NO EXISTE PRODUCTOS EN TU CARRITO IR A COMPRAR</a></div>');
		//escondo el total casillero
		$(".sumaCarrito").hide();
	}









	//==================================AGREGAR AL CARRITO DE COMPRAS=======================//
	//==================================AGREGAR AL CARRITO DE COMPRAS=======================//
	//==================================AGREGAR AL CARRITO DE COMPRAS=======================//
	//==================================AGREGAR AL CARRITO DE COMPRAS=======================//
	//==================================AGREGAR AL CARRITO DE COMPRAS=======================//


	//1.
	$('.agregar-carrito').on('click',function(e){
		e.preventDefault();// 

		var id_producto=$(this).attr("data-id");
		var nombre_producto=$(this).attr("data-nombre");
		var precio=$(this).attr("precio");

		//2.
		//==============RECUPERAR ALMACENAMIENTO DEL LOCALSOTORAGE CUANDO CAMBIEN DE PAGINA===========//

		if(localStorage.getItem("listaProductos")==null){//si todavia no existe en el localstore 

			//entonces el carrito puede estar vacio o inicio el array
			listaCarrito=[];
		}else{
			//entonces agrego o concadeno
			listaCarrito.concat(localStorage.getItem("listaProductos"));
			console.log("listaProductos",listaCarrito);

		}

		//2.1
		//==========ALMACENAR EN LOCALSTORE LOS PRODUCTOS SELECCIONADOS EN EL CARRITO (json)==//
		listaCarrito.push({"idProducto":id_producto,
							"nombre_producto":nombre_producto,
							"precio":precio
							});
		console.log("listaCarrito",listaCarrito);

		//======================================PROMOCION=======================//
		//======================================PROMOCION=======================//


		//guardo esos datos en el localstorage
		localStorage.setItem("listaProductos",JSON.stringify(listaCarrito));//creamos el localstora con su parametro

		//5.1 
		//=============agrego una nueva variable para saber cuantos productos tengo en el localstore y la suma=========//
		var cantidad_cesta= Number($(".cantidad_cesta").html())+1;//traigo lo q tiene la cesta
		$(".cantidad_cesta").html(listaCarrito.length);


		//5.2 para q no se me boror lo guardo en una variable local
		localStorage.setItem("cantidadCesta",cantidad_cesta);
		

		//===============ALERTA SUAVE CUANDO AGREGO AL CARRITO===============//
		mensaje_top(precio,nombre_producto);

	});













//=========================================BORRAR PRODUCTOS DEL CARRITO============================//
//=========================================BORRAR PRODUCTOS DEL CARRITO============================//
//=========================================BORRAR PRODUCTOS DEL CARRITO============================//
//=========================================BORRAR PRODUCTOS DEL CARRITO============================//
//=========================================BORRAR PRODUCTOS DEL CARRITO============================//
//6.
 	$(".quitar_Item_Carrito").on('click',function(e){
		e.preventDefault();
		$(this).parent().parent().remove();//quitamos visualmente

		aux_borrar();

	


		 		
 	});


//===========================================funcion borrar======================================//
//===========================================funcion borrar======================================//
function aux_borrar(){

	var id_Producto=$(".button_carrito");//caputuramos todos el boton
	/*console.log(id_Producto);*/

	var nombre_cancion=$(".class_nombre_cancion");//todos los nodos
	/*console.log(nombre_cancion);*/

	////si ahun quedan productos volverlos agregar al carrito (LOCALSTORE)
	listaCarrito=[]; //vacio el array para volver a cargar el array

	if(id_Producto.length!=0){// si su lonitud es difernete de cero

		var contar=0;
		var precio=0;

		while(contar<id_Producto.length){

		/*console.log("conbtar es "+contar)*/;

		var id_ProductoArray=$(id_Producto[contar]).attr("id_Producto");
		var nombre_ProductoArray=$(nombre_cancion[contar]).text();//obtengo nombre cancion
		var precio_ProductoArray=$(id_Producto[contar]).attr("precio_cancion");
		listaCarrito.push({"idProducto":id_ProductoArray,
								"nombre_producto":nombre_ProductoArray,
								"precio":precio_ProductoArray
						});

			contar++;
			
		} //end while

		localStorage.setItem("listaProductos",JSON.stringify(listaCarrito));//actualizo el localstore

		//================cesta funcion======================================================//
		//6.1
		cestaCarrito(id_Producto.length);

		//=======================ACTULIZAR EL PRECIO EN LA REAL===============//

		var subtotales_canciion=$('.class_precio_cancion p span');

		console.log(subtotales_canciion);
		var array_suma_subtotal=[];

		for(var i=0;i<subtotales_canciion.length;i++){

			var suma_array=$(subtotales_canciion[i]).html();
			array_suma_subtotal.push(Number(suma_array));
		}

		console.log(array_suma_subtotal);


		//6.3
		function sumaArraySubtotal(total,numero){
			return total+numero;
		}

		var sumato_toal_funcion=array_suma_subtotal.reduce(sumaArraySubtotal);//ete metodo sirve suma los valores entre sii
		console.log(sumato_toal_funcion.toFixed(2));

		//actualizo el locla tore y el hatml

		$(".suma_sub_total").html('<strong>USD $<span class="total_span">'+sumato_toal_funcion.toFixed(2)+'</span></strong>');

	} // end if

	else{
		////si ya no qquedan productos hay q remover todo 
		localStorage.removeItem("listaProductos");
		localStorage.setItem("cantidadCesta","0");
		//despues en el html
		$(".cantidad_cesta").html("0");
		$(".tablita").html('<div class="well">NO EXISTE PRODUCTOS EN TU CARRITO</div>');
		$(".sumaCarrito").hide();
	}


} //en function borrar_aux()






 	//===============================CESTA CARRITO CUANDO SE BORREN LOS PRODUCTOS EL CARRITO SE ACTULIZA========//
 	//===============================CESTA CARRITO CUANDO SE BORREN LOS PRODUCTOS EL CARRITO SE ACTULIZA========//
 	//===============================CESTA CARRITO CUANDO SE BORREN LOS PRODUCTOS EL CARRITO SE ACTULIZA========//
 	//===============================CESTA CARRITO CUANDO SE BORREN LOS PRODUCTOS EL CARRITO SE ACTULIZA========//
 	//6.2
 	function cestaCarrito(cantidad_productos){
		//////////////////preguntamoos si hay productos en el carrito/////////////

		if(cantidad_productos!=0){
			console.log("cantidad_productos ",cantidad_productos);
			localStorage.setItem("cantidadCesta",cantidad_productos);
			$(".cantidad_cesta").html(cantidad_productos);

		}
	}	




















	//====================SUMA DE TODOS LOS SUBTOTALES AL CARGAR LA PAGINA====================//
	//====================SUMA DE TODOS LOS SUBTOTALES AL CARGAR LA PAGINA====================//
	//====================SUMA DE TODOS LOS SUBTOTALES AL CARGAR LA PAGINA====================//
	//7
	try {
  	inicar_tabla();
	}
	catch(error) {
	  console.log(error);
	  // expected output: ReferenceError: nonExistentFunction is not defined
	  // Note - error messages will vary depending on browser
	}
	
	
	function inicar_tabla(){


		var subtotales_canciion=$('.class_precio_cancion p span');//obtengo la longitud

		console.log(subtotales_canciion);//recorro los span en donde se encuentra el precio

		var array_suma_subtotal=[];

			for(var i=0;i<subtotales_canciion.length;i++){

			var suma_array=$(subtotales_canciion[i]).html();
			console.log(suma_array);
			array_suma_subtotal.push(Number(suma_array));
			console.log(array_suma_subtotal);
		}

		console.log(array_suma_subtotal);

		function sumaArraySubtotal(total,numero){
			return total+numero;
		}


		/*console.log(sumaArraySubtotal);*/
		var sumato_toal_funcion=array_suma_subtotal.reduce(sumaArraySubtotal);//ete metodo sirve suma los valores entre sii
		console.log(sumato_toal_funcion);
		$(".cantidad_cesta").html(sumato_toal_funcion);


		$(".suma_sub_total").html('<strong>USD $<span  class="total_span">'+(sumato_toal_funcion.toFixed(2))+'</span></strong>');



		console.log(subtotales_canciion.length);
		cestaCarrito(subtotales_canciion.length);


	}











//});// fin document