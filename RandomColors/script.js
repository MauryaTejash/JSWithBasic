const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[(Math.floor(Math.random()*16))];
    }
    // console.log(color);
    return color;
}

const startchange = function(){
    document.body.style.backgroundColor = randomColor();
}

    document.querySelector('#start').addEventListener('click',function(){
    let start = setInterval(startchange,1000)

    document.querySelector('#stop').addEventListener('click',function(){
        clearInterval(start);
        start = null;
    })
});