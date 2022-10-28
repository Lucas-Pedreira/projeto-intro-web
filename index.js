const jordan = "Michael Jordan"
const draftJordan = 3
const timesJordan = "Chicago Bulls, Washington Wizards"
const temTituloJordan = true
const mediaJordan = ["30.1 PPJ, 5.3 APJ, 6.2 RPJ"]
const atividadeJordan = "Se aposentou em 2003"

const lebron = "LeBron James"
const draftLebron = 1
const timesLebron = "Cleveland Cavaliers, Miami Heat, Los Angeles Lakers"
const temTituloLebron = true
const mediaLebron = ["27.1 PPJ, 7.4 APJ, 7.5 RPJ"]
const atividadeLebron = "Jogando pelo Lakers"

const kareem = "Kareem Abdul-Jabbar"
const draftKareem = 1
const timesKareem = "Milwaukee Bucks, Los Angeles Lakers "
const temTituloKareem = true
const mediaKareem = ["24.6 PPJ, 3.6 APJ, 11.2 RPJ"]
const atividadeKareem = "Se aposentou em 1989"

const magic = "Magic Johnson"
const draftMagic = 1
const timesMagic = "Los Angeles Lakers"
const temTituloMagic = true
const mediaMagic = ["19.5 PPJ, 11.2 APJ, 7.2 RPJ"]
const atividadeMagic = "Se aposentou em 1996"

const wilt = "Wilt Chamberlain"
const draftWilt = 3
const timesWilt = "Philadelphia Warriors, San Francisco Warriors, Philadelphia 76ers, Los Angeles Lakers"
const temTituloWilt = true
const mediaWilt = ["30.1 PPJ, 4.4 APJ, 22.9 RPJ"]
const atividadeWilt = "Se aposentou em 1973"

const media = (draftJordan + draftLebron + draftKareem + draftMagic + draftWilt) / 5
console.log(media)

const temTitulos = temTituloJordan && temTituloLebron && temTituloKareem && temTituloMagic && temTituloWilt;
console.log(temTitulos);

// console.log(`
// ${jordan.toLocaleUpperCase()}
// Times que jogou: ${timesJordan}
// Posição que foi draftado: ${draftJordan}
// Medias por jogo: ${mediaJordan}
// Ainda joga ou ja parou: ${atividadeJordan}
// `)

// console.log(`
// ${lebron.toLocaleUpperCase()}
// Times que jogou: ${timesLebron}
// Posição que foi draftado: ${draftLebron}
// Medias por jogo: ${mediaLebron}
// Ainda joga ou ja parou: ${atividadeLebron}
// `)

// console.log(`
// ${kareem.toLocaleUpperCase()}
// Times que jogou: ${timesKareem}
// Posição que foi draftado: ${draftKareem}
// Medias por jogo: ${mediaKareem}
// Ainda joga ou ja parou: ${atividadeKareem}
// `)

// console.log(`
// ${magic.toLocaleUpperCase()}
// Times que jogou: ${timesMagic}
// Posição que foi draftado: ${draftMagic}
// Medias por jogo: ${mediaMagic}
// Ainda joga ou ja parou: ${atividadeMagic}
// `)

// console.log(`
// ${wilt.toLocaleUpperCase()}
// Times que jogou: ${timesWilt}
// Posição que foi draftado: ${draftWilt}
// Medias por jogo: ${mediaWilt}
// Ainda joga ou ja parou: ${atividadeWilt}
// `)


objJordan = {
    nome: "Michael Jordan",
    draft: "3º",
    times: "Chicago Bulls, Washington Wizards",
    temTitulo: true,
    media: ["30.1 PPJ, 5.3 APJ, 6.2 RPJ"],
    emAtividade: "Se aposentou em 2003",
    img: "jordan.jpg",
    artigo: "https://pt.wikipedia.org/wiki/Michael_Jordan"
}

objLebron = {
    nome: "LeBron James",
    draft: "1º",
    times: "Cleveland Cavaliers, Miami Heat, Los Angeles Lakers",
    temTitulo: true,
    media: ["27.1 PPJ, 7.4 APJ, 7.5 RPJ"],
    emAtividade: "Jogando pelo Lakers",
    img: "lebron.jpg",
    artigo: "https://pt.wikipedia.org/wiki/LeBron_James"
}

objKareem = {
    nome: "Kareem Abdul-Jabbar",
    draft: "1º",
    times: "Milwaukee Bucks, Los Angeles Lakers",
    temTitulo: true,
    media: ["24.6 PPJ, 3.6 APJ, 11.2 RPJ"],
    emAtividade: "Se aposentou em 1989",
    img: "kareem2.jpg",
    artigo: "https://pt.wikipedia.org/wiki/Kareem_Abdul-Jabbar"
}

objMagic = {
    nome: "Magic Johnson",
    draft: "1º",
    times: "Los Angeles Lakers",
    temTitulo: true,
    media: ["19.5 PPJ, 11.2 APJ, 7.2 RPJ"],
    emAtividade: "Se aposentou em 1996",
    img: "magic.jpg",
    artigo: "https://pt.wikipedia.org/wiki/Magic_Johnson"
}

objWilt = {
    nome: "Wilt Chamberlain",
    draft: "3º",
    times: "Philadelphia Warriors, San Francisco Warriors, Philadelphia 76ers, Los Angeles Lakers",
    temTitulo: true,
    media: ["30.1 PPJ, 4.4 APJ, 22.9 RPJ"],
    emAtividade: "Se aposentou em 1973",
    img: "wilt2.webp",
    artigo: "https://pt.wikipedia.org/wiki/Wilt_Chamberlain"
}

const arrayObj = []
//arrayObj.push(objJordan, objLebron, objKareem, objMagic, objWilt);

if (objJordan.temTitulo === true) {
    arrayObj.push(objJordan)
} else {
    alert("Michael Jordan não tem titulo.")
}

if (objLebron.temTitulo === true) {
    arrayObj.push(objLebron)
} else {
    alert("LeBron James não tem titulo.")
}

if (objKareem.temTitulo === true) {
    arrayObj.push(objKareem)
} else {
    alert("Kareem Abdul-Jabbar não tem titulo.")
}

if (objMagic.temTitulo === true) {
    arrayObj.push(objMagic)
} else {
    alert("Magic Johnson não tem titulo.")
}

if (objWilt.temTitulo === true) {
    arrayObj.push(objWilt)
} else {
    alert("Wilt Chamberlain não tem titulo.")
}

//console.log(arrayObj);


for (let jogador of arrayObj) {
    console.log(`
    ${jogador.nome.toUpperCase()}
    Posição que foi draftado: ${jogador.draft}
    Times em que jogou: ${jogador.times}
    Ganhou titulo: ${jogador.temTitulo}
    Medias por jogo: ${jogador.media}
    Em atividade: ${jogador.emAtividade}`);
}

//let buscaPrompt = (prompt("Digite o nome de um jogador histórico da NBA:"))
// const busca = (arrayObj, string) => {
//   const resultadoBusca = arrayObj.filter((jogador) => {
//     return jogador.nome === string
//   })

//   if (resultadoBusca.length > 0){
//     console.log(resultadoBusca)
//   } else {
//     alert("Jogador não encontrado.")
//   }
// }

// busca(arrayObj, "LeBron James")
//busca(arrayObj, buscaPrompt)


const lista = document.querySelector(".jogadores")
arrayObj.filter(jogador => {
    function listaJogadores() {
        lista.innerHTML += `<article class="jogador" id="jogador">
            <ul>
            <img class ="fotos"src="./imagens/${jogador.img}" alt="foto do jogador">
            <li><a href="${jogador.artigo}">${jogador.nome}</a></li>
            <li>Posição do draft: ${jogador.draft}</li>
            <li>Times em que jogou: ${jogador.times}</li>
            <li>Titulos: ${jogador.temTitulo}</li>
            <li>Médias por jogo: ${jogador.media}</li>
            <li>Em atividade: ${jogador.emAtividade}</li>
            </ul>
            </article> 
            `
    }
    listaJogadores()
})

function buscaNba(event) {
    event.preventDefault()
    const novaLista = document.getElementById("listaId")
    const nomeJogadores = document.getElementById("buscaInput").value
    if (nomeJogadores === "") {
        alert("Jogador não encontrado.")
        document.getElementById("buscaInput").value = ""
        return;
    }
    for (let i = 0; i < arrayObj.length; i++) {
        if (nomeJogadores === arrayObj[i].nome) {
            return (novaLista.innerHTML = `<section class="jogador" id="jogador>
            <ul>
            <img class ="fotos"src="./imagens/${arrayObj[i].img}" alt="foto do jogador">
            <li><a href="${arrayObj[i].artigo}">${arrayObj[i].nome}</a></li>
            <li>Posição do draft: ${arrayObj[i].draft}</li>
            <li>Times em que jogou: ${arrayObj[i].times}</li>
            <li>Titulos: ${arrayObj[i].temTitulo}</li>
            <li>Médias por jogo: ${arrayObj[i].media}</li>
            <li>Em atividade: ${arrayObj[i].emAtividade}</li>
            </ul>
            </section> 
            `)
        }
    }
    alert("Errou! Esse jogador não está na lista. Tente de novo.")
    document.getElementById("buscaInput").value = ""
    return;
}
