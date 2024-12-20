let url = "https://official-joke-api.appspot.com/random_joke";

let btn = document.getElementById("btn");
let joke = document.getElementById("joke");



btn.addEventListener ('click', async function ram() {

    let response = await fetch(url);
       let data =   await response.json();
       console.log(data);
    joke.innerText = data.punchline;
 }); 