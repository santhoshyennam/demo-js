
function onLoad() {
    var title = document.getElementsByClassName("accordion-title");
    var index;
    for (index = 0; index < title.length; index++) {
    title[index].addEventListener("click", function() {
        this.classList.toggle("active");
        var currentElement = this.nextElementSibling;
        if (currentElement.style.display === "block") {
        currentElement.style.display = "none";
        } else {
        currentElement.style.display = "block";
        }
    });
    }
}


function onClickButton1(){
    document.getElementById("text").textContent ="You have clicked on one.";
}
function onClickButton2(){
    document.getElementById("text").textContent ="You have clicked on two.";
}
function onClickButton3(){
    document.getElementById("text").textContent ="You have clicked on three.";
}

function validate() {
    const regexForEmail = /\S+@\S+\.\S+/;
    if (!regexForEmail.test(document.getElementById('input').value)) {
      document.getElementById('errorText').style.display = 'block';
      return false;
    }
    return true;
  }