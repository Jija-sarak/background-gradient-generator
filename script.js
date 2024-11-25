let btn1 = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let copyDiv = document.getElementById("text");
let rgb1 = "#d7786e";
let rgb2 = "#8fe0d9";

const getHexCode = () => {
  let hexValues = "0123456789abcdef";
  let hexCode = "#";
  for(let i = 0; i < 6; i++){
    hexCode += hexValues[Math.floor(Math.random()*16)];
  }
  return hexCode;
}

const handleButton1 = () => {
  rgb1 = getHexCode();

  btn1.innerText = rgb1;
  btn1.style.backgroundColor = rgb1;

  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`

  copyDiv.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
}

const handleButton2 = () => {
  rgb2 = getHexCode();

  btn2.innerText = rgb2;
  btn2.style.backgroundColor = rgb2;

  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`

  copyDiv.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
}

btn1.addEventListener('click', handleButton1);
btn2.addEventListener('click', handleButton2);

copyDiv.addEventListener("click", () => {
  navigator.clipboard.writeText(copyDiv.innerText);
  document.getElementById("message").style.display = "block";
  setTimeout(() => {
    document.getElementById("message").style.display = "none";
  }, 1000);
});

