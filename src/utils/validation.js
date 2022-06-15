module.exports.nameValidation = function (value) {
    const validation = { status: false }

    if (value.length <= 2) {
        validation.message = 'Имя должно быть не менее двух символов';
    } else if (!(/^[a-zа-яё\s]+$/iu).test(value)) {
        validation.message = 'Имя должно состоять из букв русского и латинского алфавита';
    } else {
        validation.status = true;
    }

    return validation
};


module.exports.emailValidation = function (value) {
    const validation = { status: false }

    if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).test(value)) {
        validation.message = 'Некорректный email';
    } else {
        validation.status = true;
    }

    return validation
};

module.exports.passwordValidation = function (value) {
    const validation = { status: false }

    if (value.length <= 5) {
        validation.message = 'Пароль должен быть не менее шести символов';
    } else {
        validation.status = true;
    }

    return validation
};

module.exports.searchFormValidation = function (value) {
    const validation = { status: false }

    if (value.length < 1) {
        validation.message = 'Обязательное поле';
    } else {
        validation.status = true;
    }

    return validation
};
