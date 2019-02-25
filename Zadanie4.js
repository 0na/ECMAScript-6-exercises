const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

//gdy daje const average wywala
const averageGrades = ((...nums) => {
    nums = [...nums, ...grades]
    let sum = 0; //let bo liczba będzie się zmieniać
    nums.forEach(num => sum = sum + num);
    const quantity = nums.length; //ile liczb
    const average = sum / quantity;
    return average;
    //return sum / quantity; //liczy średnią
})

console.log("Średnia z ocen to: " + averageGrades()); //wynik: Średnia z ocen to: 3.2222222222222223
console.log("Liczba ocen: " + grades.length); //wynik: Liczba ocen: 9