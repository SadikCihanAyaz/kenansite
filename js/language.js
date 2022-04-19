var strings = new Object();

if(navigator.browserLanguage){
  lang = navigator.browserLanguage;
}else{
  lang = navigator.language;
}

lang = lang.substr(0,2).toLowerCase();



if(lang=='tr'){/////////////////////////////TR////////////////////////////////////////////////////

    strings["AboutUs"]                              = "HAKKIMIZDA";
    strings["ContactUs"]                            = "İLETİŞİM";
    strings["OurClients"]                            = "FAALİYET ALANLARIMIZ";
    strings["OurWorks"]                              = "PROJELER";
    strings["wedo"]                                  = "EMLAK İŞLERİ YAPIYORUZ";
    strings["ManinPage"]                             = "ANASAYFA";
    strings["Client_Detail1"]                          = "MÜHENDİSLİK FAALİYETLERİ";
    strings["Client_Detail2"]                          = "ENDÜSTRİYEL TESİSLER";
    strings["Client_Detail3"]                          = "RESTORASYON";
    strings["Client_Detail4"]                          = "BİNA VE DEKORASYON İŞLERİ";
    strings["Client_Detail5"]                          = "MİMARLIK VE MÜHENDİSLİK HİZMETLERİ VE PROJE GELİŞTİRME";
    strings["Client_Detail6"]                          = "GAYRÜMENKUL PAZARLAMA(REAL ESTATE)";
    strings["AboutUsDetail"]              = "Türkiye’nin köklü ve itibarlı büyük işletmelerinden biri olma hedefiyle inşaat  , mühendislik - mimarlık hizmetleri , restorasyon  ve gayrimenkul pazarlama sektörlerinde hizmet vermektedir.";
    strings["AboutUsDetail1"] ="En karmaşık projeleri başarıyla üstlenebilecek ve hayata geçirebilecek durumda olan bir ekip anlayışıyla hareket eden acaryap inşaat ; Odak noktası müşterileri, çalışanları, tedarikçileri ve toplum olan şirket, sahip olduğu bilgi birikimi, beceri ve deneyimi sayesinde piyasada yektin bir ünvana sahiptir.";
    strings["AboutUsDetail2"] ="Sektörde uzmanlaşmış ekibiyle sıfır kaza ve hata oranıyla tüm projeleri hayata geçirmeye kararlıdır ve yeni iş alanlarında yatırım yaparak paydaşları için daha fazla değer yaratacak kapsamlı teknik bilgiyi istikrarla kullanmaya devam etmektedir.";
    strings["AboutUsDetail3"] ="Geniş perspektif vizyonu anlayışıyla ve yeni teknolojik araçları kullanma yöntemleriyle yurtiçinde ve yurtdışında yeni projelere öncülük etmeyi hedeflemiş kurumsal bir dünya şirketi ilkesini benimsemiştir.";
    strings["Client_Area"]                          = "FAALİYET ALANLARIMIZ";
    strings["AboutUs1"]                              = "HAKKIMIZDA";
    strings["Contact"]                              = "İLETİŞİM BİLGİLERİ";
    strings["FullName"]                              = "AD SOYAD";
    strings["Email"]                              = "Email: insaatacaryap@gmail.com";
    strings["Address"]                              = "Adres : BÜYÜK ÇAVUŞLU MAHALLESİ İSTASYON CADDESİ NO:33/1 SİLİVRİ/İSTANBUL";
    strings["PhoneNumber"]                           = "Tel : 05458332532";
    
    
        
}else{//////////////////////////////////////EN///////////////////////////////////////////////////

strings["AboutUs"]                                = "About Us";
strings["ContactUs"]                              = "Contact Us";
strings["OurClients"]                             = "Our Clients";
strings["OurWorks"]                               = "Our Works";
strings["wedo"]                                   = "WE DO REAL ESTATE";
strings["AboutUsDetail"]                          = "WE DO REAL ESTATE";
strings["ManinPage"]                             = "Main Page";
strings["Client_Detail1"]                          = "MÜHENDİSLİK YAPILARI";
strings["Client_Detail2"]                          = "ENDÜSTRİYEL TESİSLER";
strings["Client_Detail3"]                          = "RESTORASYON";
strings["Client_Detail4"]                          = "BİNA VE DEKORASYON İŞLERİ";
strings["Client_Detail5"]                          = "MİMARLIK VE MÜHENDİSLİK HİZMETLERİ VE PROJE GELİŞTİRME";
strings["Client_Detail6"]                          = "GAYRÜMENKUL PAZARLAMA(REAL ESTATE)";
strings["Client_Area"]                          = "FAALİYET ALANLARIMIZ";
strings["AboutUs1"]                                = "About Us";
strings["Contact"]                              = "CONTACT INFORMATION";
strings["FullName"]                              = "Full Name";
strings["Email"]                              = "Email";
strings["Address"]                              = "Address";
strings["PhoneNumber"]                           = "Phone Number";
strings["AboutUsDetail"]              = "Türkiye’nin köklü ve itibarlı büyük işletmelerinden biri olma hedefiyle inşaat  , mühendislik - mimarlık hizmetleri , restorasyon  ve gayrimenkul pazarlama sektörlerinde hizmet vermektedir.";
strings["AboutUsDetail1"] ="En karmaşık projeleri başarıyla üstlenebilecek ve hayata geçirebilecek durumda olan bir ekip anlayışıyla hareket eden acaryap inşaat ; Odak noktası müşterileri, çalışanları, tedarikçileri ve toplum olan şirket, sahip olduğu bilgi birikimi, beceri ve deneyimi sayesinde piyasada yektin bir ünvana sahiptir.";
strings["AboutUsDetail2"] ="Sektörde uzmanlaşmış ekibiyle sıfır kaza ve hata oranıyla tüm projeleri hayata geçirmeye kararlıdır ve yeni iş alanlarında yatırım yaparak paydaşları için daha fazla değer yaratacak kapsamlı teknik bilgiyi istikrarla kullanmaya devam etmektedir.";
strings["AboutUsDetail3"] ="Geniş perspektif vizyonu anlayışıyla ve yeni teknolojik araçları kullanma yöntemleriyle yurtiçinde ve yurtdışında yeni projelere öncülük etmeyi hedeflemiş kurumsal bir dünya şirketi ilkesini benimsemiştir.";

}

for(var i=0; i< Object.keys(strings).length; i++)
{
    if(document.getElementById(Object.keys(strings)[i]) !== null)
    {
      document.getElementById(Object.keys(strings)[i]).innerHTML = Object.values(strings)[i];
    }

}