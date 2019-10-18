"use strict"

function multiply(first, second) {
    // your solution
  
  let arrayFirst = [];
  let arraySecond = [];
  let tempArray = [];
  let resultArray = [];
  let newItem = 0;
  let inMemory = 0;
  let inMemory2 = 0;
  let resultString = '';
  let rs = 0;
  
  if (+first >= +second)
  {
    console.log('\nFirst be base');
    arrayFirst = Array.from(first.toString());
    arraySecond = Array.from(second.toString());
  }
  else
  {
    console.log('\nSecond be base');
    arrayFirst = Array.from(second.toString());
    arraySecond = Array.from(first.toString());
  }


  console.log('Hello');
  console.log ('\nFirst: ', arrayFirst);
  console.log('\nSecond: ', arraySecond);

  for (let i = arraySecond.length - 1; i >= 0; i--)
  {
    for (let j = arrayFirst.length - 1; j >= 0; j--)
    {
        tempArray.push((arrayFirst[j] * arraySecond[i] + inMemory) % 10);
       // inMemory = 0;
        inMemory = Math.trunc((arrayFirst[j] * arraySecond[i] + inMemory) / 10);
        console.log ('\narrayFirst[',j,']: ', arrayFirst[j]);
        console.log ('\narraySecond[',i,']: ', arraySecond[i]);
        console.log ('\ntempArr: ', tempArray);
        console.log ('\ninMem: ', inMemory);
    }
    if (inMemory != 0) {
        tempArray.push(inMemory);
     }
    console.log ('\nresArr: ', resultArray);
    console.log ('\ntempArr: ', tempArray); 
    inMemory = 0;   
    if (resultArray.length != 0)
        {
            //resultArray.push(0);           
            for (let k = 0; k < tempArray.length; k++)
                {
                    let n = k + rs;
                    if (n < resultArray.length){
                        newItem = (resultArray[n] + tempArray[k] + inMemory2)%10;
                        inMemory2 = Math.trunc((resultArray[n] + tempArray[k] + inMemory2) / 10);
                        resultArray.splice(n, 1, newItem);
                    }
                    else {
                        newItem = (tempArray[k] + inMemory2)%10;
                        inMemory2 = Math.trunc((tempArray[k] + inMemory2) / 10);
                        resultArray.push(newItem);
                    }
                    console.log ('\nK:', k);
                    console.log ('\nRS:', rs);
                    console.log ('\nN:', n);
                    
                    console.log ('\nresultArray[',n,']:', resultArray[n]);
                    console.log ('\ntempArray[',k,']:', tempArray[k]);
                    
                                    
                    console.log ('\nNew Iteam:', newItem);
                    console.log ('\ninMem2: ', inMemory2);
                    console.log ('\nresArr: ', resultArray);
                    
                }
            
            // if (inMemory2 != 0) {
            //    resultArray[resultArray.length-1] = inMemory2;
            // }
            console.log ('\n----------------------resArr: ', resultArray);
            inMemory2 = 0;
              
        }
        
    else 
        {
            for (let k = 0; k < tempArray.length; k++)
                {
                    resultArray[k] = tempArray[k];
                }
            console.log ('\nresArr: ', resultArray);
        }
        rs++; //rs - rank shift
    tempArray.length = 0;
    
    
  }

  
    console.log('\ntempArray: ', tempArray);
    console.log('\nresultArray: ', resultArray);
    console.log('\ninMemory: ',inMemory);
    //resultArray.pop();
    resultArray.reverse();
    
    console.log('\nreversedArray: ', resultArray);
    for (let k = 0; k < resultArray.length; k++ )
    {
        resultString += resultArray[k];
    }
    console.log('\nresultString: ', resultString);

  
  }

  multiply (329568934658432659586, 58379426534596);