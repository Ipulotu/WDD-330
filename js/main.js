

const ul = document.querySelector('ul');


function appendurl(url){

    let li = document.createElement('li');
    let a = document.createElement('a');

    a.setAttribute('href', url.url) ;
    a.textContent = url.label;
   
    li.appendChild(a);
    ul.appendChild(li);

}


const urls = [
    {
      label: "Week 1",
      url: "week1/index.html"
    },
    {
        label: "Week 2",
        url: "week2/index.html"
    },
    {
        label: "week 3",
        url: "week3/index.html"
    },
    {
      label: "week 4",
      url: "week4/index.html"
  },
  {
    label: "week 5",
    url: "week5/index.html"
  },
  {
  label: "week 6(ToDo challage)",
  url: "challage/todo/index.html"
  },
  {
  label: "week 7",
  url: "week7/index.html"
  },
  {
    label: "week 8",
    url: "week8/index.html"
  },
  {
    label: "week 9",
    url: "week9/index.html"
  },
  {
    label: "week 10",
    url: "week10/index.html"
  }

  ]


urls.forEach(url => appendurl(url));





