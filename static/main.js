function addElement() {
    var outsideDiv = document.createElement('div');
    outsideDiv.className = 'item';
    outsideDiv.setAttribute('name', 'item');
    var dropdown = document.createElement('label');
    dropdown.className = 'dropdown';
    dropdown.textContent = 'What is the value on this line of the testcase?'
    var select = document.createElement('select');
    select.className = 'select';
    select.setAttribute('name', 'select')
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
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    outsideDiv.appendChild(dropdown);
    outsideDiv.appendChild(document.createElement('br'));
    outsideDiv.appendChild(select);
    document.getElementById('container').appendChild(outsideDiv);
}

function resetDiv() {
    document.getElementById('container').innerHTML = '';    
}
document.getElementById('addButt').addEventListener('click', addElement);

document.getElementById('resetButton').addEventListener('click', resetDiv);