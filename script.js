const nameElement = document.getElementById('player-name');
const statusElement = document.getElementById('status');
const progressElement = document.getElementById('progress-bar');

function GameDetails(serverName, serverUrl, mapName, maxPlayers, steamId) {
    nameElement.textContent = steamId ? `SteamID: ${steamId}` : 'Steam-Spieler';
    statusElement.textContent = `Verbinde mit ${serverName || 'PhilippGaming'} ...`;
    progressElement.style.width = '22%';
}

function SetFilesTotal(total) {
    statusElement.textContent = `Lade Dateien ... 0 / ${total}`;
    progressElement.style.width = '25%';
}

let filesDownloaded = 0;
function DownloadingFile() {
    filesDownloaded += 1;
    statusElement.textContent = `Lade Dateien ... ${filesDownloaded}`;
    progressElement.style.width = `${Math.min(90, 25 + filesDownloaded * 2)}%`;
}

function SetStatusChanged(status) {
    statusElement.textContent = status || 'Server wird geladen ...';
}

window.addEventListener('load', () => {
    const video = document.getElementById('background-video');
    video.volume = 1;
    video.play().catch(() => {
        statusElement.textContent = 'Videoton wurde vom Browser blockiert.';
    });
});
