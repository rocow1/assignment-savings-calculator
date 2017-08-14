function calculate(){
    var amount = parseFloat(document.getElementById('amount').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var years = parseFloat(document.getElementById('years').value);
    var months = years*12;
    var i = 1
    var updatedAmount = amount
    var dataTable = " ";

    //document.getElementById('results_table').innerHTML = "<table><tr><th>Year</th><th>Amount</th></tr></table>"
    //To calculate the interest earned for the first month use 'amount * ((rate / 100)/12)'
    //if(isNaN(amount) === 0 || isNaN(rate) === 0 || isNaN(years) === 0){
     //   alert("Please enter a valid number!!")
    //}
    //else 
    if(years >= 3){
        while(i <= months){
            
            //calculating data for tables
            var interest = updatedAmount * ((rate/100)/12);
            interest = Math.round(interest * 100) / 100;
            updatedAmount = updatedAmount + interest

            //Putting data into the table's Rows
            if (i % 12 === 0){dataTable = dataTable+"<tr><td>"+(i/12)+"</td><td>"+interest.toFixed(2)+"</td><td>"+updatedAmount.toFixed(2)+"</td></tr>";}
            i++;
        }
        //Generate the table
        document.getElementById('results_table').innerHTML = "<table><tr><th>Year</th><th>Interest</th><th>Balance</th></th></tr><tbody>"+dataTable+"</tbody></table>";
        }
    
    else{
        while(i <= months){
            
            //calculating data for tables
            var interest = updatedAmount * ((rate/100)/12);
            interest = Math.round(interest * 100) / 100;
            updatedAmount = updatedAmount + interest

            //Putting data into the table's Rows
            dataTable = dataTable+"<tr><td>"+i+"</td><td>"+interest.toFixed(2)+"</td><td>"+updatedAmount.toFixed(2)+"</td></tr>";
            i++;
        }
        //Generate the table
        document.getElementById('results_table').innerHTML = "<table><tr><th>Month</th><th>Interest</th><th>Balance</th></th></tr><tbody>"+dataTable+"</tbody></table>";
        }
    
}

function reset(){
    document.getElementById("results_table").innerHTML ="";
}