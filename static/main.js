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
    select.setAttribute('id', `primarySelect_${counter}`);
    select.setAttribute('data-counter', counter);
    select.setAttribute('onchange', "handleSelection(this)");

    var optionDefault = document.createElement('option');
    optionDefault.textContent = "-- Select an option --";
    optionDefault.setAttribute('value', '');
    optionDefault.setAttribute('selected', 'true');
    optionDefault.setAttribute('disabled', 'true'); 

    select.appendChild(optionDefault);

    var option1 = document.createElement('option');
    option1.textContent = "one number (# testcases, # lines)";
    option1.setAttribute('name', '1');
    option1.setAttribute('value', 'showSecondary');

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
    option4.setAttribute('value', 'showSecondary');
 
    var option5 = document.createElement("option");
    option5.textContent = "A grid of integers";
    option5.setAttribute("name", "5");
     
    var option6 = document.createElement("option");
    option6.textContent = "A grid of letters";
    option6.setAttribute("name", "6");

    // option 5 and option 6 will be special cases where it needs two possibly independent variables to select

    var outsideDiv2 = document.createElement("div");
    outsideDiv2.setAttribute('id', `secondarySelect_${counter}`);
    outsideDiv2.style.display = 'none';

    var select2 = document.createElement('select');

    for (let i = 65; i <= 90; i++) {
        const option = document.createElement("option");
        const letter = String.fromCharCode(i);
        option.value = letter;
        option.textContent = letter;
        select2.appendChild(option);
    }
    outsideDiv2.appendChild(select2);
    

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
    outsideDiv.appendChild(outsideDiv2);
    // document.getElementById('container').appendChild(outsideDiv2);
    counter++;
}

function resetDiv() {
    document.getElementById('container').innerHTML = '';
    counter = 0;
}

function handleSelection(element) {
    const counterValue = element.getAttribute('data-counter');
    const secondarySelectDiv = document.getElementById(`secondarySelect_${counterValue}`);

    if (element.value == 'showSecondary') {
        secondarySelectDiv.style.display = 'block';
    } else {
        secondarySelectDiv.style.display = 'none';
    }
}
document.getElementById('addButt').addEventListener('click', addElement);

document.getElementById('resetButton').addEventListener('click', resetDiv);