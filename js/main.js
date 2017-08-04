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

}