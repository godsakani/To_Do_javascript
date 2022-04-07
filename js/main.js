let addToDoButton = document.getElementById('addToDo');
        let addToDoContainer = document.getElementById('toDocontainer');
        let inputField = document.getElementById('inputFiled');

        addToDoButton.addEventListener('click', function(){
        var paragraph = document.createElement('p')
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputField.value;
        addToDoContainer.appendChild(paragraph);
        inputField.value = "";
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick', function(){
            addToDoContainer.removeChild(paragraph);
        })


        })