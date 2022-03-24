function validacion(){
    var nombre = document.getElementById("name")
    nombre.value
    var apellido = document.getElementById("last_name")
    apellido.value
    var correo = document.getElementById("email")
    correo.value
    var contraseña = document.getElementById("password")
    contraseña.value
    var expresion = /\w+@\w+\.+[a-z]/;

    var aviso_nombre = document.getElementById("aviso_nombre");
    var aviso_apellido = document.getElementById("aviso_apellido");
    var aviso_correo = document.getElementById("aviso_correo");
    var aviso_contraseña = document.getElementById("aviso_contraseña");


        if(nombre.value === "" ||!isNaN(nombre.value)){
            aviso_nombre.innerHTML = "el nombre no es valido";
            aviso_nombre.classList.add("aviso");
            nombre.classList.add("vacio");
        }else{
            aviso_nombre.classList.remove("aviso");
            nombre.classList.remove("vacio");
            nombre.classList.add("lleno");
            aviso_nombre.innerHTML = "";
        }
        if(apellido.value === "" || !isNaN(apellido.value)){
            aviso_apellido.innerHTML = "el apellido no es valido";
            aviso_apellido.classList.add("aviso");
            apellido.classList.add("vacio");
        }else{
            aviso_apellido.classList.remove("aviso");
            apellido.classList.remove("vacio");
            apellido.classList.add("lleno");
            aviso_apellido.innerHTML = "";
        }
        if(correo.value === "" || !expresion.test(correo.value)){
            aviso_correo.innerHTML = "el correo no es valido";
            aviso_correo.classList.add("aviso");
            correo.classList.add("vacio");
        }else{
            aviso_correo.classList.remove("aviso");
            correo.classList.remove("vacio");
            correo.classList.add("lleno");
            aviso_correo.innerHTML = "";
        }
        if(contraseña.value === "" || contraseña.lengh>15){
            aviso_contraseña.innerHTML = "la contraseña no es valida";
            aviso_contraseña.classList.add("aviso");
            contraseña.classList.add("vacio");
        }else {
            aviso_contraseña.classList.remove("aviso");
            contraseña.classList.remove("vacio");
            contraseña.classList.add("lleno");
            aviso_contraseña.innerHTML = "";
        }
    }