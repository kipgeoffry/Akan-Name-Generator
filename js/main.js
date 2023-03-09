const femaleNames = ["Kwasi","Kwanwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const maleNames = ["Akosua","Adwao","Abenaa","Akua","Yaa","Afua","Ama",];

function getGender(){
    // get the user gender
    const gender = document.getElementById("gender").value;
    return gender;      
}

//function to check if date entered by user is valid
function validateDate(input) {
    const birthDay = document.getElementById("birthdate").value;
    const dateObj = new Date(birthDay);
    if (isNaN(dateObj)) {
        return false; // Invalid date
    }
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthDay)) {
        return false; // Date doesn't match expected format (YYYY-MM-DD)
    }
    return true; // Date is valid
}

function getBirthDate(){
    // get the user birthday
    if (validateDate() == true){
        const birthDay = document.getElementById("birthdate").value;
        console.log("Birthday:" + birthDay)
        return birthDay;        
    } else{
        alert("Enter a valid Birth date")
    }   
  
}
//function that calculates the day of the
function getDayOfWeek(){
    let day = null;
    let bornDay = getBirthDate();
    const cc = Number(bornDay.slice(0,2));
    const yy = Number(bornDay.slice(2,4));
    const mm = Number(bornDay.slice(5,7));
    const dd = Number(bornDay.slice(-2));
    let d = ( ((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
    if (d < 0){
        day = Math.floor(d*-1);
    }else{
        day = Math.floor(d);
    }
    return day;
}
//function that generated Akan name from the Day of the week
function getAkanName(){
    let sex = getGender();
    let akanName = null;
    if (sex == "male"){
        akanName = maleNames[getDayOfWeek()];     
    } else {
        akanName = femaleNames[getDayOfWeek()];       
    }
    return akanName    
}
//main function that runs the code
function main(){
    document.getElementById("output").innerHTML = "Your Akan Name is: " + getAkanName();
}

