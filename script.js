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

    //creating another array consisting of id's of chosen elements
    let chosenCategories = [];
    for (let i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked == true) {
            chosenCategories.push(checkboxes[i].id);
        }
    }
    console.log('chosen categories:', chosenCategories);
    
    //check if 'all' is chosen or otherwise
    for (let i = 0; i < chosenCategories.length; i++) {
        ul.innerHTML = ''; //here, the inner html is the list items
        if (chosenCategories.includes('all')) {
            for (let x = 0; x < todoList.length; x++) { 
            listGenerate(todoList[x].label); //writing the whole todoList array in the list
            }
        } else {            
            let newArr = todoList.filter(function(item) {
            return chosenCategories.includes(item.category);})
            for (let i = 0; i < newArr.length; i++) {
                listGenerate(newArr[i].label); //writing new array in the list
            }
            console.log('new array is:', newArr);
        }
        
    }
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener ('click', filterByCategory);