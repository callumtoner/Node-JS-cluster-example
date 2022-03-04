const express = require('express')
// const cluster = require('cluster') //built in modyule no npm i 
// const os = require('os') //built in operating system

const app = express()

//a example of how not to do0 it and block everything 
function delay(duration) {
    const startTime = Date.now(); 
    while(Date.now() - startTime < duration) {
        //it checked if the current time, minus the start timer, is less than the duration passed in
        //therefore function stalls for the given duration 
        //the event loop is completey blocked here inside this function thanks to this
        //no other requests get compelted until this is done, even in other tabs 
    }

}

 



app.get('/', (req, res) => {
    res.send(`Performance eg: ${process.pid}`)//masters and workers have differnt pids, see this happening now 
})

app.get('/timer', (req, res) => {
    //delay res 
    delay(9000)
    res.send(`ding ding ding ${process.pid}`) 
})



// if (cluster.isMaster) {
//     //only execute this the firdst time the server master is executed 
//     console.log('master has been started')
//     //logical cores split work ona single core and then a compuiter has physical cores 
    
    


    //when its not the master, so all the workers 
    console.log('worker process started ')
    app.listen(3000); //when we start a server in a worker process, it knows listen 
    //node knows to divide the reqs coming in on port 3000 between the differnt workers





