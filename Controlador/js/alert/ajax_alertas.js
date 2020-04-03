$(document).ready(function(){
            $('#btn-default').click(function(){
                $('body').topAlertjs();
            });

            $('#btn-info').click(function () {
                $('body').topAlertjs({
                    type: 'info',
                    message: 'Boton Info Top Alertjs',
                    close: true,
                    duration: 5
                });
            });

            $('#btn-warning').click(function () {
                $('body').topAlertjs({
                    type: 'warning',
                    message: 'Boton Warning Top Alertjs',
                    close: true,
                    duration: 5
                });
            });

            $('#btn-danger').click(function () {
                $('body').topAlertjs({
                    type: 'error',
                    message: 'Boton Error Top Alertjs',
                    close: true,
                    duration: 5
                });
            });

            $('#btn-success').click(function () {
                $('body').topAlertjs({
                    type: 'success',
                    message: 'Boton Success Top Alertjs',
                    close: true,
                    duration: 5
                });
            });

            $('#btn-confirm').click(function () {
                $('body').topAlertjs({
                    type: 'confirm',
                    message: 'Boton confirm Top Alertjs',
                    callback: function ( confirm ) { if( confirm ) alert( 'Ok' ); }
                });
            });

});