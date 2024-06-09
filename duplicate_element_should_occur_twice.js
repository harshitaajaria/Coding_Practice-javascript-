let nums=[1,1,1,2,2,2,3,3,4];
function remove(nums)
{
    let index=2;
    for(let i=0;i<nums.length;i++)
        {
            if(nums[i]!=nums[index-2])
                {
                   nums[index]= nums[i];
                   index++;
                }
        }
        return index;
}

length=remove(nums);
console.log("modified array",nums.slice(0,length))