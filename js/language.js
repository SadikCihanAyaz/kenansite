var strings = new Object();

if(navigator.browserLanguage){
  lang = navigator.browserLanguage;
}else{
  lang = navigator.language;
}

lang = lang.substr(0,2).toLowerCase();



if(lang=='tr'){/////////////////////////////EN////////////////////////////////////////////////////

    strings["AboutUs"]                              = "About Us123";
    strings["ContactUs"]                              = "Cosdsds";
    strings["OurClients"]                              = "DAYIII";
        
}else{//////////////////////////////////////TR///////////////////////////////////////////////////

strings["AboutUs"]                              = "About Us";
strings["ContactUs"]                              = "Contact Us";
strings["OurClients"]                              = "Our Clients";

}

console.log(Object.values(strings)[0]);

for(var i=0; i< Object.keys(strings).length; i++)
{
    console.log('calistimi');
    document.getElementById(Object.keys(strings)[i]).innerHTML = Object.values(strings)[i];
}