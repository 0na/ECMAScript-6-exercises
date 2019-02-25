//Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych - [1, 4, 'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.

const dataPerson = [1, 4, "Iwona", false, "Nowak"];
const [cars, siblings, firstname, adult, lastname] = dataPerson;

console.log("The full name is : " + firstname + " " + lastname);
