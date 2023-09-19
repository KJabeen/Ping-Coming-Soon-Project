
const form = document.querySelector(".container2 form");


// OR  const form = document.querySelector(".field-container form");


const input = document.querySelector(".container2 form input");

// OR  const form = document.querySelector(".field-container form input");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // input.forEach(input => {
      
            if(input.type=='email'){
                if(validateEmail(input.value)){
                    input.parentElement.classList.remove('error');

                }else{
                    input.parentElement.classList.add('error');
                }
                
            
         
        }
    
    // })
});

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  }
