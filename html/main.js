const bgVideo = document.getElementById("bgVideo");
const bgImage = document.getElementById("bgImage");
const logoContainer = document.getElementById("logoContainer");
const logo = document.getElementById("logo");
const serverName = document.getElementById("serverName");
const loadingCircle = document.getElementById("loadingCircle");
const loadingProgress = document.getElementById("loadingProgress");
const background = document.getElementById("background");
const music = document.getElementById("music");

// Hintergrund
if (Config.useVideoBackground) {
    bgVideo.src = Config.backgroundVideo;
    bgVideo.style.display = "block";
    bgImage.style.display = "none";
    bgVideo.play();
} else {
    bgImage.src = Config.backgroundImage;
    bgImage.style.display = "block";
    bgVideo.style.display = "none";
}

// Logo & Servername
if (Config.showLogo) {
    logo.src = Config.logoPath;
    logoContainer.style.display = "block";
} else {
    logoContainer.style.display = "none";
}
serverName.textContent = Config.serverName;

// Ladefarben
loadingCircle.style.borderTopColor = Config.loadingCircleColor;
document.getElementById("loadingProgress").style.backgroundColor = Config.loadingCircleColor;

// Fade-In Animation
setTimeout(() => {
    background.style.opacity = 1;
    logoContainer.style.opacity = 1;
}, 100);

// Musik oder Video abspielen
if (Config.useVideoAudio && Config.useVideoBackground) {
    bgVideo.muted = false;
    bgVideo.volume = Config.musicVolume;
    bgVideo.play().catch(err => {
        console.warn("Video konnte nicht automatisch gestartet werden:", err);
    });
} else {
    music.src = Config.musicFile;
    music.volume = Config.musicVolume;
    music.play().catch(err => {
        console.warn("Musik konnte nicht automatisch gestartet werden:", err);
    });
}   

// Leertaste steuert Video oder Musik
document.addEventListener("keydown", e => {
    if (e.code === "Space") {
        if (Config.useVideoAudio && Config.useVideoBackground) {
            if (bgVideo.paused) bgVideo.play();
            else bgVideo.pause();
        } else {
            if (music.paused) music.play();
            else music.pause();
        }
    }
});

 

const musicHint = document.getElementById("musicHint");
if(Config.showMusicHint) {
    musicHint.style.display = "block";
} else {
    musicHint.style.display = "none";
}

window.addEventListener('message', function(event) {
    if (event.data.eventName === 'loadProgress') {
        // Aktualisieren Sie die Balkenbreite
        const prozent = Math.round(event.data.loadFraction * 100);
        loadingProgress.style.width = prozent + "%";
        // Aktualisieren Sie die Prozentzahl im Kreis
        document.getElementById('progressPercent').textContent = prozent + '%';
    }
});   