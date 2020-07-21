const revealClassHome = function() {
    let element = document.getElementsByClassName("tabhome")[0];
    let element2 = document.getElementById("gridhome");
    element.classList.toggle("reveal");
    element2.classList.toggle("reveal");
  };

  export default revealClassHome;