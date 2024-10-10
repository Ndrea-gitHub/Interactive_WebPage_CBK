
let names= document.getElementById('name');
let ageInput= document.getElementById('age');
let button= document.querySelector('button');
let greeting= document.createElement('p');
let response= document.createElement('p');



//Remember the ON SUBMIT 



button.addEventListener('click',function(){
    document.body.appendChild(greeting);
 let age= parseInt(ageInput.value);
 greeting.textContent= `Hello ${names.value} lets see what you are eligible for`;
    if (age>=0){
        if(age>=18){
            response.textContent='You are eligible to vote and drive';
            response.style.color='green';
            document.body.appendChild(response);
        }
        else if (age>=16){
            console.log(names.value);
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

const loc_ion= ()=>{
const locations=['Pensylvania ','Philadelphia'];
const[s,c]=locations;
console.log(s);
console.log(c);
};
loc_ion();