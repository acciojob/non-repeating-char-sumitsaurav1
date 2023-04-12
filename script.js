//your JS code here. If required.
let s= prompt();

function f(s)
{
   for(let i=0;i<s.length;i++)
   {
       let flag=true;
       let c = s.charAt(i);
       for(let j=0;j<s.length;j++)
       {
           let c1=s.charAt(j)
           if(c==c1 && i!=j)
           {
               flag=false;
               break
           }
           
       }
       if(flag==true)
       {
           return c;
       }
   }
    
}
let result=f(s);
console.log(result);