
var videos = ['beach', 'island', 'moai', 'ocean', 'sea', 'water'];
const randIndex = Math.floor(Math.random() * videos.length);
var vid = document.getElementById('bkvid');
vid.firstElementChild.src = 'video/' + videos[randIndex] + '.mp4';
vid.load();
vid.play()

document.querySelector('#contact .email').innerHTML = '<a href="mailto:hello@jollify.app">hello@jollify.app</a>';