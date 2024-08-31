document.getElementById('showPopup').addEventListener('click', function() {
    const popup = document.querySelector('.PopUp');
    const overlay = document.querySelector('.overlay');
    const content = document.getElementById('content');

    popup.classList.toggle('hidden'); // Zeigt oder versteckt die Box
    overlay.classList.toggle('hidden'); // Zeigt oder versteckt das Overlay
    content.classList.toggle('blur'); // Fügt den Blur-Effekt zum Inhalt hinzu
});

document.addEventListener('click', function(event) {
    const popup = document.querySelector('.PopUp');
    const overlay = document.querySelector('.overlay');
    const content = document.getElementById('content');

    if (!popup.classList.contains('hidden')) {
        if (!popup.contains(event.target) && !event.target.matches('#showPopup')) {
            popup.classList.add('hidden'); // Versteckt die Box
            overlay.classList.add('hidden'); // Versteckt das Overlay
            content.classList.remove('blur'); // Entfernt den Blur-Effekt vom Inhalt
        }
    }
});
