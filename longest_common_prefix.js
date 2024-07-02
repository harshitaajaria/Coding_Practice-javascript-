let strs = ["flower","flow","flight"];
function longcommpre(strs)
{
    debugger;
    strs.sort();
    let first=strs[0];
    let last=strs[strs.length-1];
    let i=0;
    while(i<first.length && i<strs.length && first[i]===last[i])
        {
            i++;
        }
     return first.substring(0,i);
}
console.log(longcommpre(strs));     