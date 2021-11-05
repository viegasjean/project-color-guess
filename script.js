const rgbColor = document.getElementById('rgb-color');
const colorContainer = document.getElementById('color-container');
const answer = document.getElementById('answer');

// Função para gerar cor aleatoria
function gerarCor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

let sortedColor = `rgb${rgbColor.innerText}`; // Cor sorteada inicialmente

let selectedColor = ''; // Inicialmente nenhuma cor é selecionada

let score = localStorage.getItem('score'); // Pega o score do localStorage

document.getElementById('score').innerText = '0'; // Score inicial é 0

// Função para marcar a pontuação
function pontua(e) {
  selectedColor = e.target.style.backgroundColor;
  if (selectedColor === sortedColor) {
    answer.innerText = 'Acertou!';
    score += 3;
    localStorage.setItem('score', `${score}`);
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
  document.getElementById('score').innerText = `${score}`;
}

// Função para iniciar um novo jogo
function novoJogo(n) {
  colorContainer.innerHTML = '';
  rgbColor.innerText = gerarCor();
  sortedColor = `rgb${rgbColor.innerText}`;
  answer.innerText = 'Escolha uma cor';
  for (let i = 0; i < n; i += 1) {
    const ball = document.createElement('span');
    ball.className = 'ball';
    ball.style.backgroundColor = `rgb${gerarCor()}`;
    ball.addEventListener('click', pontua);
    if (i === Math.round(Math.random() * 5)) {
      ball.style.backgroundColor = sortedColor;
    }
    colorContainer.appendChild(ball);
  }
}

novoJogo(6); // Cria um novo jogo inicial

// Cria um novo jogo ao clicar no botão reset
const btReset = document.querySelector('#reset-game');
btReset.addEventListener('click', () => {
  novoJogo(6);
});
