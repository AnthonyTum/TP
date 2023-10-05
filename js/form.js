
const box = document.getElementById("form1");
const label = document.getElementById("lblusername");


function check(input) {
    const notGood = document.getElementById('notGood');
  
    if (input.value.length < 5 && !notGood) {
      // L'input est invalide
      const red = document.createElement('span');
      red.id = "notGood"
      red.classList.add('red');
      red.innerText = " Pseudo Trop court"
      red.style="color:red"
      label.appendChild(red);
  } else if (input.value.length >= 5 && notGood) {
      // L'input est valide
      notGood.remove()
  }
}