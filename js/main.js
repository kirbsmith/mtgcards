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



// const box = document.getElementById('card_section_with_counter');
// box.addEventListener('dblclick', function handleClick(event){
//   box.remove();
// })

// const boxOpponentOne = document.getElementById('card_image_section_opponent1');
// boxOpponentOne.addEventListener('dblclick', function handleClick(event){
//   event.target.remove();
// })
//
// const boxOpponentTwo = document.getElementById('card_image_section_opponent2');
// boxOpponentTwo.addEventListener('dblclick', function handleClick(event){
//   event.target.remove();
// })
//
// const boxOpponentThree = document.getElementById('card_image_section_opponent3');
// boxOpponentThree.addEventListener('dblclick', function handleClick(event){
//   event.target.remove();
// })



// box.addEventListener('click', function handleClick(event){
//   event.target.classList.toggle('rotate');
//   event.preventDefault()
// })
//
// boxOpponentOne.addEventListener('click', function handleClick(event){
//   event.target.classList.toggle('rotate');
//   event.preventDefault()
// })

// boxOpponentTwo.addEventListener('click', function handleClick(event){
//   event.target.classList.toggle('rotate');
//   event.preventDefault()
// })
//
// boxOpponentThree.addEventListener('click', function handleClick(event){
//   event.target.classList.toggle('rotate');
//   event.preventDefault()
// })


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


var creatureData = 0;

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
      console.log(data)
      console.log(data.cards)
      console.log(data.cards[1].name)

      var img = document.createElement("img")
      img.src = data.cards[1].imageUrl
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
      console.log(data.cards[1].name)

      var img = document.createElement("img")
      img.src = data.cards[1].imageUrl
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
      console.log(data.cards[1].name)

      var img = document.createElement("img")
      img.src = data.cards[1].imageUrl
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

      var creatureSection = document.createElement("section")
      creatureSection.setAttribute('class', 'card_section_with_information')
      var creatureSectionSrc = document.getElementById('card_image_section')
      creatureSectionSrc.appendChild(creatureSection)

      var img = document.createElement("img")
      img.src = data.cards[0].imageUrl
      // var src = document.getElementById('card_image_section')
      creatureSection.appendChild(img)

      var creatureInformationSection = document.createElement("section")
      creatureInformationSection.setAttribute('class', 'creature_information_section')
      creatureSection.appendChild(creatureInformationSection)

      var creatureAttackSection = document.createElement("section")
      creatureAttackSection.setAttribute('class', 'creature_at_section')
      creatureInformationSection.appendChild(creatureAttackSection)

      var creatureAttackHeading = document.createElement("h6")
      var creatureAttackHeadingText = document.createTextNode("Attack: ")
      creatureAttackHeading.setAttribute('class', 'creature_info_heading')
      creatureAttackHeading.appendChild(creatureAttackHeadingText)
      creatureInformationSection.appendChild(creatureAttackHeading)

      var creatureAttack = document.createElement('input')
      creatureAttack.setAttribute('class', 'creature_info')
      creatureAttack.setAttribute('type', 'number')
      creatureInformationSection.appendChild(creatureAttack)

      var creatureToughnessSection = document.createElement("section")
      creatureToughnessSection.setAttribute('class', 'creature_at_section')
      creatureInformationSection.appendChild(creatureToughnessSection)

      var creatureToughnessHeading = document.createElement("h6")
      var creatureToughnessHeadingText = document.createTextNode("Toughness: ")
      creatureToughnessHeading.setAttribute('class', 'creature_info_heading')
      creatureToughnessHeading.appendChild(creatureToughnessHeadingText)
      creatureInformationSection.appendChild(creatureToughnessHeading)

      var creatureToughness = document.createElement('input')
      creatureToughness.setAttribute('class', 'creature_info')
      creatureToughness.setAttribute('type', 'number')
      creatureInformationSection.appendChild(creatureToughness)

      img.addEventListener('dblclick', function handleClick(event){
        creatureSection.remove();
      })

      img.addEventListener('click', function handleClick(event){
        event.target.classList.toggle('rotate');
        event.preventDefault()
      })
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

    var creatureSectionOpponentOne = document.createElement("section")
    creatureSectionOpponentOne.setAttribute('class', 'card_section_with_information')
    var creatureSectionSrcOpponentOne = document.getElementById('card_image_section_opponent1')
    creatureSectionSrcOpponentOne.appendChild(creatureSectionOpponentOne)

    var img = document.createElement("img")
    img.src = data.cards[0].imageUrl
    creatureSectionOpponentOne.appendChild(img)

    var creatureInformationSectionOpponentOne = document.createElement("section")
    creatureInformationSectionOpponentOne.setAttribute('class', 'creature_information_section')
    creatureSectionOpponentOne.appendChild(creatureInformationSectionOpponentOne)

    var creatureAttackSectionOpponentOne = document.createElement("section")
    creatureAttackSectionOpponentOne.setAttribute('class', 'creature_at_section')
    creatureInformationSectionOpponentOne.appendChild(creatureAttackSectionOpponentOne)

    var creatureAttackHeadingOpponentOne = document.createElement("h6")
    var creatureAttackHeadingTextOpponentOne = document.createTextNode("Attack: ")
    creatureAttackHeadingOpponentOne.setAttribute('class', 'creature_info_heading')
    creatureAttackHeadingOpponentOne.appendChild(creatureAttackHeadingTextOpponentOne)
    creatureInformationSectionOpponentOne.appendChild(creatureAttackHeadingOpponentOne)

    var creatureAttack = document.createElement('input')
    creatureAttack.setAttribute('class', 'creature_info')
    creatureAttack.setAttribute('type', 'number')
    creatureInformationSectionOpponentOne.appendChild(creatureAttack)

    var creatureToughnessSectionOpponentOne = document.createElement("section")
    creatureToughnessSectionOpponentOne.setAttribute('class', 'creature_at_section')
    creatureInformationSectionOpponentOne.appendChild(creatureToughnessSectionOpponentOne)

    var creatureToughnessHeadingOpponentOne = document.createElement("h6")
    var creatureToughnessHeadingTextOpponentOne = document.createTextNode("Toughness: ")
    creatureToughnessHeadingOpponentOne.setAttribute('class', 'creature_info_heading')
    creatureToughnessHeadingOpponentOne.appendChild(creatureToughnessHeadingTextOpponentOne)
    creatureInformationSectionOpponentOne.appendChild(creatureToughnessHeadingOpponentOne)

    var creatureToughnessOpponentOne = document.createElement('input')
    creatureToughnessOpponentOne.setAttribute('class', 'creature_info')
    creatureToughnessOpponentOne.setAttribute('type', 'number')
    creatureInformationSectionOpponentOne.appendChild(creatureToughnessOpponentOne)

    img.addEventListener('dblclick', function handleClick(event){
      creatureSectionOpponentOne.remove();
    })

    img.addEventListener('click', function handleClick(event){
      event.target.classList.toggle('rotate');
      event.preventDefault()
    })
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

    var creatureSectionOpponentTwo = document.createElement("section")
    creatureSectionOpponentTwo.setAttribute('class', 'card_section_with_information')
    var creatureSectionSrcOpponentTwo = document.getElementById('card_image_section_opponent2')
    creatureSectionSrcOpponentTwo.appendChild(creatureSectionOpponentTwo)

    var img = document.createElement("img")
    img.src = data.cards[0].imageUrl
    creatureSectionOpponentTwo.appendChild(img)

    var creatureInformationSectionOpponentTwo = document.createElement("section")
    creatureInformationSectionOpponentTwo.setAttribute('class', 'creature_information_section')
    creatureSectionOpponentTwo.appendChild(creatureInformationSectionOpponentTwo)

    var creatureAttackSectionOpponentTwo = document.createElement("section")
    creatureAttackSectionOpponentTwo.setAttribute('class', 'creature_at_section')
    creatureInformationSectionOpponentTwo.appendChild(creatureAttackSectionOpponentTwo)

    var creatureAttackHeadingOpponentTwo = document.createElement("h6")
    var creatureAttackHeadingTextOpponentTwo = document.createTextNode("Attack: ")
    creatureAttackHeadingOpponentTwo.setAttribute('class', 'creature_info_heading')
    creatureAttackHeadingOpponentTwo.appendChild(creatureAttackHeadingTextOpponentTwo)
    creatureInformationSectionOpponentTwo.appendChild(creatureAttackHeadingOpponentTwo)

    var creatureAttack = document.createElement('input')
    creatureAttack.setAttribute('class', 'creature_info')
    creatureAttack.setAttribute('type', 'number')
    creatureInformationSectionOpponentTwo.appendChild(creatureAttack)

    var creatureToughnessSectionOpponentTwo = document.createElement("section")
    creatureToughnessSectionOpponentTwo.setAttribute('class', 'creature_at_section')
    creatureInformationSectionOpponentTwo.appendChild(creatureToughnessSectionOpponentTwo)

    var creatureToughnessHeadingOpponentTwo = document.createElement("h6")
    var creatureToughnessHeadingTextOpponentTwo = document.createTextNode("Toughness: ")
    creatureToughnessHeadingOpponentTwo.setAttribute('class', 'creature_info_heading')
    creatureToughnessHeadingOpponentTwo.appendChild(creatureToughnessHeadingTextOpponentTwo)
    creatureInformationSectionOpponentTwo.appendChild(creatureToughnessHeadingOpponentTwo)

    var creatureToughnessOpponentTwo = document.createElement('input')
    creatureToughnessOpponentTwo.setAttribute('class', 'creature_info')
    creatureToughnessOpponentTwo.setAttribute('type', 'number')
    creatureInformationSectionOpponentTwo.appendChild(creatureToughnessOpponentTwo)

    img.addEventListener('dblclick', function handleClick(event){
      creatureSectionOpponentTwo.remove();
    })

    img.addEventListener('click', function handleClick(event){
      event.target.classList.toggle('rotate');
      event.preventDefault()
    })
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

      var creatureSectionOpponentThree = document.createElement("section")
      creatureSectionOpponentThree.setAttribute('class', 'card_section_with_information')
      var creatureSectionSrcOpponentThree = document.getElementById('card_image_section_opponent3')
      creatureSectionSrcOpponentThree.appendChild(creatureSectionOpponentThree)

      var img = document.createElement("img")
      img.src = data.cards[0].imageUrl
      creatureSectionOpponentThree.appendChild(img)

      var creatureInformationSectionOpponentThree = document.createElement("section")
      creatureInformationSectionOpponentThree.setAttribute('class', 'creature_information_section')
      creatureSectionOpponentThree.appendChild(creatureInformationSectionOpponentThree)

      var creatureAttackSectionOpponentThree = document.createElement("section")
      creatureAttackSectionOpponentThree.setAttribute('class', 'creature_at_section')
      creatureInformationSectionOpponentThree.appendChild(creatureAttackSectionOpponentThree)

      var creatureAttackHeadingOpponentThree = document.createElement("h6")
      var creatureAttackHeadingTextOpponentThree = document.createTextNode("Attack: ")
      creatureAttackHeadingOpponentThree.setAttribute('class', 'creature_info_heading')
      creatureAttackHeadingOpponentThree.appendChild(creatureAttackHeadingTextOpponentThree)
      creatureInformationSectionOpponentThree.appendChild(creatureAttackHeadingOpponentThree)

      var creatureAttack = document.createElement('input')
      creatureAttack.setAttribute('class', 'creature_info')
      creatureAttack.setAttribute('type', 'number')
      creatureInformationSectionOpponentThree.appendChild(creatureAttack)

      var creatureToughnessSectionOpponentThree = document.createElement("section")
      creatureToughnessSectionOpponentThree.setAttribute('class', 'creature_at_section')
      creatureInformationSectionOpponentThree.appendChild(creatureToughnessSectionOpponentThree)

      var creatureToughnessHeadingOpponentThree = document.createElement("h6")
      var creatureToughnessHeadingTextOpponentThree = document.createTextNode("Toughness: ")
      creatureToughnessHeadingOpponentThree.setAttribute('class', 'creature_info_heading')
      creatureToughnessHeadingOpponentThree.appendChild(creatureToughnessHeadingTextOpponentThree)
      creatureInformationSectionOpponentThree.appendChild(creatureToughnessHeadingOpponentThree)

      var creatureToughnessOpponentThree = document.createElement('input')
      creatureToughnessOpponentThree.setAttribute('class', 'creature_info')
      creatureToughnessOpponentThree.setAttribute('type', 'number')
      creatureInformationSectionOpponentThree.appendChild(creatureToughnessOpponentThree)

      img.addEventListener('dblclick', function handleClick(event){
        creatureSectionOpponentThree.remove();
      })

      img.addEventListener('click', function handleClick(event){
        event.target.classList.toggle('rotate');
        event.preventDefault()
      })
    })
}
