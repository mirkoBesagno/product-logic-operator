import { or, and } from ".";


try {

    const tmp = or(() => { return 'ciao'; }, '==')('kk', () => { return 'ciao'; }, 'hahaha');
    console.log(tmp);

    console.log('');


} catch (error) {
    console.log(error);

}