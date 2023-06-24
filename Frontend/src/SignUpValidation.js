// function Validation(values){
//     let error={}
//     const email_pattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//     const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    
//     if(values.name === ""){
//         error.name = "Name should not be empty "
//     }
//     else{
//         error.name=""
//     }

//     if(values.email === ""){
//         error.email = "Email should not be empty "
//     }
//     else if(!email_pattern.test(values.email)){
//         error.email ="Email Didn't match"
//     }else{
//         error.email=""
//     }

//     if(values.password ===""){
//         error.password = "Password should not be empty"
//     }
//     else if(!password_pattern.test(values.password)){
//         error.password = "Password didn't match"
//     }
//     else{
//         error.password=""
//     }
//     return error
// }
// export default  Validation;


function Validation(values) {
    // Check if the First Name is an Empty string or not.
    let error={}
    const email_pattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    
    if(values.name === ""){
        error.name = "Name can not be empty"
    }
    else{
        error.name=""
    }

    if(values.email === ""){
        error.email = "Email Address can not be empty "
    }
    else if(!email_pattern.test(values.email)){
        error.email ="Email Address Invalid"
    }else{
        error.email=""
    }

    // if (values.name.length === 0) {
    //     error.name='Name can not be empty'
      
    // }

    // // Check if the Email is an Empty string or not.

    // if (values.email.length === 0) {
    //     error.email='Email Address can not be empty'
      
    // }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (values.password.length < 8) {
        error.password='Password must contain greater than or equal to 8 characters.'
      
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0
    // variable to count lowercase characters in the password.
    let countLowerCase = 0
    // variable to count digit characters in the password.
    let countDigit = 0
    // variable to count special characters in the password.
    let countSpecialCharacters = 0

    for (let i = 0; i < values.password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(values.password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++
      } else if (!isNaN(values.password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (values.password[i] === values.password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++
        }
        if (values.password[i] === values.password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++
        }
      }
    }

    if (countLowerCase === 0) {
      // invalid form, 0 lowercase characters
      error.password=' 0 lower case characters in password'
    }

    if (countUpperCase === 0) {
      // invalid form, 0 upper case characters
      error.password=' 0 upper case characters in password'
    }

    if (countDigit === 0) {
      // invalid form, 0 digit characters
      error.password=' 0 digit characters in password'
     
    }

    if (countSpecialCharacters === 0) {
      // invalid form, 0 special characters characters
      error.password= '0 special characters in password'
    }

    // if all the conditions are valid, this means that the form is valid

    return error;
  }
  export default  Validation;