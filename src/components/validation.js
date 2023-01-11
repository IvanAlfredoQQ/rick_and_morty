const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{4,36}/;

export default function validate (inputs){
    const errors = {}
    if(!inputs.username){
        errors.username = "El username no debe estar vacío"
    }
    else if (!regexUsername.test(inputs.username)){
        errors.username = "El username debe ser un correo electrónico"
    }
    else if (inputs.username.length >35){
        errors.username = "El username no puede tener más de 35 caracteres"
    }
    else if(!inputs.password){
        errors.password = "El password no debe estar vacío"
    }
    else if(!regexPassword.test(inputs.password)){
        errors.password = "El password debe tener una longitud entre 4 y 36 carácteres, debe contener: una letra mayúscula, una minúscula, un número y un carácter especial"
    }
    return errors
    }