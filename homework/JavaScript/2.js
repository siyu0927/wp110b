//階乘
function a(n)
{
    var b,i=1;
    for(b=1;b<=n;b++)
    {
        i=b*i;
    }
    return i;

}
console.log(a(5));
