var ans=0,sno=1,answ=0,c=0;
var tim=10;
var ti,to;
var q=0,obj,score=0,ques=10;
var qst=new Array(10);
for(var i=0;i<10;i++)
{
	qst[i]=0;
}
function rand()
{
	while(c==0)
				{
					q=Math.floor(Math.random()*10);
					if(qst[q]==0)
					{
						qst[q]=1;
						c=1;
					}
				}
				c=0;
				console.log(q);
				console.log(qst);
}
function load()
	{
		var xhttp=new XMLHttpRequest();
		xhttp.onreadystatechange=function(){
			if((this.readyState==4)&&(this.status==200))
			{
				rand();
				obj=JSON.parse(xhttp.response);
				document.getElementById("ques").innerHTML=obj.quest[q].ques;
				document.getElementById("op1").innerHTML=obj.quest[q].opts[0];
				document.getElementById("op2").innerHTML=obj.quest[q].opts[1];
				document.getElementById("op3").innerHTML=obj.quest[q].opts[2];
				document.getElementById("op4").innerHTML=obj.quest[q].opts[3];
				answ=obj.quest[q].answ;
				
				
			}
		}
		xhttp.open("GET","questions.json",true);
		xhttp.send();
	}
function run()
	{
		tim--;
		if(tim<10)
		{
			document.getElementById("sec").innerHTML="0"+tim;
		}
		
		if(tim==0)
		{
			if(tim<10)
			{
				document.getElementById("sec").innerHTML="0"+tim;
			}
			tim=10;
		}
	}
function unHideUi()
	{
		ti=setInterval(run,1000);
		to=setTimeout(check,10000);
		document.getElementById("ques").style.visibility="visible";
			document.getElementById("sno1").style.visibility="visible";
			document.getElementById("misc").style.visibility="visible";
			document.getElementById("rdg").style.visibility="visible";
		document.getElementById("btn").style.visibility="hidden";
	}
function check()
	{	
		if(ques>1)
		{
			var opts=document.getElementsByName("group");
		tim=10;
		clearInterval(ti);
		ti=setInterval(run,1000);
		clearTimeout(to);
		to=setTimeout(check,10000);
		for(var i=0;i<opts.length;i++)
		{
			if(opts[i].checked)
			{
				ans=opts[i].value;
				if(ans==answ)
				{
					score++;
				}
				else
				{
					score=score-0.25;
				}
				opts[i].checked=false;
				
				
				
				break;
			}
		}
			rand();
				document.getElementById("ques").innerHTML=obj.quest[q].ques;
				document.getElementById("op1").innerHTML=obj.quest[q].opts[0];
				document.getElementById("op2").innerHTML=obj.quest[q].opts[1];
				document.getElementById("op3").innerHTML=obj.quest[q].opts[2];
				document.getElementById("op4").innerHTML=obj.quest[q].opts[3];
				document.getElementById("re").innerHTML=score;
				answ=obj.quest[q].answ;
				
				q++;
				ques--;
		
		sno++;
		document.getElementById("sno").innerHTML=sno;
		document.getElementById("sec").innerHTML=10;
		ans=0;
		}
		else
		{
			clearInterval(ti);
			clearTimeout(to);
			document.getElementById("ques").style.visibility="hidden";
			document.getElementById("sno1").style.visibility="hidden";
			document.getElementById("misc").style.visibility="hidden";
			document.getElementById("rdg").style.visibility="hidden";
			document.getElementById("re").innerHTML=score;
			document.getElementById("re1").style.visibility="visible";
			
		}
	}
window.onload=load;	
