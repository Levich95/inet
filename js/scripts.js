let links = document.querySelectorAll('.menu__item');
let contents = [];
links.forEach(function(item) {
    let targetId = '#' + item.hash.slice(1);
    contents.push(document.querySelector(targetId));
});

function router() {
    let target = document.querySelector('#' + this.hash.slice(1));

    links.forEach(function(item) {
        item.classList.remove('menu__item_active');
    });

    contents.forEach(function(item) {
        item.style.display = 'none';
    });

    this.classList.add('menu__item_active');
    target.style.display = 'block';
}

links.forEach(function(item) {
    item.addEventListener('click', router);
});