function add() {
  let d = document.getElementById("d");
  let err = document.getElementById("err");
  let box = document.getElementById("box");

  if (d.value == "") {
    err.innerHTML = "please enter value";
  } else {
    err.innerHTML = "";

    let li = document.createElement("li");
    let a = document.createElement("a");
    let v = document.createElement("a");

    a.id = "ah"
    a.textContent = "X"
    a.style = "margin-left: 320px"
    v.id = "av"
    v.textContent = "V"
    v.style = "margin-left: 60px"

    li.textContent = d.value;

    li.appendChild(a);
    li.appendChild(v)

    let pos = box.firstElementChild;

    if (pos === null) {
      box.appendChild(li);
    } else {
      box.insertBefore(li, pos);
    }

    d.value = "";
  }
  let btn = document.querySelector("ul");
  let li = document.querySelector("li");
  let ah = document.querySelector("#ah");
  let av = document.querySelector("#av");
  
  ah.addEventListener("click", (e) => {
  
    let b2 = document.getElementById("box");
    let li1 = e.target.parentElement;

    console.log(li1);
    b2.removeChild(li1);
  });
  av.addEventListener("click", (e) => {
  
    let b2 = document.getElementById("box");
    let li1 = e.target.parentElement;
    // li1.addClass("av")
    console.log(li.classList.add("av"));
  });



}

  
