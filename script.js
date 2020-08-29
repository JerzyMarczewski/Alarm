// variables
const clock = document.querySelector('.clock');
const hours_info = document.querySelector('.time-info-hours');
const minutes_info = document.querySelector('.time-info-minutes');
const sliders = document.querySelectorAll('.slider');
const button = document.querySelector('.btn');
const alarms_container = document.querySelector('.alarms-container');
let alarms = document.querySelectorAll('.alarm');
let dt = new Date();

// change time
setInterval(function() {
    let alarms = document.querySelectorAll('.alarm');
    //console.log(alarms[0].innerText.substr(0,2) + alarms[0].innerText.substr(3,2));
    dt = new Date();
    let hours = (dt.getHours().toString().length === 1) ? '0' + dt.getHours() : dt.getHours();
    let minutes = (dt.getMinutes().toString().length === 1) ? '0' + dt.getMinutes() : dt.getMinutes();
    let seconds = (dt.getSeconds().toString().length === 1) ? '0' + dt.getSeconds() : dt.getSeconds();
    // check for alarm
    clock.innerText = hours + ':' + minutes + ':' + seconds;

    if (alarms.length !== 0 && seconds === '00'){
        for(x in alarms) {
            console.log(alarms[x].innerText);
        }
    }
        
}, 500)

// button control
button.addEventListener('click', addAlarm);

function addAlarm(e) {
    // create alarm
    const alarm = document.createElement('div');
    alarm.classList.add('alarm');
    alarm.innerText = 
        ((sliders[0].value.toString().length == 1) ? '0' + sliders[0].value : sliders[0].value)
        + ':' + 
        ((sliders[1].value.toString().length == 1) ? '0' + sliders[1].value : sliders[1].value);

    alarms_container.appendChild(alarm);
    // add icon
    const icon = document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-times-circle');
    alarm.appendChild(icon);
    icon.addEventListener('click', deleteAlarm)

    // ring
    // if (dt.getHours == )
    // alarm.classList.add('ringing');
}

// delete alarm
function deleteAlarm(e) {
    // deletes alarm
    const alarm = e.target.parentElement;
    alarm.classList.remove('ringing');
    alarm.classList.add('delete');
    alarm.addEventListener('animationend', function() {
        alarm.remove();
    })
   
}

// reset sliders value on load
for (slider in sliders) {
    sliders[slider].value = 0;
}


sliders[0].oninput = function() {
    hours_info.innerText = 'hours : ' + this.value;
}

sliders[1].oninput = function() {
    minutes_info.innerText = 'minutes : ' + this.value;
}
