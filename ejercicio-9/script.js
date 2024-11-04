let boxCount = 0;

document.getElementById('createLimitedBoxesBtn').addEventListener('click', function() {
    if (boxCount < 5) {
        const box = document.createElement('div');
        box.style.width = '50px';
        box.style.height = '50px';
        box.style.backgroundColor = 'green'; 
        box.style.margin = '5px'; 

        document.getElementById('container').appendChild(box);
        boxCount++;
    } else {
        alert('Ya se han creado 5 cajas.');
    }
});