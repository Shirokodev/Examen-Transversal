function adjustRectanglePosition() {
    var rect = document.getElementById('fixed-rectangle');
    var windowHeight = window.innerHeight;
    var pageHeight = document.body.scrollHeight;
  
    if (windowHeight < pageHeight) {
      rect.style.position = 'sticky';
    } else {
      rect.style.position = 'fixed';
    }
  }
  
  window.addEventListener('resize', adjustRectanglePosition);
  adjustRectanglePosition(); 
  