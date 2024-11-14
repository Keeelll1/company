const showContent = () => {
    const btns = document.querySelectorAll('.solution-btn'),
        blocks = document.querySelectorAll('.solution-content-wrapper')

    btns.forEach(btn => {

        btn.addEventListener('click', (e) => {
            const target  = e.target;
            
            btns.forEach(item => {
                item.classList.remove('active')
            });

            target.classList.add('active');

            blocks.forEach(item => {
                item.classList.remove('show-content')
            });

            const id = target.getAttribute('data-id'),
                targetBlock = document.querySelector(`.solution-content-wrapper[data-id="${id}"]`);
            
            if(targetBlock){
                targetBlock.classList.add('show-content')
            }
        })
    })
}

showContent();

const showPopup = (content, closeButton, openButton, overlay) => {
        content = document.querySelector(content),
        closeButton = document.querySelector(closeButton),
        openButton = document.querySelectorAll(openButton),
        overlay = document.querySelector(overlay)

    openButton.forEach(btn => {
        btn.addEventListener('click', () => {
            content.classList.add('show-popup');
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        })

        closeButton.addEventListener('click', () => {
            content.classList.remove('show-popup');
            document.body.style.overflow = '';
            overlay.style.display = 'none';
        })
    })
}

showPopup('.popup-test', '.popup-cross', '.info-btn', '.overlay');
showPopup('.popup-test', '.popup-cross', '.about-btn', '.overlay');
showPopup('.popup-test', '.popup-cross', '.choose-btn', '.overlay');
showPopup('.popup-test', '.popup-cross', '.advantages-btn', '.overlay');

const showBurgerMenu = () => {
    const openBtn = document.querySelector('.burger-wrapper'),
        closeBtn = document.querySelector('.burger-cross'),
        burgerContent = document.querySelector('.burger-menu-content')

    openBtn.addEventListener('click', () => {
        openBtn.style.display = 'none';
        burgerContent.style.display = 'flex';
    })

    closeBtn.addEventListener('click', () => {
        openBtn.style.display = 'flex';
        burgerContent.style.display = 'none';
    })
}

showBurgerMenu();