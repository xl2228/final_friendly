var id = 5;

window.addEventListener('DOMContentLoaded', function(){
  document.getElementById('link1').addEventListener("click", function(){
    window.location.href = "page3-1.html";
    id = 0;
  });
  document.getElementById('link2').addEventListener("click", function(){
      window.location.href = "page3-2.html";
      id = 1;

  });
  document.getElementById('link3').addEventListener("click", function(){
      window.location.href = "page3-3.html";
        id = 2;
  });
  document.getElementById('link4').addEventListener("click", function(){
      window.location.href = "page3-4.html";
        id = 3;
  });
  document.getElementById('link5').addEventListener("click", function(){
      window.location.href = "page3-5.html";
        id = 4;
  });
}
);
