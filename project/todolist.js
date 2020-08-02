console.log("Todo List");

const button = document.querySelector('#btn');
const list = document.querySelector('#list');
var l=localStorage;

button.onclick = function(){
    let item = document.querySelector("#todo").value;
    console.log(item, typeof(item));
    let text = document.createTextNode(item);
    console.log(text);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    document.forms.myForm.reset();
    l.setItem('item1',item);
}

const remove = document.querySelector('#rm'); 

remove.onclick= function() {
    let listItem = document.querySelector('#list');
    listItem.removeChild(document.getElementsByTagName('li')[0])

}
