import { User } from "./../../components/ui/v1/Columns";


export const users: User[] = [];

for (let i = 0; i < 5; i++) {

  users.push({
    id: i,
    email: `test${i}.com`,
    name: `people${i}`,
    age: Math.floor(Math.random() * (90 - 21) + 21),
    address: "",
    language: "000",
    airLine: "111111",
    origin: "333333",
    destination: "jbjhjbjdsfhgjfgjsdjfghdfjkhgjkdfhgjshdfjghdjafhgjdfhgjdhfjghdfkjghdjksfhgkjdhfgjkdhfjkhgdjkfhgjdhfgudfghuerfgjdkfhgvdfhjgdfkldfjuigjdkfjgvuhdfjhv",
  });
}