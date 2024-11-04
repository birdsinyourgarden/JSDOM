document.getElementById('hideBtn').addEventListener('click', function() {
    const text = document.getElementById('text');
    text.style.display = text.style.display === 'none' ? 'block' : 'none';
});