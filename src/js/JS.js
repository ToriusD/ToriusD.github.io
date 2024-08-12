const elem = document.querySelector(".parallax");
const images = document.querySelectorAll(".image");
const posX = 15;
const posY = 60;
const _w = window.innerWidth / 2 + 300;
const _h = window.innerHeight / 2;

document.addEventListener("mousemove", parallax);

function parallax(e) {
  const _mouseX = e.clientX;
  const _mouseY = e.clientY;
  const _depth2 = `${posX - (_mouseX - _w) * 0.03}% ${posY + (_mouseY - _h) * 0.1}%`;

  elem.style.backgroundPosition = _depth2;

  images.forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - e.pageX * position) / 90;
    const y = (window.innerHeight - e.pageY * position) / 90;
    const scrollPosition = window.scrollY;
    const scale = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 10 + 1;

    shift.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) scale(${scale})`;
  });
}


const rowLists = document.querySelectorAll('.flex_row_list');
let index = 0;

function showNextElement() {
  if (index >= rowLists.length) return;
  const element = rowLists[index];
  const rect = element.getBoundingClientRect();
  if (rect.top > 0 && rect.top < window.innerHeight - 100 &&!element.classList.contains('show')) {
    element.classList.add('show');
    index++;
    setTimeout(showNextElement, 200); // задержка между появлением элементов
  } else {
    requestAnimationFrame(showNextElement);
  }
}

window.addEventListener('scroll', () => {
  showNextElement();
});