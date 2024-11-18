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