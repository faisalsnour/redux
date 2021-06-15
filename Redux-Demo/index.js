const buy_cake = "buy_cake";


// first step is to create an action, which is an object that has type property
function buyCake() {
    return {
        type: buy_cake,
        info: "first redux action"
    }
}