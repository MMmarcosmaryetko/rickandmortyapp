// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


export const validateEmail = (email) => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim() === "") {
      return "Email vacío";
    }
    if (!email.match(regexEmail)) {
      return "Email no válido";
    }
    if (email.length > 35) {
      return "No tener más de 35 caracteres";
    }
    return "";
};

export const validatePassword = (password) => {
    const regexPassword = /^(?=.*[0-9]).{6,10}$/;
    if (!password.match(regexPassword)) {
      return "Tener un número y entre 6 y 10 caracteres";
    }
    return "";
};