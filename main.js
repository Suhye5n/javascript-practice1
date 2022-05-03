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


//함수 복습

function sum() {
  console.log(arguments)
    return arguments[0] + arguments[1]
  }

console.log(sum(7, 3))



//화살표 함수
const double = function (x, y) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = (x, y) => x * 2

console.log('doubleArrow', doubleArrow(7))

const ddoubleArrow = x => undefined

console.log('ddoubleArrow', ddoubleArrow(7))

const Arrow = x => ({
  name: 'Heropy'
})


//즉시실행함수
//IIFE

const ab = 7
function abc() {
  console.log(ab * 2)
}
abc();

(function () {
  console.log(ab * 2)
})();

(function () {
  console.log(ab * 2)
}())


//호이스팅
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const abcd = 7

doublefunction()

function doublefunction() {
  console.log(abcd * 2)
}


//타이머함수

const timer = setInterval(() => {
  console.log('Heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
})


//콜백
//함수의 인수로 사용되는 함수
function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy!')
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})


//생성자 함수

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy.getFullName())
console.log(neo.getFullName())

const suhyeon = {
  name: 'suhyeon',
  normal: function () {
    console.log(this.name)
  }
}
suhyeon.normal()

const happy = {
  name: 'happy',
  normal: suhyeon.normal,
}
happy.normal()


function People(name) {
  this.name = name
}

People.prototype.normal = function () {
  console.log(this.name)
}

const hooloo = new People('hooloo')

hooloo.normal()


const timer2 = {
  name: 'suhyeon!!',
  timeout: function () {
    setTimeout (() => {
      console.log(this.name)
    }, 2000)
  }
}
timer2.timeout()


const soo = {
  name: 'soo',
  normal: function () {
    console.log(this.name)
  }
}