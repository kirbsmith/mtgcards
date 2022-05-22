//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('#creature_button').addEventListener('click', getFetch)
document.querySelector('#land_button').addEventListener('click', landFetch)
document.querySelector('#creature_button_opponent1').addEventListener('click', getFetchOpponentOne)
document.querySelector('#land_button_opponent1').addEventListener('click', landFetchOpponentOne)
document.querySelector('#creature_button_opponent2').addEventListener('click', getFetchOpponentTwo)
document.querySelector('#land_button_opponent2').addEventListener('click', landFetchOpponentTwo)
document.querySelector('#creature_button_opponent3').addEventListener('click', getFetchOpponentThree)
document.querySelector('#land_button_opponent3').addEventListener('click', landFetchOpponentThree)
//



const box = document.getElementById('card_image_section');
box.addEventListener('dblclick', function handleClick(event){
  event.target.remove();
})

const boxOpponentOne = document.getElementById('card_image_section_opponent1');
boxOpponentOne.addEventListener('dblclick', function handleClick(event){
  event.target.remove();
})

const boxOpponentTwo = document.getElementById('card_image_section_opponent2');
boxOpponentTwo.addEventListener('dblclick', function handleClick(event){
  event.target.remove();
})

const boxOpponentThree = document.getElementById('card_image_section_opponent3');
boxOpponentThree.addEventListener('dblclick', function handleClick(event){
  event.target.remove();
})



box.addEventListener('click', function handleClick(event){
  event.target.classList.toggle('rotate');
  event.preventDefault()
})

boxOpponentOne.addEventListener('click', function handleClick(event){
  event.target.classList.toggle('rotate');
  event.preventDefault()
})

boxOpponentTwo.addEventListener('click', function handleClick(event){
  event.target.classList.toggle('rotate');
  event.preventDefault()
})

boxOpponentThree.addEventListener('click', function handleClick(event){
  event.target.classList.toggle('rotate');
  event.preventDefault()
})


const boxLands = document.getElementById('land_image_section');
boxLands.addEventListener('dblclick', function handleClick(event){
  event.target.remove();
})

const boxLandsOpponentOne = document.getElementById('land_image_section_opponent1');
boxLandsOpponentOne.addEventListener('dblclick', function handleClick(event){
  event.target.remove();
})

const boxLandsOpponentTwo = document.getElementById('land_image_section_opponent2');
boxLandsOpponentTwo.addEventListener('dblclick', function handleClick(event){
  event.target.remove();
})

const boxLandsOpponentThree = document.getElementById('land_image_section_opponent3');
boxLandsOpponentThree.addEventListener('dblclick', function handleClick(event){
  event.target.remove();
})


boxLands.addEventListener('click', function handleClick(event){
  event.target.classList.toggle('rotate');
  event.preventDefault()
})

boxLandsOpponentOne.addEventListener('click', function handleClick(event){
  event.target.classList.toggle('rotate');
  event.preventDefault()
})

boxLandsOpponentTwo.addEventListener('click', function handleClick(event){
  event.target.classList.toggle('rotate');
  event.preventDefault()
})

boxLandsOpponentThree.addEventListener('click', function handleClick(event){
  event.target.classList.toggle('rotate');
  event.preventDefault()
})

var data = 40;

document.getElementById("counting").innerText = data;

function increment(){
  data = data + 1;
  document.getElementById("counting").innerText = data;
}

function decrement(){
  data = data - 1;
  document.getElementById("counting").innerText = data;
}

var dataOpponentOne = 40;

document.getElementById("counting_opponent1").innerText = dataOpponentOne;

function incrementOpponent1(){
  dataOpponentOne = dataOpponentOne + 1;
  document.getElementById("counting_opponent1").innerText = dataOpponentOne;
}

function decrementOpponent1(){
  dataOpponentOne = dataOpponentOne - 1;
  document.getElementById("counting_opponent1").innerText = dataOpponentOne;
}

var dataOpponentTwo = 40;

document.getElementById("counting_opponent2").innerText = dataOpponentTwo;

function incrementOpponent2(){
  dataOpponentTwo = dataOpponentTwo + 1;
  document.getElementById("counting_opponent2").innerText = dataOpponentTwo;
}

function decrementOpponent2(){
  dataOpponentTwo = dataOpponentTwo - 1;
  document.getElementById("counting_opponent2").innerText = dataOpponentTwo;
}

var dataOpponentThree = 40;

document.getElementById("counting_opponent3").innerText = dataOpponentThree;

function incrementOpponent3(){
  dataOpponentThree = dataOpponentThree + 1;
  document.getElementById("counting_opponent3").innerText = dataOpponentThree;
}

function decrementOpponent3(){
  dataOpponentThree = dataOpponentThree - 1;
  document.getElementById("counting_opponent3").innerText = dataOpponentThree;
}
// interact('.draggable').draggable({
//   listeners: {
//     start (event) {
//       console.log(event.type, event.target)
//     },
//     move (event) {
//       position.x += event.dx
//       position.y += event.dy
//
//       event.target.style.transform = `translate(${position.x}px, ${position.y}px)`
//     },
//   }
// })

// function rotateImg(){
// tap.addEventListener('click', function handleClick(event){
//   // document.querySelector("#card_image_section").style.transform = "rotate(15deg)";
//   event.target.rotate(15);
// })

function landFetch(){
  const choice = document.querySelector('#land_input').value
  const url = `https://api.magicthegathering.io/v1/cards?name=${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.cards)
        console.log(data.cards[1].name)

        var img = document.createElement("img")
        img.src = data.cards[1].imageUrl
        var src = document.getElementById('land_image_section')
        src.appendChild(img)
    })
}

function landFetchOpponentOne(){
  const choice = document.querySelector('#land_input_opponent1').value
  const url = `https://api.magicthegathering.io/v1/cards?name=${choice}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.cards)
      console.log(data.cards[0].name)

      var img = document.createElement("img")
      img.src = data.cards[0].imageUrl
      var src = document.getElementById('land_image_section_opponent1')
      src.appendChild(img)
    })
}

function landFetchOpponentTwo(){
  const choice = document.querySelector('#land_input_opponent2').value
  const url = `https://api.magicthegathering.io/v1/cards?name=${choice}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.cards)
      console.log(data.cards[0].name)

      var img = document.createElement("img")
      img.src = data.cards[0].imageUrl
      var src = document.getElementById('land_image_section_opponent2')
      src.appendChild(img)
    })
}

function landFetchOpponentThree(){
  const choice = document.querySelector('#land_input_opponent3').value
  const url = `https://api.magicthegathering.io/v1/cards?name=${choice}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.cards)
      console.log(data.cards[0].name)

      var img = document.createElement("img")
      img.src = data.cards[0].imageUrl
      var src = document.getElementById('land_image_section_opponent3')
      src.appendChild(img)
    })
}

function getFetch(){
  const choice = document.querySelector('#creature_input').value
  const url = `https://api.magicthegathering.io/v1/cards?name=${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.cards)
        console.log(data.cards[0].name)

      var img = document.createElement("img")
      img.src = data.cards[0].imageUrl
      var src = document.getElementById('card_image_section')
      src.appendChild(img)
    })
}

function getFetchOpponentOne(){
  const choice = document.querySelector('#creature_input_opponent1').value
  const url = `https://api.magicthegathering.io/v1/cards?name=${choice}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.cards)
      console.log(data.cards[0].name)

    var img = document.createElement("img")
    img.src = data.cards[0].imageUrl
    var src = document.getElementById('card_image_section_opponent1')
    src.appendChild(img)
    })
}

function getFetchOpponentTwo(){
  const choice = document.querySelector('#creature_input_opponent2').value
  const url = `https://api.magicthegathering.io/v1/cards?name=${choice}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.cards)
      console.log(data.cards[0].name)

    var img = document.createElement("img")
    img.src = data.cards[0].imageUrl
    var src = document.getElementById('card_image_section_opponent2')
    src.appendChild(img)
    })
}

function getFetchOpponentThree(){
  const choice = document.querySelector('#creature_input_opponent3').value
  const url = `https://api.magicthegathering.io/v1/cards?name=${choice}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.cards)
      console.log(data.cards[0].name)

    var img = document.createElement("img")
    img.src = data.cards[0].imageUrl
    var src = document.getElementById('card_image_section_opponent3')
    src.appendChild(img)
    })
}

// <section class="types_section"></section>
// data.desc.forEach( descr => {
//   console.log(descr)
//   const descType = document.createElement('li')
//   descType.textContent = descr
//   document.querySelector('#name_spell').appendChild(descType)
// })
