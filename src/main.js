var p = document.getElementsByTagName('p');
var choice = document.getElementsByClassName('choice');
var dragItem = null;

for (var i of p){
    i.addEventListener('dragstart', dragStart);
    i.addEventListener('dragend', dragEnd);
}

function dragStart(){
    dragItem = this;
    setTimeout(() => this.style.display = "none", 0);
}

function dragEnd(){
    setTimeout(() => this.style.display = "block", 0);
    dragItem = null;
}

for (j of choice){
    j.addEventListener('dragover', dragOver);
    j.addEventListener('dragenter', dragEnter);
    j.addEventListener('dragleave', dragLeave);
    j.addEventListener('drop', Drop);
}

function Drop(){
    this.append(dragItem);
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(e){

}