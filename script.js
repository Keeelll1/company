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