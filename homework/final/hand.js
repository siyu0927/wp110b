var  a=1;
show(a);

function plus(n){
    show(a+=n)
}

function show(n){
    var i;
    var x = document.getElementsByClassName("slideshow");
    if(n>x.length)
    {
        a=1;
    }
    if(n<1)
    {
        a=x.length;
    }
    for(i=0;i<x.length;i++)
    {
        x[i].style.display="none";
    }
    x[a-1].style.display="block";
}
