// add event listeners to each of the buttons and console log which was pressed each time one is clicked

const forwardbutton = document.querySelector("#goForwardUser")
const backbutton = document.querySelector("#goBackUser")

forwardbutton.addEventListener('click', e => {
  console.log("next!")
  currentuser += 1
  currentuser = currentuser % users.length
  console.log(currentuser)
  loaduser(currentuser)
})

backbutton.addEventListener('click', e => {
  console.log("back!")
  currentuser -= 1
  currentuser = currentuser % users.length
  loaduser(currentuser)
})

// select the card-container div using a query selector.

const cardContainer = document.querySelector(".card-container")
console.log(cardContainer)

// add at least 2 more people to your users array below
let currentuser = 0

let users = [
  {
    name: 'Ben Siegel',
    description: 'I love my wife, my baby, my bike, and coding my face off.',
    imageUrl: 'http://www.nationalcrimesyndicate.com/wp-content/uploads/2018/03/Siegel-UCLA-clusc_8_1_00326236a-wide-tight-1024x777.jpg'
  },
  {
    name: 'Jeff Olson',
    description: 'Walks fast, likes puzzles, good at handstands.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Kq2-GyzdL._SX425_.jpg'
  },
  {
    name: 'Marieke Thomas',
    description: 'Physics teacher, singer, and tea drinker',
    imageUrl: 'https://ingridbergman.com/wp-content/uploads/2017/02/cropped-cropped-11402716101528902855033213833616430308666299o1.jpg'
  }
]

console.log(users[1]["name"])

// This is a LOT, so you'll need to break it down. Here are some good options for where to start.
// Option 1: create a function that changes the user's name, image and description on the webpage. It should take the INDEX of the array as an arguement.
// Option 2: clear out the card-container div using the innerHTML property. Then fill it up with a the skeleton code from inside the card-container div, but with names and imageURL changed.
// Option 3: make the next and back buttons work, but for now only worry about console logging the new data.

// Once you have those bits working, start thinking about how to modify them.

function loaduser(i) {
  const name = users[i].name
  const description = users[i].description
  const imageUrl = users[i].imageUrl

  cardContainer.innerHTML = `
    <div class="card" style="width: 25rem;">
      <img class="card-img-top" src="${imageUrl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
      </div>
    </div>
  `
}



// Stretch A: Remove the existing buttons, and add a "random" button that randomizes which profile is shown.
// Stretch B: Programmatically add a list of names to the screen, and have each one so that when you click on it, that person's profile shows up.
// Stretch C: Instead of having buttons that control the flow, just programmatically add all the user cards to the screen. You'll want to delete the buttons, (and you'll want to add the "flex-wrap: wrap;" property to the main container in the css.)
