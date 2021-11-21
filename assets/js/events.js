const closeBtn = document.querySelector("#btn-close-player");
const showPlayerContainer = document.querySelector(".player-container");
const player = document.querySelector('#player');

function ShowPlayer(evt) {
    showPlayerContainer.style.display = 'flex';
    closeBtn.style.display = 'flex';
    player.insertAdjacentHTML("afterbegin", "<iframe src='https://www.youtube.com/embed/3f2CYnOgtDU' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope' allowfullscreen></iframe>");
};

function ClosePlayer(evt) {
    showPlayerContainer.style.display = '';
    if (closeBtn.style.display === 'flex') {
        closeBtn.style.display = '';
    }
    player.innerHTML = '';
    player.appendChild(closeBtn);
}