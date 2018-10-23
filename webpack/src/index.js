import _ from 'lodash'
// import './style.css'
// import loginIcon from './image/login.jpg'
// import data from './data.xml'
import printMe from './print'

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], '~')
  element.classList.add('hello')

  btn.innerHTML = '点击我print'
  btn.onclick = printMe
  element.appendChild(btn)

  // let myHeader = new Image()
  // myHeader.src = loginIcon
  // myHeader.width = '100'
  // element.appendChild(myHeader)
  return element
}

document.body.appendChild(component())