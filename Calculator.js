const calculator = {
    add : (a,b) => {return (a || 0) + (b || 0)} , 
    subtract : (a,b) => {return (a || 0) - (b || 0)},
    divide : (a,b) => {
        return (b == 0 || b == undefined ? undefined : a / b ); 
    }, 
    multiply : (a,b) => {return (a || 0) * (b || 0)}
}

module.exports = calculator;