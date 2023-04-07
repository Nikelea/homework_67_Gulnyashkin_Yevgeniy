div_main = document.getElementById('container');

const BASE_URL = 'https://rickandmortyapi.com/api'

console.log('test');
function loadMainPage(someURL) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", someURL);
    xhr.send();

    xhr.onload = function () {
        let data = JSON.parse(this.response);
        for (char of data.results) {
            let div = document.createElement('div');
            div.className = "card";
            div.innerHTML = '<img src="' + char.image + '" class="card-img-top" alt="...">' +
                '<div class="card-body">' +
                '<h5 class="card-title">ФИО: ' + char.name + '</h5>' +
                '<p class="card-text"> Происхождение: ' + char.origin.name + '</p>' +
                '<a href="char.html?id=' + char.id + '" class="btn btn-primary">Detail</a></div>';
            div_main.append(div);
        }

        if (data.info.next !== null) {
            let button_next = document.createElement('button')
            button_next.className = 'btn btn-primary next'
            button_next.innerHTML = 'Next'
            div_main.append(button_next)
            button_next.addEventListener('click', function () { div_main.innerHTML = ''; loadMainPage(data.info.next) });
        }
        if (data.info.prev !== null) {
            let button_prev = document.createElement('button')
            button_prev.className = 'btn btn-primary prev'
            button_prev.innerHTML = 'Prev'
            div_main.append(button_prev)
            button_prev.addEventListener('click', function () { div_main.innerHTML = ''; loadMainPage(data.info.prev) });
        }
    }
};

loadMainPage("https://rickandmortyapi.com/api/character")