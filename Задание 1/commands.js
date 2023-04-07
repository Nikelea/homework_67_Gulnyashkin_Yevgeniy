let button = document.getElementById('add-item-btn');
button.onclick = function() { 
div_main = document.getElementById('container');
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<h1>Уведомление</h1><p>с любым текстом</p>" + "<input id='close-btn' type='button' value='Close'>";
div_main.append(div);
setTimeout(() => div.remove(), 5000);
let button_close = document.getElementById('close-btn');
  button_close.onclick = function() {
    console.log('click');
   div.remove();
  };
   };