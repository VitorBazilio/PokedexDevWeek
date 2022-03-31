//função pra colocar o valor dos dados do pokemon, assim podendo alternar entre as informações
function montaDetalhes(pokemon) {
    var retorno
    if (pokemon == 'delphox') {
        retorno = `    <div class="cards-pokemon " >
        <div class="card-pokemon pokemon-fogo" >
            <div class="card-top">
                <div class="detalhe">
                    <h2 class="name">Delphox</h2>
                    <span>#655</span>
                </div>
                <span class="type">Fogo e Psíquico</span>
                <div class="card-image">
                    <img src="src/img/delphox.png" alt="Imagem do Delphox">
                </div>
            </div>
            <div class="card-info">
                <div class="status">
                    <h3>Status</h3>
                        <ul>
                           <li>HP:250</li>
                           <li>Ataque:250</li>
                           <li>Defesa:250</li>
                          <li>Ataque especial:350</li>
                          <li>Defesa especial:300</li>
                          <li>Velocidade:350</li>
                        </ul>
                </div> 
                <div class="abilities">
                    <h3>Ataques</h3>
                    <ul>
                        <li>Roda Flamejante</li>
                        <li>Devorador de Sonhos</li>
                    </ul>
                </div>  
            </div>
            </div>
    </div> 
<nav class="listButtons">
            <ul>
                <li onclick="mudapoke('mimikyu')" class="pokemon">
                    <img src="src/img/Mimikyu-cabeca.png" alt="cabeça do mimikyu">
                    <span>Mimikyu</span>
                </li>
                <li onclick="mudapoke('delphox')" class="pokemon">
                    <img src="src/img/delphox-cabeca.png" alt="cabeça do Delphox">
                    <span>Delphox</span></li>
                <li onclick="mudapoke('samurott')" class="pokemon">
                    <img src="src/img//samurott-cabeca.png" alt="cabeça do Samurott">
                    <span>Samurott</span></li>
                <li onclick="mudapoke('mawile')" class="pokemon">
                    <img src="src/img/mawile-cabeca.png" alt="cabeça do Mawile">
                    <span>Mawile</span></li>
                <li onclick="mudapoke('zoroark')" class="pokemon">
                    <img src="src/img/zoroark-cabeca.png" alt="cabeça do Zoroark">
                    <span>Zoroark</span></li>
                <li onclick="mudapoke('zoraora')" class="pokemon">
                    <img src="src/img/Zoraora-cabeca.png" alt="cabeça do Zoraora">
                    <span>Zoraora</span></li>
            </ul>
</nav> `
    }

    if (pokemon == 'mawile') {

        retorno = `   
        <div class="cards-pokemon" >
            <div class="card-pokemon pokemon-metal" >
                <div class="card-top">
                    <div class="detalhe">
                        <h2 class="name">Mawile</h2>
                        <span>#303</span>
                    </div>
                    <span class="type">Metal e Fada</span>
                    <div class="card-image">
                        <img src="src/img/mawile.png" alt="Imagem do Mawile">
                    </div>
                </div>
            <div class="card-info">
                <div class="status">
                    <h3>Status</h3>
                    <ul>
                        <li>HP:200</li>
                        <li>Ataque:250</li>
                        <li>Defesa:250</li>
                        <li>Ataque especial:200</li>
                        <li>Defesa especial:200</li>
                        <li>Velocidade:200</li>
                    </u>
                </div> 
                <div class="abilites">
                    <h3>Ataques</h3>
                    <ul>
                        <li>Garra de Metal</li>
                        <li>Vento de Fada</li>
                    </ul>
                </div>
            </div>
            </div>
    </div> 
<nav class="listButtons">
    <ul>
        <li onclick="mudapoke('mimikyu')" class="pokemon">
            <img src="src/img/Mimikyu-cabeca.png" alt="cabeça do mimikyu">
            <span>Mimikyu</span>
        </li>
        <li onclick="mudapoke('delphox')" class="pokemon">
            <img src="src/img/delphox-cabeca.png" alt="cabeça do Delphox">
            <span>Delphox</span></li>
        <li onclick="mudapoke('samurott')" class="pokemon">
            <img src="src/img//samurott-cabeca.png" alt="cabeça do Samurott">
            <span>Samurott</span></li>
        <li onclick="mudapoke('mawile')" class="pokemon">
            <img src="src/img/mawile-cabeca.png" alt="cabeça do Mawile">
            <span>Mawile</span></li>
        <li onclick="mudapoke('zoroark')" class="pokemon">
            <img src="src/img/zoroark-cabeca.png" alt="cabeça do Zoroark">
            <span>Zoroark</span></li>
        <li onclick="mudapoke('zoraora')" class="pokemon">
            <img src="src/img/Zoraora-cabeca.png" alt="cabeça do Zoraora">
            <span>Zoraora</span></li>
    </ul>
</nav> `
    }

    if (pokemon == 'mimikyu') {

        retorno = `   <div class="cards-pokemon" >
        <div class="card-pokemon pokemon-fada" >
            <div class="card-top">
                <div class="detalhe">
                    <h2 class="name">Mimikyu</h2>
                    <span>#778</span>
                </div>
                <span class="type">Fantasma e Fada</span>
                <div class="card-image">
                    <img src="src/img/Mimikyu.png" alt="Imagem do Mimikyu">
                </div>
            </div>
            <div class="card-info">
                <div class="status">
                    <h3>Status</h3>
                    <ul>
                        <li>HP:200</li>
                        <li>Ataque:300</li>
                        <li>Defesa:250</li>
                        <li>Ataque especial:400</li>
                        <li>Defesa especial:600</li>
                        <li>Velocidade:500</li>
                    </ul>
                </div> 
                <div class="abilites">
                    <h3>Ataques</h3>
                    <ul>
                        <li>Brilho Deslumbrante</li>
                        <li>Bola das Sombras</li>
                    </ul>
                </div>
            </div>
            </div>
    </div> 
<nav class="listButtons">
    <ul>
        <li onclick="mudapoke('mimikyu')" class="pokemon">
            <img src="src/img/Mimikyu-cabeca.png" alt="cabeça do mimikyu">
            <span>Mimikyu</span>
        </li>
        <li onclick="mudapoke('delphox')" class="pokemon">
            <img src="src/img/delphox-cabeca.png" alt="cabeça do Delphox">
            <span>Delphox</span></li>
        <li onclick="mudapoke('samurott')" class="pokemon">
            <img src="src/img//samurott-cabeca.png" alt="cabeça do Samurott">
            <span>Samurott</span></li>
        <li onclick="mudapoke('mawile')" class="pokemon">
            <img src="src/img/mawile-cabeca.png" alt="cabeça do Mawile">
            <span>Mawile</span></li>
        <li onclick="mudapoke('zoroark')" class="pokemon">
            <img src="src/img/zoroark-cabeca.png" alt="cabeça do Zoroark">
            <span>Zoroark</span></li>
        <li onclick="mudapoke('zoraora')" class="pokemon">
            <img src="src/img/Zoraora-cabeca.png" alt="cabeça do Zoraora">
            <span>Zoraora</span></li>
    </ul>
</nav>`
    }

    if (pokemon == 'samurott') {

        retorno = `  <div class="cards-pokemon" >
        <div class="card-pokemon pokemon-agua" >
            <div class="card-top">
                <div class="detalhe">
                    <h2 class="name">Samurott</h2>
                    <span>#503</span>
                </div>
                <span class="type">Agua e Escuridão</span>
                <div class="card-image">
                    <img src="src/img/samurott.png" alt="Imagem do Samurott">
                </div>
            </div>
            <div class="card-info">
                <div class="status">
                    <h3>Status</h3>
                    <ul>
                        <li>HP:400</li>
                        <li>Ataque:400</li>
                        <li>Defesa:350</li>
                        <li>Ataque especial:350</li>
                        <li>Defesa especial:350</li>
                        <li>Velocidade:350</li>
                    </ul>
                </div> 
                <div class="abilites">
                    <h3>Ataques</h3>
                    <ul>
                    <li>Hidro Bomba</li>
                    <li>Lâmina de Concha</li>
                    </ul>
                </div>
            </div>
            </div>
    </div> 
<nav class="listButtons">
    <ul>
        <li onclick="mudapoke('mimikyu')" class="pokemon">
            <img src="src/img/Mimikyu-cabeca.png" alt="cabeça do mimikyu">
            <span>Mimikyu</span>
        </li>
        <li onclick="mudapoke('delphox')" class="pokemon">
            <img src="src/img/delphox-cabeca.png" alt="cabeça do Delphox">
            <span>Delphox</span></li>
        <li onclick="mudapoke('samurott')" class="pokemon">
            <img src="src/img//samurott-cabeca.png" alt="cabeça do Samurott">
            <span>Samurott</span></li>
        <li onclick="mudapoke('mawile')" class="pokemon">
            <img src="src/img/mawile-cabeca.png" alt="cabeça do Mawile">
            <span>Mawile</span></li>
        <li onclick="mudapoke('zoroark')" class="pokemon">
            <img src="src/img/zoroark-cabeca.png" alt="cabeça do Zoroark">
            <span>Zoroark</span></li>
        <li onclick="mudapoke('zoraora')" class="pokemon">
            <img src="src/img/Zoraora-cabeca.png" alt="cabeça do Zoraora">
            <span>Zoraora</span></li>
    </ul>
</nav> ` 

    }

    if (pokemon == 'zoraora') {
        retorno = `  <div class="cards-pokemon" >
        <div class="card-pokemon pokemon-eletrico" >
            <div class="card-top">
                <div class="detalhe">
                    <h2 class="name">Zoraora</h2>
                    <span>#807</span>
                </div>
                <span class="type">Eletrico</span>
                <div class="card-image">
                    <img src="src/img/zoraora.png" alt="Imagem do Zoraora">
                </div>
            </div>
            <div class="card-info">
                <div class="status">
                    <h3>Status</h3>
                    <ul>
                        <li>HP:500</li>
                        <li>Ataque:400</li>
                        <li>Defesa:400</li>
                        <li>Ataque especial:300</li>
                        <li>Defesa especial:300</li>
                        <li>Velocidade:500</li>
                    </ul>
                </div> 
                <div class="abilites">
                    <h3>Ataques</h3>
                    <ul>
                        <li>Onda de Choque</li>
                        <li>Discarga Eletrica</li>
                    </ul>
                </div>
            </div>
            </div>
    </div> 
<nav class="listButtons">
    <ul>
            <li onclick="mudapoke('mimikyu')" class="pokemon">
                <img src="src/img/Mimikyu-cabeca.png" alt="cabeça do mimikyu">
                <span>Mimikyu</span>
            </li>
            <li onclick="mudapoke('delphox')" class="pokemon">
                <img src="src/img/delphox-cabeca.png" alt="cabeça do Delphox">
                <span>Delphox</span></li>
            <li onclick="mudapoke('samurott')" class="pokemon">
                <img src="src/img//samurott-cabeca.png" alt="cabeça do Samurott">
                <span>Samurott</span></li>
            <li onclick="mudapoke('mawile')" class="pokemon">
                <img src="src/img/mawile-cabeca.png" alt="cabeça do Mawile">
                <span>Mawile</span></li>
            <li onclick="mudapoke('zoroark')" class="pokemon">
                <img src="src/img/zoroark-cabeca.png" alt="cabeça do Zoroark">
                <span>Zoroark</span></li>
            <li onclick="mudapoke('zoraora')" class="pokemon">
                <img src="src/img/Zoraora-cabeca.png" alt="cabeça do Zoraora">
                <span>Zoraora</span></li>
    </ul>
</nav> `
    }

    if (pokemon == 'zoroark') {
        retorno = ` <div class="cards-pokemon" >
        <div class="card-pokemon pokemon-dark" >
            <div class="card-top">
                <div class="detalhe">
                    <h2 class="name">Zoroark</h2>
                    <span>#571</span>
                </div>
                <span class="type">Fantasma e Escuridão</span>
                <div class="card-image">
                    <img src="src/img/zoroark.png" alt="Imagem do Zoroark">
                </div>
            </div>
            <div class="card-info">
                <div class="status">
                    <h3>Status</h3>
                    <ul>
                        <li>HP:400</li>
                        <li>Ataque:700</li>
                        <li>Defesa:300</li>
                        <li>Ataque especial:600</li>
                        <li>Defesa especial:400</li>
                        <li>Velocidade:500</li>
                    </ul>
                </div> 
                <div class="abilites">
                    <h3>Ataques</h3>
                    <ul>
                        <li>Triturar</li>
                        <li>Pulso de Escuridão</li>
                    </ul>
                </div>
            </div>
            </div>
    </div> 
<nav class="listButtons">
    <ul>
        <li onclick="mudapoke('mimikyu')" class="pokemon">
            <img src="src/img/Mimikyu-cabeca.png" alt="cabeça do mimikyu">
            <span>Mimikyu</span>
        </li>
        <li onclick="mudapoke('delphox')" class="pokemon">
            <img src="src/img/delphox-cabeca.png" alt="cabeça do Delphox">
            <span>Delphox</span></li>
        <li onclick="mudapoke('samurott')" class="pokemon">
            <img src="src/img//samurott-cabeca.png" alt="cabeça do Samurott">
            <span>Samurott</span></li>
        <li onclick="mudapoke('mawile')" class="pokemon">
            <img src="src/img/mawile-cabeca.png" alt="cabeça do Mawile">
            <span>Mawile</span></li>
        <li onclick="mudapoke('zoroark')" class="pokemon">
            <img src="src/img/zoroark-cabeca.png" alt="cabeça do Zoroark">
            <span>Zoroark</span></li>
        <li onclick="mudapoke('zoraora')" class="pokemon">
            <img src="src/img/Zoraora-cabeca.png" alt="cabeça do Zoraora">
            <span>Zoraora</span></li>
    </ul>
</nav> `
    }
 

    return retorno.split('undefined').join('')
}
 