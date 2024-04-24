const $d = document;

const $img = 'https://banner2.cleanpng.com/20180516/hiq/kisspng-jaguar-cars-jaguar-e-type-jaguar-xj-cars-logo-5afcc8a2043140.6132078215265158740172.jpg';

const $div = document.createElement('div');

$d.addEventListener('DOMContentLoaded', () => {
    $div.innerHTML = `<img src="${$img}" alt="Jaguar">`;
    $d.body.appendChild($div);
}
);