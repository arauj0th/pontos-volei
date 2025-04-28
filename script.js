let tempo = 0; // Tempo em segundos
let intervalo; // Variável para armazenar o intervalo
const tempoDisplay = document.getElementById('tempo');

function atualizarCronometro() {
    tempo++;
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    tempoDisplay.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

document.getElementById('iniciar').addEventListener('click', () => {
    if (!intervalo) { // Inicia o cronômetro apenas se não estiver em execução
        intervalo = setInterval(atualizarCronometro, 1000);
    }
});

document.getElementById('parar').addEventListener('click', () => {
    clearInterval(intervalo); // Para o cronômetro
    intervalo = null; // Reseta a variável do intervalo
});

document.getElementById('reiniciar').addEventListener('click', () => {
    clearInterval(intervalo); // Para o cronômetro
    intervalo = null; // Reseta a variável do intervalo
    tempo = 0; // Reseta o tempo
    tempoDisplay.textContent = "00:00"; // Reseta a exibição do cronômetro
});

let tempo1 = 0; // Tempo em segundos
let intervalo1; // Variável para armazenar o intervalo
const tempoDisplay1 = document.getElementById('tempo');
const botaoIniciar = document.getElementById('iniciar');
const botaoParar = document.getElementById('parar');
const botaoReiniciar = document.getElementById('reiniciar');

function atualizarCronometro() {
    tempo++;
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    tempoDisplay.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

botaoIniciar.addEventListener('click', () => {
    if (!intervalo) { // Inicia o cronômetro apenas se não estiver em execução
        intervalo = setInterval(atualizarCronometro, 1000);
        botaoIniciar.disabled = true; // Desabilita o botão Iniciar
    }
});

botaoParar.addEventListener('click', () => {
    clearInterval(intervalo); // Para o cronômetro
    intervalo = null; // Reseta a variável do intervalo
    botaoIniciar.disabled = false; // Habilita o botão Iniciar
});

botaoReiniciar.addEventListener('click', () => {
    clearInterval(intervalo); // Para o cronômetro
    intervalo = null; // Reseta a variável do intervalo
    tempo = 0; // Reseta o tempo
    tempoDisplay.textContent = "00:00"; // Reseta a exibição do cronômetro
    botaoIniciar.disabled = false; // Habilita o botão Iniciar
});
let pontosA = 0;
let pontosB = 0;
let vitoriasA = 0;
let vitoriasB = 0;

// Atualiza o placar na tela
function atualizarPlacar() {
    document.getElementById('pontosA').textContent = pontosA;
    document.getElementById('pontosB').textContent = pontosB;
    atualizarEstatisticas();
}

// Atualiza as estatísticas
function atualizarEstatisticas() {
    const totalVitorias = vitoriasA + vitoriasB;

    let porcentagemA = 0;
    let porcentagemB = 0;

    if (totalVitorias > 0) {
        porcentagemA = ((vitoriasA / totalVitorias) * 100).toFixed(1);
        porcentagemB = ((vitoriasB / totalVitorias) * 100).toFixed(1);
    }

    document.getElementById('vitoriaA').textContent = `Vitórias Time A: ${vitoriasA}`;
    document.getElementById('vitoriaB').textContent = `Vitórias Time B: ${vitoriasB}`;
    document.getElementById('porcentagemA').textContent = `Porcentagem de Vitórias Time A: ${porcentagemA}%`;
    document.getElementById('porcentagemB').textContent = `Porcentagem de Vitórias Time B: ${porcentagemB}%`;
}

// Quando clicar no botão SET 1 (Time A)
document.getElementById('incrementarA').addEventListener('click', function() {
    pontosA++;
    if (pontosA >= 25) { // Considerando vitória a partir de 25 pontos
        vitoriasA++;
        pontosA = 0;
        pontosB = 0;
    }
    atualizarPlacar();
});

// Quando clicar no botão SET 2 (Time B)
document.getElementById('incrementarB').addEventListener('click', function() {
    pontosB++;
    if (pontosB >= 25) {
        vitoriasB++;
        pontosA = 0;
        pontosB = 0;
    }
    atualizarPlacar();
});

// Cronômetro
let intervalo2;
let segundos = 0;
let minutos = 0;

document.getElementById('iniciar').addEventListener('click', function() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        segundos++;
        if (segundos >= 60) {
            segundos = 0;
            minutos++;
        }
        document.getElementById('tempo').textContent = 
            `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }, 1000);
});

document.getElementById('parar').addEventListener('click', function() {
    clearInterval(intervalo);
});

document.getElementById('reiniciar').addEventListener('click', function() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    document.getElementById('tempo').textContent = '00:00';
});

