module.exports = function(tick){
    let count = 10;

    let timer = setInterval(_=>{
        tick(count--);
        if(count === 0)
            clearInterval(timer);
    }, 1000);
}