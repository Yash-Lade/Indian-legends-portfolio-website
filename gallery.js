document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const close = document.getElementById('close');

    images.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxContent.src = this.querySelector('img').src;
        });
    });

    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});
