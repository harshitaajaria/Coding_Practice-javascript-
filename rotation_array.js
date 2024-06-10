let nums=[1,2,3,4,5,6,7];
let k=3;

function rotation(nums,k)
{
    const copy=nums.slice();
    var n=nums.length;
     k=k%n
     if(k==0){
        return nums;
     }
     for(let i=0;i<n;i++)
        {
           nums[(k+i)%n]=copy[i];
        }
        return nums;
}

var rotate_ele=rotation(nums,k);
console.log("rotate array", rotate_ele )