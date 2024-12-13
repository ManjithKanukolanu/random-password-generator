const P = document.getElementById("Password");
const l = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "~!@#$%^&*()_+=`:;/.";
const rem = uppercase + lowercase + num + symbol;

function createpassword() {
    console.log("Button clicked");
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += num[Math.floor(Math.random() * num.length)];
    while (password.length < l) {
        password += rem[Math.floor(Math.random() * rem.length)];
    }
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    console.log("Generated password:", password);
    P.value = password;
}

function copypassword() {
    navigator.clipboard.writeText(P.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(err => console.error("Error copying password: ", err));
}
