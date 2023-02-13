// formata data
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC"
    })
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

// atualiza o inner html fazendo com que os segundos
// sejam  atualizados
function iniciarRelogio(){
    clearInterval(timer);
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove("pausado");
    iniciarRelogio();
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add("pausado");
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.classList.remove("pausado");
    relogio.innerHTML = `00:00:00`;
});