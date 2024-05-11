const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit',function(e){
    e.preventDefault();

const ht = parseInt(document.querySelector('#height').value);
const wt = parseInt(document.querySelector('#weight').value);

const res = document.querySelector('#result');
if(ht === ' ' || ht < 0 || isNaN(ht)){
    res.innerHTML = `Please enter valid height ${ht}`;
}else if(wt === ' ' || wt < 0 || isNaN(wt)){
    res.innerHTML = `Please enter valid weight ${wt}`;
}
else{
    const bmi = (wt/ ((ht*ht)/10000)).toFixed(2);
    res.innerHTML = `<span>${bmi}</span>`;

    if(bmi < 18.6){
        res.innerHTML = `<span>Under weight: ${bmi}</span>`;
    }
    else if(bmi >=18.6 && bmi < 24.9 ){
        res.innerHTML = `<span>Normal range: ${bmi}</span>`;
    }
    else
    {
        res.innerHTML = `<span>Over weight: ${bmi}</span>`;
    }
}
})