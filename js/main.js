function validateForm(){
/*Validar que se ingrese algun dato, y que este no contenga numeros*/
	function validarNombre(){
    var nombre = $('#name').val();
    if (nombre === null || nombre.length === 0){
      $('.name-container').append('<span>Debe ingresar información requerida</span>'); 
      return false;
    }else if( /[0-9]/.test(nombre)){
      $('.name-container').append('<span>Nombre debe componerse sólo de letras</span>');
      return false;
    }else{
      return true;
    }
  }
  validarNombre();

  function validarApellido(){
    var apellido = $('#lastname').val();
    if (apellido === null || apellido.length === 0){
      $('.lastname-container').append('<span>Debe ingresar información requerida</span>');
      return false;
    }else if( /[0-9]/.test(apellido)){
      $('.lastname-container').append('<span>Nombre debe componerse sólo de letras</span>');
      return false;
    }else{
      return true;
    }
  }
  validarApellido();
/*Validar que se ingrese inf y que esta sea en formato valido de correo electronico*/
function validarMail(){
    var correo = $('#input-email').val();
    var verificar = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/; //verifición que me dio la Ale para todos los caracteres de correos <3
    if( correo === null || correo.length === 0){
      $('.email-container').append('<span>Debe ingresar información requerida</span>');
      return false;
    }else if (verificar.test(correo)){
      return true;
    }else{
      $('.email-container').append('<span>Ingrese formato válido de correo</span>');
      return false;
    }
  }
  validarMail();
}