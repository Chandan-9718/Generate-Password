// [btn] id ke name se button ko select kiya gaya hai, jo password generate karega
const btn = document.getElementById("genPass");

// [newPass] id ke name se h1 tag ko select kiya hai, jo password display karega
const newPass = document.getElementById("newPass");

// [slider] id ke name se range input ko select kiya hai, jo password ki length decide karega
const slider = document.getElementById("range");

// [rangeval] id ke name se p tag ko select kiya hai, jisme slider ka current value dikhaya jayega
const rangeval = document.getElementById("rangeval");

// Checkbox elements ko select kiya, jo uppercase letters, lowercase letters, numbers, aur symbols ko enable/disable karenge
const upperCase = document.getElementById("capLet");
const lowerCase = document.getElementById("smallLet");
const number = document.getElementById("number");
const symbol = document.getElementById("symbal");

// Slider ke default value ko rangeval ke andar dikhaya, jo initially slider ki position show karega
rangeval.innerText = slider.value;

// Slider ko move karne par uska updated value rangeval me dikhane ke liye event listener lagaya
slider.addEventListener("input", (e) => {
  rangeval.innerText = e.target.value; // Slider ka current value display hota hai yaha
});

// Button click hone par password generate karne ke liye event listener lagaya
btn.addEventListener("click", () => {
  // Capital letters ke liye ek string banayi
  let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Small letters ke liye ek string banayi
  let smallLetter = "abcdefghijklmnopqrsuvwxyz";
  // Numbers ke liye ek string banayi
  let numberStr = "0123456789";
  // Symbols ke liye ek string banayi
  let symbolsStr = "~!@#$%^&_?";

  // Final string banane ke liye ek empty string initialize ki
  let finalStr = "";

  // Check kiya agar uppercase checkbox checked hai to capital letters ko final string me add karo
  if (upperCase.checked) {
    finalStr += capitalLetter;
  }
  // Check kiya agar lowercase checkbox checked hai to small letters ko final string me add karo
  if (lowerCase.checked) {
    finalStr += smallLetter;
  }
  // Check kiya agar number checkbox checked hai to numbers ko final string me add karo
  if (number.checked) {
    finalStr += numberStr;
  }
  // Check kiya agar symbols checkbox checked hai to symbols ko final string me add karo
  if (symbol.checked) {
    finalStr += symbolsStr;
  }

  // Agar final string empty hai, iska matlab user ne koi option select nahi kiya
  if (finalStr === "") {
    alert("Please select atlist any one fild"); // Alert message show karo
  }

  // Latest password generate karne ke liye ek empty string initialize ki
  let latestPass = "";

  // Slider value ke according loop chala ke random password generate kiya
  for (let i = 0; i < slider.value; i++) {
    let randNum = Math.floor(Math.random() * finalStr.length); // Random index nikala
    latestPass += finalStr.charAt(randNum); // Random character ko latest password me add kiya
  }

  // Generated password ko newPass ke inner text me set kiya
  newPass.innerText = `${latestPass}`;
});