let home = document.getElementById('home-points')
let guest = document.getElementById('guest-points')

home.textContent = 0
guest.textContent = 0

function addHome() {
  home.textContent = parseInt(home.textContent) + 1
}

function addHomeTwo() {
    home.textContent = parseInt(home.textContent) + 2
}

function addHomeThree() {
    home.textContent = parseInt(home.textContent) + 4
}


function addGuest() {
    guest.textContent = parseInt(guest.textContent) + 1
}

function addGuestTwo() {
    guest.textContent = parseInt(guest.textContent) + 2
}

function addGuestThree() {
    guest.textContent = parseInt(guest.textContent) + 3

}

function reset() {
    home.textContent = 0
    guest.textContent = 0
}