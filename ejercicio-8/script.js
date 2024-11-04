document.getElementById('createBoxesBtn').addEventListener('click', function() {
    const box = document.createElement('div');
    box.style.width = '50px';
    box.style.height = '50px';
    box.style.backgroundColor = 'blue';
    document.getElementById('container').appendChild(box);
});