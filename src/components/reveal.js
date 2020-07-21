const revealClass = function() {
    let element = document.getElementsByClassName("tab")[0];
    let element2 = document.getElementById("grid");
    element.classList.toggle("reveal");
    element2.classList.toggle("reveal");
  };

  
  export default revealClass;