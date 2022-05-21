//矩陣轉置
const a=([[1,2,3],[3,2,1]]);
const ans =[];
var i,j;
for(i=0;i<a[0].length;i++)
{
    ans[i]=[];
    for(j=0;j<a.length;j++)
    {
        ans[i][j]=a[j][i];
    }
}
console.log(ans);
