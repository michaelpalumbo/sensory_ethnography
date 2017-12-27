var x = 0;

x.onload = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (163 - 1 + 1)) + 1;
var el = document.getElementById('index');
el.index = ("https://michaelpalumbo.github.io/thst6329/index" + x + ".html");
console.log(x);
};