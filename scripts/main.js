//propriété :

// localStorage.setItem("maPetiteCle", "Hello world") //setItem stocker des chhoses, on doit créer une clée sous forme de string. là on a mis une valeur dans notre clé
// //à la place de "hello world" je ppeux metttre une variable qui contient un string

// localStorage.getItem("maPetiteCle") //on récupère les info avec getItem 

// console.log(localStorage.getItem("maPetiteCle"));//hello world apparaitt dans la console même si je supprime le setItem plusq hautt. il a enregistré l'info. mpême si je ferme le navigateur et le reouvre.

// localStorage.removeItem("maPetiteCle") //suprime la clé précisément
// localStorage.clear//supprime ttes les cles du nav


// briefing

// 1. Quand pour la première fois, l'utilisateur arrive, il est confronté à un formulaire dans lequel il va indiquer son surnom et une URL en absolu et un bouton envoyer sera présent

// 2. Quand il va appuyer sur envoyer, le panneau du formulaire s'en va et laisse sa place à une sorte de panneau qui indique qu'il est loggé avec la référence à son surnom qui est indiquée ainsi que l'URL en absolu qui est utilisée pour afficher son avatar

// 3. Si l'utilisateur clique sur une petite icône dans le panneau où son nom et son avatar sont présents, il a la possibilité d'aller éditer son surnom ainsi que l'URL de son avatar. Dans ce cas là, le panneau avec le formulaire inital redevient visible et l'autre disparait

// 4. Si l'utilsateur a déjà rentré son surnom et son avatar, et qu'il revient sur cette page ultérieurement, alors, on affiche par défaut le panneau avec son avatar et son surnom plutôt que d'afficher le formulaire pour rentrer ces 2 informations



let nameGuest = document.querySelector('.name')
let url = document.querySelector('.url')
let btn = document.querySelector('button')
let avatarBox = document.querySelector('.avatarBox')
let settings = document.querySelector('.settings')
let welcome = document.querySelector('.welcome')

//ajouter une condition que si local storage a été enregistré  alors s'affiche direct au chargement de la page

// Au chargement de la page

  // Vérifiez si les données existent dans le localStorage
  if(localStorage.getItem('name of guest') != "" && localStorage.getItem('avatar of guest')) {
      nameGuest.value = localStorage.getItem('name of guest')
      url.value = localStorage.getItem('avatar of guest')
      
      // afficher directement le box avec avatar au chargement de la page

      btn.parentElement.classList.add('active')
      avatarBox.classList.remove('active')

      // Afficher les données dans HTML
      avatarBox.innerHTML = 
      `
      <span class="settings">⚙️</span>
      <div class="avatarImg" style="background:url(${url.value}) center/cover"></div>
      <div class="welcome">Hello ${nameGuest.value}</div>`
      
  }

  // events 

  // click sur btn envoyer pour s'enregistrer 
btn.addEventListener("click", function(){
  // localStorage création de la clé et ce qu'elle va stocker
localStorage.setItem('name of guest', `${nameGuest.value}`)
localStorage.setItem('avatar of guest', `${url.value}`)

  // classe active au click qui fait disparaitre le form et apparaitre l'avatarBox
btn.parentElement.classList.add('active')
avatarBox.classList.remove('active')

// envoie des infos 

avatarBox.innerHTML = 
`
<span class="settings">⚙️</span>
<div class="avatarImg" style="background:url(${url.value}) center/cover"></div>
<div class="welcome">Hello ${nameGuest.value}</div>`

// je récupère les infos que j'ai stocké dans la clé
localStorage.getItem('name of guest')
localStorage.getItem('avatar of guest')

// ce log fait apparaitre les infos stockées 
console.log(localStorage.getItem('name of guest'));
console.log(localStorage.getItem('avatar of guest'));
})

// ceci n'a pas fonctionné car j'injecte les variables tout au dessus et j'injecte l'élément html plus bas

// settings.addEventListener('click', function() {
//   console.log(settings);
// })

// je suis donc obligée de passer par ceci (aide via chatgpt) 

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('settings')) {
    avatarBox.classList.add('active')
    btn.parentElement.classList.remove('active')

  } 
})
