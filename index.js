import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next(10);
});

const observer = {
  // it implements the 3 defined below methods
  next: (value) => {
    console.log("Observer got a value of: " + value);
  },
  error: (err) => {
    console.log("Observer got an error of " + err);
  },
  complete: () => {
    console.log("Observer got a completed NOTIFICATION.");
  }
};

observable.subscribe(observer);
