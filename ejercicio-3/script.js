document.getElementById('underlineBtn').addEventListener('click', function() {
    const text = document.getElementById('text');
    text.style.textDecoration = text.style.textDecoration === 'underline' ? 'none' : 'underline';
});