const song = new Audio('./song.mp3');
const btn = document.getElementById('btn');
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
btn.addEventListener('click',() => {
  song.play()
  confetti.render();
  btn.style.display = 'none';
});