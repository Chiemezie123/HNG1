document.addEventListener("DOMContentLoaded",()=>{
    function updateTime(){
        const now = new Date();
        const utcTime = now.toUTCString().split(" ")[4];
        document.getElementById("utcTime").textContent = utcTime;
        const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        const currentDay = daysOfWeek[now.getUTCDay()];
        document.getElementById("currentDay").textContent = currentDay
    }
    updateTime();
    setInterval(updateTime, 1000);
})