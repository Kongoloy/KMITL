let add = document.querySelector('#add');
let input = document.querySelector('#input')
let list = document.querySelector('#list');
let form = document.querySelector('#form');
let deleteIcon = document.querySelector('.delete');

function addGoal(e) {

    e.preventDefault();
    let newGoal = document.createElement('div');
    let newGoalText = document.createElement('span')
    let newDeleteIcon = document.createElement('span')
    newDeleteIcon.classList.add('delete');
    newGoal.classList.add('goal');
    newDeleteIcon.innerText = 'X';
    if (input.value === '') {
        window.alert('Must set a goal')
    } else {
        newGoalText.innerText = input.value;
        newGoal.appendChild(newGoalText);
        newGoal.appendChild(newDeleteIcon);
        input.value = "";
        list.appendChild(newGoal);
    }
}

form.addEventListener('submit', addGoal);

function deleteGoal(event) {
    if (event.target.classList.contains('delete')) {
        let currentGoal = event.target.parentElement;
        list.removeChild(currentGoal);
    }
}

list.addEventListener('click', deleteGoal);

