const express = require('express');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const MainMethod = require('./index')
const cors = require("cors");

const app = express();
app.use(express.json());
// CORS Policy
app.use(cors())
if(cluster.isMaster){
        // Fork worker processes
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Handle worker exit events
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}`);
    cluster.fork();
  });
}else{
    app.post('/sendrequest', async(req, res) => {
        try{
             await MainMethod.Main(req.body.Question).then((then)=>{
              console.log(then)
                res.json(then);
            });
            
        }catch(err){
            console.log(err)
        }
       
    });
    
    const PORT = 1111;
    
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
}
