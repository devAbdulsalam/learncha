// Preloader
window.addEventListener("load", function () {
    this.setTimeout(() => {
      this.document.querySelector(".preloader").style.display = "none";
    }, 500); //3000ms = 3s
  });
  
  // AOS
  AOS.init({
    duration: 1000,
    delay: 500,
  });
  
  // clock starts here
  function clock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
  
    if (h == 0) {
      h = 12;
    }
  
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("Clock").innerText = time;
    setTimeout(clock, 1000);
  }
  
  clock();
  
  // clock ends here
  