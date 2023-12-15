
# Introduction
It is inspired by the concept of **polynomial multiplication** and tries to reproduce the concept in **comparison operations**.
For the moment it is very minimal, an example is proposed for understanding:

## Example
### OR
This is a series of classically written comparisons.
> a == x1 || a == x2 || a == x3 || a == x4 || a == x5
 
from so would become so: 

> or(a, '==')(x1,x2,x3,x4,x5);

### AND
similarly:

> a == x1 && a == x2 && a == x3 && a == x4 && a == x5

would become

> and(a, '==')(x1,x2,x3,x4,x5);
# OPTIONS
Accepts normal types: string and number. Accepts functions and executes them before comparing. 
> Warning in case of error it will raise the error as is.

## howToHandleError.
if the types are different the manageable cases can be specified by setting the howToHandleError variable:
- error : raises error: error: different types (this is case-settable by changing the messageError variable)
- try : tries the comparison
- return : returns false if the types are different
- skip : avoids the comparison if the types are different
- convert : tries the comparison but first tries to convert to a common value

# Operators
Last is the discussion of comparison operators. These are the classic ones ( ==, <, >, etc.) in addition you can go and insert a function that does this task.
> eg: and(tmp, (x, y) => { if(x>y)return true; else return false; }, 'convert')(true, 'true', 1);

# Shot
Function that proposes to perform an operation in a try-catch, trying to streamline the process and writing.
It accepts as input either a function or a value. (I'm thinking about whether to include options that can go into better specifying what happens in conversion.)

## Example.
const message = shot(() => {
    if (tmp == true) {
        return 'hello';
    }
    else if (tmp == false) {
        return 'wella';
    }
    else {
        throw new Error("monazza");
    }
});