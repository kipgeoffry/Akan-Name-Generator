
function getPersonInfo(){
    //event.preventDefault(); // prevent the form from submitting normally
    // get the user input values
    const gender = document.getElementById("gender").value;
    const birthDay = document.getElementById("birthdate").value;
    // do something with the values, such as display them
    if (birthDay == null){
        alert("Enter a valid Birthdate")
    }
    console.log("Birthday:", birthDay);
    console.log("Gender:", gender);           
}
function getDayOfWeek(){
    const cc = Number(birthDate.slice(0,2));
    const yy = Number(birthDate.slice(2,4));
    const mm = Number(birthDate.slice(5,7));
    const dd = Number(birthDate.slice(-2));
    let d = Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
    return d
}

function getAkanName(){
    let day = null;
    if (gender == "male"){
        day = maleNames[getDayOfWeek()];
        
    } 
    else {
        day = femaleNames[getDayOfWeek()]
    }
    return day
}

function main(){
    console.log(getAkanName())
}

main()
