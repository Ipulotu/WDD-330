const overlay = document.querySelector('.overlay');

export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
                
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export function clearElement(element){
    while (element.firstChild) {
        element.firstChild.remove()
    }
}   

export async function clickSpell(url) {
  overlay.classList.add('open');
  const inner = document.querySelector('.overlay-inner')
  let query = `https://www.dnd5eapi.co${url}`;
  let spell = await getJSON(query);
  let name = document.createElement("h1");
  let ul = document.createElement("ul");
  let level = document.createElement("li");
  let range = document.createElement("li");
  let duration = document.createElement("li");
  let casting_time = document.createElement("li");
  let button = document.createElement("button");

  let desc = document.createElement("p");
  let higher_level = document.createElement("p");

  button.classList.add("close");
  button.textContent = "x Close";
  name.textContent = ` ${spell.name}`;
  level.textContent = `Level: ${spell.level}`;
  range.textContent = `Range: ${spell.range}`;
  duration.textContent = `Duration: ${spell.duration}`;
  casting_time.textContent = `Casting time: ${spell.casting_time}`;

  desc.textContent = spell.desc;
  higher_level.textContent = spell.higher_level; 

  ul.appendChild(level); 
  ul.appendChild(range);  
  ul.appendChild(duration);  
  ul.appendChild(casting_time);   

  clearElement(inner);

  inner.appendChild(button);
  inner.appendChild(name);
  inner.appendChild(ul);
  inner.appendChild(desc);
  inner.appendChild(higher_level);

  button.addEventListener('click', close);


}

export function close() {
  overlay.classList.remove('open');
}

//@@@@@@@@@@@@@@@ Local Stoage @@@@@@@@@@@@@@@

export function readFromLS(key) { 
    let data = localStorage.getItem(key);
    if (data !== null)
        return localStorage.getItem(key);
    else 
        return false;
        
}

export function writeToLS(key, data) { 
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
}



export function clearLS(key) { 
    window.localStorage.removeItem(key);
}
