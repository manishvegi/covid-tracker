var btn = document.getElementById("btn1");
var con = 0;
var country;
var val;
var test12 = [];
(function () {  

    fetch('https://corona.lmao.ninja/v2/countries')
    .then((response) =>{
        return (response.json());
    })
    .then((data) => {

        // console.log(data)
        var template = ` 
        <div class= 'row justif-content-center ml-3'>
        `
        var result = document.getElementById('result')
var submen = document.getElementById('submen')

        data.forEach((element) => {
            var a = document.createElement('a')
            var countryId = `${element.country}`
            countryId = countryId.replace(/\s/g, '')
            a.appendChild(document.createTextNode(`${element.country}`))
            a.setAttribute('class','dropdown-item')
            a.setAttribute('id',`${element.country}`)
            submen.appendChild(a)
            submen.style.height = "290px"
            submen.style.overflow = "scroll"
          
        country = countryId + '1';
        template += `
        <div class= "col-lg-12  crazy text-center align-self-center "  id="` + country + `">
        <div class="list-group ">
        <a href="#" class="list-group-item list-group-item-action active">
        <strong>Country: ${element.country}</strong>
        <img src= ${element.countryInfo.flag} style="width:10%;"></img>
        </a>
        <a href="#" class="list-group-item list-group-item-action "><strong>Total Cases: <span style="color:orange;font-size:20px;">${element.cases}</span></strong></a>
        <a href="#" class="list-group-item list-group-item-action"><strong>Total Deaths: <span style="color:red;font-size:20px;">${element.deaths}</span></strong></a>
        <a href="#" class="list-group-item list-group-item-action "><strong>Active Cases: <span style="color:orange;font-size:20px;">${element.active}</span></strong></a>
        <a href="#" class="list-group-item list-group-item-action"><strong>Recovered: <span style="color:green;font-size:20px;">${element.recovered}</span></strong></a>
        </div>
        </div> 
        </div>`
            
        });

        template += `</div>`
        submen.addEventListener('click',() =>{
            window.onclick = e => {

                val = e.target.innerText + '1'   
                val = val.replace(/\s/g, '')
                if((val.slice(-1)) == '1' ){
                con = document.getElementById(val)
                test12.push(val)
                sleep(600).then(() => {
                con.classList.add('animated', 'bounceInLeft')
                con.style.display = "block"
                })
                
                 
                }
                else {
                    sleep(500).then(() => {
                        con.classList.add('animated', 'bounceInLeft')
                        con.style.display = "block"
                    })
                }
                


            }
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
              }
              
              // Usage!
              
              var i = -2
            var prev = con
            if(con == 0  || val == test12[test12.length-1]){
                var de = document.getElementById(test12[test12.length-1])
                de.classList.add('animated','bounceOutRight')
                sleep(500).then(() => {
                    // Do something after the sleep!
                    de.style.display = 'none'
                    de.classList.remove('animated','bounceOutRight')
                });

                
            }
            else{
            prev.classList.add('animated','bounceOutRight')
            sleep(500).then(() => {
                // Do something after the sleep!
                prev.style.display = 'none'
                prev.classList.remove('animated','bounceOutRight')
            });
            
            }
            
        })
        result.innerHTML =template
    })


}());















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

{/* <div class= "col-lg-3 m-2">
<div class="list-group ">
<a href="#" class="list-group-item list-group-item-action active">
<strong>Country: ${element.country}</strong>
</a>
<a href="#" class="list-group-item list-group-item-action"><strong>Cases: <span style="color:orange;font-size:20px;">${element.cases}</span></strong></a>
<a href="#" class="list-group-item list-group-item-action"><strong>Deaths: <span style="color:red;font-size:20px;">${element.deaths}</span></strong></a>
<a href="#" class="list-group-item list-group-item-action"><strong>Recovered: <span style="color:green;font-size:20px;">${element.recovered}</span></strong></a>

</div>
</div> */}