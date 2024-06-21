// iven n non-negative integers representing an elevation map where the width of each 
// bar is 1, compute how much water it can trap after raining.

// example 1:

// Input: height = [4,2,0,3,2,5]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array  [4,2,0,3,2,5]
// In this case, 6 units of rain water (blue section) are being trapped.


height = [4,2,0,3,2,5]

function water(height){
    debugger
    let n= height.length;
    let l_max=Array(n).fill(0);
    let r_max=Array(n).fill(0);
    //for left traversal
    l_max[0]=height[0];
    for(let i=1;i<n;i++)
        {
            l_max[i] = Math.max(height[i],l_max[i-1])
        }
    

    //right traversal
    r_max[n-1]=height[n-1];
    for(let i=n-2;i>=0;i--)
        {
            r_max[i] = Math.max(height[i],l_max[i+1])
        }

    //totalwater
    let water=0;
    for(let i=1;i<n-1;i++){
        water +=  Math.min(l_max[i],r_max[i])-height[i];
    }
    return water;
}

console.log(water(height));