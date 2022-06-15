var  a=0;
show();


function show(){
    var i;
    var x = document.getElementsByClassName("slideshow");
   
    for(i=0;i<x.length;i++)
    {
        x[i].style.display="none";
    }
    a++;
    if(a>x.length)
    {
        a=1;
    }
    x[a-1].style.display="block";
    setTimeout(show,1000);
}
