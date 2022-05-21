//因數分解

function a(n)
{
    var i;
    var ans=[];
    for(i=2;i<=n;i++)
    {
        if(n%i==0)
        {
            ans.push(i);
            n = n/i;
            i=2;
        }
    }
    return ans;
}
console.log(a(45));
