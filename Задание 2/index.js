div_main = document.getElementById('container');

const BASE_URL = 'https://rickandmortyapi.com/api'
var number = 1

let xhr = new XMLHttpRequest();
xhr.open("GET", BASE_URL + "/character?page=" + number);
xhr.send();

xhr.onload = function(){  
  let data = JSON.parse(this.response);
  for ( char of data.results) {
    let div = document.createElement('div');
    div.className = "card";
    div.innerHTML = '<img src="'+ char.image +'" class="card-img-top" alt="...">' +
        '<div class="card-body">' + 
          '<h5 class="card-title">ФИО: ' + char.name + '</h5>' + 
          '<p class="card-text"> Происхождение: ' + char.origin.name + '</p>' +
          '<a href="char.html?id=' + char.id + '" class="btn btn-primary">Detail</a></div>';
    div_main.append(div);
  }


  let button_next = document.createElement('a')
  button_next.href = '#'
  button_next.innerHTML = 'Next'
  div_main.append(button_next)
  button_next.addEventListener('click', function() { number = number + 1; console.log(number);   window.location.reload(); });
  
  // let button_previos = document.createElement('a')
  // button_previos.href = '#'
  // button_previos.innerHTML = 'Prev'
  // div_main.append(button_previos)
  // number -= 1

console.log(number);

   // вывод данных в разметке и пр. полезные действия
};