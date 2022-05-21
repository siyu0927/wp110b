//矩陣相加
function a(n,m)
{
    var ans=[];
    var i,j;
    for(i=0;i<n.length;i++)
    {
        ans[i]=[];
        for(j=0;j<n[0].length;j++)
        {
            ans[i][j]=n[i][j]+m[i][j];
        }
    }
    return ans;
}
console.log(a([[1,2],[3,4]],[[1,1],[1,1]]));
