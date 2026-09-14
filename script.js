const playerName = document.getElementById('player-name');
const progressBar = document.getElementById('progress-bar');
const statusText = document.getElementById('status');

function setProgress(value, status) {
    progressBar.style.width = `${Math.max(0, Math.min(100, value))}%`;
    if (status) statusText.textContent = status;
}

// Garry's Mod calls this when the loading screen receives server details.
function GameDetails(serverName, serverUrl, mapName, maxPlayers, steamId) {
    if (steamId) playerName.textContent = `SteamID: ${steamId}`;
    setProgress(18, `Verbinde mit ${serverName || 'dem Server'} ...`);
}

function SetFilesTotal(total) {
    setProgress(20, `Lade Dateien ... 0 / ${total}`);
}

let downloadedFiles = 0;
function DownloadingFile(fileName) {
    downloadedFiles += 1;
    const totalText = document.querySelector('#status').textContent.match(/\/ (\d+)/);
    const total = totalText ? Number(totalText[1]) : downloadedFiles;
    setProgress(20 + (downloadedFiles / Math.max(total, 1)) * 65, `Lade Dateien ... ${downloadedFiles} / ${total}`);
}

function SetStatusChanged(status) {
    statusText.textContent = status || 'Server wird geladen ...';
}

function SetFilesNeeded(needed) {
    setProgress(needed ? 30 : 95, needed ? 'Benötigte Dateien werden geladen ...' : 'Bereit zum Verbinden');
}

window.addEventListener('load', () => {
    const video = document.getElementById('background-video');
    video.play().catch(() => {});
});
