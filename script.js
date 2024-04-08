const adviceNumber = document.getElementById('advice-num');
const adviceElem = document.getElementById('advice');
const apiURL = 'https://api.adviceslip.com/advice';

async function getAdvice(url) {
  const response = await fetch(url);
  var data = await response.json();

  adviceNumber.innerHTML = `Advice # ${data.slip.id}`;
  adviceElem.innerHTML = `"${data.slip.advice}"`;
}

getAdvice(apiURL);