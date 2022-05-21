//加約分
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
    reduce()
    {
        var m,i;
        if(this.a>this.b)
        {
            m=this.b;
        }
        else
        {
            m=this.a;
        }
        for(i=2;i<=m;i++)
        {
            if(this.a%i==0&&this.b%i==0)
            {
                this.a=this.a/i;
                this.b=this.b/i;
                m=m/i;
                i=2;
            }
        }
    }
}
var r1 = new ratio(6,9);
r1.reduce();
console.log(r1.toString());
