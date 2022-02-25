# product-logic-operator
It is inspired by the concept of polynomial multiplication and tries to reproduce the concept in comparison operations.
For the moment it is very minimal, for understanding an example is proposed:
```
a == x1 || a == x2 || a == x3 || a == x4 || a == x5

would become

or(a, '==')(x1,x2,x3,x4,x5);

similarly:

a == x1 && a == x2 && a == x3 && a == x4 && a == x5

would become

and(a, '==')(x1,x2,x3,x4,x5);
```

accepts normal types: strin, number
it accepts functions and executes them before comparing them, be careful in case of error it will relaunch the error as it is.

if the types are different the manageable cases are specified by setting the variable howToHandleError:
```
'error' | 'try' | 'return' | "skip"
```
I think the names speak for themselves:

error = raises an error: Error: different types (this is settable in case by modifying the variable messageError);

try = try the comparison;

return = return the comparison as if it went wrong;

skip = skip that comparison;


if not managed it raises the default error.


this is a hobby, so i will be very happy to read every suggestion and see any changes. but don't expect me to be reactive, when i enter i see if not i don't see. often i enter, and usually i could say that one (little) visit a day i do, but maybe there are hole periods of months. so let's take it easy and no stress.
thank you in advance for everything and I hope the use of the library is a help to you.
