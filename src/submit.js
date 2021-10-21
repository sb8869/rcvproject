window.addEventListener("load", function(event) {
    // sessionStorage.getItem("rankedList");
    let list = sessionStorage.getItem('list');
    // console.log(sessionStorage.getItem('list'));
    console.log(JSON.parse(list));

    list = JSON.parse(list);

    let submitAppend = document.getElementById('submitAppend');

    // $("#numSubmit").click(function() {
    //     console.log('inside animate');
    //     $('.transform').toggleClass('transform-active');
    // });

    let submit = document.getElementById('numSubmit');
    submit.addEventListener('click', Click);

    console.log(document.getElementById('moving'));

    function Click() {
        console.log("animeta");
        document.getElementById('move').className = 'moving';
        console.log(document.getElementById('move'));
        document.getElementById('move2').className = 'word';
    }

    for (let i = 0; i < list.length; i++ ){
        let newP = document.createElement("p");
        newP.className = 'card-panel z-depth-2 choices';
        newP.style.backgroundColor = "white";
        newP.innerHTML = list[i];
        submitAppend.append(newP);
    }

    

});
