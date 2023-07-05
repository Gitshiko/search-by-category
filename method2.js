console.log(todoList);

const ul = document.getElementById('list');

//writing li items and adding them to UL
function listGenerate(label) {
    const li = document.createElement('li');
    li.innerHTML = label;
    ul.appendChild(li);
}

//displaying all the items when the page is loaded
for (let i = 0; i < todoList.length; i++) {
    listGenerate(todoList[i].label);
}

//this function is called when search button is clicked
function filterByCategory(){
    const checkboxes = document.getElementsByClassName('checkB'); //an array of checkboxes
    console.log(checkboxes);

    const allCheckbox = document.getElementById('all');
    if (allCheckbox.checked === true) {
        ul.innerHTML = "";
        for (let x = 0; x < todoList.length; x++) { 
            listGenerate(todoList[x].label); //writing the whole todoList array in the list
        }
    } else {
        ul.innerHTML = "";
        for (let i = 0; i < checkboxes.length; i++){
            if (checkboxes[i].checked == true) {
                let newArr = todoList.filter(function(item) {
                return checkboxes[i].id === item.category})
                console.log(newArr);

                for (let y = 0; y < newArr.length; y++) {
                    listGenerate(newArr[y].label); //writing new array in the list
                }
            }
        }

    }

}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener ('click', filterByCategory);