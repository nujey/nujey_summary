import _ from 'lodash'
import './style.css'
import loginIcon from './image/login.jpg'
import data from './data.xml'

function component() {
  var element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], '~')
  element.classList.add('hello')

  let myHeader = new Image()
  myHeader.src = loginIcon
  myHeader.width = '100'
  element.appendChild(myHeader)
  console.log(data)
  return element
}

document.body.appendChild(component())