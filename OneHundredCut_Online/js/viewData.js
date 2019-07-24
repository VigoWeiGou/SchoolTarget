window.onload = function (){
    var x1=document.getElementById("as");
        x1.onmouseover= function (){
            var xd1=document.getElementById("dg1");
                xd1.style.display='block'
            var xx1=document.getElementById("dg2");
                xx1.style.display='none'
            var xy1=document.getElementById("dg3");
                xy1.style.display='none'
        }
    var x2=document.getElementById("bs");
        x2.onmouseover= function (){
            var xd1=document.getElementById("dg2");
                xd1.style.display='block'
            var xx1=document.getElementById("dg1");
                xx1.style.display='none'
            var xy1=document.getElementById("dg3");
                xy1.style.display='none'  
        }
    var x3=document.getElementById("cs");
        x3.onmouseover= function (){
            var xd1=document.getElementById("dg3");
                xd1.style.display='block'
            var xx1=document.getElementById("dg1");
                xx1.style.display='none'
            var xy1=document.getElementById("dg2");
                xy1.style.display='none'  
        }    
}
