//hastable ka use kiya check krege agar target - arr[i] present h table mai toh return krdo varna table mai daaldo
const arr=[2,7,11,15];
const target =9;
function twosum(arr,target)
{
    const map= new Map();
    for(let i=0;i<arr.length;i++)
        {
            const complement = target-arr[i];
            if(map.has(complement))
                return [map.get(complement),i];
             map.set(arr[i],i);

        }
        return [];
}
console.log(twosum(arr,target));