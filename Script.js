function locoMotive() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#hero-section"),
    smooth: true,
  });
}
locoMotive();

//! Side bar-------------------------------------------------------------------------------

function clickBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
}

function hideSideBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
}
