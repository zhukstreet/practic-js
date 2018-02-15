//Функция при нажатии ""записать""
function write(){
    var newLi = document.createElement('li');
    newLi.innerHTML = document.getElementById("inp").value;
    var inputValue = document.getElementById("inp").value;
    var iv = document.createTextNode(inputValue);
    if (inputValue === '') {
        alert("Введите Дело !");
      } else {
        document.getElementById("quest").appendChild(newLi);
      }
    document.getElementById("inp").value = "";
    document.getElementById('del').style.display='block';
    newLi.className = 'draggable';
    newLi.setAttribute('draggable', true);
    newLi.setAttribute('ondragstart', 'drag(event)');
    newLi.setAttribute('id', 'li' + document.getElementById("quest").childElementCount);

    //Создание крестика для удаления одного дела 
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.addEventListener('click', closes);
    newLi.addEventListener('dragstart', drag);
    span.appendChild(txt);
    newLi.appendChild(span);
    return;
  }       


  //Функция при нажатии ""Удалить Все""
  function del(){
    document.getElementById( "quest" ). innerHTML = "";
    document.getElementById('del').style.display='none';
    return;
  }

  //События при нажатии на кнопки
  document.getElementById('btn').addEventListener('click', write);
  document.getElementById('del').addEventListener('click', del);

  //обработчик клик удаления одного дела    
    var closes = function() {
        this.parentNode.remove();
    }  
 //Drag and drop
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }