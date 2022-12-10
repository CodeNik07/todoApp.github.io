window.onload = () => {
    const addForm = document.querySelector('#addForm');
    const items = document.getElementById('items');

    addForm.addEventListener('submit', addItem);
    items.addEventListener('click', removeItem);
};
let submit = document.getElementById('submit');
let editItem = null;

function addItem(e) {
    e.preventDefault();

    if (submit.value != "Submit") {
        console.log("hello");
        editItem.target.parentNode.childNodes[0].textContent = document.getElementById("item").value;
  
        submit.value = "Submit";
        document.getElementById("item").value = "";
    }

    let newItem = document.getElementById('item').value;
    let newEL = document.createElement('p');
    newEL.textContent = newItem;
    // let newNode = document.createTextNode(newItem);
    // newNode.className = "todo-details";
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("item").value = "";

    let li = document.createElement("li");
    li.className = "todo-details";

    let deleteButton = document.createElement("button");
    deleteButton.className = "logo-edt-del delete";
    deleteButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement("button");
    editButton.className = "logo-edt-del edit";
    editButton.appendChild(document.createTextNode("Edit"));

    li.appendChild(newEL);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
  
    items.appendChild(li);

}

function removeItem(e) {
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            let li = e.target.parentNode;
            items.removeChild(li);
        }
    }
    if (e.target.classList.contains("edit")) {
        // console.log(e.target.parentNode.childNodes[0].textContent);
        document.getElementById("item").value = e.target.parentNode.childNodes[0].textContent;
        submit.value = "EDIT";
        editItem = e;
    }
}



















// const submitInpID = document.getElementById('submit-inp-id');
// const deleteInpID = document.getElementsByClassName('del-id');
// const todoInpID = document.getElementById('todo-inp-id');
// const ulid = document.getElementsByTagName('li');
// let count = 1;
// submitInpID.addEventListener('click', (e) => {

//     if (todoInpID.value != '') {
//         let newEL = document.createElement('li'); // Create New li Element

//         let divEL = document.createElement('div');// Create New div Element
//         divEL.className = 'todo-details';

//         let newText = document.createElement('p');// Create New p Element
//         newText.innerHTML = todoInpID.value;

//         let editbtn = document.createElement('button'); // Create New button Element
//         editbtn.textContent = 'Edit';
//         editbtn.className = 'logo-edt-del'; // Add ClassName
//         let deletebtn = document.createElement('button');
//         deletebtn.textContent = 'Delete';
//         deletebtn.className = 'logo-edt-del'; // Add ClassName

//         divEL.appendChild(newText); // Append p & button element
//         divEL.appendChild(editbtn); // to div element
//         divEL.appendChild(deletebtn); //

//         // newEL.id = count;
//         newEL.appendChild(divEL);

//         let position = document.getElementsByTagName('ul')[0];
//         position.appendChild(newEL);
//         // count++;
//         todoInpID.value = '';
//     } else {
//         alert("!!!! Empty Task can't add !!!!");
//     }


//     console.log(todoInpID.value);
//     console.log(e.target.value);
//     console.log(ulid[0].id);
// });

// function delEL(ev){
//     console.log(ev);
// }









