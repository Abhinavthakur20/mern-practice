const clockTime = document.getElementById("clockTime");
const clockDate = document.getElementById("clockDate");
setInterval(() => {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = (d.getSeconds());
  const ampm = d.getHours() >= 12 ? "pm" : "am";
  clockTime.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;


  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  clockDate.innerHTML = `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}, 1000);

