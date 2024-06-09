let nums=[3,2,3,];

function majorityelement(nums)
{
    let count=1;
    majority=nums[0];
    for(let i=1;i<nums.length;i++)
        {
           if(nums[i]==majority)
            {
                count++;
            }
            else
            {
                count--;
                if(count==0)
                    {
                        majority=nums[i];
                        count=1;
                    }
            }
        }
        return majority;
}
var major=majorityelement(nums);
console.log("majority element " ,major );
