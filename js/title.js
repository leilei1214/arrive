var link = document.querySelector('link[rel = "import"]');
var header=  link.import.querySelector('header');
var content = header.cloneNode(true);
document.getElementById('header').appendChild(content.cloneNode(true));