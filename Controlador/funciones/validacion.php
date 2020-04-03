<?php 

 /* class Validacion {
   



      public function solo_letras($cadena){ 
        $permitidos = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ "; 
          for ($i=0; $i<strlen($cadena); $i++){ 
            if (strpos($permitidos, substr($cadena,$i,1))===false){ 
            //no es válido; 
            return false; 
            } 
          }  
          //si estoy aqui es que todos los caracteres son validos 
          return true; 
      }



  } /*end class*/

/*  $controles=new Validacion();
  echo "<h1>".$controles->solo_letras("aa")."</h1>";*/

  /*echo solo_letras("aaa");*/

  function solo_letras($cadena){ 
        $permitidos = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ "; 
          for ($i=0; $i<strlen($cadena); $i++){ 
            if (strpos($permitidos, substr($cadena,$i,1))===false){ 
            //no es válido; 
            return false; 
            } 
          }  
          //si estoy aqui es que todos los caracteres son validos 
          return true; 
      }

echo solo_letras("hhhhh");
 ?>