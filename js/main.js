const femaleNames = ["Kwasi","Kwanwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const maleNames = ["Akosua","Adwao","Abenaa","Akua","Yaa","Afua","Ama",];

function getGender(){
    // get the user gender
    const gender = document.getElementById("gender").value;
    console.log("Gender:", gender);   
    return gender;      
}
function getBirthDate(){
    // get the user birthday
    const birthDay = document.getElementById("birthdate").value;
    console.log("Birthday:", birthDay);
    return birthDay;
}
function getDayOfWeek(){
    let bornDay = getBirthDate();
    const cc = Number(bornDay.slice(0,2));
    const yy = Number(bornDay.slice(2,4));
    const mm = Number(bornDay.slice(5,7));
    const dd = Number(bornDay.slice(-2));
    let d = ( ((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
    let day = null;
    if (d < 0){
        day = Math.floor(d*-1)
    }else{
        day = Math.floor(d)
    }
    console.log(day);
    return day;
    
}

function getAkanName(){
    let sex = getGender();
    let akanName = null;
    if (sex == "male"){
        akanName = maleNames[getDayOfWeek()];
               
    } else {
        akanName = femaleNames[getDayOfWeek()];
        
    }
    console.log(akanName)
    return akanName
    
}

function main(){
    document.getElementById("output").innerHTML = "Your Akan Name is: " + getAkanName();
}

