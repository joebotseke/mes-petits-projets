// =====================================

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;
const yearsPerDays = 365;

// =====================================

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const years = document.querySelector('#years');


// =====================================
calculateButton.addEventListener("click",()=>{
    userNumberDays = dayInput.value;
    let nbrHours = (hoursPerDay*userNumberDays);
    let nbMinutes = (nbrHours*minutesPerHour);
    let nbSeconds = (nbMinutes*secondsPerMinute);
    let nbYears = (userNumberDays/yearsPerDays);

    if(userNumberDays == 1){
        hours.textContent = userNumberDays + " jour = " + nbrHours + " heures";
        minutes.textContent = userNumberDays + " jour  = "+ nbMinutes + " minutes";
        seconds.textContent = userNumberDays + " jour = " + nbSeconds + " secondes";
        years.textContent = userNumberDays + " jour = " + nbYears + " année";

        dayInput.value =" ";

    }
    else if(userNumberDays == 0){
        hours.textContent = userNumberDays + " jour = " + nbrHours + " heure";
        minutes.textContent = userNumberDays + " jour  = "+ nbMinutes + " minute";
        seconds.textContent = userNumberDays + " jour = " + nbSeconds + " seconde";
        years.textContent = userNumberDays + " jour = " + nbYears + " année";

        dayInput.value =" ";

    }
    else if(userNumberDays > 0 && userNumberDays < 1){
        hours.textContent = userNumberDays + " jour = " + nbrHours + " heures";
        minutes.textContent = userNumberDays + " jour  = "+ nbMinutes + " minutes";
        seconds.textContent = userNumberDays + " jour = " + nbSeconds + " secondes";
        years.textContent = userNumberDays + " jour = " + nbYears + " année";

        dayInput.value =" ";

    }
    else if(userNumberDays == 366){
        hours.textContent = userNumberDays + " jour = " + nbrHours + " heures";
        minutes.textContent = userNumberDays + " jour  = "+ nbMinutes + " minutes";
        seconds.textContent = userNumberDays + " jour = " + nbSeconds + " secondes";
        years.textContent = userNumberDays + " jours = " + 1 + " année";

        dayInput.value =" ";

    }

    else{ 
        hours.textContent = userNumberDays + " jours = " + nbrHours + " heures";
        minutes.textContent = userNumberDays + " jours  = "+ nbMinutes + " minutes";
        seconds.textContent = userNumberDays + " jours = " + nbSeconds + " secondes";
        if(nbYears == 1){
            years.textContent = userNumberDays + " jours = " + nbYears + " année";
            dayInput.value =" ";



        }
        else if(nbYears > 0 && nbYears < 1){
            years.textContent = userNumberDays + " jours = " + nbYears + " année";
            dayInput.value =" ";

        }
        else{ 
            years.textContent = userNumberDays + " jours = " + nbYears + " années";
            dayInput.value =" ";
        }

    }
});



  

