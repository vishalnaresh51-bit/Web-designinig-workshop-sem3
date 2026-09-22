    // let a=10;
    // let b="10";
    //     console.log(a==b);
    //     console.log(a===b);
    //     console.log(a+5);
    //     console.log(a>b&&a<20);

    // let marks=75;
    // if(marks>=90){
    //     console.log("grade a");
    // }
    // else if(marks>=60){
    //     console.log("grase b");
    // }
    // else{
    //     console.log("grade c")
    // }


    // for(let i=1; i<6; i++){
    //     console.log(i);
    // }

    // let num=0;
    // while(num<=10){
    //     console.log(num);
    //     num+=2;
    // }


    // function add(x,y){
    //     return x+y;
    // }
    // console.log(add(3,4));

    // function mult(x,y){
    //     return x*y;
    // }
    // console.log(mult(3,4));

    // const greet =(name="guest")=>`Hello,${name}`;
    // console.log(greet());
    // console.log(greet("aman"));

    // const number =[1,2,3,4,5];
    // const doubled=number.map(n => n*2);
    // const evens= number.filter(n=>n%2===0);
    // const sum= number.reduce((total,n) =>total+n,0);

    // console.log(doubled);
    // console.log(evens);
    // console.log(sum);

    const arr1=[1,2,3];
    const arr2=[4,5,6];
    const combined = [...arr1, ...arr2];
    console.log(combined);

    function sumall(...nums){
        return nums.reduce((a,b)=> a+b ,0);
    }
    console.log(sumall(1,2,3,4));
