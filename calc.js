let memmory="",result,hello,store,newStr;
function num(values1) {
    newStr=values1;
    memmory = newStr.toString();
    document.getElementById("screen").innerHTML+=values1; 
}
function oper(operAnds){
    if(memmory!=" + "&& memmory!=" - "&& memmory!=" / "&& memmory!=" * "){
        if(memmory.length===0){ 
            if(operAnds===" - "){
                console.log(memmory.length)
                memmory=operAnds;
                document.getElementById("screen").innerHTML+=operAnds;
            }
            else if(operAnds===" + "|| operAnds===" / "|| operAnds===" * "){
                document.getElementById("screen").innerHTML="";
            }
        }
        else if( memmory.length!==0){
                memmory=operAnds;
                document.getElementById("screen").innerHTML+=operAnds;
            }   
    }
}
function clr(){
    memmory=""
    document.getElementById("screen").innerHTML=""
    result=""
}
function equal(){
    store= document.getElementById("screen").innerHTML;
    console.log(store);
    hello=store.split(" ")
    console.log(hello);
    let len=hello.length;
    for(i=0;i<len;i++){
        if(hello[i]=="+"){
            result=parseFloat(hello[i-1])+parseFloat(hello[i+1]);
            hello[i+1]=result;
            document.getElementById("screen").innerHTML=result;
            console.log(result);
        }
        else if(hello[i]=="-"){
            result=hello[i-1]-hello[i+1];
            hello[i+1]=result;
            document.getElementById("screen").innerHTML=result;    
        }
        else if(hello[i]=="/"){
            result=(hello[i-1])/(hello[i+1]);
            hello[i+1]=result;
            document.getElementById("screen").innerHTML=result;   
        }
        else if(hello[i]=="*"){
            result=(hello[i-1])*(hello[i+1]);
            hello[i+1]=result;
            document.getElementById("screen").innerHTML=result;  
        }    
    }  
    setTimeout(function equal(){
        memmory=""
        document.getElementById("screen").innerHTML=""
        result=""
        },50000);
    }