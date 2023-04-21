const darkmode = document.getElementById('container');
const theme = document.getElementById('theme');

theme.addEventListener('click', () => {
  darkmode.classList.toggle('dark-mode');

  const attClass = theme.getAttribute('class');
  theme.classList.remove(`${attClass === 'fas fa-moon' ? 'fa-moon' : 'fa-sun'}`);
  theme.classList.add(`${attClass !== 'fas fa-moon' ? 'fa-moon' : 'fa-sun'}`);
});