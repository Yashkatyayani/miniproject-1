const app= require("express")()
const parser= require("body-parser")
const dir= __dirname
const fs= require("fs")
const cors= require("cors")
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cors())

var users=[]

function fillData(){
    users=JSON.parse(fs.readFileSync("./login.json","utf-8"));
}

app.get("/course",(req,res)=>{
    fillData()
    const course=req.query.cname;
    // console.log(course);
    var user="vihitha";
    for(const u in users){
        if(users[u].username==user)
            for(const c in users[u].courses){
                // console.log(c);
                if(course==users[u].courses[c]){
                    console.log(course);
                    res.send("Course already started")
                
                }
            }
            //console.log(users[u]);
            users[u].courses.push(course)
            res.send("Started")
    }

    
})
app.listen(1234, ()=>{
    console.log("Server available at 1234");
})