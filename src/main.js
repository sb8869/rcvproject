let p = document.getElementsByTagName('p');
let choice = document.getElementsByClassName('choice');
let dragItem = null;
let dropZone = document.getElementById('dropZone');
let leftSide = document.getElementById('leftSide');
console.log(leftSide);
let rightSide = document.getElementById('rightSide');

let rankedList = [];

// console.log(dropZone);

for (var i of p){
    i.addEventListener('dragstart', dragStart);
    i.addEventListener('dragend', dragEnd);
    i.addEventListener('click', onClick);
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
    
    // since this isnt the dropZone then remove draggedItem from the list
    console.log(this !== dropZone);
    if(this !== dropZone) {
        const index = rankedList.indexOf(dragItem)
        if (index > -1) { rankedList.splice(index, 1) }
        // checking if draggedItem belongs on left or right
        if (dragItem.id === "left") {
            leftSide.append(dragItem);
        } 
        else if (dragItem.id === "right") {
            rightSide.append(dragItem);
        }
    }
    else {
        if(rankedList.length === 5) {
            return;
        }
        rankedList.push(dragItem);
        this.append(dragItem);
    }
    console.log(rankedList);
    // rankedList.push(dragItem);
    // this.append(dragItem);
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(e){

}

function onClick() {
    
    // console.log(dropZone.contains(this));
    if(dropZone.contains(this)){
        // console.log(this.id);

        // remove this from the list
        const index = rankedList.indexOf(this)
        if (index > -1) { rankedList.splice(index, 1) }

        console.log(rankedList);

        // then append it to left or right
        // if the id is left then it goes back to the left
        if(this.id === "left") {
            // console.log('inleft');
            leftSide.append(this);
        }
        // vice versa
        else if(this.id === "right") {
            rightSide.append(this);
        }
    }
    

    else if (!dropZone.contains(this)) {
        if(rankedList.length === 5) {
            return;
        }
        rankedList.push(this);
        console.log(rankedList);
        dropZone.append(this);
    }
}