const background = document.getElementById('background-wrap');
const cloudImgs = ['assets/cloud-1.png', 'assets/cloud-2.png']; // podés agregar más
const totalNubes = 15; // cantidad de nubes que querés mostrar
for (let i = 0; i < totalNubes; i++) {
  const nube = document.createElement('div');
  nube.classList.add('bubble');
  const img = document.createElement('img');
  img.src = cloudImgs[Math.floor(Math.random() * cloudImgs.length)];
  // Posición horizontal aleatoria
  nube.style.left = Math.random() * 100 + '%';
  // Tamaño aleatorio entre 50px y 200px
  const size = 50 + Math.random() * 150;
  nube.style.width = size + 'px';
  // Duración de animación aleatoria entre 15 y 40 seg
  nube.style.animationDuration = (15 + Math.random() * 25) + 's';
  // Delay aleatorio para que no suban todas juntas
  nube.style.animationDelay = (Math.random() * 20) + 's';
  nube.appendChild(img);
  background.appendChild(nube);
}
