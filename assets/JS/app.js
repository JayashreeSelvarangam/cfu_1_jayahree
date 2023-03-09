
/*get the number of characters*/
function charLength() {
    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;
}
document.getElementById('length').addEventListener('change', charLength);
function generate(){
    if (document.getElementById('uppercase').checked == true){
        let charLength = document.getElementById('length').value;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for(let i = 0; i < charLength; i++){
        result += 
        characters.charAt(Math.floor(Math.random() * characters.length));
        }
        document.getElementById("result").innerHTML = result ;
    };
};
    let btn = document.getElementById('btn');
    btn.addEventListener('click',generate());

























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

