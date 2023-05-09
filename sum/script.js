var inp1=document.getElementById("inp1");
var inp2=document.getElementById("inp2");
let arr1=[];
let arr2=[];
inp1.addEventListener("submit",(e)=>{
    e.preventDefault();
    let val=parseInt(document.getElementById("i1").value);
    document.getElementById("submit1").innerHTML+=val+"<br>";
    arr1.push(val);
    console.log("hello");
})
inp2.addEventListener("submit",(e)=>{
    e.preventDefault();
    let val=parseInt(document.getElementById("i2").value);
    document.getElementById("submit2").innerHTML+=val+"<br>";
    // arr2.push(val);
    console.log("hello");

    for(let i=0;i<arr1.length;i++){
        let sum=arr1[i]+val;
        if(sum>=100)
            // console.log(arr1[i]+"+"+val+"="+sum);
            document.getElementById("answer").innerHTML+=arr1[i]+"+"+val+"="+sum+"<br>";
    }

})
