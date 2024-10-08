
let name= document.getElementById('name');
let age= document.getElementById('age');
let button= document.querySelector('button');
let greeting= document.createElement('p');
let response= document.createElement('p');


greeting.textContent= 'Hello lets see what your elgible for...' ;

//Remember the ON SUBMIT 



button.addEventListener('click',function(){
    document.body.appendChild(greeting);

    if (age>=0){
        if(age>=18){
            response.textContent='You are eligible to vote and drive';
            response.style.color='green';
            document.body.appendChild(response);
        }
        else if (age>=16){
            response.textContent= 'You are eligible for a learners permit but not to vote';
            response.style.color='blue';
            document.body.appendChild(response);
        }
        else{
            response.textContent= 'You are not  eligible for a learners permit or to vote';
            response.style.color='red';
            document.body.appendChild(response);
        }

    }
    else{
        response.textContent= 'Please enter a positive integer';
            document.body.appendChild(response);
    }

})


