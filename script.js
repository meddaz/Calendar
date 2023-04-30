var table = document.getElementById('calendar');
var month = document.getElementById('month');
var year = document.getElementById('year'); 
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var d = new Date();


var htmlstring = "";

var firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
var daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();

var dayCount = 1;


month.innerHTML = months[d.getMonth()];
year.innerHTML = d.getFullYear();


for (var row = 1; row <= 6; row++) {
  htmlstring += "<tr>";
  for (var col = 0; col < 7; col++) {
    if (row === 1 && col < firstDay) {
      htmlstring += "<td></td>";
    } else if (dayCount <= daysInMonth) {
      htmlstring += "<td>" + dayCount + "</td>";
      dayCount++;
    }
  }
  htmlstring += "</tr>";
}

table.insertAdjacentHTML("beforeend", htmlstring);

nextBtn.addEventListener("click", function() {
  d.setMonth(d.getMonth() + 1);
  updateCalendar();
});

prevBtn.addEventListener("click", function() {
  d.setMonth(d.getMonth() - 1);
  updateCalendar();
});

function updateCalendar() {
  
  month.innerHTML = months[d.getMonth()];
  year.innerHTML = d.getFullYear();
  
  
htmlstring = "";
  firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
  daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  dayCount = 1;
  for (var row = 1; row <= 6; row++) {
    htmlstring += "<tr>";
    for (var col = 0; col < 7; col++) {
      if (row === 1 && col < firstDay) {
        htmlstring += "<td></td>";
      } else if (dayCount <= daysInMonth) {
        htmlstring += "<td>" + dayCount + "</td>";
        dayCount++;
      }
    }
    htmlstring += "</tr>";
  }
  table.innerHTML = htmlstring;
}


