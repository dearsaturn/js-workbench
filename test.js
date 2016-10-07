console.log('first');

(async function(){
  await setTimeout(console.log('wait 100ms'), 100)
})()

console.log('hey')
