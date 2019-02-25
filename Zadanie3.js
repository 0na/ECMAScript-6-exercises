//Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:
//average(1) // 1
//average(1, 3) // 2
//average(1, 3, 6, 6) // 4
//Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function.

function average(...nums) {
    let a = 0; //let bo liczba będzie się zmieniać
    for (const num of nums) {
        a += num; //suma liczb
        b = nums.length; //ile liczb
    }
    return a / b; //liczy średnią
}
console.log("Średnia z liczb (2, 6) to : " + average(2, 6)); //wynik: Średnia z liczb 2 i 6 to : 4
console.log("Średnia z liczb (2, 2, 2, 2, 2, 2) to : " + average(2, 2, 2, 2, 2, 2)); //Średnia z liczb (2, 2, 2, 2, 2, 2) to : 2
console.log("Średnia z liczb (2.5, 3.4, 6.89) to : " + average(2.5, 3.4, 6.89)) //Średnia z liczb (2.5, 3.4, 6.89) to : 4.263333333333333
console.log(average()); //wynik: 0