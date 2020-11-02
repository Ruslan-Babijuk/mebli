let product = document.querySelectorAll('.options-input')
let next = document.querySelectorAll('.next')
let card = document.querySelectorAll('.form-body')
let divans = document.querySelector('.divans')
let choise
let sofas = document.querySelector('.sofas')
let step = document.querySelector('.step-two')
let productItem = document.querySelectorAll('.product-item')
let radioButtons = document.querySelector('.radio-buttons')
let qtRadio = document.querySelectorAll('.qt_place')
let radioExtra = document.querySelector('.radio-extra')
let result 
let radioDone = false
let number = document.createElement('span')
let newChoice = document.querySelectorAll('.choice')
let extraParametry = false 
let extraParametryForm = document.querySelector('.extra-parametry')
let options = document.querySelector('.first-form')
let over = document.querySelector('.over2')
let addExtraParametryBool = false
let order = {}



// chair
let chairs = document.querySelector('.forms-armchair')
let radioChair = document.querySelector('.radio-buttons-chair')
let radioChairBool = false
let extraChair = false
let addExtraParametryChair = false

// small chair
let stul = document.querySelector('.forms-chair')
let radioStul = document.querySelector('.radio-stul')
let radioStulBool = false
let extraStul = false
let addExtraParametryStul = false



// beds

let beds = document.querySelector('.forms-bed')
let radioBeds = document.querySelector('.radio-beds')
radioBeds.addEventListener('click', bedsQt)
let radioBedsBool = false
let extraBeds = false
let addExtraParametryBeds = false


radioStul.addEventListener('click', stulQt)


radioChair.addEventListener('click', chairQt)






extraParametryForm.addEventListener('click', addExtraParametry)
 radioExtra.addEventListener('click', addExtra)
// for(let i of radioExtra) {
//      i.addEventListener('click', addExtra)
// } 

for(let i of qtRadio) {
    i.addEventListener('input', addPlace)
}
for(let i of productItem) {
    i.addEventListener('click', nextStep)
}
// let change = document.querySelector('.chose-inside')
for(let i of product) {
    i.addEventListener('click', choose)
}
for(let i of next) {
    // i.addEventListener('click', nextStep)
}
for(let i of card) {
    i.addEventListener('click', makeStep)
}


// фунция для дивов  
function nextStep(event) {

let choice = document.querySelectorAll('.choice')
for(let i of choice) {
    i.lastElementChild.innerText = event.target.parentElement.lastElementChild.innerText
}

    document.querySelector('.choice').lastElementChild.innerText = event.target.parentElement.lastElementChild.innerText
    // event.target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerText = event.target.parentElement.lastElementChild.innerText
    // console.log(event.target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerText)
    choise = document.querySelector('.choice').lastElementChild.innerText
   
}


// функция для инпутов
function choose(e) {

    choise = e.target.value

  
    e.target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerText = e.target.nextElementSibling.innerText
  
}

// фунция для кнопки далле
function makeStep(event) {

    
    if(event.target.nodeName == 'A') {
 

 // sofas section 
    if(choise == 'sofas') {

        choise = document.querySelector('.choice').lastElementChild.innerText
     
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        
        options.classList.add('hide')
        sofas.classList.remove('hide')
        step.classList.add('linear-gradient')
        line-step.classList.add('linear-gradient')
       
    }
    // console.log(choise)
    if(choise == "Диван прямой" || choise == "Диван угловой" || choise == "Диван модульный") {
        let name = choise
        choise = document.querySelector('.choice').lastElementChild.innerText
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        sofas.classList.add('hide')
        radioButtons.classList.remove('hide')
        order.Найменование = name
        document.querySelector('.step-three').classList.add('linear-gradient')
    }
    if(radioDone) {
        this.classList.add('hide')
        radioExtra.classList.remove('hide')
        radioDone = false
        document.querySelector('.step-four').classList.add('linear-gradient')
    }
    if(extraParametry) {
        radioExtra.classList.add('hide')
        extraParametryForm.classList.remove('hide')
        document.querySelector('.step-five').classList.add('linear-gradient')
    }
    if(addExtraParametryBool) {
        extraParametryForm.classList.add('hide')
        over.classList.remove('hide')
    }
// end of sofas section
        
//arm chair
    if(choise == 'armchairs') {

        choise = document.querySelector('.choice').lastElementChild.innerText
     
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        
        options.classList.add('hide')
        chairs.classList.remove('hide')
        // console.log(options)
        step.classList.add('linear-gradient')
    }

    if(choise == "Кресло с мягкими подлокотниками" || choise == "Кресло с деревянными подлокотниками"
     || choise == "Кресло соспальным местом" || choise == "Офисное кресло") {
        let name = choise
        choise = document.querySelector('.choice').lastElementChild.innerText
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        order.Найменование = name
        chairs.classList.add('hide')
        radioChair.classList.remove('hide')
        document.querySelector('.step-three').classList.add('linear-gradient')
    }

      if(radioChairBool) {
        radioChair.classList.add('hide')
        radioExtra.classList.remove('hide')
        radioDone = false
        document.querySelector('.step-four').classList.add('linear-gradient')
    }

    if(extraChair) {
        radioExtra.classList.add('hide')
        extraParametryForm.classList.remove('hide')
        document.querySelector('.step-five').classList.add('linear-gradient')
    }
      if(addExtraParametryChair) {
        extraParametryForm.classList.add('hide')
        over.classList.remove('hide')
    }
// chair end

     if(choise == 'chairs') {

        choise = document.querySelector('.choice').lastElementChild.innerText
     
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        
        options.classList.add('hide')
        stul.classList.remove('hide')
        // console.log(options)
        step.classList.add('linear-gradient')
    }

     if(choise == "Стулья без мягкой спинки" || choise == "Стулья с мягкой спинкой") {
        choise = document.querySelector('.choice').lastElementChild.innerText
        let name = choise
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        order.Найменование = name
        stul.classList.add('hide')
        radioStul.classList.remove('hide')
        document.querySelector('.step-three').classList.add('linear-gradient')


    } if(radioStulBool) {
        radioStul.classList.add('hide')
        radioExtra.classList.remove('hide')
        radioDone = false
        document.querySelector('.step-four').classList.add('linear-gradient')
    }


    if(extraStul) {
        radioExtra.classList.add('hide')
        extraParametryForm.classList.remove('hide')
        document.querySelector('.step-five').classList.add('linear-gradient')
    }
      if(addExtraParametryStul) {
        extraParametryForm.classList.add('hide')
        over.classList.remove('hide')
    
    }

// beds


    if(choise == 'beds') {

        choise = document.querySelector('.choice').lastElementChild.innerText
     
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        options.classList.add('hide')
        beds.classList.remove('hide')
        // console.log(options)
        step.classList.add('linear-gradient')
    }

     if(choise == "Кровать с изголовьем" || choise == "Кровать без изголовья") {
        let name = choise
        choise = document.querySelector('.choice').lastElementChild.innerText
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        order.Найменование = name
        beds.classList.add('hide')
        radioBeds.classList.remove('hide')
        document.querySelector('.step-three').classList.add('linear-gradient')

    } 
    if(radioBedsBool) {
        radioBeds.classList.add('hide')
        radioExtra.classList.remove('hide')
        radioDone = false
        document.querySelector('.step-four').classList.add('linear-gradient')
    }
    if(extraBeds) {
        radioExtra.classList.add('hide')
        extraParametryForm.classList.remove('hide')
        document.querySelector('.step-five').classList.add('linear-gradient')
    }
      if(addExtraParametryBeds) {
        extraParametryForm.classList.add('hide')
        over.classList.remove('hide')
    }




}
}


// фунция по добавлению строки в выбор sofas
function addPlace(event) {

    newChoice = document.querySelectorAll('.choice')
    number.innerText = event.target.value
    let places = document.querySelector('.sofas-place')
    places.querySelector('.choisen-item').append(number)
    order.Количество = event.target.value
    radioDone = true
        
}

function addExtra(event) {
 
    if(event.target.nodeName== "INPUT") {
        let choice = document.querySelectorAll('.choisen-item')
        let arrNode = []
        // if(!event.target.checked) {
        //     // console.log(event.target.value)
        //     for(let i of choice) {
        //         arrNode.push(i.innerText.split(','))
        //         i.innerText.split(',').filter(item => {
        //             // console.log(item)
        //             if(item+',' == event.target.value){
        //                 arrNode.pop()
        //                 for(let i = 0; i < arrNode.length; i++){
        //                     console.log(arrNode[i])
        //                     choice[i].innerText = arrNode[i]
        //                 }
        //             }
        //         })
        //     }
        // }

          for(let i of choice) {

            if(i.innerText.split(' ').length < 3) {
                i.innerText = ''
            }
            i.innerText += event.target.value
          }
          order.Параметры = event.target.value
          extraParametry = true
          extraChair = true
          extraStul = true
          extraBeds = true
          result += choice[0].innerText


    }
}

function addExtraParametry() {

    if(event.target.nodeName== "INPUT") {
        // console.log('addExtra')
        let choice = document.querySelectorAll('.choisen-item')
          for(let i of choice) {
            i.innerText += event.target.value
          }
          order.ДопПараметры = event.target.value
          addExtraParametryBool = true
          addExtraParametryChair = true
          addExtraParametryStul = true
          addExtraParametryBeds = true
    
    }
}



function chairQt(event) {
     if(event.target.nodeName== "INPUT") {
        number.innerText = event.target.value
        radioChair.querySelector('.choisen-item').append(number)
        radioChairBool = true
        order.Количество = event.target.value
    
     }
}

function stulQt(event) {
      if(event.target.nodeName== "INPUT") {
        number.innerText = event.target.value
        radioStul.querySelector('.choisen-item').append(number)  
        order.Количество = event.target.value

        radioStulBool = true
      }
}

function bedsQt() {
    if(event.target.nodeName== "INPUT") {

        number.innerText = event.target.value
        radioBeds.querySelector('.choisen-item').append(number) 
        order.Количество = event.target.value 
        radioBedsBool = true
    }
}   

let submit = document.querySelector('.over-form')

submit.addEventListener('click', sendIt)

function sendIt(event) {
    if(event.target.nodeName == "BUTTON"){
        if(this.querySelector('.phone').value == '' || this.querySelector('.name').value == '') {
            alert("Введите ваши данные")
        }else {
            order.Имя = this.querySelector('.name').value
            order.НомерТелефона = this.querySelector('.phone').value
             console.log(order) 
        }
      
      
    }
}