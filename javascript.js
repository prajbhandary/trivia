var intervalId; //  Variable that will hold our setInterval that runs the stopwatch
var clockRunning = false; // prevents the clock from being sped up unnecessarily
var time = 0;
var timeLimit = 30;
var win = 0;
var loss = 0;
var questionCountry 
//var option = [];

// var mainObject = {
//     Nepal : 'Kathmandu', 
//     India : 'New Delhi', 
//     England : 'London', 
//     USA :'Washington DC',
//     China : 'Bejing',
//     Spain :'Madrid',
//     'Sri Lanka': 'Colombo',
//     Kenya: 'Nairobi',
//     Nigeria: 'Lagos',
// 	Belguim: 'Brussels',
// 	France: 'Paris',
// 	Mexico: 'Mexico City',
// 	Croatia: 'Prague',
// 	Ireland: 'Dublin',
// 	Scotland: 'Edinburgh',
// 	Pakistan: 'Islamabad',
// 	Denmark: 'Copenhagen',
// 	Hungary: 'Budapest',

// }


var mainObject = {
"Afghanistan": "Kabul",
 "Albania": "Tirana",
 "Algeria": "Alger",
 "American Samoa": "Fagatogo",
 "Andorra": "Andorra la Vella",
 "Angola": "Luanda",
 "Anguilla": "The Valley",
 "Antigua and Barbuda": "Saint John's",
 "Argentina": "Buenos Aires",
 "Armenia": "Yerevan",
 "Aruba": "Oranjestad",
 "Australia": "Canberra",
 "Austria": "Wien",
 "Azerbaijan": "Baku",
 "Bahamas": "Nassau",
 "Bahrain": "Manama",
 "Bangladesh": "Dhaka",
 "Barbados": "Bridgetown",
 "Belarus": "Minsk",
 "Belgium": "Brussel",
 "Belize": "Belmopan",
 "Benin": "Porto-Novo",
 "Bermuda": "Hamilton",
 "Bhutan": "Thimphu",
 "Bolivia": "La Paz",
 "Bosnia and Herzegovina": "Sarajevo",
 "Botswana": "Gaborone",
 "Brazil": "Brasília",
 "Brunei": "Bandar Seri Begawan",
 "Bulgaria": "Sofia",
 "Burkina Faso": "Ouagadougou",
 "Burundi": "Bujumbura",
 "Cambodia": "Phnom Penh",
 "Cameroon": "Yaound",
 "Canada": "Ottawa",
 "Cape Verde": "Praia",
 "Cayman Islands": "George Town",
 "Central African Republic": "Bangui",
 "Chad": "N'Djam",
 "Chile": "Santiago de Chile",
 "China": "Beijing",
 "Colombia": "Bogotá",
 "Comoros": "Moroni",
 "Congo": "Brazzaville",
 "Cook Islands": "Avarua",
 "Costa Rica": "San Jos",
 "Croatia": "Zagreb",
 "Cuba": "La Habana",
 "Cyprus": "Nicosia",
 "Czech Republic": "Prague",
 "Denmark": "Copenhagen",
 "Djibouti": "Djibouti",
 "Dominica": "Roseau",
 "Dominican Republic": "Santo Domingo de Guzm",
 "East Timor": "Dili",
 "Ecuador": "Quito",
 "Egypt": "Cairo",
 "El Salvador": "San Salvador",
 "England": "London",
 "Equatorial Guinea": "Malabo",
 "Eritrea": "Asmara",
 "Estonia": "Tallinn",
 "Ethiopia": "Addis Abeba",
 "Falkland Islands": "Stanley",
 "Faroe Islands": "Tórshavn",
 "Fiji Islands": "Suva",
 "Finland": "Helsinki",
 "France": "Paris",
 "French Guiana": "Cayenne",
 "French Polynesia": "Papeete",
 "Gabon": "Libreville",
 "Gambia": "Banjul",
 "Georgia": "Tbilisi",
 "Germany": "Berlin",
 "Ghana": "Accra",
 "Gibraltar": "Gibraltar",
 "Greece": "Athens",
 "Greenland": "Nuuk",
 "Grenada": "Saint George's",
 "Guadeloupe": "Basse-Terre",
 "Guam": "Aga",
 "Guatemala": "Guatemala City ",
 "Guinea": "Conakry",
 "Guinea-Bissau": "Bissau",
 "Guyana": "Georgetown",
 "Haiti": "Port-au-Prince",
 "Honduras": "Tegucigalpa",
 "Hong Kong": "Victoria",
 "Hungary": "Budapest",
 "Iceland": "Reykjav",
 "India": "New Delhi",
 "Indonesia": "Jakarta",
 "Iran": "Tehran",
 "Iraq": "Baghdad",
 "Ireland": "Dublin",
 "Israel": "Jerusalem",
 "Italy": "Roma",
 "Ivory Coast": "Yamoussoukro",
 "Jamaica": "Kingston",
 "Japan": "Tokyo",
 "Jordan": "Amman",
 "Kazakstan": "Astana",
 "Kenya": "Nairobi",
 "Kiribati": "Bairiki",
 "Kuwait": "Kuwait",
 "Kyrgyzstan": "Bishkek",
 "Laos": "Vientiane",
 "Latvia": "Riga",
 "Lebanon": "Beirut",
 "Lesotho": "Maseru",
 "Liberia": "Monrovia",
 "Libyan Arab Jamahiriya": "Tripoli",
 "Liechtenstein": "Vaduz",
 "Lithuania": "Vilnius",
 "Luxembourg": "Luxembourg",
 "Macao": "Macao",
 "Macedonia": "Skopje",
 "Madagascar": "Antananarivo",
 "Malawi": "Lilongwe",
 "Malaysia": "Kuala Lumpur",
 "Maldives": "Male",
 "Mali": "Bamako",
 "Malta": "Valletta",
 "Marshall Islands": "Dalap-Uliga-Darrit",
 "Martinique": "Fort-de-France",
 "Mauritius": "Port-Louis",
 "Mayotte": "Mamoutzou",
 "Mexico": "Mexico City",
 "Micronesia, Federated States of": "Palikir",
 "Moldova": "Chisinau",
 "Monaco": "Monaco-Ville",
 "Mongolia": "Ulan Bator",
 "Montserrat": "Plymouth",
 "Morocco": "Rabat",
 "Mozambique": "Maputo",
 "Myanmar": "Rangoon (Yangon)",
 "Namibia": "Windhoek",
 "Nauru": "Yaren",
 "Nepal": "Kathmandu",
 "Netherlands": "Amsterdam",
 "Netherlands Antilles": "Willemstad",
 "New Caledonia": "Noum",
 "New Zealand": "Wellington",
 "Nicaragua": "Managua",
 "Niger": "Niamey",
 "Nigeria": "Abuja",
 "Norfolk Island": "Kingston",
 "North Korea": "Pyongyang",
 "Northern Ireland": "Belfast",
 "Northern Mariana Islands": "Garapan",
 "Norway": "Oslo",
 "Oman": "Mascat",
 "Pakistan": "Islamabad",
 "Palau": "Koror",
 "Palestine": "Gaza",
 "Panama": "Ciudad de Panam",
 "Papua New Guinea": "Port Moresby",
 "Paraguay": "Asunción",
 "Peru": "Lima",
 "Philippines": "Manila",
 "Poland": "Warsaw",
 "Portugal": "Lisbon",
 "Puerto Rico": "San Juan",
 "Qatar": "Doha",
 "Romania": "Bucharest",
 "Russia": "Moscow",
 "Rwanda": "Kigali",
 "Saint Helena": "Jamestown",
 "Saint Lucia": "Castries",
 "Saint Pierre and Miquelon": "Saint-Pierre",
 "Saint Vincent and the Grenadines": "Kingstown",
 "Samoa": "Apia",
 "San Marino": "San Marino",
 "Saudi Arabia": "Riyadh",
 "Scotland": "Edinburgh",
 "Senegal": "Dakar",
 "Seychelles": "Victoria",
 "Sierra Leone": "Freetown",
 "Singapore": "Singapore",
 "Slovakia": "Bratislava",
 "Slovenia": "Ljubljana",
 "Solomon Islands": "Honiara",
 "Somalia": "Mogadishu",
 "South Africa": "Pretoria",
 "South Korea": "Seoul",
 "South Sudan": "Juba",
 "Spain": "Madrid",
 "Sri Lanka": "Colombo",
 "Sudan": "Khartum",
 "Suriname": "Paramaribo",
 "Svalbard and Jan Mayen": "Longyearbyen",
 "Swaziland": "Mbabane",
 "Sweden": "Stockholm",
 "Switzerland": "Bern",
 "Syria": "Damascus",
 "Tajikistan": "Dushanbe",
 "Tanzania": "Dodoma",
 "Thailand": "Bangkok",
 "Togo": "Lom",
 "Tokelau": "Fakaofo",
 "Tonga": "Nuku'alofa",
 "Trinidad and Tobago": "Port-of-Spain",
 "Tunisia": "Tunis",
 "Turkey": "Ankara",
 "Turkmenistan": "Ashgabat",
 "Tuvalu": "Funafuti",
 "Uganda": "Kampala",
 "Ukraine": "Kyiv",
 "United Arab Emirates": "Abu Dhabi",
 "United Kingdom": "London",
 "United States": "Washington",
 "Uruguay": "Montevideo",
 "Uzbekistan": "Toskent",
 "Vanuatu": "Port-Vila",
 "Venezuela": "Caracas",
 "Vietnam": "Hanoi",
 "Wales": "Cardiff",
 "Yemen": "Sanaa",
 "Zambia": "Lusaka",
 "Zimbabwe": "Harare",
}
prepare()

function prepareHelper(){
	time = 0;
	//   var capital = Object.values(mainObject) // no longer used
	   var country = Object.keys(mainObject); // need to splice later 
		//   console.log(country)
		 
	   //random geration of question :
	   var temp1 =[Math.floor(Math.random() * country.length)]
	   questionCountry = country[temp1];
	   
	   country.splice(temp1,1); // 
	  // console.log(questionCountry)
	   // console.log('country after splice ' + country)
	 
	   var option = [];
	   var randIndex =Math.floor(Math.random() * 4);
	  // console.log(randIndex)
	   option[randIndex] = mainObject[questionCountry]
	   for(var i = 0; i < 4; i++){
		   if(option[i]==null){
			   var temp2= [Math.floor(Math.random() * country.length)]
			   option[i] = mainObject[country[temp2]]
			   country.splice(temp2,1);
		   }
				 
	   }
		 //  console.log("ANS: "+ option)
		   //console.log( option.length)
	   
		   $("#everything").empty();	
		   var question =  $('<h3>')	
			   question.attr( "id","question" )
			   question.text("What is the capital of " +questionCountry + "?")
			   $("#everything").append(question);
		   
		   for (var j = 0; j < 4; j++){
		   var answer = $('<div>')
		   answer.attr( "class","answers")
		   answer.attr( "data-name",option[j])
		   answer.text(option[j])
		   $("#everything").append(answer).append('<br/>');
		   }
			   reset1();
			   start()
			   
			   console.log("im done here");
}

function prepare(){
	var total = (win+loss)
	var isDone = false;
	if(total == 10){
		 endGame();
		 isDone = true;
	}
	console.log("total score :" + total)
	if (!isDone){
		prepareHelper()
	}
 }
 

// timer function start

	
	function reset1() {
	$("#timer").text("You have " + timeLimit  + " seconds");
	}

	 function start() {
	//  TODO: Use setInterval to start the count here and set the clock to running.
		if (!clockRunning) {
			intervalId = setInterval(count,1000);
			clockRunning = true;
		}
	}

	function count() {
	//  TODO: increment time by 1, remember we cant use "this" here.
	time++;
	var converted = timeConverter(time);
	var remaining = (timeLimit-converted);
	//  TODO: Use the variable you just created to show the converted time in the "display" div.
		$("#timer").text("You have " + remaining  + " seconds");
	if (converted >timeLimit ){
		var timesUp = $('<div>')
			//answer.attr( "class","answers")
			$("#timer").empty();
			timesUp.text(" Nothing selected times up ")
			loss++;
		$("#everything").empty();	
		$("#everything").append(timesUp).append('<br/>');
		if(converted > timeLimit+3){
			// setInterval(function(){ prepare() }, 3000);;
			prepare();
		}
		
	}
	
	}
	

	function timeConverter(t) {
	//  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
	var minutes = Math.floor(t / 60);
	var seconds = t - (minutes * 60);
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
	return  seconds;
	}
// timer ends

//remaing work 
/*
	1. onclick 
	
	2. 

*/


// on click listner
 $("#everything").on("click",".answers",function(){
	 //alert("clicked");
	 	check($(this).data("name"))
      });

function check(a){
	//	 alert(a);
	//	 console.log(a);
	var selectedAnswer = a;
	//console.log(mainObject[questionCountry])
	//console.log(selectedAnswer)
	if (mainObject[questionCountry] == selectedAnswer){
			// alert("right")
			win++;
			prepare();
	}
	else { 
		// alert ("wrong")
		loss++;
		prepare();
	};
	
}

function endGame(){
	$("#timer").empty();
	$("#timer").append("Game Over");
	$("#everything").empty();	
	$("#everything").append("correct answers :"+  win +'<br/>');
	$("#everything").append("wrong answers :"+  loss +'<br/>');
	clockRunning = false;
	clearInterval(intervalId);
}