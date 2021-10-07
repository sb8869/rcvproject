var p = document.getElementsByTagName('p');
var choice = document.getElementsByClassName('choice');
var dragItem = null;
var clone = null;

for (var i of p){
    i.addEventListener('dragstart', dragStart);
    i.addEventListener('dragend', dragEnd);
}

function dragStart(){
    // console.log(this);
    
    // if "this" is on the right then do this
    // how to check if this is on right or left
    
    // dragItem = this;
    // clone = dragItem.cloneNode(true);
    // console.log(this.id);
    // this.style.backgroundColor = "darkGray";
    // setTimeout(() => this.style.display = "block", 0);
    // if (this.style.backgroundColor === "darkGray") {
    //     console.log('asdf');
    // }



    if (this.id === "right") {
        dragItem = this;
        clone = dragItem.cloneNode(true);
        clone.setAttribute("id", "left");
        console.log(clone.id);
        this.style.backgroundColor = "darkGray";
        setTimeout(() => this.style.display = "block", 0);
    }

    else if (this.id === "left"){
        
        dragItem = this;
        clone = dragItem.cloneNode(true);
        clone.setAttribute("id", "right")
        console.log(clone.id);
        this.style.backgroundColor = "gray";
        setTimeout(() => this.style.display = "none", 0);
    }

    // if "this" is on the left then do this
}

function dragEnd(){
    // this.append(dragItem);
    if(clone.id === "right") {
        clone.style.display = 'none';
    }
    setTimeout(() => this.style.display = "block", 0);

    //clone = null;
    //dragItem = null;
    
    // console.log(clone);
}

for (j of choice){
    j.addEventListener('dragover', dragOver);
    j.addEventListener('dragenter', dragEnter);
    j.addEventListener('dragleave', dragLeave);
    j.addEventListener('drop', Drop);
}

function Drop() {
    console.log(dragItem);
    var left = document.getElementById('left');
    if (left !== null) {
        left.remove();
    }

    // for (var i of p){
    //     if (i.id === "left") {
    //         i.remove();
    //     }
    // }
    //else{
    this.append(clone);
    //}

    // this.append(clone);
    // clone = null;
    // check();
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    
}

function dragLeave(e){
    e.preventDefault();
}

function check() {
    for (var i of p){
        if (i.id === "left") {
            i.remove();
        }
    }
}