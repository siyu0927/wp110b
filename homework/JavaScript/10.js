//定積分
function a(f,n,m)
{
    var i=0;
    for( let x=n;x<m;x=x+0.0001)
    {
        i=i+f(x) * 0.0001;
    }
    return i;


}
console.log(a((x)=>x*x,0,1));
