let ratings=[1,0,2];

function calculatetotalcandy(ratings){
    debugger
     let n= ratings.length;
     let candies=Array(n).fill(1);

     for(let i=0;i<n;i++)
     {
        //for right
        if(ratings[i]>ratings[i-1])
        {
            candies[i]=candies[i-1]+1;
        }
     }

     for(let i=n-2;i>=0;i--)
        {
     //for left
     if(ratings[i]>ratings[i+1])
        {
            if(candies[i]>=candies[i+1])
                {
                    candies[i]= candies[i+1]+1;
                }
        }
    }
        let totalcandies=0;
        for(let i=0;i<n;i++){
            totalcandies += candies[i];
        }

        return totalcandies;
}

console.log(calculatetotalcandy(ratings));