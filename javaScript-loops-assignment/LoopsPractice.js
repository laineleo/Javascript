//Task 1 Multiplication Table Generator
    // let number= 5;

    // for(let row=5;row<=5;row++){        //row is set to 5 and only runs once because row <= 5
    //     for(let col=1;col<=10;col++){   // col goes from 1 to 10
    //         console.log(`${row} x ${col}= ${row * col}`);  //Print the current multiplication in the format
    //     }
    // }
//Task 2
    // let n=5;        //let variable n has a value of 5
    // let sum=0;      // variable to be the storage of the sum 

    // for( let i=1; i<=n;i++){  //for loop to add 1st n number
    //     sum= sum + i;           //it will add the current number to the sum
    // }

    // console.log(sum);   //print out the sum

//Task 3
    // let array=[2, 4, 6, 8, 10];  //5 array of integers

    // for(let i=0; i<array.length; i++){     //this is the loop of the array
    //     console.log(`Array Element: ${array[i]}`);  //this will print each element
    // }

//Task 4
    // let rows=5;

    // for(let i=1;i<=rows;i++){   // outer loop for rows
    //     let stars='';       //empty strings where stars will be stored
        
    //     for(let s=1; s<=i; s++){    //inner loops for stars
    //         stars +='*';            //every loop, add a star
    //     }
    //     console.log(stars);     //print the stars every row
    // }

//Task 5
    let array=[1, 3, 5, 7, 9];

    for(let i=array.length-1; i>=0; i--){
        console.log(`Reversed Element: ${array[i]}`);
    }