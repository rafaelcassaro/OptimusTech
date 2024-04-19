const rolamento = document.querySelector(".teste-classe");
const rolamento2 = document.getElementById("teste23");

function rolar() {
    window.scrollTo(0, 500)
}

rolamento.addEventListener('click', rolar);

rolamento2.addEventListener('click', (evento) => {
    evento.preventDefault();

    const targetOffsetTop = document.getElementById('id-testse').offsetTop;
    const targetOffsetTop2 = document.querySelector(".footer__copyright").offsetTop;
    console.log(targetOffsetTop);
    console.log(targetOffsetTop2);
    // window.scrollTo({
    //     top: targetOffsetTop,
    //     behavior: 'smooth' // Adiciona animação de rolagem suave
    // });

    window.scroll({
        top: targetOffsetTop2,
        left: 100,
        behavior: "smooth",
    });

    //window.scrollTo(300,300)
});

const elemento = this.document.querySelector(".about__img")
const posY = elemento.getBoundingClientRect().top;
console.log(posY);
window.addEventListener('scroll', function () {
    const stickyElement = this.document.querySelector(".header");

    //const threshold = 400;
    //console.log(window.scrollY);

    if (window.scrollY > posY - 61) {
        stickyElement.style.display = 'none';
        //stickyElement.style.top = (window.scrollY - threshold) + 'px';
    } else if (window.scrollY < posY - 140) {
        stickyElement.style.display = 'grid';
    } else {
        //stickyElement.style.display =  'none';
    }

})