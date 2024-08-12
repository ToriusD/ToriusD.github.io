(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".parallax");
    const posX = 15;
    const posY = 60;
    function parallax(e) {
        let _w = window.innerWidth/2 + 300;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        // let _depth1 = `${posX - (_mouseX - _w) * 0.005}% ${posY + (_mouseY - _h) * 0.005}%`;
        let _depth2 = `${posX - (_mouseX - _w) * 0.03}% ${posY + (_mouseY - _h) * 0.04}%`;
        // let _depth3 = `${posX - (_mouseX - _w) * 0.06}% ${posY + (_mouseY - _h) * 0.07}%`;
        let x = `${_depth2}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();


document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".image").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}



