function toggleProject(button) {

    const details =
        button.parentElement.querySelector(".project-details");

    details.classList.toggle("open");


    if (details.classList.contains("open")) {

        button.textContent = "Hide Details";

    } else {

        button.textContent = "View Details";

    }
}