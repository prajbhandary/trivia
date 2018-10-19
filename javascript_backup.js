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
    
    /*
    // 1. insert the right answer 
        option[0] = mainObject[questionCountry]// correct answer
     //   console.log('write answer option 1 '+ option[0])
        $("#Option1").text(option[0])
        
        var temp2= [Math.floor(Math.random() * country.length)]// these can generate same values need avoid similar options
        option[1] = mainObject[country[temp2]]
        country.splice(temp2,1);
        // console.log(' country 2 '+ option[1])
        // console.log('country after splice 2 ' + country)
        $("#Option2").text(option[1])  

        var temp3 = [Math.floor(Math.random() * country.length)] // these can generate same values need avoid similar options
        option[2] =mainObject[country[temp3]]
        country.splice(temp3,1);
        // console.log('country 3 '+ option[2])
        // console.log('country after splice 3 ' + country)
        $("#Option3").text(option[2])
           
        var temp4 = [Math.floor(Math.random() * country.length)] // these can generate same values need avoid similar options
        option[3] = mainObject[country[temp4]] // these can generate same values need avoid similar options
        country.splice(temp4,1);
        $("#Option4").text(option[3])
        // console.log('country 4 '+ option[3])
       
        // console.log('country after splice 4 ' + country)
*/

        console.log("ANS: "+ option)
        console.log( option.length)
        $("#Question").text("Guess the capital of :" +questionCountry)
        $("#Option1").text(option[0])
        $("#Option2").text(option[1])
        $("#Option3").text(option[2])
        $("#Option4").text(option[3])
   
 }

 function display() {



 }
