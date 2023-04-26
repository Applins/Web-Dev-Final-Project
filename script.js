const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('button');

document.addEventListener("DOMContentLoaded", function(event) {    
  initValidation("#myform");
});

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (button.name === "Apply") {
      changeTheme('theme.css');
    } else {
      sections.forEach((section, sectionIndex) => {
        section.style.display = index === sectionIndex ? 'block' : 'none';
      });
    }
  });
});

function changeTheme(themeName) {
  const link = document.querySelector(`link[href="${themeName}"]`);
  if (link) {
    link.remove();
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.type = 'text/css';
    newLink.href = themeName;
    document.getElementsByTagName('head')[0].appendChild(newLink);
  }
}
