var cardWrapper = document.getElementById('wrapper')

var games = [
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/001.png",
            name:"Name: Bulbasaur",
            types:"Type: Grass, Poison"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/002.png",
            name:"Name: Ivysaur",
            types:"Type: Grass, Poison"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/003.png",
            name:"Name: Venusaur",
            types:"Type: Grass, Poison"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/004.png",
            name:"Name: Charmander",
            types:"Type: Fire"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/005.png",
            name:"Name: Charmeleon",
            types:"Type: Fire"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/006.png",
            name:"Name: Charizard",
            types:"Type: Fire, Flying"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/007.png",
            name:"Name: Squirtle",
            types:"Type: Water"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/008.png",
            name:"Name: Wartortle",
            types:"Type: Water"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/009.png",
            name:"Name: Blastoise",
            types:"Type: Water"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/010.png",
            name:"Name: Caterpie",
            types:"Type: Bug"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/011.png",
            name:"Name: Metapod",
            types:"Type: Bug"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/012.png",
            name:"Name: Butterfree",
            types:"Type: Bug, Flying"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/013.png",
            name:"Name: Weedle",
            types:"Type: Bug, Poison"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/014.png",
            name:"Name: Kakuna",
            types:"Type: Bug, Poison"

        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/015.png",
            name:"Name: Beedrill",
            types:"Type: Bug, Poison"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/016.png",
            name:"Name: Pidgey",
            types:"Type: Normal,Flying"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/017.png",
            name:"Name: Pidgeotto",
            types:"Type: Normal, Flying"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/018.png",
            name:"Name: Pidgeot",
            types:"Type: Normal, Flying"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/019.png",
            name:"Name: Rattata",
            types:"Type: Normal"
        }
    },
    {
        Pokonames:{
            smallThumbnail:"http://www.serebii.net/pokemongo/pokemon/020.png",
            name:"Name: Raticate",
            types:"Type: Normal"
        }
    },

    
]

var  COUNT = document.getElementById('liked')
var memory = new Array()


for (var nameGame of games) {
    var BOX = document.createElement('div')
    BOX.classList.add ('card')
    var TITTLE = document.createElement('h3')
    TITTLE.classList.add('card__title')
    TITTLE.textContent = nameGame.Pokonames.name

    var CATEGORY = document.createElement('p')
    CATEGORY.classList.add('card__text')
    CATEGORY.textContent = nameGame.Pokonames.types

    var IMG = document.createElement('img')
    IMG.classList.add('card__img')
    IMG.src = nameGame.Pokonames.smallThumbnail

    var BUTTON = document.createElement('button')
    BUTTON.setAttribute('id','btn')
    BUTTON.classList.add('card__button')
    BUTTON.textContent = "Like"

    BOX.appendChild(IMG)
    BOX.appendChild(TITTLE)
    BOX.appendChild(CATEGORY)
    BOX.appendChild(BUTTON)

    cardWrapper.appendChild(BOX)
    
}

cardWrapper.addEventListener('click', function (event) {
    if (event.originalTarget.textContent == 'Dislike') {
        memory.pop();
        event.originalTarget.textContent = "Like"
    } else {
        memory.push(event.originalTarget.parentElement.dataset['name'])
        event.originalTarget.textContent = 'Dislike'
    }
    
    COUNT.textContent = memory.length
    console.log(memory);
})

