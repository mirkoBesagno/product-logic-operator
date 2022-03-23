

const { or } = require('../dist/index');


describe('test', function () {
  describe('or', function () {
    it('...', function (done) {

      try {
        tmp = or(true, '==')(true, true, true);
        console.log(tmp);
        if (tmp == true) {
          console.log("OK");
          done();
        }
        else {
          console.log("NO!");
        }
      } catch (error) {
        console.log(error);
      }
      done(new Error("Errore!"));
    });
  });
});