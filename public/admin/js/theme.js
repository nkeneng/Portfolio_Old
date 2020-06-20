let bodytag = document.getElementsByTagName('body')[0];

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    bodytag.classList.toggle('dark-mode');
} else {
    bodytag.classList.toggle('light-mode');
}