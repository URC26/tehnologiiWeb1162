

function myFunction(prop) {
    // console.log(x);
    if (prop === true) {
        var x = 10;
    }
    console.log(x)
}

const myFnction2 = (prop) => {
    // console.log(x);
    if (prop === true) {
        var x = 10;
    }

    console.log(x)
}

// myFunction(true)
const user = {
    name: 'Adrian',
    sayHello: function(){
        console.log('Hello', this.name)
    },
    sayHello2: () => {
        console.log('Hello', this.name)
    }
}
