const turnOff = document.querySelector('#turnOff')
const turnOn = document.querySelector('#turnOn')

function buttonTurnOn() {
  turnOn.classList.add('hide')
  turnOff.classList.remove('hide')
}

function buttonTurnOff() {
  turnOff.classList.add('hide')
  turnOn.classList.remove('hide')
}

function darkMode() {
  document.body.classList.add('dark')
}

function lightMode() {
  document.body.classList.remove('dark')
}

turnOn.addEventListener('click', buttonTurnOn)
turnOff.addEventListener('click', buttonTurnOff)
