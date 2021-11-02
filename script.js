const rgbColor = document.getElementById('rgb-color');
const main = document.querySelector('main');

const answer = document.createElement('p');
answer.id = 'answer';
answer.innerText = 'Escolha uma cor';
main.appendChild(answer);

const btReset = document.querySelector('#reset-game');
btReset.addEventListener('click', () => window.location.reload());

function gerarCor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

rgbColor.innerText = gerarCor();
const sortedColor = `rgb${rgbColor.innerText}`;

let selectedColor = '';

function aaa(e) {
  selectedColor = e.target.style.backgroundColor;
  if (selectedColor === sortedColor) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

for (let i = 0; i < 6; i += 1) {
  const ball = document.createElement('span');
  ball.className = 'ball';
  ball.style.backgroundColor = `rgb${gerarCor()}`;
  ball.addEventListener('click', aaa);
  if (i === Math.round(Math.random() * 6)) {
    ball.style.backgroundColor = sortedColor;
  }
  main.appendChild(ball);
}
