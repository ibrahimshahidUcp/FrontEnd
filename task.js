var refund;
alert(refund);
alert(refund.toFixed(2));
var fare = prompt("How Much Does Customer Paid For Flight?");
alert(fare);
alert(fare.toFixed(2));
var timeDelayed = prompt("For How Many Minutes Flight Was Delayed? ");

if(Number.isInteger(timeDelayed))
{
    if (timeDelayed <= 30 )
    {
        
        print("No Refund Is Offered");
    } 
    else if (timeDelayed>30 && timeDelayed <=120) 
    {
        
        refund=(10/100)*fare;
        if(refund<=100)
        {
            print(refund + "$ Discount is Available")
        }
        else if(refund>100)
        {
            print("100 Discount is Available")
        }
        

    } 
    else if (timeDelayed >120 && timeDelayed <=300)
    {
        refund=(20/100)*fare;
        if(refund<=100)
        {
            print(refund + "$ Discount is Available")
        }
        else if(refund>100)
        {
            print("100 Discount is Available")
        }




    } 
    else if (timeDelayed >300)
    {
        refund=(50/100)*fare;
        if(refund<=100)
        {
            print(refund + "$ Discount is Available")
        }
        else if(refund>100)
        {
            print("100 Discount is Available")
        }


    }
}
else
{
    return -1;
}   