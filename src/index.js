console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
//Variables
  let dogImageContainer = document.getElementById('dog-image-container')
  let dogBreedUL = document.getElementById('dog-breeds')
  let dropdownButton = document.getElementById('breed-dropdown')
  let dogArray = []

  // console.log (listOfDogBreeds.value)

//Challenge 1
  makeFetch("https://dog.ceo/api/breeds/image/random/4")
  .then (function(data){
    let arrayOfDogsURLs = data.message
    arrayOfDogsURLs.forEach(url => {
      dogImageContainer.innerHTML +=makeImageTagString(url)
    })
  })

  //Challenge 2
  makeFetch("https://dog.ceo/api/breeds/list/all")
  .then(function(data){
    let dogBreeds = Object.keys(data.message)
    dogBreeds.forEach(breed=>{
      let li = document.createElement('li')
      li.innerHTML= `${breed}`
      li.className = 'li-breed'
      dogBreedUL.append(li)
    })  
  })
  
  //Challenge 3
  dogBreedUL.addEventListener("click", function(event){
    if (event.target.className === 'li-breed'){
      event.target.style.color="cyan"
    }
  })
  
  //Challenge 4
  dropdownButton.addEventListener('change', (event) => {
    // console.log(event.target.value)
    makeFetch("https://dog.ceo/api/breeds/list/all")
    .then(res => {
      let dogBreeds = Object.keys(res.message)
      let dogFilter = dogBreeds.filter((dog)=> {
        return dog.startsWith(event.target.value)
      })
      console.log(dogFilter)
      dogBreedUL.innerHTML=""
      dogFilter.forEach((dog)=> {
        return dogBreedUL.innerHTML += `<li class="li-breed">${dog}</li>`
      })  
    })
  })
  //DOMCONTENTLOADED
})

//Functions 
function makeImageTagString(url){
  return `<img src="${url}"/>`
}

function makeFetch(url){
  return fetch(`${url}`)
  .then(res => res.json())
}
