(function(){

    let qtd = 3;
    let more = 0;

    function updateQtdLoadPokemons(){
        return more += 3;        
    }

    async function loadPokemons(){
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${qtd}&offset=${more}`;
        const response = await fetch(url,{method:'GET'});
        const pokemons = await response.json();
        pokemons.results.forEach(pokemon => {
            loadDataPokemon(pokemon.url)        
        });
    }
    async function loadDataPokemon(url){
        const response = await fetch(url,{method:'GET'});
        const pokemonData = await response.json();
        renderCardPokemon(pokemonData);
    }
    function createTypes(types){
        let div = createDiv();
        div.classList.add('pokemon-card-type');
        types.forEach(type =>{
            let p = createP();
            p.innerText = type.type.name;
            div.appendChild(p);
        });
        return div;
    }
    function createPokeImage(id){
        const url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`   
        
        const img = document.createElement('img');
        img.setAttribute('src',url);

        return img;
    }
    function renderCardPokemon(pokemonData){

        const container = document.querySelector('.conteudo-principal');

        const div = document.createElement('div');
        div.classList.add('pokemon-card');

        const h1 = createH1();
        h1.innerText = pokemonData.forms[0].name;

        const h3 = createH3();
        h3.innerText = `Nº ${pokemonData.id}`;

        div.appendChild(h1);
        div.appendChild(createPokeImage(pokemonData.id));
        div.appendChild(h3);
        div.appendChild(createTypes(pokemonData.types));

        container.appendChild(div);
    }

    const btn = document.querySelector('.container-button');
    btn.addEventListener('click',() =>{
        updateQtdLoadPokemons();
        loadPokemons();
    });

   loadPokemons();
   
})();