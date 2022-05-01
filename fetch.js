const URL = "https://rickandmortyapi.com/api/character"
const image = document.getElementById("image")
const name = document.getElementById("name")
const card = document.getElementById("card")
const inputSearch = document.getElementById("inputSearch")

window.addEventListener("load", getCharacters)
inputSearch.addEventListener("keyup", cleanPage)


function getCharacters(){

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            createCards(element.name, element.image, element.name)
        });
    });
}

function createCards(name, image, alt) {

    while (true) {
        const container = document.createElement("div")
        container.classList.add("container")
        const nameCard = document.createElement("h2")
        const imgCard = document.createElement("img")
        nameCard.textContent = name
        imgCard.setAttribute("src", image)
        imgCard.setAttribute("atl", alt)
        container.appendChild(nameCard)
        container.appendChild(imgCard)
        card.appendChild(container)
        break
    }
    
}

function cleanPage (){

    while (card.lastChild) {
        card.removeChild(card.lastChild)
    }
    filterCharacter(inputSearch.value)
}
const URLSearchCharacter = "https://rickandmortyapi.com/api/character/?name="

function filterCharacter(searching) {

    

    fetch(URLSearchCharacter+searching)
    .then (response => response.json())
    .then(data => {

        data.results.forEach(element=> {
            createCards(element.name, element.image, element.name)
            console.log(element.name);
        })
    }) 
}

console.log(createCards());