const startBtn = document.getElementById('startBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');

startBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});

submitBtn.addEventListener('click', () => {
  const inputs = document.querySelectorAll('.input-container input');
  const data = {};
  inputs.forEach(input => {
    data[input.placeholder] = input.value;
  });
  const jsonData = JSON.stringify(data);
  output.textContent = jsonData;
  popup.style.display = 'none';
  overlay.style.display = 'none';
});
