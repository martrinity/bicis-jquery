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

  function contrasena(){
    var passwors = $('#input-password').val();
    if(password === null || password.length === 0){
      $('.form-group:eq(0)').append('<span>Debe ingresar información requerida</span>');
      return false;
    }else if (password.length < 6 ) {
      $('.form-group:eq(0)').append('<span>La contraseña valida debe tener al menos seis caracteres</span>');
      return false;
    }else if(password === 'passwordword' || password === '123456' || password === '098754'){
      $('.form-group:eq(0)').append('<span>Contraseña inválida, ingrese una contraseña distinta a "123456"</span>');
      return false;
    }else{
      return true;
    }
  }
  contrasena();
//*Valida que el usuario seleccione una de las opciones*/
  function selectOpcion(){
    var opcion = $('select').val();
    if(opcion == 0){
      $('.form-group:eq(1)').append('<span>Debe seleccionar una opción para continuar</span>');
      return false;
    }
  }
  selectOpcion();

}