function toggleProject(button) {

    const details =
        button.parentElement.querySelector(".project-details");

    if (!details) return;

    details.classList.toggle("open");

    if (details.classList.contains("open")) {
        button.textContent = "Hide Details";
    } else {
        button.textContent = "View Details";
    }
}


/* =========================================================
   MUSIC SHOW MORE / SHOW LESS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const musicShowMore =
        document.getElementById("musicShowMore");

    const hiddenMusic =
        document.querySelectorAll(".music-hidden");

    if (!musicShowMore || hiddenMusic.length === 0) {
        return;
    }

    let musicExpanded = false;

    musicShowMore.addEventListener("click", function () {

        musicExpanded = !musicExpanded;

        hiddenMusic.forEach(function (category) {

            if (musicExpanded) {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }

        });

        musicShowMore.textContent =
            musicExpanded
                ? "SHOW LESS"
                : "SHOW MORE";
    });

});