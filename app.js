// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre === '') {
        alert('Ingrese un nombre válido');
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert('Ese nombre ya fue ingresado');
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    limpiar();
}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

function limpiar() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay nombres para sortear');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let nombreSorteado = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El nombre del amigo secreto es: ${nombreSorteado}</li>`;

    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}
