const modal = document.querySelector(".modal-video");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function videoModal() {
    modal.classList.toggle("show-modal-video");
}

function windowOnClick(event) {
    if (event.target === modal) {
        videoModal();
    }
}

trigger.addEventListener("click", videoModal);
closeButton.addEventListener("click", videoModal);
window.addEventListener("click", windowOnClick);