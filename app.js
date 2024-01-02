document.getElementById("searchBtn").addEventListener("click", ()=>{
    let searchVal = document.getElementById("searchTxt").value;
    let repo={
        methord: 'GET'
    };
    fetch(`http://api.weatherapi.com/v1/current.json?key=e9efbd0df6294e5c9fb94321233012&q=${searchVal}`,repo)
    .then(response=> response.json())
    .then(data =>{
        console.log('=====================================')
        console.log(data)
        console.log('=====================================')

        document.getElementById("tempLbl").innerHTML = data["current"]["temp_c"]+" C<sup>o"
        document.getElementById("textLbl").innerHTML = data["current"]["condition"]["text"]
        document.getElementById("countryLbl").innerHTML = data["location"]["country"]
        document.getElementById("img").src= data["current"]["condition"]["icon"]

    })
    .then(error => console.log("error", error))
})