var nav = document.getElementsByTagName('nav')[0],
    navButton = document.getElementById('nav-button');

function emailMe(address) {
    window.open('mailto:' + address + '@veritased.org');
}

document.getElementById('nav-button').onclick = function() {
    if (nav.className === 'open') {
        nav.className = '';
        navButton.className = '';
    } else {
        nav.className = 'open';
        navButton.className = 'open';
    }
};
