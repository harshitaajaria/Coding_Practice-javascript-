// Given an integer array nums, return an array answer such that answer[i] is 
// equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// 1. result=product of left travere * product of right traverse
//2.in this code we cant multiply all elements and divide by the index value bcoz if index has 0 then 
// multiplication of all give 0..[1,2,0,5]=0

//take array left and then traverse and put elements on array
//take right and same procedure 
//result will come from both multiplication



 function productExceptSelf(nums){
    let n=nums.length;
   let left=new Array(n).fill(1);
   let right=new Array(n).fill(1);
    let answer=new Array(n).fill(1);
   for(let i=1;i<n;i++)
   {
    left[0]=1;
   left[i] =left[i-1]*nums[i-1];
   }
   
   
    for(let i=n-2;i>=0;i--)
   {
    right[n-1]=1;
    right[i] =right[i+1]*nums[i+1];
   }

  for(let i=0;i<n;i++)
  {
    answer[i]=right[i]*left[i];
  }
  return answer;
   };

   let nums=[1,2,3,4];

   console.log(productExceptSelf(nums));
   