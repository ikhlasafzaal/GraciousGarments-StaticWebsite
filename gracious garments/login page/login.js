document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });

  // signup 
  function signup(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

    sessionStorage.setItem('name',name);
    sessionStorage.getItem('name');

    sessionStorage.setItem('email',email);
    sessionStorage.getItem('email');

    sessionStorage.setItem('password',[password]);
    sessionStorage.getItem('password');


  }

  // signin
  function signin(){
    var email=document.getElementById('eemail').value;
    var password=document.getElementById('ppassword').value;

    sessionStorage.setItem('eemail',email);
    sessionStorage.getItem('eemail');

    sessionStorage.setItem('ppassword',password);
    sessionStorage.getItem('ppassword');


  }