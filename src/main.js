import "./jquery-3.6.0.min.js";

let p = document.getElementsByTagName('p');
let choice = document.getElementsByClassName('choice');
let dragItem = null;
let dropZone = document.getElementById('dropZone');
let leftSide = document.getElementById('leftSide');
let middleSide = document.getElementById('middleSide')
let rightSide = document.getElementById('rightSide');

let first = document.getElementById('num1');
let second = document.getElementById('num2');
let third = document.getElementById('num3');
let fourth = document.getElementById('num4');
let fifth = document.getElementById('num5');
let submitButton = document.getElementById('numSubmit');
let candidates = document.getElementById('candidates-change');



let rankedList = [];

if (rankedList.length === 0) {
    first.style.backgroundColor = '#3E3EC4';
}

// if (rankedList.length === 0) {
//     first.style.backgroundColor = '#4c4cd3';
// }

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

for (var j of choice){
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

        // this.className = 'card-panel'
    
        // remove this from the list
        

        if (rankedList.length === 1) {
            first.style.backgroundColor = '#3E3EC4'; 
            second.style.backgroundColor = '#5757F2';
            candidates.innerHTML = "Select your <span id='candidates-change-span'>first</span> choice pick"
            submitButton.style.backgroundColor = "#fff";
        }
        if (rankedList.length === 2) {
            second.style.backgroundColor = '#3E3EC4';
            third.style.backgroundColor = '#5757F2';
            candidates.innerHTML = "Select your <span id='candidates-change-span'>second</span> choice pick"
            submitButton.style.backgroundColor = "#fff";
        }
        if (rankedList.length === 3) {
            third.style.backgroundColor = '#3E3EC4';
            fourth.style.backgroundColor = '#5757F2';
            candidates.innerHTML = "Select your <span id='candidates-change-span'>third</span> choice pick"
            submitButton.style.backgroundColor = "#fff";
        }
        if (rankedList.length === 4) {
            fourth.style.backgroundColor = '#3E3EC4';
            fifth.style.backgroundColor = '#5757F2';
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fourth</span> choice pick"
            submitButton.style.backgroundColor = "#fff";
        }
        if (rankedList.length === 5) {
            fifth.style.backgroundColor = '#3E3EC4';
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fifth</span> choice pick"
            submitButton.style.backgroundColor = "#fff";
            submitButton.style.color = "#000";
            // make submit button change colors
        }

        const index = rankedList.indexOf(this)
        if (index > -1) { rankedList.splice(index, 1) }

        // if (rankedList.length === 1) {
        //     first.style.backgroundColor = '#5757F2';
        //     second.style.backgroundColor = '#4c4cd3';
        // }
        // if (rankedList.length === 2) {
        //     second.style.backgroundColor = '#5757F2';
        //     third.style.backgroundColor = '#4c4cd3';
        // }
        // if (rankedList.length === 3) {
        //     third.style.backgroundColor = '#5757F2';
        //     fourth.style.backgroundColor = '#4c4cd3';
        // }
        // if (rankedList.length === 4) {
        //     fourth.style.backgroundColor = '#5757F2';
        //     fifth.style.backgroundColor = '#4c4cd3';
        // }
        // if (rankedList.length === 5) {
        //     fifth.style.backgroundColor = '#5757F2';
        //     // make submit button change colors
        //     submitButton.style.backgroundColor = "red";
        // }

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
        else if(this.id === "middle") {
            middleSide.append(this);
        }
    }
    

    else if (!dropZone.contains(this)) {
        if(rankedList.length === 5) {
            return;
        }

        rankedList.push(this);

        if (rankedList.length === 1) {
            first.style.backgroundColor = '#5757F2'; //lighter blue? color1 
            second.style.backgroundColor = '#3E3EC4'; //darker blue? color2
            submitButton.style.backgroundColor = "#fff";
            // console.log(candidates);
            // console.log(candidates.innerHTML);
            candidates.innerHTML = "Select your <span id='candidates-change-span'>second</span> choice pick"
        }
        if (rankedList.length === 2) {
            second.style.backgroundColor = '#5757F2';
            third.style.backgroundColor = '#3E3EC4';
            submitButton.style.backgroundColor = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>third</span> choice pick"
        }
        if (rankedList.length === 3) {
            third.style.backgroundColor = '#5757F2';
            fourth.style.backgroundColor = '#3E3EC4';
            submitButton.style.backgroundColor = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fourth</span> choice pick"
        }
        if (rankedList.length === 4) {
            fourth.style.backgroundColor = '#5757F2';
            fifth.style.backgroundColor = '#3E3EC4';
            submitButton.style.backgroundColor = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fifth</span> choice pick"
        }
        if (rankedList.length === 5) {
            fifth.style.backgroundColor = '#5757F2';
            candidates.innerHTML = "Review your vote and click submit!"
            // make submit button change colors
            submitButton.style.backgroundColor = "#3E3EC4";
            submitButton.style.color = "#fff";
        }

        // if (rankedList.length === 1) {
        //     first.style.backgroundColor = '#5757F2';
        //     second.style.backgroundColor = '#4c4cd3';
        // }
        // if (rankedList.length === 2) {
        //     second.style.backgroundColor = '#5757F2';
        //     third.style.backgroundColor = '#4c4cd3';
        // }
        // if (rankedList.length === 3) {
        //     third.style.backgroundColor = '#5757F2';
        //     fourth.style.backgroundColor = '#4c4cd3';
        // }
        // if (rankedList.length === 4) {
        //     fourth.style.backgroundColor = '#5757F2';
        //     fifth.style.backgroundColor = '#4c4cd3';
        // }
        // if (rankedList.length === 5) {
        //     fifth.style.backgroundColor = '#5757F2';
        //     // make submit button change colors
        //     submitButton.style.backgroundColor = "red";
        // }
        // add an animation class to it
        // if(rankedList.length === 0) {
        //     this.className = 'animate card-panel';
        // }
        // this.className = 'animate card-panel';
        // console.log(this.className);
        
        dropZone.append(this)
    }

    // else if (!dropZone.contains(this)) {
    //     if(rankedList.length === 5) {
    //         return;
    //     }
    //     rankedList.push(this);
    //     console.log(rankedList);
    //     dropZone.append(this);
    // }
    
}

/* $(document).ready(function() {
    // all custom jQuery will go here
}); */

// $(document).ready(function(){
//     $("p").click(function(){
//       $(this).hide();
//     });
//   });