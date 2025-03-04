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

    var option1 = document.createElement('option');
    option1.textContent = "N (one number)";
    option1.setAttribute('name', '1');

    var option2 = document.createElement('option');
    option2.textContent = "A list of N numbers";
    option2.setAttribute('name', '2');

    var option3 = document.createElement('option');
    option3.textContent = "A list of parameters (integers)";
    option3.setAttribute('name', '3');

    var option4 = document.createElement('option');
    option4.textContent = "A string of size N";
    option4.setAttribute('name', '4');
 
    var option5 = document.createElement("option");
    option5.textContent = "A grid of integers size N x N";
    option5.setAttribute("name", "4");
     
    var option6 = document.createElement("option");
    option6.textContent = "A grid of letters size N x N";
    option6.setAttribute("name", "6");

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
    counter++;
}

function resetDiv() {
    document.getElementById('container').innerHTML = '';
    counter = 0;
}
document.getElementById('addButt').addEventListener('click', addElement);

document.getElementById('resetButton').addEventListener('click', resetDiv);