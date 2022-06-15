var  b=0;
show();


function show(){
    var j;
    var z = document.getElementsByClassName("slideshoww");
   
    for(j=0;j<z.length;j++)
    {
        z[j].style.display="none";
    }
    b++;
    if(b>z.length)
    {
        b=1;
    }
    z[b-1].style.display="block";
    setTimeout(show,1000);
}
