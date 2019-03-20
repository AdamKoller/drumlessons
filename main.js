// clicked add button, adds input  as a new task
// document.getElementById('add').addEventListener('click', function () {
//   var value = document.getElementById('newtask').value;
//   if (value)
// });


/*
// var trashfas = '<i class="fas fa-trash"></i>';
// var completedfas = '<i class="fas fa-star"></i>';
//
//
// any input is added to list upon clicking 'ADD'
// document.getElementById('add').addEventListener('click', function () {
//   var value = document.getElementById('newtask').value;
//   if(value) {
//     addItemTodo(value);
//     document.getElementById('newtask').value = '';
//   }
// });
//
// function trashItem() {
//   var newtask = this.parentNode.parentNode;
//   var parent = newtask.parentNode;
//   parent.removeChild(newtask);
// }
// function completedItem () {
//   var newtask = this.parentNode.parentNode;
//   var parent = newtask.parentNode;
//   var id = parent.id;
//   var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
//   parent.removeChild(newtask);
//   target.insertBefore(newtask, target.childNodes[0]);
// }
//
// //Adds new items
// function addItemTodo(text) {
//  var list = document.getElementById('todo');
//
//  var newtask = document.createElement('li');
//  newtask.innerText = text;
//
//  var buttons = document.createElement('div');
//  buttons.classList.add('buttons');
//
//  var trash = document.createElement('button');
//  trash.classList.add('trash');
//  trash.innerHTML = trashfas;
//  // removes item upon clicking trash button
//  trash.addEventListener('click',trashItem);
//
//  var completed = document.createElement('button');
//  completed.classList.add('completed');
//  completed.innerHTML = completedfas;
// // marks task as completed upon clicking star button
//  completed.addEventListener('click',completedItem);
//
//  buttons.appendChild(trash);
//  buttons.appendChild(completed);
//  newtask.appendChild(buttons);
//
//  list.insertBefore(newtask,list.childNodes[0]); // inserts new task at top of list
//
// } */

var removebutton = '<i class="fas fa-trash"></i>';
var completebutton = '<i class="fas fa-star"></i>';

document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('newtask').value;
  if (value) {
    addItemTodo(value);
    document.getElementById('newtask').value = '';
  }
});

function removeItem() {
  var newtask = this.parentNode.parentNode;
  var parent = newtask.parentNode;

  parent.removeChild(newtask);
}

function completeItem() {
  var newtask = this.parentNode.parentNode;
  var parent = newtask.parentNode;
  var id = parent.id;

  var target = ( id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(newtask);
  target.insertBefore(newtask, target.childNodes[0]);
}

function addItemTodo(text) {
  var list = document.getElementById('todo');

  var newtask = document.createElement('li');
  newtask.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removebutton;
  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completebutton;
  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  newtask.appendChild(buttons);

  list.insertBefore(newtask, list.childNodes[0]);

}
