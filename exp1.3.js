console.log('1: Start(sync)');

setTimeout(()=>{
    console.log('2: setTimeout(macrotask -timer phase)');
},0);

setImmediate(() =>{
    console.log('3: setImmediate(macrotask-check phase)');
});

process.nextTick(() =>{
    console.log('4: process.nextTick(highest priority microtask)');
});
Promise.resolve().then(() =>{
    console.log('5:Promise.then(microtask)');
});
console.log('6: End(sync');