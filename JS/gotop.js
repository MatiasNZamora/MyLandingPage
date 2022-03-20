window.onscroll = function() {
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.gtop-container')
        .classList.add('show');
    } else {
        document.querySelector('.gtop-container')
        .classList.remove('show');
    }
}

document.querySelector('.gtop-container')
.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavisor: 'smooth'
    });
})


