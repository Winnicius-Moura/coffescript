window.addEventListener('scroll',onScroll);

onScroll()

function onScroll(){
    showBackToTopButtonOnScroll()
}

function menuMobile(){
    let menu = document.getElementById("myLinks");

    if (menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 500){
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}




