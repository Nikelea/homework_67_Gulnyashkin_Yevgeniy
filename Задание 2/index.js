const div_main = document.getElementById('container');

const createElement = (data) => {
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
}

const GetData = async (someUrl) => {
    const responceRES = await fetch(someUrl)
    const responce = await responceRES.json()
    createElement(responce);
    if (responce.info.next !== null) {
                    let button_next = document.createElement('button')
                    button_next.className = 'btn btn-primary next'
                    button_next.innerHTML = 'Next'
                    div_main.append(button_next)
                    button_next.addEventListener('click', function () { div_main.innerHTML = ''; GetData(responce.info.next) });
                }
                if (responce.info.prev !== null) {
                    let button_prev = document.createElement('button')
                    button_prev.className = 'btn btn-primary prev'
                    button_prev.innerHTML = 'Prev'
                    div_main.append(button_prev)
                    button_prev.addEventListener('click', function () { div_main.innerHTML = ''; GetData(responce.info.prev) });
                }

}


GetData("https://rickandmortyapi.com/api/character")