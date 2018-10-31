import _ from 'lodash'
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
  // element.classList.add('hello')

  // btn.innerHTML = '点击我print'
  // btn.onclick = printMe
  // element.appendChild(btn)

  // let myHeader = new Image()
  // myHeader.src = loginIcon
  // myHeader.width = '100'
  // element.appendChild(myHeader)
  return element
}

document.body.appendChild(component())


// if(module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('accepting the updated printMe module!');
//     printMe();
//   })
// }
