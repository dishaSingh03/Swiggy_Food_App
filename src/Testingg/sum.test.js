import { sum } from "./sum";

test("Sum of number", ()=>{

    const recievedResult = sum(3,5)

    //assertion


    //expect(recievedResult) - actual output
    //toBe(9) - expected output
    expect(recievedResult).toBe(8);
})