
const toggleModal = () => {

    const bodyClassList = document.body.classList;
    const link = document.querySelector('#link');
    const modal = document.querySelector('#myModal');

    link.addEventListener('click', (event) => {
        // event.preventDefault(); // Empêche le comportement par défaut du lien (par ex. ouvrir une nouvelle page)
        toggleModal(); // Ferme la fenêtre modale en appelant la fonction toggleModal()
        modal.scrollTop = 0;
    });

    if (bodyClassList.contains("open")) {
        bodyClassList.remove("open");
        bodyClassList.add("closed");
    } else {
        bodyClassList.remove("closed");
        bodyClassList.add("open");
    }
    const hamburgerToggler = document.querySelector(".hamburger")
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

    navLinksContainer.classList.toggle("open")
};
hamburgerToggler.addEventListener("click", toggleModal)
const navLinksContainer = document.querySelector(".navlinks-container");


