//we will remove a particular element in an array


let nums=[3,2,2,3];
let val=3    //it is the element which we will remove from our nums array

var length=function (nums,val)  //it is our function expression syntax and this function is called anonymus function(which have no name)
{
    let index=0;
    for(let i=0 ; i<nums.length ; i++)
        {
            if(nums[i]!=val)
                {
                  nums[index]=nums[i];
                  index++;
                }
        }
        return index;
}
var result =length(nums,val);
console.log("modified array",nums.slice(0,result));

