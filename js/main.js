(function(){
  
    let mobile = false;
    document.querySelector('.mobile').addEventListener('click', (e) => {
      if(!mobile){
        document.querySelector('.mobile-menu').style.display = "block";
        mobile = true;
        e.stopPropagation();
      }else{
        document.querySelector('.mobile-menu').style.display = "none";
        mobile = false;
      }
    });
  })();