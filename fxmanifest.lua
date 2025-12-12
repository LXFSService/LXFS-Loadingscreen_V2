fx_version('cerulean')
game('gta5')

author("LXFS - Service & Co.")
description("The new V2 version of the LXFS loadingscreen!")
version("2.0")

loadscreen('html/index.html')
loadscreen_cursor('no')

files({
    'html/index.html',
    'html/style.css',
    'html/main.js',
    'html/config.js',
    'html/media/*.png',
    'html/media/*.jpg',
    'html/media/*.mp4',
    'html/media/*.mp3'
})