

/*
Week Three practice


*/

// Chapter 14 Code Sandbox 
//Build a table
    const MOUNTAINS = [
        {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
        {name: "Everest", height: 8848, place: "Nepal"},
        {name: "Mount Fuji", height: 3776, place: "Japan"},
        {name: "Vaalserberg", height: 323, place: "Netherlands"},
        {name: "Denali", height: 6168, place: "United States"},
        {name: "Popocatepetl", height: 5465, place: "Mexico"},
        {name: "Mont Blanc", height: 4808, place: "Italy/France"}
      ];

    const div = document.querySelector('#table');
    let table = document.createElement('table');
    let  tr1 =  document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');

    th1.textContent = "name";
    th2.textContent = "height";
    th3.textContent = "place";
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    table.appendChild(tr1)

    MOUNTAINS.forEach(mountain =>{
        let tr = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        th1.textContent = mountain.name;
        th2.textContent = mountain.height;
        th3.textContent = mountain.place;
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        table.appendChild(tr)
    });
    div.appendChild(table)

// Chapter 15 Code Sandbox 
// Balloon

function blowUP(balloon, size){
    size *= 1.1;
    balloon.style.fontSize = size+ "px"; 
    console.log("up")
}

function blowDown(balloon, size){
    size *= .9;
    balloon.style.fontSize = size+ "px"; 
    console.log("down")
}

const balloon = document.querySelector('#balloon p');

document.addEventListener('keydown', event =>{
    let style = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
    let size = parseFloat(style);
    if (size > 40){
        balloon.textContent = "💥";
    }
    else            
        if (event.key == "ArrowUp"){
            blowUP(balloon, size)

        }
        else if(event.key == "ArrowDown"){
            blowDown(balloon, size)
        }
});

