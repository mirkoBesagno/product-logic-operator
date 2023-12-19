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

# General structure for functions
The structure of the two functions (and, or) is similar.
> (variableToCompare: any | Array<any| logicOperator>, params?: operator, howToHandleError?: howToHandleError)

below explained the parameters:

## variableToCompare: any | Array<any| logicOperator>.
Accepts normal types: string and number. Accepts functions and executes them before comparing. 
> Warning in case of error it will raise the error as is.

This parameter if passed singly will go directly into the matching iterator, otherwise it will have an alternate path. If array could be a simple array of elements to compare, in which case the boolean operator will be decided depending on the function called. 
> ex: xx([a,b], '==')(x1,x2,x3,x4,x5); -> a == x1 XX a == x2 XX a == x3 XX a == x4 XX a == x5 XX b == x1 XX b == x2 XX b == x3 XX b == x4 XX b == x5

instead of XX we are going to substitute the operator that is decided by the function called. So with :
- and we will have &&
- or we will have ||
But we have an additional parameter to pass(type logicOperator), this is divided into three options:
- and can be represented by: 'and', '&'
- or can be represented by: 'or', '|'
- not can be represented by: 'not', '!'


If we go to insert them we have to use a little bit of head, it may cause error.
If inserted they change the operator that stands between the various comparisons that will be held to the right and left of the symbol. Example, using an "and" operator and writing it right with "and": 
> ex: xx([a,'and',b], '==')(x1,x2,x3,x4,x5); -> a == x1 XX a == x2 XX a == x3 XX a == x4 XX a == x5 && b == x1 XX b == x2 XX b == x3 XX b == x4 XX b == x5


Note that now regardless of the method (and, or) used between the first comparison group (a)(x1,x2,x3,x4,x5) and the second (b)(x1,x2,x3,x4,x5) the scielected operator will always be infraposed, in our what 'and'.


## params?: operator
They go to determine which operation to go and execute.
> '<' | '>' | '==' | '<=' | '>=' | '!=' | ((x: any, y: any) => boolean);


you can go and use the classic comparison operators or pass a function that will be called instead.
## howToHandleError?: howToHandleError.
if the types are different the manageable cases are settable by setting the howToHandleError variable:
- error : raises error: error: different types (this is case-settable by changing the messageError variable)
- try : tries the comparison
- return : returns false if the types are different
- skip : avoids the comparison if the types are different
- convert : tries the comparison but first tries to convert to a common value




# shot
Function that proposes to perform an operation in a try-catch, trying to streamline the process and writing.
It accepts as input either a function or a value. (I'm thinking about whether to include options that can go into better specifying what happens in conversion).


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

 