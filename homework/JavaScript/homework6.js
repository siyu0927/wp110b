//有聽沒有懂啊!!
//物件導向也太難了吧...
class Vector {

    constructor(array) {
      this.a = array
    }
  
    length() {
        let[x,y,z]=[this.x,this.y,this.z]
        return Math.sqrt(x*x+y*y+z*z)
    }
  
    neg() {
      let a = []
      let i=0
      for (i<this;x.length;i++)
       {
         a[i] = this.x[i]*-1;
       }
      return new Vector(a)
    }
  
    add(p2) {
      return new Vector(this.x+p2.x,this.y+p2.y,this.z+p2.z)
    }
  
    dot(p2) {
        return this.x*p2.x,this.y*p2.y,this.z*p2.z
    }
    
    sub(p2) {
      return this.add(p2.neg())
    }
  
    distance(p2) {
      return this.sub(p2).length()
    }
  
    toString() {
      return '('+this.x+','+this.y+','+this.z+')';
    }
  }
  
  
  let p = new Vector([2,3,4]), p2 = new Vector([1,2,3])
  console.log(p)
  console.log(p.toString())
  console.log(p+'')
  console.log('p.dot(p2)=', p.dot(p2))
  console.log('p=', p, 'p2=', p2)
  console.log('p.neg()=', p.neg())
  console.log('p.add(p2)=', p.add(p2))
  console.log('p.sub(p2)=', p.sub(p2))
  console.log('p.distance(p2)',p.distance(p2))
  console.log('p.length()=', p.length())
  
  
