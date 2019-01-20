(function() {
  var currentlyOpenedHamburger = -1;
  var hamburger = {
    navToggle: document.querySelectorAll(".nav-toggle"),
    nav: document.querySelectorAll("nav"),

    doToggle: function(e, i) {
      e.stopPropagation();
      this.navToggle[i].classList.toggle("expanded");
      this.nav[i].classList.toggle("expanded");
      currentlyOpenedHamburger = this.nav[i].classList.contains("expanded")
        ? i
        : -1;
    }
  };

  hamburger.navToggle[0].addEventListener("click", function(e) {
    hamburger.doToggle(e, 0);
  });
  hamburger.navToggle[1].addEventListener("click", function(e) {
    hamburger.doToggle(e, 1);
  });

  document.addEventListener("click", function(e) {
    if(currentlyOpenedHamburger === -1)
      return;
    if (e.target !== hamburger.nav[currentlyOpenedHamburger]) {
      hamburger.doToggle(e, currentlyOpenedHamburger);
    }
  });
})();

new WOW().init();
