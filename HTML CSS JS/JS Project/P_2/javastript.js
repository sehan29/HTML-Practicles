let discription = document.querySelector(".discription");
function progressing() {
  let presentage = document.querySelector(".presentage");
  let ps = document.querySelector(".progross");
  let dis = document.querySelector(".disable");

  let max_width = 2;

  let shsh = setInterval(shehan, 100);

  function shehan() {
    if (max_width < 100) {
      max_width = max_width + 2;
      ps.style.width = max_width + "%";
      presentage.innerHTML = max_width + "%";
      if (max_width == 100) {
        presentage.innerHTML = "Completed";
        dis.disabled = false;
        dis.addEventListener("click", shehan_q);
      }
    } else {
      clearInterval(shsh);
    }
  }
}

function shehan_q() {
  var massage = document.createElement("h1");
  console.log(massage);
  var title_s = document.createTextNode("Download will be started...");
  var g = massage.appendChild(title_s);
  // console.log(g);
  discription.appendChild(massage);
}
