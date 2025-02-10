
    document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("introShown")) {
      setTimeout(function () {
        document.getElementById("intro-overlay").style.opacity = "0";
        setTimeout(function () {
          document.getElementById("intro-overlay").style.display = "none";
        }, 1000);
      }, 5000);
      sessionStorage.setItem("introShown", "true");
    } else {
      document.getElementById("intro-overlay").style.display = "none";
    }
  });