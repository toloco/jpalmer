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

function colorbox (selector) {
    // body...
}


var colorbox = {

    init : function(selector){
        $(selector).click(function() {colorbox.open(this)});
    },
    open : function(em){
        $("#body").hide();
        var st = '<div id="colorbox" style="z-index:99; position:absolute; top:30px; bottom:30px; left:30px; right:30px; border:2px solid #444; padding:30px; text-align:center; v-align:center;">'
        st     +='   <a onclick="colorbox.close();" style="color:black; position:absolute; top:0; right:3px;"><i class="fa fa-3x fa-times-circle"></i></a>'
        st     +='   <img src="'+$(em).attr('href')+'" style="height:100%;">'
        st     +='</div>';
        $("body").append(st);
    },
    close : function(){
        $("#body").show();
        $.scrollTo( '#portfolio' );
        $("#colorbox").hide('slow');
        $("#colorbox").remove();
    },
};
