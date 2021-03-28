//<script>
    $(document).ready(function(){

        var i=0;
        var existe=0;
        //******************GET_UTM_PARAMS*********************
        function get_varGET(){
           var loc = document.location.href;
           var getString = loc.split('?')[1];
           var GET = getString.split('&');
           var get = {};//this object will be filled with the key-value pairs and returned.

           for(var i = 0, l = GET.length; i < l; i++){
              var tmp = GET[i].split('=');
              get[tmp[0]] = unescape(decodeURI(tmp[1]));
           }
           return get;
        }
        var url = window.location.href;
        originText='';

        if (url.search("&")>= 0){

            var vars = get_varGET();

            if(vars.utm_source!=undefined){
                originText+=vars.utm_source+'|';
            }else{
                originText+='|';
            }
            if(vars.utm_campaign!=undefined){
                originText+=vars.utm_campaign+'|';
            }else{
                originText+='|';
            }
            if(vars.utm_medium!=undefined){
                originText+=vars.utm_medium+'|';
            }else{
                originText+='|';
            }
            if(vars.utm_content!=undefined){
                originText+=vars.utm_content;
            }

        }

        $('#origin').val(originText);


        //***************************************

        $('form').submit(function(event){
            
            var sendForm=true;

            $('#msgFinForm').addClass('hidden');

            //NOMBRE
            if($('#firstname').val()==''){
                sendForm=false;
                $('p#nombre_error').addClass('visible').html('Por favor escriba su Nombre');
            }else if(isName($('#firstname').val())!=true){
                sendForm=false;
                $('p#nombre_error').addClass('visible').html('Por favor escriba su Nombre correctamente');
            }else{

                $('p#nombre_error').removeClass('visible').html('');
            }

            //NOMBRE
            if($('#lastname').val()==''){
                sendForm=false;
                $('p#apellido_error').addClass('visible').html('Por favor escriba su Apellido');
            }else if(isName($('#lastname').val())!=true){
                sendForm=false;
                $('p#apellido_error').addClass('visible').html('Por favor escriba su Apellido correctamente');
            }else{

                $('p#apellido_error').removeClass('visible').html('');
            }

            //CORREO
            if(isEmail($('#email').val())!=true || $('input#email').val()=='' ||  isSpace($('input#email').val())==true){
                sendForm=false;
                $('p#correo_error').addClass('visible').html('Por favor escriba un correo electrónico valido');
            }else{

                $('p#correo_error').removeClass('visible').html('');
            }

            //CEDULA
            if($('#cb_cedulaprofesional').val()==''){
                sendForm=false;
                $('p#cedula_error').addClass('visible').html('Por favor escriba su Cedula');
            }else if(isPhone($('#cb_cedulaprofesional').val())!=true || isSpace($('input#cb_cedulaprofesional').val())==true || $('input#cb_cedulaprofesional').val().length>8){
                sendForm=false;
                $('p#cedula_error').addClass('visible').html('Por favor escriba su Cedula correctamente');
            }else{

                $('p#cedula_error').removeClass('visible').html('');
            }

            //CIUDAD
            /*if($('#cb_ciudad').val()==''){
                sendForm=false;
                $('p#ciudad_error').addClass('visible').html('Por favor escriba su Ciudad');
            }else if(isName($('#cb_ciudad').val())!=true){
                sendForm=false;
                $('p#ciudad_error').addClass('visible').html('Por favor escriba su Ciudad correctamente');
            }else{

                $('p#ciudad_error').removeClass('visible').html('');
            }*/

            //TERMINIOS
            if($('#acceptedterms').is(':checked')){
                $('p#terminos_error').removeClass('visible').html('');
                terminos=1;
            }else{
                sendForm=false;
                $('p#terminos_error').addClass('visible').html('Acepte los Términos y Condiciones');
                terminos=0;
            }

            //NEWSLETTER
            if($('#cb_deseorecibirlasltimasnoticiasdemedicalmedixcom').is(':checked')){

                newsletter=1;
            }else{


                newsletter=0;
            }

            //alert (sendForm);
            //Sending Form
            if(sendForm==true){

              return true;

            }else{
                event.preventDefault();
            }
        })
        //**********************************************
        function isEmail(email) {
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          return regex.test(email);
        }

        function isName(name) {
          var regex = /^[a-zA-ZáéíóúÁÉÍÓÚÑñ\s]*$/;
          return regex.test(name);
        }

        function isPhone(phone) {
          var regex = /^[0-9]*$/;
          return regex.test(phone);
        }

        function isSpace(campo) {
          var regex = /^\s+|\s/;
          return regex.test(campo);
        }

        //***************************************
  var deadline = new Date("Oct 23, 2019 20:00:00").getTime();
  var x = setInterval(function () {
      var now = new Date().getTime();
      var t = deadline - now;
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML =
          "<table class='contador' align='center'><tr><td>" + days + "<br><span class='tit'>Días</span></td><td> " + hours + " <br><span class='tit'>Horas</span></td><td> " + minutes + " <br><span class='tit'>Minutos</span></td><td> " + seconds + "<br><span class='tit'>Segundos</span></td></tr></table> ";
      if (t < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "¡Ya iniciamos!";
      }
  }, 1000);
    }); //End DocumentReady
    //</script>
