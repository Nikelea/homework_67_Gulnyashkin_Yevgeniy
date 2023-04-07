div_main = document.getElementById('container');

const BASE_URL = 'https://rickandmortyapi.com/api'
let urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
let id = urlParams.get('id');
let xhr = new XMLHttpRequest();
xhr.open("GET", BASE_URL + "/character/" + id);
xhr.send();

xhr.onload = function () {
    let data = JSON.parse(this.response);
    let div = document.createElement('div');
    div.className = "card";
    div.id = 'card'
    div.innerHTML = '<img src="' + data.image + '" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h2 class="card-title">ФИО: ' + data.name + '</h2>' +
        '<p class="card-text"> Статус: ' + data.status + '</p>' +
        '<p class="card-text"> Вид: ' + data.species + '</p>' +
        '<p class="card-text"> Тип: ' + data.type + '</p>' +
        '<p class="card-text"> Пол: ' + data.gender + '</p>' +
        '<p class="card-text"> Происхождение: ' + data.origin.name + '</p>';
        let div_episode = document.createElement('div');
        div_episode.innerHTML = `<h3>Участвовал в ${data.episode.length}  эпизодах:</h3>`
        for ( episode of data.episode) {
            console.log(episode);
            let ep_number = episode.split('/').at(-1)
            let episodeText = document.createElement('p');
            episodeText.innerHTML = `<a href=${episode}" class="btn btn-primary">Серия №${ep_number}</a></div>`;;
            div_episode.append(episodeText);}
            div.append(div_episode);
    div_main.append(div);
}






