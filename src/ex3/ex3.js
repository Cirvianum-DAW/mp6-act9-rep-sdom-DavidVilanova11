const $d = document;

const $uls = $d.querySelectorAll('ul');

$uls.forEach($ul => {
    const $firstLi = $ul.querySelector('li:first-child');
    const $lastLi = $ul.querySelector('li:last-child');

    $firstLi.style.background = 'red';
    $lastLi.style.background = 'green';


} );

