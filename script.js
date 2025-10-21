// Wait until the document has been fully parsed
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll from hero arrow to info section
    const scrollLink = document.querySelector('.scroll-down');
    if (scrollLink) {
        scrollLink.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.getElementById('info');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Enable copying of the IP address when clicked
    const ipParagraph = document.querySelector('.ip');
    if (ipParagraph) {
        ipParagraph.addEventListener('click', () => {
            const ipText = ipParagraph.textContent.replace(/IP:/i, '').trim();
            // Use the Clipboard API if available
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(ipText).then(() => {
                    ipParagraph.classList.add('copied');
                    ipParagraph.title = 'IP скопирован!';
                    setTimeout(() => {
                        ipParagraph.classList.remove('copied');
                        ipParagraph.title = 'Нажмите, чтобы скопировать IP';
                    }, 2000);
                }).catch(() => {
                    // Fallback for unsupported browsers
                    alert('Не удалось скопировать IP');
                });
            }
        });
    }
});