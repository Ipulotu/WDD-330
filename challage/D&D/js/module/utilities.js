



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
