var temp,maxtemp,mintemp,desc,wind,hum,main,day,night;
function weather(input)
{
  var city = input;
    // var myurl="https://api.openweathermap.org/data/2.5/find?q=";
    var myurl="https://api.openweathermap.org/data/2.5/forecast?q=";
    var key="4601988c7a8b42bafdde82109548eeb3";
    var url=myurl+city+"&appid="+key;
    

fetch(url)
.then(data => {
    return data.json();
  }).then(displayResults);
}
function displayResults (data) {
  var k=parseInt("273.15");
          console.log(data);
          if(data.cod=="404")
          {
            alert("Enter a valid City Name");
            document.getElementById("place").value = "";
            location.reload();
          }
          document.getElementById("de").innerHTML=Math.round(data.list[0].main.temp-k)+"°C";
          document.getElementById("description").innerHTML=data.list[0].weather[0].description;
          document.getElementById("humidity").innerHTML="Hum:"+data.list[0].main.humidity+"%";
          document.getElementById("wind").innerHTML="WS:"+Math.round(data.list[0].wind.speed)+"mph";
          document.getElementById("min").innerHTML="Min:"+Math.round(data.list[0].main.temp_min-k)+"°c";
          document.getElementById("max").innerHTML="Max:"+Math.round(data.list[0].main.temp_max-k)+"°c";
          document.getElementById("d1").innerHTML=Math.round(data.list[0].main.temp-k)+"°C";
          document.getElementById("d2").innerHTML=Math.round(data.list[9].main.temp-k)+"°C";
          document.getElementById("d3").innerHTML=Math.round(data.list[18].main.temp-k)+"°C";
          document.getElementById("d4").innerHTML=Math.round(data.list[25].main.temp-k)+"°C";
          document.getElementById("d5").innerHTML=Math.round(data.list[33].main.temp-k)+"°C";

          document.getElementById("d1r").innerHTML=data.list[0].weather[0].description;
          document.getElementById("d2r").innerHTML=data.list[9].weather[0].description;
          document.getElementById("d3r").innerHTML=data.list[18].weather[0].description;
          document.getElementById("d4r").innerHTML=data.list[25].weather[0].description;
          document.getElementById("d5r").innerHTML=data.list[33].weather[0].description;
  
        
    }
  


     
       
  


