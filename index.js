const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-btn');
const banner = document. querySelector(".banner");
const overlay = document. querySelector(".modal-overlay");
const modal = document.querySelector('.modal-container')
console.log(overlay);

btn.addEventListener('click', () => {
    // btn.classList
    banner.style.display ="none";
    overlay.classList.add("open-modal");


} )


closeBtn.addEventListener('click', () => {
    overlay.classList.remove("open-modal");
    banner.style.display ="flex";
})