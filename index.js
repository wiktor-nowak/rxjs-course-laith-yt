import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const users = {
  data: [
    {
      status: "active",
      age: 14
    },
    {
      status: "active",
      age: 32
    },
    {
      status: "active",
      age: 4
    },
    {
      status: "inactive",
      age: 11
    },
    {
      status: "inactive",
      age: 23
    },
    {
      status: "active",
      age: 13
    },
    {
      status: "inactive",
      age: 28
    }
  ]
};

const observable = new Observable((subscriber) => {
  subscriber.next(users);
}).pipe(
  map((value) => value.data),
  map((value) => value.filter((user) => user.status === "active")),
  map((value) => value.reduce((sum, user) => sum + user.age, 0) / value.length),
  map((value) => {
    if (value < 18) {
      throw new Error("Average is less than 18!");
    } else return value;
  })
);

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
