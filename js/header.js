let prevScrollpos = window.scrollY;
window.onscroll = () => {
let currentScrollPos = window.scrollY;
  if (prevScrollpos > (currentScrollPos + 200)) {
    document.getElementById("navigation").style.top = "0";
    prevScrollpos = currentScrollPos;
  }
  else if (prevScrollpos < (currentScrollPos - 200))  {
    document.getElementById("navigation").style.top = "-168px";
    prevScrollpos = currentScrollPos;
  }
 
}