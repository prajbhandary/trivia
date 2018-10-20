var mainObject = {
    Nepal : 'Kathmandu', 
    India : 'New Delhi', 
    England : 'London', 
    USA :'Washington DC',
    China : 'Bejing',
    Spain :'Madrid',
    'Sri Lanka': 'Colombo',
    Kenya: 'Nairobi',
    Nigeria: 'Lagos',
    Belguim: 'Brussels',
    Mexico: 'Mexico City'
}

reset()

function reset(){
    var capital = Object.values(mainObject)
    var country = Object.keys(mainObject) // need to splice later 
        console.log(country)
        console.log(capital)

    //random geration of question :
    var temp1 =[Math.floor(Math.random() * country.length)]
    var questionCountry = country[temp1]
    
    country.splice(temp1,1); // 
    console.log(questionCountry)
    // console.log('country after splice ' + country)
  
    var option = [];
    var randIndex =Math.floor(Math.random() * 4);
    console.log(randIndex)
    option[randIndex] = mainObject[questionCountry]
    for(var i = 0; i < 4; i++){
        if(option[i]==null){
            var temp2= [Math.floor(Math.random() * country.length)]
            option[i] = mainObject[country[temp2]]
            country.splice(temp2,1);
        }
              
    }
        console.log("ANS: "+ option)
        console.log( option.length)
        $("#Question").text("Guess the capital of :" +questionCountry)
        $("#Option1").text(option[0])
        $("#Option2").text(option[1])
        $("#Option3").text(option[2])
        $("#Option4").text(option[3])
   
 }

function timer(){
    
}
