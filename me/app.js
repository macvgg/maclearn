document.addEventListener("DOMContentLoaded", function () {
  const close = document.getElementById("closea");
  const pages = document.querySelector(".pages");
  close.addEventListener("click", function () {
    close.parentElement.parentElement.style.display = "none";
    localStorage.setItem("maclearnclose", "closed");
  });
  let pagesf = Array.from(pages.children);
  if (localStorage.macLearnFavorites) {
    let favoritesl = localStorage.macLearnFavorites.split(",");
    let favorites = Array.from(favoritesl);
    pagesf.forEach((pagef) => {
      favorites.forEach((favorite) => {
        if (pagef.getAttribute("name") === favorite) {
          pagef.style.display = "block";
        }
      })
    });
  }
});
