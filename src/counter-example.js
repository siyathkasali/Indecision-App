let count = 0;
const plusOne = ()=>{
    count++;
    counterApp();
};
const minusOne = ()=>{
    count--;
    counterApp();
}

const reset = ()=>{
    count=0;
    counterApp();
}


const appid = document.getElementById('app');


const counterApp = ()=>{
    const templateTwo = (
        <div>
            <h1 className="headerOne">Count: {count}</h1>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appid);
};

counterApp();