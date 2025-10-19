const buttons = document.querySelectorAll('.expandable-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Crear overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // Crear modal
        const modal = document.createElement('div');
        modal.classList.add('modal-content');
        modal.innerHTML = button.querySelector('.button-content').innerHTML;

        // Botón de cerrar
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-btn');
        closeBtn.innerText = 'X';
        modal.appendChild(closeBtn);

        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        overlay.style.display = 'flex';

        // Cerrar al hacer click
        overlay.addEventListener('click', e => {
            if(e.target === overlay || e.target === closeBtn){
                document.body.removeChild(overlay);
            }
        });
    });
});
