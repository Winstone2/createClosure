# createClosure
A closure in JavaScript is a function that has access to the variables from its outer (enclosing) scope, even after that outer function has finished executing. This concept is particularly useful when you want to maintain some state or data encapsulation. In your case, you want to create a closure that keeps the value of variable a even after the outer function returns.
    Defining the createClosure Function: We start by defining a function named createClosure. Inside this function:
        We declare a variable a with the value 10. This is the variable that we want to maintain access to even after the createClosure function has finished executing.
        We define an inner function named innerFunction. This inner function doesn't have any parameters but does have access to the variable a declared in its outer scope (i.e., within the createClosure function).
        Inside the innerFunction, we return the value of a multiplied by 2.

    Returning the Inner Function as a Closure: After defining the inner function, we return the innerFunction from the createClosure function. This is crucial because it creates a closure. A closure is formed when a function is returned from another function and retains access to the variables from its enclosing scope (in this case, the a variable).

    Creating the Closure: Outside the createClosure function, we call it by assigning its return value to the variable closure. This step creates a closure because the innerFunction that we obtained by calling createClosure still has access to the a variable, even though createClosure has completed its execution.

    Invoking the Closure: Finally, we call the closure function. Since closure is a reference to the innerFunction returned by createClosure, it can access the variable a from its enclosing scope and performs the calculation of a * 2, resulting in the value 20.

In summary, the code demonstrates the concept of closures in JavaScript. The inner function innerFunction "closes over" the variable a from its containing scope, forming a closure that retains access to that variable even after the outer function has finished executing. This is what allows us to maintain the value of a and perform calculations using it when we invoke the closure by calling closure().
