var btn = document.getElementById("btn1");

// console.log(btn)
btn.addEventListener('click' , () =>{

    fetch('https://corona.lmao.ninja/v2/countries')
    .then((response) =>{
        return (response.json());
    })
    .then((data) => {
        var result = document.getElementById('result')
        // console.log(data)
        var template = `<h3 class='card text-center'> COVID-19 Cases </h3>
              
        `
        data.forEach((element) => {
            
            template += `
            
            <div class= "col-lg-3 m-2">
            <div class="list-group ">
      <a href="#" class="list-group-item list-group-item-action active">
      <strong>Country: ${element.country}</strong>
      </a>
      <a href="#" class="list-group-item list-group-item-action"><strong>Cases: <span style="color:orange;font-size:20px;">${element.cases}</span></strong></a>
      <a href="#" class="list-group-item list-group-item-action"><strong>Deaths: <span style="color:red;font-size:20px;">${element.deaths}</span></strong></a>
      <a href="#" class="list-group-item list-group-item-action"><strong>Recovered: <span style="color:green;font-size:20px;">${element.recovered}</span></strong></a>
   
      </div>
    </div>
    
    
            `
        });
        result.innerHTML =template
    })


})

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}