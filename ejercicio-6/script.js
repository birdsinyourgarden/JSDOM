document.getElementById('toggleHideBtn').addEventListener('click', function() {
    const text = document.getElementById('text');
    text.style.display = text.style.display === 'none' ? 'block' : 'none';
});