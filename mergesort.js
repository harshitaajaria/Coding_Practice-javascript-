//we will merge 2 arrays and sort it 
let  nums1=[1,2,3,0,0,0];
let m=3;
let nums2=[2,5,6];
let n = 3;
merge(nums1,m,nums2,n);
console.log(nums1);

function merge(nums1,m,nums2,n)
{
  let i=m-1;
  let j=n-1;
  let k=m+n-1;
  while(j>=0)
    {
        if(nums1[i]>nums2[j]&&i>=0)
            {
                nums1[k]=nums1[i];
               
                i--;
            }
            else{
                nums1[k]=nums2[j];
              
                j--;
            }
            k--;
    } 
};

