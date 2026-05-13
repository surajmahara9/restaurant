
function openMenu() {
  document.getElementById("sideMenu").classList.add("open");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("open");
}

  const sideMenu = document.getElementById("sideMenu");

  // OPEN MENU
  function openMenu() {
    sideMenu.classList.add("open");
  }

  // CLOSE MENU
  function closeMenu() {
    sideMenu.classList.remove("open");
  }

  // AUTO CLOSE when clicking any menu link
  document.querySelectorAll(".side-menu a").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
