//산술 연산자

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(10 % 2)

//할당연산자
let a = 2
//a = a + 1
a %= 2

console.log(a)


//비교연산자
const c = 1 
const b = 1
console.log(c === b)

function isEqual(x,y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

console.log(c !== b)
console.log(c < b)


//논리연산자

const x = 1 === 1
const y = 'AB' === 'ABC'
const z = false

console.log ('&&: ', x && y && z)
console.log('||: ', x || y || z)
console.log('!: ', !x)


//삼항 연산자

const v = 1 < 2

if (v) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(v ? '참' : '거짓')

import random from './getRandom'

//조건문 (If statement)

const ran = random()

if (ran === 0) {
  console.log('ran is 0')
} else if (ran === 1) {
  console.log('ran is 1')
} else if (ran === 2) {
  console.log('ran is 2')
} else {
  console.log('rest...')
}

switch (ran) {
  case 0:
    console.log('ran is 0')
    break
  case 1:
    console.log('ran is 1')
    break
  case 2:
    console.log('ran is 2')
    break
  default:
    console.log('rest...')
}

//반복문

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if((i + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}


//변수 유효범위
//var, let, const
function scope() {
  if (true) {
    var ohsu = 123
  }
  console.log(ohsu)
}
scope()


//형 변환
const k = 1
const j = '1'

console.log(k == j) 

if (0) {
  console.log(123)
}