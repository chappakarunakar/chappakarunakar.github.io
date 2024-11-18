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


function addAmount(amount) {
    const inputField = document.getElementById('amount-input');
    const currentAmount = parseInt(inputField.value) || 0; 
    const newAmount = currentAmount + amount;
  
    if (newAmount <= 30000) {
      inputField.value = newAmount;
    } else {
      alert('Maximum limit of RS 30,000 exceeded');
    }
  }
  document.getElementById('btn-2000').addEventListener('click', function() {
    addAmount(2000);
  });
  
  document.getElementById('btn-500').addEventListener('click', function() {
    addAmount(500);
  });
  
  document.getElementById('btn-200').addEventListener('click', function() {
    addAmount(200);
  });
  
  document.getElementById('btn-100').addEventListener('click', function() {
    addAmount(100);
  });
  
  document.getElementById('btn-proceed').addEventListener('click', function() {
    const inputField = document.getElementById('amount-input');
    alert(`You have selected RS ${inputField.value}`);
  });
  