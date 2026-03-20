function toggleText(button) {
    const card = button.closest('.book-card');
    const dots = card.querySelector('.dots');
    const more = card.querySelector('.more-text');

    if (!dots || !more) return;

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        more.style.display = 'none';
        button.innerText = 'Show More';
    } else {
        dots.style.display = 'none';
        more.style.display = 'inline';
        button.innerText = 'Show Less';
    }
}