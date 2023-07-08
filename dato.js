let age = 23; // int 
let price = 20.5; //float
let name = 'enrique'; //string
let character = 'E'; //character
let booleanExample = true; //boolean

const number = 23; //Valor que no se puede modificar 

function sum (){
    let numberA = 5;
    let numberB = 20;
    let result = numberA + numberB;

    alert(result);//Muestra output en la consola
    console.log(result); //Muestra output en pantalla
}

function showName(){
    let name = 'enrique';
    alert(name);
}

function matrix(){
    let matrixNumbers =[
        [1,3,4,5,6],
        [7,8,9,1,4],
        [7,8,9,7,8]
    ];
    let resultsMatrix = matrixNumbers[1][2] + matrixNumbers[2][1];
    console.log(resultsMatrix);
}

function dictionary(){
    let people = {
        'edad':'23',
        'nombre':'Enrique',
        'colores':['rojo','verde','naranja']

    };
    alert(people.colores);
}

function arrayFunction(){
    let arrayExample = [1,2,3,4,5,6];
    for(i = 0; i <= arrayExample.length; i++){
        let i;
        let j = 2;
        var sumExample = arrayExample [1] + arrayExample[4];
        if(i = j){
            console.log(i);
        }
    }
    console.log (sumExample);
}



function bubbleSort (arr, n){
    var temp;
    var swapped;
    for (i = 0; i < n - 1; i++) {
        console.log(i + ' = i en este tiempo');
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            console.log(j + ' = j en este tiempo');
            if (arr[j] > arr[j + 1]){
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
  
        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false){
            break;
        }
    }
}

function printArray(arr, size)
{
  var i;
  for (i = 0; i < size; i++)
      console.log(arr[i] + " ");
}

function driverProgram(){
    var arr = [ 64, 34, 25, 45];
    var n = arr.length;
    bubbleSort(arr, n);
    console.log("Sorted array: ");
    printArray(arr, n);
}
