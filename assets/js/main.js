(function(){

    let qtd = 3;
    let more = 0;

    let name = document.querySelector('.inputName');

    name.value = '';

    let container = document.querySelector('.conteudo-principal');
    const btnSearch = document.querySelector('.pesquisa');

    function updateQtdLoadPokemons(){
        return more += 3;        
    }   
    function loadSearchedPokemon(name){
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        fetch(url,{method:'GET'})
        .then(response => response.json())
        .then(pokemon => {
            renderCardPokemon(pokemon)
        })
        .catch(e =>{
            alert('Erro ao encontrar pokemon, verifique o nome por favor');
        });   
    }
    async function loadPokemons(){
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${qtd}&offset=${more}`;
        try{
            const response = await fetch(url,{method:'GET'});
            const pokemons = await response.json();
            pokemons.results.forEach(pokemon => {
                loadDataPokemon(pokemon.url)        
            });
        }catch(e){
            alert('Erro ao carregar pokemons')
        }
    }
    async function loadDataPokemon(url){
        try{
            const response = await fetch(url,{method:'GET'});
            const pokemonData = await response.json();
            renderCardPokemon(pokemonData);
        }catch(e){
            alert('Erro ao listar pokemons')
        }
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

    btnSearch.addEventListener('click',() =>{
        container.innerHTML = '';
        loadSearchedPokemon(name.value.toLowerCase());   
    });

   loadPokemons();
   
})();