motherShip = document.querySelector(".mother article p");
defenceShips = document.querySelectorAll(".defence article p");
defenceShipsWhole = document.querySelectorAll(".defence article");
attackShips = document.querySelectorAll(".attack article p");
attackShipsWhole = document.querySelectorAll(".attack article");

window.addEventListener("keydown", () => {
  if (event.keyCode === 32) {
    shot();
  }
});

const shot = () => {
  random = Math.floor(Math.random() * 3);
  random2 = Math.floor(Math.random() * 5);
  random3 = Math.floor(Math.random() * 8);

    if (random === 0) {
        if(Number(motherShip.innerText) > 1) {
            if (random2 > 3) {
                motherShip.innerText = Number(motherShip.innerText) - 9;
            } else {
                shot()
            }
        } else {
            won()
    }} else if (random === 1) {
        if (Number(defenceShips[random2].innerText) > 0) {
            defenceShips[random2].innerText = Number(defenceShips[random2].innerText) - 10;
        } else {
            defenceShipsWhole[random2].style.display = 'none';
            shot()
    }} else if (random === 2) {
        if (Number(attackShips[random3].innerText) > 9) {
            attackShips[random3].innerText = Number(attackShips[random3].innerText) - 12;
        } else {
            attackShipsWhole[random3].style.display = 'none';
            shot()
    }}
};

const won = () => {
    alert('You won! click "enter" to play again :)')
    motherShip.innerText= '100'
    defenceShips.forEach(ship => ship.innerText = '80')
    attackShips.forEach(ship => ship.innerText = '45')
    defenceShipsWhole.forEach(ship => ship.style.display = 'block')
    attackShipsWhole.forEach(ship => ship.style.display = 'block')
}
