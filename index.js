function convert(){
    var birthYear=document.getElementById('year').value;
    var birthMonth=document.getElementById('month').value;
    var birthDay=document.getElementById('day').value;
      var currentYear=new Date().getFullYear();
      var currentMonth=new Date().getMonth()+1;
      var currentDay=new Date().getDay();
      const age=currentYear - birthYear;
      const month=(age*12) + currentMonth - birthMonth;
      const month2=Math.abs((age*12)-month); 
      const day= (age*365) + (month2*30) + currentDay-birthDay;
      const day2=Math.abs((day - (age*365) + (month2*30)-365));
      // const day2 = day-(age*365);
      document.getElementById('show1').innerHTML=age;
      document.getElementById('show2').innerHTML=month2;
      document.getElementById('show3').innerHTML=day2;
    }