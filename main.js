function nein() {
    let nein = document.getElementById('nein');
    let body = document.getElementById('body');
    window.open("https://google.com", "_self");
}
function ja() {
    let ja = document.getElementById('ja');
    let body = document.getElementById('body');
    let main = document.getElementById('main');
    main.classList.toggle("hide");
}