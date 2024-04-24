const $d = document;
const $ul = $d.querySelector('ul');

const fruitList = ['poma', 'plàtan', 'tomàquet'];

$d.addEventListener('DOMContentLoaded' , () => {
fruitList.forEach(fruit => {
    const $li = $d.createElement('li');
    $li.textContent = fruit;
    $ul.appendChild($li);
});

});
