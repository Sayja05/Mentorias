//mostrar la flecha cuando se hace scroll hacia abajo
window.addEventListener("scroll", function() {
    let backToTopButton= document.querySelector(".back-to-top");

    if(window.scrollY > 300) {
        backToTopButton.classList.add ("show-back-to-top");
    } else {
        backToTopButton.classList.remove("show-back-to-top")
    }
});

//animar el despazamielto al principio de la página
document.querySelector(".back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
});
});
