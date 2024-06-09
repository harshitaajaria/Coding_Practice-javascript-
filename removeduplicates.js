//in this we will remove duplicated from an array

let nums=[1,1,2,3,4,4,5];
function removeduplicate(nums)
{
    let index=0;
    for(let i=0;i<=nums.length;i++)
        {
            if(nums[i]!=nums[i+1])
              {
                nums[index]=nums[i];
                index++; 
              }
        }
        return index;
}

var length=removeduplicate(nums);
console.log("modified array",nums.slice(0,length));
