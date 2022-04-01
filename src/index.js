console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
//Variables
  let dogImageContainer = document.getElementById('dog-image-container')
  let dogBreedUL = document.getElementById('dog-breeds')

  // console.log (listOfDogBreeds.value)

//Challenge 1
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then (function(data){
    let arrayOfDogsURLs = data.message
    arrayOfDogsURLs.forEach(url => {
      dogImageContainer.innerHTML +=makeImageTagString(url)
    })
  })

  //Challenge 2
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then (function(data){
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
  console.log(dogBreedUL)
  



  //DOMCONTENTLOADED
})

//Functions 
function makeImageTagString(url){
  return `<img src="${url}"/>`
}