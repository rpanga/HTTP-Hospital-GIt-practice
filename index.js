const express=require('express');

const app=express();
app.listen(4000);

app.use(express.json());

//const user=;
const users=[{name: "John", kidney:[{healthy:false}]}];

app.get('/checkstatus', function(req,res){
    const kidneys=users[0].kidney;
    const noofkidneys=kidneys.length;
    let numberofhealty_kidneys=0;
    for(var i=0; i<noofkidneys; i++){
        if (kidneys[i].healthy){
            numberofhealty_kidneys=numberofhealty_kidneys+1;
        };
    };

    //let numberofhealty_kidneys= users.map(users=>user[0].kidney).filter(kidney=>kidney.healthy).length;
    const numberofunhealty_kidneys=noofkidneys-numberofhealty_kidneys;
    res.json({
        noofkidneys,numberofhealty_kidneys,numberofunhealty_kidneys
    })

});

app.post('/', function(req,res){

    const Ishealth=req.body.Ishealth;
    users[0].kidney.push({

        healthy:Ishealth
    })
    res.json({
        mag: "DONE!"
    })
});

app.put('/',function(req,res){
    for(let i=0; i<users[0].kidney.length; i++){
        users[0].kidney[i].healthy=true;
    }
    res.json({
        mag: "DONE!"
    })
})

app.delete('/', function(req,res){

    const newkidneys=[];
    for(let i=0; i<users[0].kidney.length; i++){
       if(users[0].kidney[i].healthy){
        newkidneys.push({
            healthy:true
        })
       }
    }

    users[0].kidney=newkidneys;

    res.json({
        mag: "DONE!"
    })

});
