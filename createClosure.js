function createClosure() {
    let a = 10; // The variable we want to keep the value of

    function innerFunction() {
        // This inner function has access to variable 'a'
        return a * 2;
    }

    return innerFunction; // Return the inner function (closure)
}

// Now, let's create a closure by calling the outer function
const closure = createClosure();

// The value of 'a' is preserved within the closure
console.log(closure()); // Output: 20
