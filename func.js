function ini(){
            cnv=document.getElementById("miCanvas");
            ctx=cnv.getContext("2d");
            w=parseFloat(window.innerWidth);
            h=parseFloat(window.innerHeight);
            cnv.width=w;
            cnv.height=h;
            ctx.fillStyle="white";
            ctx.fillRect(0,0,w,h);
            cnv.addEventListener("mousemove",mov,false);
            x11=0;
            y11=0;
            x21=0;
            y21=0;
            x31=0;
            y31=0;
            x41=0;
            y41=0;
            cnv2=document.getElementById("miCanvas2");
            ctx2=cnv2.getContext("2d");
            l=cnv2.width;
            a=cnv2.height;
            sb=new Image();
            sb.src="sobre.png";
            s=0;
            xl=0;
            ya=0;
            ctx2.fillStyle="black";
            ctx2.fillRect(0,0,l,a);
            setInterval(sobre,20);
        }
        
        function mov(e){
            x=e.x;
            y=e.y;
            
            m=w/2-x;
            n=h/2-y;
            
            alpha=Math.atan(n/m);
            if(x<w/2){
                alpha=3.14+Math.atan(n/m);
            }
            
            x1=(h/3)*Math.cos(0+alpha);
            y1=(h/3)*Math.sin(0+alpha);
            x2=(h/3)*Math.cos(0.785+alpha);
            y2=(h/3)*Math.sin(0.785+alpha);
            x3=(h/3)*Math.cos(1.57+alpha);
            y3=(h/3)*Math.sin(1.57+alpha);
            x4=(h/3)*Math.cos(2.355+alpha);
            y4=(h/3)*Math.sin(2.355+alpha);
            
            ctx.fillStyle="white";
            ctx.fillRect(w/1.2+x11,h/2+y11-25,150,34);
            ctx.fillStyle="green";
            ctx.font="20pt verdana"
            ctx.fillText("Rumano (inicial)",w/1.2+x1,h/2+y1,80);
            
            ctx.fillStyle="white";
            ctx.fillRect(w/1.2+x21,h/2+y21-25,150,34);
            ctx.fillStyle="green";
            ctx.font="20pt verdana"
            ctx.fillText("Italiano (inicial)",w/1.2+x2,h/2+y2,80);
            
            ctx.fillStyle="white";
            ctx.fillRect(w/1.2+x31,h/2+y31-25,150,34);
            ctx.fillStyle="green";
            ctx.font="20pt verdana"
            ctx.fillText("Inglés (intermedio)",w/1.2+x3,h/2+y3,80);
            
            ctx.fillStyle="white";
            ctx.fillRect(w/1.2+x41,h/2+y41-25,150,34);
            ctx.fillStyle="green";
            ctx.font="20pt verdana"
            ctx.fillText("Idiomas:",w/1.2+x4,h/2+y4,80);
            
            
            x11=x1;
            y11=y1;
            x21=x2;
            y21=y2;
            x31=x3;
            y31=y3;
            x41=x4;
            y41=y4;
            
        }

        function sobre(){
            
            
            if(s==0){
                ya=a*Math.random();
            }
            xl=xl+1;
            if(xl>l+5){
                s=0;
                xl=0;
            }
            s=1;
            if(s==1){
                ctx2.fillStyle="black";
                ctx2.fillRect(xl-2,ya,27,25);
                ctx2.drawImage(sb,xl,ya);
                
            }
        }