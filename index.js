function convert(){
    
    var birthYear=document.getElementById('year').value;
    var birthMonth=document.getElementById('month').value;
    var birthDay=document.getElementById('day').value;
      var currentYear=new Date().getFullYear();
      var currentMonth=new Date().getMonth()+1;
      var currentDay=new Date().getDay();
      const age=currentYear - birthYear;
      const allMonth=(age*12) + currentMonth - birthMonth;
      const month=Math.abs((age*12)-allMonth); 
      const allDay= (age*365) + (month2*30) + currentDay-birthDay;
      const day=Math.abs((allDay - (age*365) + (month2*30)-365));
      document.getElementById('show1').innerHTML=age;
      document.getElementById('show2').innerHTML=month;
      document.getElementById('show3').innerHTML=day;
    }
   