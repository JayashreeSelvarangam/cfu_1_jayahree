
// get the number of characters
function charLength() {
    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;
}
document.getElementById('length').addEventListener('change', charLength);
// function generate(){
//     if (document.getElementById('uppercase').checked == true){
//         let charLength = document.getElementById('length').value;
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         let result = '';
//         for(let i = 0; i < charLength; i++){
//         result += 
//         characters.charAt(Math.floor(Math.random() * characters.length));
//         }
//         document.getElementById("password__result").value = result ;
//     };
// };
//     let btn = document.getElementById('btn');
//     btn.addEventListener('click',generate());



// function generatePassword(length) {
//   // Define all possible characters
//   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
//   let password = "";
//   // Generate random characters until the password reaches the desired length
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     password += charset[randomIndex];
//   }
//   return password;
// }

// Example usage: generate a 12-character password
// const password = (12);
// console.log(password);

//    let btn = document.getElementById('btn');
//      btn.addEventListener('click',function(){
//         let length=10;
//           // Define all possible characters
//   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
//   let password = "";
//   // Generate random characters until the password reaches the desired length
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     password += charset[randomIndex];
//   }
//   return password;
//   document.getElementById("result").innerHTML = password ;
//      });



       function generatePassword(length) {

        if(document.getElementById('uppercase').checked == true){
        let charLength = document.getElementById('length').value;
        console.log(charLength);
        // Define all possible characters
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let password = "";
        // Generate random characters until the password reaches the desired length
        for (let i = 0; i < charLength; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          password += charset[randomIndex];
        }
        return password;
    };
       };
           
      // Get a reference to the button and the output element
      const generateButton = document.getElementById("btn");
      const outputElement = document.getElementById("password__result");
      
      // Attach an event listener to the button
      generateButton.addEventListener("click", function() {
      // Generate a password and display it in the output element
        const password = generatePassword(12);
        console.log(password);
        outputElement.value = password;
      });














// var password=document.getElementById("password");

//  function genPassword() {
//     var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var passwordLength = 12;
//     var password = "";
//  for (var i = 0; i <= passwordLength; i++) {
//    var randomNumber = Math.floor(Math.random() * chars.length);
//    password += chars.substring(randomNumber, randomNumber +1);
//   }
//         document.getElementById("password").value = password;
//  }

