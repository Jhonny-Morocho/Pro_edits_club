$(document).ready(function() {

    
    $('#example').DataTable({
    	"ordering":false,
        
    	"pageLength":25

    });

    $('#example_2').DataTable({
    	"ordering":false,
    	"pageLength":25
    });

    //video sin filtro
    $('#example_3').DataTable({
    	"ordering":false,
    	"pageLength":25
    });

    //video con filtro
     $('#example_4').DataTable({
        "ordering":false,
        "pageLength":25
    });


/*    var table = $('#example').DataTable( {
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true
    } );*/



} );   /*descative esta funcion por que me crea nodos en el buscador de la tabla hermana audio y video*/



