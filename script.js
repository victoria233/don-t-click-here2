function welcome(conf) {
    if (conf === 'yes') {
        return true;
    } else {
        return confirm('💔💔💔 Adios :c');
    }
}

let conf = prompt('Esta usted seguro de querer ingresar a este kawaii sitio? 🌺🌺🌺', 'yes');

if (welcome(conf)) {
    alert('❥ Welcome ^^❣❣');
} else {
    alert('Access denied :c');
}


function catvideo() {
    location.href = "https://www.youtube.com/watch?v=uHKfrz65KSU"
}

function dogsvideo() {
    location.href = "https://www.youtube.com/watch?v=X2lIovmNsUY"
}