import _ from 'lodash'
import numRef from './ref.json'
// import printMe from './print'
// import './style.css'
import { cube } from './main';
// import './style.css'
// import loginIcon from './image/login.jpg'
// import data from './data.xml'

function component() {
  var element = document.createElement('div')
  // var btn = document.createElement('button')
  
  element.innerHTML = _.join(['Hello webpack', '5 cubed is equal to' + cube(5)], '~')
  // // element.classList.add('hello')

  // btn.innerHTML = '点击我print'
  // btn.onclick = e => import(/* webpackChunkname: "print" */ './print').then(module => {
  //   var print = module.default;
  //   print();
  // })
  // element.appendChild(btn)

  // let myHeader = new Image()
  // myHeader.src = loginIcon
  // myHeader.width = '100'
  // element.appendChild(myHeader)
  return element
}

document.body.appendChild(component())

export function numToWord(num) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum
  }, '')
}

export function wordToNum(word) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowercase() ? ref.num : accum
  }, -1)
}
