import { Interface } from "readline";

let data = 42;
data = 10;

export interface Icar {
    model: string;
    color: string;
    topSpeed?: number;
}

const car1: Icar = {
    model: "ferrari",
    color: "red"
}

const car2: Icar = {
    model: "mercedes",
    color: "blue",
    topSpeed: 100

}


export const cars = [car1, car2];
