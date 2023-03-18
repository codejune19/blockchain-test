const fooArray = ['foo', 'bar', 'goo', 'goat']


const runLoop = (paramOne) => {
    for(let i=0; i<10; i++) {
        console.log(i)
    }
    
    for (let i=0; i<fooArray.length; i++){
        console.log(paramOne, i)
        paramOne()
        if (fooArray[i] =='goat'){
            console.log("we found goat")
        }else{
            console.log("there's no goat")
        }
    }
        
}
const lobsterw =()=> console.log('lobbystere')
runLoop(lobsterw)


