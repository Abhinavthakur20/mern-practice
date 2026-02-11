const clockTime = document.getElementById("clockTime");
setInterval(() => {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = (d.getSeconds());
  const ampm = d.getHours() >= 12 ? "pm" : "am";
  clockTime.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
}, 1000);
