import axios from axios;
import express from express;

const router = express.Router();








router.get('/consignment-OTW',(req,res)=>{
    axios.get('http://localhost:3000/api/consignment-OTW')
    .then(response=>{
        res.json(response.data);
    })
    .catch(error=>{
        res.status(500).json({error:'Failed to fetch consignment cards'});
    });
});

module.exports = router;