function postEmail () {

    var error = false;
    if ( '' == $('#form_email').val() ) {
        $('#form_email_p').addClass('error');
        error = true;
    } else {
        $('#form_email_p').removeClass('error');
    }

    if ( '' == $('#form_name').val() ) {
        $('#form_name_p').addClass('error');
        error = true;
    } else {
        $('#form_name_p').removeClass('error');
    }   

    if ( '' == $('#form_text').val() ) {
        $('#form_text_p').addClass('error');
        error = true;
    } else {
        $('#form_text_p').removeClass('error');
    }

    if ( ! error ) {
        var params = jQuery.param({
            'form_email' : $('#form_email').val(), 
            'form_name'  : $('#form_name').val(), 
            'form_text'  : $('#form_text').val(),
        });

        $.ajax({
            type: "POST",
            crossDomain: true,
            url: "mail.php",
            data: params,
            dataType: "json",
            success: function(data) {
                if (data.status == 'ERROR-MAIL') alert(data.message);
                if (data.status == 'OK'){
                    $('#contact_form').toggle();
                    $('#form_success').toggle();
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('No ha sido posible conectar con el servidor, por favor intentelo de nuevo');
            }
        });
    }
}




function stretch_portal_content() {
    $( '.page' ).height( $(window).height() - 150 );

}
