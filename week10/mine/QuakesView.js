  
  
  // Quake View handler
  export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
        //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
        listElement.innerHTML = '';
        let ul = document.createElement('ul');
        let fList = quakeList.features;
        fList.forEach(quake => {
            let li = document.createElement("li");
            li.innerHTML = `${quake.properties.title}, ${new Date(quake.properties.time)}`;
            li.setAttribute('data-id',`${quake.id}`);
            ul.appendChild(li);
        });
        listElement.appendChild(ul);
    }


    renderQuake(quake, element) {
      const quakeProperties = Object.entries(quake.properties);
      // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
      let ul = document.createElement('ul');
      quakeProperties.forEach(propertie => {
        let li = document.createElement('li');
        li.textContent = propertie;
        ul.appendChild(li)
      });
      element.appendChild(ul);
    }
  }

