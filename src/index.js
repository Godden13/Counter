import './styles/style.css'
import data from './data.js'

let display = document.getElementById('num')
const addBtn = document.getElementById('+')
const minusBtn = document.getElementById('-')


function displayValue(text = data.getCurrentValue()) {
  display.innerHTML = text;
}

addBtn.addEventListener('click', () => {
  data.add()
  displayValue()
})

minusBtn.addEventListener('click', () => {
  data.sub()
  displayValue()
})
