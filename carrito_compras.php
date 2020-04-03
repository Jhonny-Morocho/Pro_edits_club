
<!-- ///////////////////////////CABEZERA///////////////////////////
///////////////////////////CABEZERA///////////////////////////
///////////////////////////CABEZERA/////////////////////////// -->
<?php include'Vista/template/head.php'; ?>



  <!-- <div id="preloader"></div> -->

  
<!-- ///////////////////////////MENU///////////////////////////
///////////////////////////MENU///////////////////////////
///////////////////////////MENU/////////////////////////// -->
<?php
include_once'Vista/modal/modal_cliente.php';
include_once'Vista/modal/modal_registro.php';
include_once'Vista/modal/modal_admin.php';
include_once'Vista/modal/modal_info_saldo.php';
include_once'Vista/template/wasap.php';  
/*include_once'Vista/template/header.php'; */

?>


<header>

    <!-- header-area start -->
    <div id="sticker" class="header-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">

            <!-- Navigation -->
            <nav class="navbar navbar-default">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                <!-- Brand -->
                <a class="navbar-brand page-scroll sticky-logo" href="index.php">
                  <h1><span>Pro</span>Edits<span>Club </span></h1>
                  <!-- Uncomment below if you prefer to use an image logo -->
                  <!-- <img src="img/logo.png" alt="" title=""> -->
                </a>
              </div>
              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse main-menu bs-example-navbar-collapse-1" id="navbar-example">
                <ul class="nav navbar-nav navbar-right">
                  <li class="active">
                    <a class="page-scroll" href="index.php">Inicio</a>
                  </li>


                  <li>
                    <a class="page-scroll" href="index.php">Seguir comprando..</a>
                  </li>


                  <!-- //////////////SI ESTA INICIADA LA SESSION APARECE EL NOMBRE DEL USUARIO//////////////// -->
                  <?php 
                    $nombre_proveedor=@$_SESSION['usuario'];
                    $apellido_proveedor=@$_SESSION['apellido'];
                    $tipo_proveedor=@$_SESSION['tipo_proveedor'];
                    /*echo $_SESSION['tipo_proveedor'];*/
                    if(isset($_SESSION['usuario']) ){// si exites session

                      if($_SESSION['tipo_proveedor']=='Cliente'){
                        echo "<li><a href='Vista/admin_cliente_area.php'>".$nombre_proveedor."
                        ".$apellido_proveedor."</a></li>";
                        }

                        if($_SESSION['tipo_proveedor']=='Admin'){
                        echo "<li><a href='Vista/admin_area.php'>".$nombre_proveedor."
                        ".$apellido_proveedor."</a></li>";
                        }


                    }
                    else
                    {?>

                      <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Mi Cuenta<span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href=# data-toggle='modal' data-target='#id_modal_cliente' class=''>Iniciar Sesión</a></li>
                          <li><a href=# data-toggle='modal' data-target='#id_modal_registro_cliente' class=''>Registrarme</a></li>
                          <li>
                            <a href=# data-toggle='modal' data-target='#id_modal_admin' class=''>Admistrador
                            </a>
                          </li>
                        </ul> 
                      </li>



                  <?php
                      }///fin del else
                    ?>

                    <?php 
                    include_once'Vista/template/carrito_template.php';
                     ?>
                </ul>
              </div>
              <!-- navbar-collapse -->
            </nav>
            <!-- END: Navigation -->
          </div>
        </div>
      </div>
    </div>
    <!-- header-area end -->
  </header>
  <!-- header end -->




  <!-- Start Slider Area -->
  <?php 
    include_once'Vista/template/slider.php';

   ?>

    <!-- ////////////////////////DEETALLE DE LA COMPRA///////////////////////// -->

    <!-- ---------------////////HEADER CABEZA//////////////------------------------------ -->
<!-- ---------------////////HEADER CABEZA//////////////------------------------------ -->
<!-- ---------------////////HEADER CABEZA//////////////------------------------------ -->

  <div class="container">
    <div class="row" id="cabezote">
    </div> <!-- row .cabezote categorias y buscador  row-->



    <!-- ///////////////////////////////ANIMACION//////////////////////
    ///////////////////////////////ANIMACION//////////////////////
    ///////////////////////////////ANIMACION////////////////////// -->
    <div id="loading-screen" style="display:none ; width: 100%;">
          <img src="Vista/img_dj/spinning-circles.svg">
        </div>

    
    
    
       <div class="detalle_factura">
        <form method="post" action="Pay_Pal/paypal_controlador.php" id="id_carrito_form">
            <div class="card-body">
               <h1>Detalle Productos</h1>
                <p>Listado Canciones</p>
                <!-- <input type="text" name="Nombre">
                <input type="text" name="Nombre2"> -->
                <div id="listado_carrito" class="listado_carrito"></div>
                <table class="table table-hover">
                    <thead class="class_thead">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Eliminar</th>
                        <th scope="col">Nombre Cancion</th>
                        <th scope="col">Valor Unitario</th>

                      </tr>
                    </thead>
                    <tbody id="tablita" class="tablita" >
             
                    </tbody>
                  </table>

                  <div class="panel-body sumaCarrito">
                    <div class="col-md-4 col-sm-6 col-xs-12 pull-right well">
                      <div class="col-xl-6">
                        <h4>Total: </h4>
                      </div>

                      <div class="col-xl-6">
                        <h4 class="suma_sub_total">
                          <strong>USD $ <span class="total_span"></span></strong>
                        </h4>

                        <h4 class="suma_sub_total_fake"></h4>

                      </div>

                      <input type="submit" name="btn_pagar" value="Pagar" class="btn btn-primary col-md-12">
                  </div>

                  <div class="opciones_pago">
                    <label>
                      Seleccionar Opcion Pago
                    </label>

                      <div class="form-group opcion_pago">

                          <label>
                            <input type="radio" name="r1" class="minimal" checked value="paypal">
                            <img src="Vista/img_dj/paypal2.png" alt="Paypal">
                               <img src="Vista/img_dj/visa.png" alt="Visa">
                               <img src="Vista/img_dj/mastercard.png" alt="Mastercard"><img src="Vista/img_dj/american-express.png" alt="American-Express">
                          </label>

                          <label style="color: red">
                            
                            <input type="radio" name="r1" class="minimal" value="saldo"> 
                            <i class="fa fa-usd" aria-hidden="true"></i> Pagar con saldo
                            <a class="btn btn-success btn-flat " href="" data-toggle="modal" data-target="#id_modal_info_saldo" >Informacion</a>
                          </label>
                      </div>

                    
                </div>
            </div>
        </form>
        
       </div>     

  </div> <!-- .class_container estatico -->

</div>

<script async src="https://static.addtoany.com/menu/page.js"></script>
<!-- AddToAny END -->


  





  <!-- Start Footer bottom Area -->


  <!-- Flecha hacia arrido -->
  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

<!-- Footer -->


<?php 
  include_once'Vista/template/footer.php';
  include_once'Vista/template/scrip.php';

 ?>







