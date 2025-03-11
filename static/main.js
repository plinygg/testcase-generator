let counter = 0;

function addElement() {
    var outsideDiv = document.createElement('div');
    outsideDiv.className = 'item';
    outsideDiv.setAttribute('name', 'item');

    var dropdown = document.createElement('label');
    dropdown.className = 'dropdown';
    dropdown.textContent = 'What is the value on this line of the testcase?'

    var select = document.createElement('select');
    select.className = 'select';
    select.setAttribute('name', `select_${counter}`);
    select.setAttribute('onchange', "handleSelection()");
    select.setAttribute("id", `primarySelect_${counter}`);

    var option1 = document.createElement('option');
    option1.textContent = "one number (# testcases, # lines)";
    option1.setAttribute('name', '1');

    var option2 = document.createElement('option');
    option2.textContent = "A list of numbers";
    option2.setAttribute('name', '2');
    option2.setAttribute('value', 'showSecondary');

    var option3 = document.createElement('option');
    option3.textContent = "A list of parameters (integers)";
    option3.setAttribute('name', '3');

    var option4 = document.createElement('option');
    option4.textContent = "A string";
    option4.setAttribute('name', '4');
 
    var option5 = document.createElement("option");
    option5.textContent = "A grid of integers";
    option5.setAttribute("name", "4");
     
    var option6 = document.createElement("option");
    option6.textContent = "A grid of letters";
    option6.setAttribute("name", "6");

    var outsideDiv2 = document.createElement("div");
    outsideDiv2.setAttribute('id', 'secondarySelect');

    var select2 = document.createElement('select');

    for (let i = 65; i <= 90; i++) {
        const option = document.createElement("option");
        const letter = String.fromCharCode(i);
        option.value = letter;
        option.textContent = letter;
        select2.appendChild(option);
    }

    outsideDiv2.appendChild(select2);
    // optional selections need to dynamically change from past form elements choosing variables
    // fix the Cannot read properties of null (reading 'value') bug in the handleSelection function
    // something to do with unique id values 
    

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);

    outsideDiv.appendChild(dropdown);
    outsideDiv.appendChild(document.createElement('br'));
    outsideDiv.appendChild(select);

    document.getElementById('container').appendChild(outsideDiv);
    document.getElementById('container').appendChild(outsideDiv2);
    counter++;
}

function resetDiv() {
    document.getElementById('container').innerHTML = '';
    counter = 0;
}

function handleSelection() {
    const primarySelect = document.getElementById(`primarySelect_${counter}`);
    const secondarySelectDiv = document.getElementById('secondarySelect');
    console.log(secondarySelectDiv);
    if (primarySelect.value === 'showSecondary') {
        secondarySelectDiv.style.display = 'block'; // Show secondary select
    } else {
        secondarySelectDiv.style.display = 'none'; // Hide secondary select
    }
}   
document.getElementById('addButt').addEventListener('click', addElement);

document.getElementById('resetButton').addEventListener('click', resetDiv);