let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.appendChild(tbody);
document.getElementById("output").appendChild(table);
for (let i = 1; i <= 12; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = i;
if (i % 4 === 0) {td.style.backgroundColor = "lightblue";}
    tr.appendChild(td);
    tbody.appendChild(tr);
    td.style.paddingRight = 5;
    td.style.paddingLeft = 5;
    td.style.paddingBottom = 0;
    td.style.paddingTop = 0;
    td.style.border = "solid 1px black";
}
table.style.borderSpacing = 1;
table.style.textAlign = "center";
table.style.border = "solid 1px black";