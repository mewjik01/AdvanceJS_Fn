// 1. Asynchronous 
/* console.log("one")
console.log("two")
setTimeout(()=>{
    console.log("Happy As FUCK!!")
}, 3000)
console.log("three")
console.log("four") */ 

// 2. CallBack  => Fn which is passed as the argument of the another Fn. 
/* let Print= (a,b)=>{
    setTimeout(()=>{
        console.log(a)
        if(b){
            b()          // => This is  Callback Function 
        }
    }, 3000)
}
Print(1, ()=>{
    Print(2)
}) */ 

// 3. Callback Hell => Nested Callback Effect the Code in a bad way That's why to overcome this we use PROMISES
/* let Print= (a,b)=>{
    setTimeout(()=>{
        console.log(a)
        if(b){
            b()
        }
    }, 5000)
}
Print(1,()=>{
    Print(2, ()=>{
        Print(3,()=>{
            Print(4, ()=>{
                Print(5)
            })
        })
    })
})  */ 

// 4. PROMISES 
/* let promise = new Promise((resolve, reject)=>{
    console.log("I am a Promise")
    resolve("Success")
    reject("Hell, Missed This Time")
}) */ 

// Use Of Promise in API 
/* function getData(dataId, getNextData){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("data", dataId)
        resolve("successfully")
        if(getNextData){
            getNextData()
        }
    }, 7000)
})
} 
getData(123,()=>{
    getData(456)
}) */ 

// promise.then(), promise.catch()
/* function asyncFn(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I am Trump")
            resolve("done successfully")
        }, 3000) 
    })
}
let val = asyncFn()
val.then((res)=>{
    console.log(res)
}) */ 

// Chain Promise 
/* function asyncFn1(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data1")
        resolve("success1")
    },3000)
})
}
function asyncFn2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2")
            resolve("success2")
        },3000)
    })
    }
console.log("fetching data1..")
let val1= asyncFn1()
val1.then((res)=>{
    console.log(res)
    console.log("fetching data2..")
    let val2= asyncFn2()
    val2.then((res)=>{
        console.log(res)
    })
})  */ 



