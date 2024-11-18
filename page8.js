function updateDateTime() {
   
    const now = new Date();
  
    const utcOffset = now.getTime() + (now.getTimezoneOffset() * 60000); 
    const istTime = new Date(utcOffset + (5.5 * 60 * 60 * 1000)); 
 
    const day = istTime.getDate();
    const month = istTime.getMonth() + 1; 
    const year = istTime.getFullYear();

    let hours = istTime.getHours();
    const minutes = istTime.getMinutes().toString().padStart(2, '0');
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
  
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${day} ${monthNames[month - 1]} ${year}`;
  
 
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    localStorage.setItem('date',formattedDate)
    localStorage.setItem('time',formattedTime)
    document.getElementById('date').textContent = storedDate;
    document.getElementById('time').textContent = storedTime;
}

function loadStoredDateTime() {
    const storedDate = localStorage.getItem('date');
    const storedTime = localStorage.getItem('time');
  
    if (storedDate && storedTime) {
      document.getElementById('date').textContent = storedDate;
      document.getElementById('time').textContent = storedTime;
    } else {
      updateDateTime();
    }
  }
  
  setInterval(updateDateTime, 1000);

  document.addEventListener('DOMContentLoaded', loadStoredDateTime);



function moveToNextInput(current, nextFieldID, prevFieldID) {
    if (current.value.length === 1 && nextFieldID) {
      document.getElementById(nextFieldID).focus(); 
    } else if (current.value.length === 0 && prevFieldID) {
      document.getElementById(prevFieldID).focus(); 
    }
  }
  
  document.getElementById('confirm-btn').addEventListener('click', function() {

    const pin1 = document.getElementById('pin1').value;
    const pin2 = document.getElementById('pin2').value;
    const pin3 = document.getElementById('pin3').value;
    const pin4 = document.getElementById('pin4').value;
  

    const enteredPIN = pin1 + pin2 + pin3 + pin4;
  
    if (enteredPIN.length === 4) {
      alert(`PIN entered: ${enteredPIN}`); 
    } else {
      alert('Please enter a 4-digit PIN');
    }
  });

  document.getElementById('pin1').addEventListener('input', function() {
    moveToNextInput(this, 'pin2', null);
  });
  document.getElementById('pin2').addEventListener('input', function() {
    moveToNextInput(this, 'pin3', 'pin1');
  });
  document.getElementById('pin3').addEventListener('input', function() {
    moveToNextInput(this, 'pin4', 'pin2');
  });
  document.getElementById('pin4').addEventListener('input', function() {
    moveToNextInput(this, null, 'pin3'); 
  });

  document.getElementById("forgot-pin").addEventListener('click',function(){
    alert("RESET PIN SMS SENT");
    });