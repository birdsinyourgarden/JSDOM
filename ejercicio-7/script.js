let boxCreated = false;

document.getElementById('createBoxBtn').addEventListener('click', function() {
    if (!boxCreated) {
        const box = document.createElement('div');
        box.style.width = '50px';
        box.style.height = '50px';
        box.style.backgroundColor = 'red';
        document.getElementById('container').appendChild(box);
        boxCreated = true;
    }
});