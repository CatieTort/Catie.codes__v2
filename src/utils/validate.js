exports.validateText = (text) => {
    let letters = /^[a-zA-Z0-9\s@./#&+-]+$/
    if(letters.test(text)){
        return true
    }
    return false
}

exports.validatePhone = (phone) => {
    let phoneNumbers = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

   if(phoneNumbers.test(phone)){
        return true
    }
    return false
}

exports.validateEmail = (email) => {
   let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return validEmail.test(email)
}