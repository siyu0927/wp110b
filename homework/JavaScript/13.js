//加mul,div
class ratio
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
    add(z)
    {
        return this.a*z.b+this.b*z.a+'/'+this.b*z.b;
    }
    sub(z)
    {
        return this.a*z.b-this.b*z.a+'/'+this.b*z.b;
    }
    mul(z)
    {
        return this.a*z.a+'/'+this.b*z.b;
    }
    div(z)
    {
        return this.b*z.a+'/'+this.a*z.b;
    }
}
var r1 = new ratio(1,3);
var r2 = new ratio(2,4);
var r3 = r1.mul(r2);
console.log(r3.toString());
