let memmory,duplicate,newMem=[],newArr=[],newJoin=[],helloo=[],result,hello=[];
function num(values1) {
    console.log(values1);
    memmory=values1;
    document.getElementById("screen").value+=memmory; 
    newArr.push(memmory);
    console.log(newArr);
    newJoin=newArr.join('');
    memmory=""
}
function oper(operAnds){
    if(memmory!="+"&& memmory!="-"&& memmory!="/"&& memmory!="*"){
    helloo.push(newJoin);
    console.log(helloo);
    memmory=operAnds;
    helloo.push(memmory);
    console.log(helloo);
    document.getElementById("screen").value+=memmory;
    newJoin=[]
    newArr=[]
    }
}
function clr(){
    memmory=""
    document.getElementById("screen").value=""
    newArr=[];
    newJoin=[];
    helloo=[];
    newMem=[];
}
function equal(){
    helloo.push(newJoin);
    newJoin=[];
    var hello=helloo.filter(e => e.length);
    console.log(hello);
    let len=hello.length;
    for(i=0;i<len;i++){
        if(hello[i]=="+"){
            result=parseFloat(hello[i-1])+parseFloat(hello[i+1]);
            hello[i+1]=result;
            document.getElementById("screen").value=result;
            console.log(result);
        }
        else if(hello[i]=="-"){
            result=parseFloat(hello[i-1])-parseFloat(hello[i+1]);
            hello[i+1]=result;
            document.getElementById("screen").value=result;    
        }
        else if(hello[i]=="/"){
            result=parseFloat(hello[i-1])/parseFloat(hello[i+1]);
            hello[i+1]=result;
            document.getElementById("screen").value=result;   
        }
        else if(hello[i]=="*"){
            result=parseFloat(hello[i-1])*parseFloat(hello[i+1]);
            hello[i+1]=result;
            document.getElementById("screen").value=result;  
        }    
    }   hello=[];
        hello.push(result);
    }