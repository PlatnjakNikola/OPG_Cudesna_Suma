var navToggler = document.querySelector('button.button-hamburger'),
                navList = document.querySelector('ul.nav-list');
				
navToggler.addEventListener("click", function() {
  this.classList.toggle('open');
  navList.parentElement.classList.toggle('open');
  
  const currentState = navToggler.getAttribute("data-state");

  if (!currentState || currentState === "closed") {
    navToggler.setAttribute("data-state", "opened");
    navToggler.setAttribute("aria-expanded", "true");
  } else {
    navToggler.setAttribute("data-state", "closed");
    navToggler.setAttribute("aria-expanded", "false");
  }
});
