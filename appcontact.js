
let add = document.querySelector("form button");
add.addEventListener("click", e => {
    // prevent form from being submitted
    e.preventDefault();
    let form = e.target.parentElement;
    let name = form[0].value;
    let mail = form[1].value;
    let tel = form[2].value;
    let need = form[3].value;
    let data = [name, mail, tel ,need]

    localStorage.setItem("data",JSON.stringify(data))
//   var text = document.getElementById("the-text");
//   console.log(text.value);
  console.log(data)
});