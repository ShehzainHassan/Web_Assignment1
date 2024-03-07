let isExpand = false;
let isNavExpand = false;

function onMenuClick() {
  const menu = document.getElementById("menuBar");
  if (!isExpand) {
    menu.style.transform = "translateX(0%)";
    isExpand = true;
  } else {
    menu.style.transform = "translateX(100%)";
    isExpand = false;
  }
}

function onNavClick() {
  const nav = document.getElementById("mobileNav");
  if (!isNavExpand) {
    nav.style.transform = "translateY(-135%)";
    isNavExpand = true;
  } else {
    nav.style.transform = "translateY(0%)";
    isNavExpand = false;
  }
}
