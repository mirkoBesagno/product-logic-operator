
import { or, and, check, parse } from "../index";

debugger;
describe('test-and', function () {
  it('-1', function (done) {
    try {
      const tmp = and(true, '==')(true, true, true);
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-2', function (done) {
    try {
      const tmp = and(true, '==')(true, true, true);
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-3', function (done) {
    try {
      const tmp = and(true, '==')(true, false, true);
      console.log(tmp);
      if (tmp == false) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-4', function (done) {
    try {
      const tmp = and('yeppa', '==')('haha', 'hihi', 'lol');
      console.log(tmp);
      if (tmp == false) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-5', function (done) {
    try {
      const tmp = and('ciao', (x: any) => {
        if (x == 'ciao') return true;
        else return false;
      })('haha', 'mona', 'ciao');
      console.log(tmp);
      if (tmp == false) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-6', function (done) {
    try {
      const tmp = and(undefined, '==')(undefined, null);
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-7', function (done) {
    try {
      const tmp = and(['primo', 'secondo', 'terzo'], '!=')('quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo');
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-8', function (done) {
    try {
      const tmp = and(['primo', 'secondo', 'terzo'], '!=')('primo', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo');
      console.log(tmp);
      if (tmp == false) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-9', function (done) {
    try {
      const tmp = and([0, 1, 2, 3, 4], '<')([5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-10', function (done) {
    try {
      const tmp = and([0, 1, 2, 3, 4], '>')(5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
      console.log(tmp);
      if (tmp == false) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
});


describe('test-or', function () {
  it('-1', function (done) {
    try {
      const tmp = or(true, '==')(true, true, true);
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-2', function (done) {
    try {
      const tmp = or(true, '==')(true, false, true);
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-3', function (done) {
    try {
      const tmp = or(true, '==')(false, false, false);
      console.log(tmp);
      if (tmp == false) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-4', function (done) {
    try {
      const tmp = or('yeppa', '==')('haha', 'hihi', 'lol');
      console.log(tmp);
      if (tmp == false) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-5', function (done) {
    try {
      const tmp = or('ciao', (x: any) => {
        if (x == 'ciao') return true;
        else return false;
      })('haha', 'mona', 'ciao');
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-6', function (done) {
    try {
      const tmp = or(undefined, '!=')('haha', 'mona', 'ciao');
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-7', function (done) {
    try {
      const tmp = or(undefined, '!=')(undefined, undefined, undefined);
      console.log(tmp);
      if (tmp == false) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-8', function (done) {
    try {
      const tmp = or(undefined, '!=')(undefined, null);
      console.log(tmp);
      if (tmp == false) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-9', function (done) {
    try {
      const tmp = or(undefined, '!=')(undefined, undefined, 'ciao');
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });

  it('-10', function (done) {
    try {
      const tmp = or(['primo', 'secondo', 'terzo'], '!=')('primo', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo');
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-11', function (done) {
    try {
      const tmp = or([0, 1, 2, 3, 6], '<')(5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
  it('-12', function (done) {
    try {
      const tmp = or([0, 1, 2, 3, 6], '>')(5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
      console.log(tmp);
      if (tmp == true) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
});

describe('parse', function () {
  it('-1', function (done) {
    try {
      const tmp = parse(String, 1);
      console.log(tmp);
      if (tmp == '1') {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
});


describe('check', function () {
  it('-1', function (done) {
    try {
      const tmp = check(String, 2);
      console.log(tmp);
      if (tmp) {
        console.log("OK");
        done();
      }
      else {
        console.log("NO!");
        done(new Error("Errore!"));
      }
    } catch (error) {
      console.log(error);
      done(new Error("Errore!"));
    }
  });
});