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

let left1 = document.getElementById('left1');
let left2 = document.getElementById('left2');
let left3 = document.getElementById('left3');
let left4 = document.getElementById('left4');
let left5 = document.getElementById('left5');

let middle1 = document.getElementById('middle1');
let middle2 = document.getElementById('middle2');
let middle3 = document.getElementById('middle3');
let middle4 = document.getElementById('middle4');
let middle5 = document.getElementById('middle5');

let right1 = document.getElementById('right1');
let right2 = document.getElementById('right2');
let right3 = document.getElementById('right3');
let right4 = document.getElementById('right4');
let right5 = document.getElementById('right5');

let rankedList = [];

if (rankedList.length === 0) {
    first.style.backgroundColor = '#1a237e';
}

submitButton.disabled = true;
submitButton.style.cursor = 'default';

submitButton.addEventListener('click', submitClick);

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
    // console.log(this !== dropZone);
    if(this !== dropZone) {

        // if (rankedList.length === 0) {
        //     submitButton.disabled = true;

        // }
        if (rankedList.length === 1) {
            
            submitButton.disabled = true;
            first.style.backgroundColor = '#1E1E92'; 
            second.style.backgroundColor = '#5757F2';
            submitButton.backgroundColor = "#1E1E92";
            submitButton.style.cursor = 'default';
            submitButton.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>first</span> choice pick"

        }
        if (rankedList.length === 2) {
            second.style.backgroundColor = '#1E1E92';
            third.style.backgroundColor = '#5757F2';
            submitButton.backgroundColor = "#1E1E92";
            submitButton.style.cursor = 'pointer';
            submitButton.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>second</span> choice pick"
        }
        if (rankedList.length === 3) {
            third.style.backgroundColor = '#1E1E92';
            fourth.style.backgroundColor = '#5757F2';
            submitButton.backgroundColor = "#1E1E92";
            submitButton.style.cursor = 'pointer';
            submitButton.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>third</span> choice pick"
        }
        if (rankedList.length === 4) {
            fourth.style.backgroundColor = '#1E1E92';
            fifth.style.backgroundColor = '#5757F2';
            submitButton.backgroundColor = "#1E1E92";
            submitButton.style.cursor = 'pointer';
            submitButton.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fourth</span> choice pick"
        }
        if (rankedList.length === 5) {
            fifth.style.backgroundColor = '#1E1E92';
            submitButton.backgroundColor = "#1E1E92";
            submitButton.style.cursor = 'pointer';
            submitButton.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fifth</span> choice pick"
            // make submit button change colors
        }

        // left part
        if (dragItem.innerHTML === 'Eric Adams') {
            while (left1.firstChild) {
                left1.removeChild(left1.firstChild);
            }
            // this.remove();
            left1.append(dragItem);
        }

        if (dragItem.innerHTML === 'Kathryn Garcia') {
            while (left2.firstChild) {
                left2.removeChild(left2.firstChild);
            }
            // this.remove();
            left2.append(dragItem);
        }

        if (dragItem.innerHTML === 'Eric Johnson') {
            while (left3.firstChild) {
                left3.removeChild(left3.firstChild);
            }
            // this.remove();
            left3.append(dragItem);
        }

        if (dragItem.innerHTML === 'Maya Wiley') {
            while (left4.firstChild) {
                left4.removeChild(left4.firstChild);
            }
            // this.remove();
            left4.append(dragItem);
        }

        if (dragItem.innerHTML === 'Andrew Yang') {
            while (left5.firstChild) {
                left5.removeChild(left5.firstChild);
            }
            // dragItem.remove();
            left5.append(dragItem);
        }

        // middle part
        if (dragItem.innerHTML === 'Raymond McGuire') {
            while (middle1.firstChild) {
                middle1.removeChild(middle1.firstChild);
            }
            // this.remove();
            middle1.append(dragItem);
        }

        if (dragItem.innerHTML === 'Dianne Morales') {
            while (middle2.firstChild) {
                middle2.removeChild(middle2.firstChild);
            }
            // this.remove();
            middle2.append(dragItem);
        }

        if (dragItem.innerHTML === 'Scott Stringer') {
            while (middle3.firstChild) {
                middle3.removeChild(middle3.firstChild);
            }
            // this.remove();
            middle3.append(dragItem);
        }

        if (dragItem.innerHTML === 'Shaun Donovan') {
            while (middle4.firstChild) {
                middle4.removeChild(middle4.firstChild);
            }
            // this.remove();
            middle4.append(dragItem);
        }

        if (dragItem.innerHTML === 'Art Chang') {
            while (middle5.firstChild) {
                middle5.removeChild(middle5.firstChild);
            }
            // this.remove();
            middle5.append(dragItem);
        }
        
        
        // right part
        if (dragItem.innerHTML === 'Aaron Foldernauer') {
            while (right1.firstChild) {
                right1.removeChild(right1.firstChild);
            }
            // this.remove();
            right1.append(dragItem);
        }

        if (dragItem.innerHTML === 'Paperboy Prince') {
            while (right2.firstChild) {
                right2.removeChild(right2.firstChild);
            }
            // this.remove();
            right2.append(dragItem);
        }

        if (dragItem.innerHTML === 'Joycelyn Taylor') {
            while (right3.firstChild) {
                right3.removeChild(right3.firstChild);
            }
            // this.remove();
            right3.append(dragItem);
        }

        if (dragItem.innerHTML === 'Isaac Wright Jr.') {
            while (right4.firstChild) {
                right4.removeChild(right4.firstChild);
            }
            // this.remove();
            right4.append(dragItem);
        }

        if (dragItem.innerHTML === 'Write In Candidate') {
            while (right5.firstChild) {
                right5.removeChild(right5.firstChild);
            }
            // this.remove();
            right5.append(dragItem);
        }

        const index = rankedList.indexOf(dragItem);
        console.log(index > -1);
        if (index > -1) { rankedList.splice(index, 1) }

        
        // checking if draggedItem belongs on left or right
        // if (dragItem.id === "left") {
        //     leftSide.append(dragItem);
        // } 
        // else if (dragItem.id === "right") {
        //     rightSide.append(dragItem);
        // }
        // else if (dragItem.id === "middle") {
        //     middleSide.append(dragItem);
        // }
    }
    else if (this === dropZone) {
        if(rankedList.length === 5) {
            return;
        }

        rankedList.push(dragItem);

        if (rankedList.length === 1) {

            // console.log('inside');
            submitButton.disabled = false;

            first.style.backgroundColor = '#5757F2'; //lighter blue? color1 
            second.style.backgroundColor = '#1E1E92'; //darker blue? color2
            submitButton.backgroundColor = '#1E1E92';
            submitButton.style.cursor = 'pointer';
            submitButton.color = "black";
            // console.log(candidates);
            // console.log(candidates.innerHTML);
            candidates.innerHTML = "Select your <span id='candidates-change-span'>second</span> choice pick"
        }
        if (rankedList.length === 2) {
            second.style.backgroundColor = '#5757F2';
            third.style.backgroundColor = '#1E1E92';
            submitButton.backgroundColor = "#1E1E92";
            submitButton.style.cursor = 'pointer';
            submitButton.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>third</span> choice pick"
        }
        if (rankedList.length === 3) {
            third.style.backgroundColor = '#5757F2';
            fourth.style.backgroundColor = '#1E1E92';
            submitButton.backgroundColor = "#1E1E92";
            submitButton.style.cursor = 'pointer';
            submitButton.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fourth</span> choice pick"
        }
        if (rankedList.length === 4) {
            fourth.style.backgroundColor = '#5757F2';
            fifth.style.backgroundColor = '#1E1E92';
            submitButton.backgroundColor = "#1E1E92";
            submitButton.style.cursor = 'pointer';
            submitButton.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fifth</span> choice pick"
        }
        if (rankedList.length === 5) {
            fifth.style.backgroundColor = '#5757F2';
            submitButton.backgroundColor = "#1E1E92";
            submitButton.style.cursor = 'pointer';
            submitButton.color = "#fff";
            candidates.innerHTML = "Review your vote and click submit!"
            // make submit button change colors
        }

        // left part
        if (dragItem.innerHTML === 'Eric Adams') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Eric Adams";
            left1.append(newP);
        }

        if (dragItem.innerHTML === 'Kathryn Garcia') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Kathryn Garcia";
            left2.append(newP);
        }

        if (dragItem.innerHTML === 'Eric Johnson') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Eric Johnson";
            left3.append(newP);
        }

        if (dragItem.innerHTML === 'Maya Wiley') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Maya Wiley";
            left4.append(newP);
        }

        if (dragItem.innerHTML === 'Andrew Yang') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Andrew Yang";
            left5.append(newP);
        }

        // middle part
        if (dragItem.innerHTML === 'Raymond McGuire') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Raymond McGuire";
            middle1.append(newP);
        }

        if (dragItem.innerHTML === 'Dianne Morales') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Dianne Morales";
            middle2.append(newP);
        }

        if (dragItem.innerHTML === 'Scott Stringer') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Scott Stringer";
            middle3.append(newP);
        }

        if (dragItem.innerHTML === 'Shaun Donovan') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Shaun Donovan";
            middle4.append(newP);
        }

        if (dragItem.innerHTML === 'Art Chang') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Art Chang";
            middle5.append(newP);
        }

        // right part
        if (dragItem.innerHTML === 'Aaron Foldernauer') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Aaron Foldernauer";
            right1.append(newP);
        }

        if (dragItem.innerHTML === 'Paperboy Prince') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Paperboy Prince";
            right2.append(newP);
        }

        if (dragItem.innerHTML === 'Joycelyn Taylor') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Joycelyn Taylor";
            right3.append(newP);
        }

        if (dragItem.innerHTML === 'Isaac Wright Jr.') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Isaac Wright Jr.";
            right4.append(newP);
        }

        if (dragItem.innerHTML === 'Write In Candidate') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Write In Candidate";
            right5.append(newP);
        }
        
        this.append(dragItem);
        // dragItem.show('slow');
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
    // console.log("this: " + this);
    

    console.log(this);
    // console.log(dropZone.contains(this.cloneNode(true)));
    if(dropZone.contains(this)){
        // console.log(this.id);
        // if (rankedList.length === 0) {
        //     console.log('inasd');
        //     submitButton.disabled = !submitButton.disabled;
        // }
        if (rankedList.length === 1) {
            // submitButton.disabled = !submitButton.disabled;
            submitButton.disabled = true;

            first.style.backgroundColor = '#1E1E92'; 
            second.style.backgroundColor = '#5757F2';
            candidates.innerHTML = "Select your <span id='candidates-change-span'>first</span> choice pick";
            submitButton.style.backgroundColor = "white";
            submitButton.style.color = "lightgray";
            submitButton.style.cursor = 'default';
        }
        if (rankedList.length === 2) {

            second.style.backgroundColor = '#1E1E92';
            third.style.backgroundColor = '#5757F2';
            // submitButton.style.backgroundColor = "#5757F2";
            // submitButton.style.color = "#fff";
            // submitButton.style.cursor = 'pointer';
            candidates.innerHTML = "Select your <span id='candidates-change-span'>second</span> choice pick";
        }
        if (rankedList.length === 3) {

            third.style.backgroundColor = '#1E1E92';
            fourth.style.backgroundColor = '#5757F2';
            // submitButton.style.backgroundColor = "#5757F2";
            // submitButton.style.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>third</span> choice pick";
        }
        if (rankedList.length === 4) {

            fourth.style.backgroundColor = '#1E1E92';
            fifth.style.backgroundColor = '#5757F2';
            // submitButton.style.backgroundColor = "#5757F2";
            // submitButton.style.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fourth</span> choice pick";
        }
        if (rankedList.length === 5) {

            fifth.style.backgroundColor = '#1E1E92';
            // submitButton.style.backgroundColor = "#5757F2";
            // submitButton.style.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fifth</span> choice pick";
            // make submit button change colors
        }

        // left part
        if (this.innerHTML === 'Eric Adams') {
            while (left1.firstChild) {
                left1.removeChild(left1.firstChild);
            }
            this.remove();
            left1.append(this);
        }

        if (this.innerHTML === 'Kathryn Garcia') {
            while (left2.firstChild) {
                left2.removeChild(left2.firstChild);
            }
            this.remove();
            left2.append(this);
        }

        if (this.innerHTML === 'Eric Johnson') {
            while (left3.firstChild) {
                left3.removeChild(left3.firstChild);
            }
            this.remove();
            left3.append(this);
        }

        if (this.innerHTML === 'Maya Wiley') {
            while (left4.firstChild) {
                left4.removeChild(left4.firstChild);
            }
            this.remove();
            left4.append(this);
        }

        if (this.innerHTML === 'Andrew Yang') {
            while (left5.firstChild) {
                left5.removeChild(left5.firstChild);
            }
            this.remove();
            left5.append(this);
        }
        

        // middle part
        if (this.innerHTML === 'Raymond McGuire') {
            while (middle1.firstChild) {
                middle1.removeChild(middle1.firstChild);
            }
            this.remove();
            middle1.append(this);
        }

        if (this.innerHTML === 'Dianne Morales') {
            while (middle2.firstChild) {
                middle2.removeChild(middle2.firstChild);
            }
            this.remove();
            middle2.append(this);
        }

        if (this.innerHTML === 'Scott Stringer') {
            while (middle3.firstChild) {
                middle3.removeChild(middle3.firstChild);
            }
            this.remove();
            middle3.append(this);
        }

        if (this.innerHTML === 'Shaun Donovan') {
            while (middle4.firstChild) {
                middle4.removeChild(middle4.firstChild);
            }
            this.remove();
            middle4.append(this);
        }

        if (this.innerHTML === 'Art Chang') {
            while (middle5.firstChild) {
                middle5.removeChild(middle5.firstChild);
            }
            this.remove();
            middle5.append(this);
        }
        
        // right part
        if (this.innerHTML === 'Aaron Foldernauer') {
            while (right1.firstChild) {
                right1.removeChild(right1.firstChild);
            }
            this.remove();
            right1.append(this);
        }

        if (this.innerHTML === 'Paperboy Prince') {
            while (right2.firstChild) {
                right2.removeChild(right2.firstChild);
            }
            this.remove();
            right2.append(this);
        }

        if (this.innerHTML === 'Joycelyn Taylor') {
            while (right3.firstChild) {
                right3.removeChild(right3.firstChild);
            }
            this.remove();
            right3.append(this);
        }

        if (this.innerHTML === 'Isaac Wright Jr.') {
            while (right4.firstChild) {
                right4.removeChild(right4.firstChild);
            }
            this.remove();
            right4.append(this);
        }

        if (this.innerHTML === 'Write In Candidate') {
            while (right5.firstChild) {
                right5.removeChild(right5.firstChild);
            }
            this.remove();
            right5.append(this);
        }
        
        

        const index = rankedList.indexOf(this)
        if (index > -1) { rankedList.splice(index, 1) }

        // console.log(this.innerHtml);

        
       

        // then append it to left or right
        // if the id is left then it goes back to the left
        // if(this.id === "left") {
        //     // console.log('inleft');
        //     leftSide.append(this);
        // }
        // // vice versa
        // else if(this.id === "right") {
        //     rightSide.append(this);
        // }
        // else if(this.id === "middle") {
        //     middleSide.append(this);
        // }
    }
    
    else if (!dropZone.contains(this)) {
        if(rankedList.length === 5) {
            return;
        }

        rankedList.push(this);

        if (rankedList.length === 1) {
            submitButton.disabled = false;
            // console.log(submitButton.disabled);

            first.style.backgroundColor = '#5757F2'; //lighter blue? color1 
            second.style.backgroundColor = '#1E1E92'; //darker blue? color2
            submitButton.style.backgroundColor = "#1E1E92";
            submitButton.style.color = "#fff";
            submitButton.style.cursor = 'pointer';
            // console.log(candidates);
            // console.log(candidates.innerHTML);
            candidates.innerHTML = "Select your <span id='candidates-change-span'>second</span> choice pick";
        }
        if (rankedList.length === 2) {
            second.style.backgroundColor = '#5757F2';
            third.style.backgroundColor = '#1E1E92';
            submitButton.style.backgroundColor = "#1E1E92";
            submitButton.style.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>third</span> choice pick";
        }
        if (rankedList.length === 3) {
            third.style.backgroundColor = '#5757F2';
            fourth.style.backgroundColor = '#1E1E92';
            submitButton.style.backgroundColor = "#1E1E92";
            submitButton.style.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fourth</span> choice pick";
        }
        if (rankedList.length === 4) {
            fourth.style.backgroundColor = '#5757F2';
            fifth.style.backgroundColor = '#1E1E92';
            submitButton.style.backgroundColor = "#1E1E92";
            submitButton.style.color = "#fff";
            candidates.innerHTML = "Select your <span id='candidates-change-span'>fifth</span> choice pick";
        }
        if (rankedList.length === 5) {
            fifth.style.backgroundColor = '#5757F2';
            submitButton.style.backgroundColor = "#1E1E92";
            submitButton.style.color = "#fff";
            candidates.innerHTML = "Review your vote and click submit!";
            // make submit button change colors
        }
        
        // left part
        if (this.innerHTML === 'Eric Adams') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Eric Adams";
            left1.append(newP);
        }

        if (this.innerHTML === 'Kathryn Garcia') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Kathryn Garcia";
            left2.append(newP);
        }

        if (this.innerHTML === 'Eric Johnson') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Eric Johnson";
            left3.append(newP);
        }

        if (this.innerHTML === 'Maya Wiley') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Maya Wiley";
            left4.append(newP);
        }

        if (this.innerHTML === 'Andrew Yang') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Andrew Yang";
            left5.append(newP);
        }

        // middle part
        if (this.innerHTML === 'Raymond McGuire') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Raymond McGuire";
            middle1.append(newP);
        }

        if (this.innerHTML === 'Dianne Morales') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Dianne Morales";
            middle2.append(newP);
        }

        if (this.innerHTML === 'Scott Stringer') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Scott Stringer";
            middle3.append(newP);
        }

        if (this.innerHTML === 'Shaun Donovan') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Shaun Donovan";
            middle4.append(newP);
        }

        if (this.innerHTML === 'Art Chang') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Art Chang";
            middle5.append(newP);
        }

        // right part
        if (this.innerHTML === 'Aaron Foldernauer') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Aaron Foldernauer";
            right1.append(newP);
        }

        if (this.innerHTML === 'Paperboy Prince') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Paperboy Prince";
            right2.append(newP);
        }

        if (this.innerHTML === 'Joycelyn Taylor') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Joycelyn Taylor";
            right3.append(newP);
        }

        if (this.innerHTML === 'Isaac Wright Jr.') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Isaac Wright Jr.";
            right4.append(newP);
        }

        if (this.innerHTML === 'Write In Candidate') {
            let newP = document.createElement("p");
            newP.className = 'card-panel';
            newP.style.backgroundColor = "#D9D9D9";
            newP.innerHTML = "Write In Candidate";
            right5.append(newP);
        }

        dropZone.append(this);
        

    }
    // console.log(rankedList);

}

function submitClick() {
    let newList = [];
    for(let i = 0 ; i < rankedList.length; i++){
        newList.push(rankedList[i].innerHTML);
    }

    sessionStorage.setItem('list', JSON.stringify(newList));
    
    location.href = "submit.html";
    // sessionStorage.setItem("rankedList", rankedList);
    
}

function Onload() {
    console.log('tst');
}

function update() {
    if (rankedList.length === 0) {
        first.style.backgroundColor = '#1E1E92';
        second.style.backgroundColor = '#5757F2';

    }
    if (rankedList.length === 1) {
        // submitButton.disabled = !submitButton.disabled;
        submitButton.disabled = true;


        first.style.backgroundColor = '#1E1E92'; 
        second.style.backgroundColor = '#5757F2';
        candidates.innerHTML = "Select your <span id='candidates-change-span'>first</span> choice pick"
        submitButton.style.backgroundColor = "whitesmoke";
        submitButton.style.color = "black";
        submitButton.style.cursor = 'default';
    }
    if (rankedList.length === 2) {

        second.style.backgroundColor = '#1E1E92';
        third.style.backgroundColor = '#5757F2';
        // submitButton.style.backgroundColor = "#5757F2";
        // submitButton.style.color = "#fff";
        // submitButton.style.cursor = 'pointer';
        candidates.innerHTML = "Select your <span id='candidates-change-span'>second</span> choice pick"
    }
    if (rankedList.length === 3) {

        third.style.backgroundColor = '#1E1E92';
        fourth.style.backgroundColor = '#5757F2';
        // submitButton.style.backgroundColor = "#5757F2";
        // submitButton.style.color = "#fff";
        candidates.innerHTML = "Select your <span id='candidates-change-span'>third</span> choice pick"
    }
    if (rankedList.length === 4) {

        fourth.style.backgroundColor = '#1E1E92';
        fifth.style.backgroundColor = '#5757F2';
        // submitButton.style.backgroundColor = "#5757F2";
        // submitButton.style.color = "#fff";
        candidates.innerHTML = "Select your <span id='candidates-change-span'>fourth</span> choice pick"
    }
    if (rankedList.length === 5) {

        fifth.style.backgroundColor = '#1E1E92';
        // submitButton.style.backgroundColor = "#5757F2";
        // submitButton.style.color = "#fff";
        candidates.innerHTML = "Select your <span id='candidates-change-span'>fifth</span> choice pick"
        // make submit button change colors
    }
}

function xClick() {
    // // console.log(this);
    // if(this.id === 'x-1') {
    //     // console.log('1');
    //     if (rankedList[0].innerHTML === 'Eric Adams') {
    //         while (left1.firstChild) {
    //             left1.removeChild(left1.firstChild);
    //         }
    //         // this.remove();
    //         left1.append(rankedList[0]);
    //         x1.style.display = 'none';
    //         update();
    //         const index = rankedList.indexOf(rankedList[0]);
    //         if (index > -1) { rankedList.splice(index, 1) }
    //     }

    //     if (rankedList[0].innerHTML === 'Kathryn Garcia') {
    //         while (left2.firstChild) {
    //             left2.removeChild(left2.firstChild);
    //         }
    //         // this.remove();
    //         left2.append(rankedList[0]);
    //         x1.style.display = 'none';
    //         update();
    //         const index = rankedList.indexOf(rankedList[0]);
    //         if (index > -1) { rankedList.splice(index, 1) }
    //     }

    //     if (rankedList[0].innerHTML === 'Eric Johnson') {
    //         while (left3.firstChild) {
    //             left3.removeChild(left3.firstChild);
    //         }
    //         // this.remove();
    //         left3.append(rankedList[0]);
    //         x1.style.display = 'none';
    //         update();
    //         const index = rankedList.indexOf(rankedList[0]);
    //         if (index > -1) { rankedList.splice(index, 1) }
    //     }

    //     if (rankedList[0].innerHTML === 'Maya Wiley') {
    //         while (left4.firstChild) {
    //             left4.removeChild(left4.firstChild);
    //         }
    //         // this.remove();
    //         left4.append(rankedList[0]);
    //         x1.style.display = 'none';
    //         update();
    //         const index = rankedList.indexOf(rankedList[0]);
    //         if (index > -1) { rankedList.splice(index, 1) }
    //     }

    //     if (rankedList[0].innerHTML === 'Andrew Yang') {
    //         while (left5.firstChild) {
    //             left5.removeChild(left5.firstChild);
    //         }
    //         // this.remove();
    //         left5.append(rankedList[0]);
    //         x1.style.display = 'none';
    //         update();
    //         const index = rankedList.indexOf(rankedList[0]);
    //         if (index > -1) { rankedList.splice(index, 1) }
    //     }
    // }

    // if(this.id === 'x-2') {
    //     // console.log('1');
    //     if (rankedList[1].innerHTML === 'Eric Adams') {
    //         while (left1.firstChild) {
    //             left1.removeChild(left1.firstChild);
    //         }
    //         // this.remove();
    //         left1.append(rankedList[1]);
    //         x2.style.display = 'none';
    //         update();
    //         const index = rankedList.indexOf(rankedList[1]);
    //         if (index > -1) { rankedList.splice(index, 1) }
    //     }

    //     if (rankedList[1].innerHTML === 'Kathryn Garcia') {
    //         while (left2.firstChild) {
    //             left2.removeChild(left2.firstChild);
    //         }
    //         // this.remove();
    //         left2.append(rankedList[1]);
    //         x2.style.display = 'none';
    //         update();
    //         const index = rankedList.indexOf(rankedList[1]);
    //         if (index > -1) { rankedList.splice(index, 1) }
    //     }

    //     if (rankedList[1].innerHTML === 'Eric Johnson') {
    //         while (left3.firstChild) {
    //             left3.removeChild(left3.firstChild);
    //         }
    //         // this.remove();
    //         left3.append(rankedList[1]);
    //         x2.style.display = 'none';
    //         update();
    //         const index = rankedList.indexOf(rankedList[1]);
    //         if (index > -1) { rankedList.splice(index, 1) }
    //     }

    //     if (rankedList[1].innerHTML === 'Maya Wiley') {
    //         while (left4.firstChild) {
    //             left4.removeChild(left4.firstChild);
    //         }
    //         // this.remove();
    //         left4.append(rankedList[1]);
    //         x2.style.display = 'none';
    //         update();
    //         const index = rankedList.indexOf(rankedList[1]);
    //         if (index > -1) { rankedList.splice(index, 1) }
    //     }

    //     if (rankedList[1].innerHTML === 'Andrew Yang') {
    //         while (left5.firstChild) {
    //             left5.removeChild(left5.firstChild);
    //         }
    //         // this.remove();
    //         left5.append(rankedList[1]);
    //         x2.style.display = 'none';
    //         update();
    //         const index = rankedList.indexOf(rankedList[1]);
    //         if (index > -1) { rankedList.splice(index, 1) }
    //     }
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