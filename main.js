<script>


/***

Account balance history is an array that denotes a monthly track record of 
the balance in someone's account (or simply put how much money they had left that month!
Therefore I assume that the list is always sorted in ascending order.
Only spendings, no savings 

1. Does it solve the basic case?
 Yes, I tested with the basic case.
 
2. What other cases might need to be considered?
 I think it need to be considered negative balance. It is not specified.
 Also I manually tested with null pointer, empty list, 
 list with 2 records and list wiht more than 2 records
 
3. What unit tests might you write for this type of function? 
I would use Mocha unit testing to automate my testing process

Time complexity : O (N) , where N is the number of records in the list
I do not think it can be done faster
***/


const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
]



function accountTypeCheckerHelper (accountBalanceHistory) {

/***
  helper function that checks if  balance amount decreases by varying amounts each month or fix ammount
  argument : accountBalanceHistory - list 
  return : boolean  
***/

    // check if list pointer is null    
    if (!accountBalanceHistory){
        window.alert('The array pointer is null');
        return;
    }
    
    let accountBalanceHistorySize = accountBalanceHistory.length;
    
    // check if we have an empty list or a list with only one record 
    if (accountBalanceHistorySize <= 1){
        window.alert('Plese provide an accountBalanceHistory with more than one record !');
        return;
    }
    
    // check if the list has two records, then is type B
    if (accountBalanceHistorySize == 2){
    return false;
    }
    
    

    /* calculate the difference in balance between last two months
     we start from last two months because we want :
     1. a positive difference 
     2. to be able to cover negative balace history, maybe the balance goes negative
     */

    var lastMonth = accountBalanceHistory[accountBalanceHistorySize - 1]['account']['balance']['amount']
    var previousLastMonth = accountBalanceHistory[accountBalanceHistorySize - 2]['account']['balance']['amount']
    var difference = lastMonth - previousLastMonth;
    
    //check if the difference is the same for all consecutive months 
    var i;
    for (i=accountBalanceHistorySize-2; i >= 1; i--){
    
    var previousMonth = accountBalanceHistory[i]['account']['balance']['amount'];
    var currentMonth = accountBalanceHistory[i-1]['account']['balance']['amount'];
    if (difference != (previousMonth - currentMonth)){
    // we found one different difference , then type A
    return true;
    }
   }
   
   //we did not find any different difference , then type B
   return false;
};




const accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/

  // Write your logic here  - No pressure 😁 //
    
    
  //save the balance information to be used on the helper functions 
    
    let result = accountTypeCheckerHelper (accountBalanceHistory);  
    

   return result ? "A" : "B"
};

window.alert(accountTypeChecker (accountBalanceHistory));

</script>
