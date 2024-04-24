const dataArray = [ {name: 'John', age: 25, city: 'New York'}, {name: 'Jane', age: 24, city: 'Chicago'}, {name: 'Jim', age: 30, city: 'Los Angeles'} ];

function tableCreator (dataArray, targetElement) {
    // crear els elemen ts de la taula
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const keys = Object.keys(dataArray[0]);
    
    const theadRow = document.createElement('tr');
    keys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        theadRow.appendChild(th);
    });
    thead.appendChild(theadRow);
    
    dataArray.forEach(data => {
        const tr = document.createElement('tr');
        keys.forEach(key => {
        const td = document.createElement('td');
        td.textContent = data[key];
        tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    
    table.appendChild(thead);
    table.appendChild(tbody);
    targetElement.appendChild(table);
}

tableCreator(dataArray, document.body);