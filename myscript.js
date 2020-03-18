var dice=0,totalScore1=0, totalScore2=0, activePlayer, scoreP1=0,scoreP2=0 , new1=0,new2=0;
/////////////The Pig Dice Game///////////
activePlayer=1;
document.getElementById("turn1").classList.add("turn11");
document.getElementById("win").classList.remove("winner1");
document.getElementById("win").classList.remove("winner1");
document.querySelector('.button1').addEventListener
    ('click',function()
{
      dice = Math.floor(Math.random()*6+1);
      document.querySelector('#current'+ activePlayer).textContent= dice;
      if(dice!==1 )
      {
        if(activePlayer === 1)
            {
              scoreP1 = totalScore1 + dice;
              totalScore1 = scoreP1;
            }
        if(activePlayer === 2)
            {
              scoreP2 = scoreP2 + dice;
              totalScore2 = scoreP2;
            }
        }
      if (dice===1)
      {
        dice =0;
        if(activePlayer === 2)
          {
            totalScore2=new2;
            activePlayer =1;
            document.getElementById("turn1").classList.add("turn11");
            document.getElementById("turn2").classList.remove("turn12");
          }
        else
          {
            totalScore1=new1;
            activePlayer = 2;
            document.getElementById("turn2").classList.add("turn12");
            document.getElementById("turn1").classList.remove("turn11");
          }
       }
});
document.querySelector('.hold1').addEventListener
    ('click',function()
    {
        document.querySelector('.scoresc1').textContent= totalScore1;
        new1 = totalScore1;
        if(new1>= 50)
         {
           document.getElementById("win").classList.add("winner1");
           document.getElementById("win").innerHTML = "WINNER!!!";
         }
        document.getElementById("turn2").classList.add("turn12");
        document.getElementById("turn1").classList.remove("turn11");
        activePlayer = 2;
    });
document.querySelector('.hold2').addEventListener
    ('click',function()
    {
        document.querySelector('.scoresc2').textContent= totalScore2;
        new2 = totalScore2;
        if(new2 >=50)
         {
           document.getElementById("win").classList.add("winner2");
           document.getElementById("win").innerHTML = "WINNER!!!";
         }
        document.getElementById("turn1").classList.add("turn11");
        document.getElementById("turn2").classList.remove("turn12");
        activePlayer = 1;
    });
  console.log(totalScore1);
  console.log('#current'+ activePlayer);
//////////////The Pig Dice Game////END////////////

setTimeout(pop_up_timer,5000)
function pop_up_timer()
{
  document.getElementById("popup").style.display="block";
  document.getElementById("popupb").style.display="block";
}
document.querySelector('.btn_btn-outline-dark').addEventListener
    ('click',function()
    {
      document.getElementById("popup").style.display="none";
      document.getElementById("popupb").style.display="none";
    });
