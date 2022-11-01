/*const button = document.querySelector(".btn");
const image = document.querySelector("img");
const url = "https://api.punkapi.com/v2/beers"

async function fetchHalder() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.file;
    } catch (error) {
        console.log(error);
    }
}
button.addEventListener("click", () => {
    let isLoaded = image.complete;

    if (isLoaded) {
        fetchHalder;
    }
})
export class Beer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let user = new Beer('Smb', 10);
console.log(user);
*/
var status = function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
  }
  var json = function (response) {
    return response.json()
  }
  
  fetch('http://www.mocky.io/v2/5944e07213000038025b6f30', {
    method: 'post',
    body: 'test=1'
  })
    .then(status)
    .then(json)
    .then(function (data) {
      console.log('data', data)
    })
    .catch(function (error) {
      console.log('error', error)
    })