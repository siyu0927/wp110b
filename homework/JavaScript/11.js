//有理數物件
class a
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    toString()
    {
        return this.a+'/'+this.b;
    }
}
var ans = new a(2,3);
console.log(ans.toString());
