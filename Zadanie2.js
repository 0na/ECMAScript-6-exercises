/*
Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b.Przykładowo:

multiply(2, 5) // 10
multiply(6, 6) // 36

Zadanie wydaje się być proste, ale co jeśli użytkownik poda na wejściu tylko jedną wartość ? Przykładowo :
multiply(5) // ?

Chcemy, aby wynik takiego wywołania był również prawidłowy - możesz założyć, że jeśli użytkownik nie poda któregoś z parametrów, ma on zostać zastąpiony 1. Nie wolno korzystać z instrukcji warunkowych!Funkcję stwórz za pomocą arrow
function.

() => { ... } // bez parametru
x => { ... } // jeden parametr
x => { return x * x }  // blok
x => x * x  // wyrażenie, takie samo jak powyższy kod

(x, y) => { ... } // kilka parametrów
*/


const multiply = (x, y = 1) => {
    return x * y * 1;
};
console.log(multiply(6));
//wynik: 6


//Mozilla developer: 
//var func = (x, y) => { return x + y; }; 
// with block body, explicit "return" needed