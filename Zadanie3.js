//Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami
//Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function.


////gdy daje const average wywala
const averageNum = (...nums) => {
    let sum = 0; //let bo liczba będzie się zmieniać
    nums.forEach(num => sum = sum + num);
    const quantity = nums.length; //ile liczb
    let average = sum / quantity;
    return average
    //return sum / quantity; //liczy średnią
}

console.log("Średnia z liczb (2, 6) to : " + averageNum(2, 6)); //wynik: Średnia z liczb 2 i 6 to : 4
console.log("Średnia z liczb (2, 2, 2, 2, 2, 2) to : " + averageNum(2, 2, 2, 2, 2, 2)); //Średnia z liczb (2, 2, 2, 2, 2, 2) to : 2
console.log("Średnia z liczb (2.5, 3.4, 6.89) to : " + averageNum(2.5, 3.4, 6.89)) //Średnia z liczb (2.5, 3.4, 6.89) to : 4.263333333333333