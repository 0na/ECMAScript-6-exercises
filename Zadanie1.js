//Połączenie dwóch stringów przy użyciu operatora + jest bardzo łatwym zadaniem. 
//Innym sposobem jest użycie metody concat albo join, ale co jeśli nie moglibyśmy skorzystać z żadnej z tych opcji?

//Twoim zadaniem będzie stworzenie dwóch zmiennych z wartościami Hello oraz World, a następnie połączenie ich metodą inną niż wymienione powyżej.

const firstString = ["Hello"];
const secondString = ["World"];

const addString = [...firstString, ...secondString];
console.log(addString);
//wynik:  ["Hello", "World"]

const changeToString = addString.toString();
console.log(changeToString);
//wynik: Hello,World

const stringWithoutComma = changeToString.replace(",", " ");
console.log(stringWithoutComma);
//wynik: Hello World