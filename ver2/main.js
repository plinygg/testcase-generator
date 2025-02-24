function addElement() {
    var outsideDiv = document.createElement('div');
    outsideDiv.className = 'item';
    var dropdown = document.createElement('label');
    dropdown.className = 'dropdown';
    dropdown.textContent = 'What is the value on this line of the testcase?'
    var select = document.createElement('select');
    select.className = 'select';
    var option1 = document.createElement('option');
    option1.textContent = "N (one number)";
    var option2 = document.createElement('option');
    option2.textContent = "A list of N numbers";
    select.appendChild(option1);
    select.appendChild(option2);
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