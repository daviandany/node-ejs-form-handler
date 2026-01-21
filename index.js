import express from "express"

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.post("/submit", (req, res) => {
    const fName = req.body["fName"];
    const sName = req.body["sName"];

    if(fName.includes(" ") || sName.includes(" ")){
        return res.render("index.ejs", {
            error: "you cant put spaces"   })
    }

    const nameSize = fName.length + sName.length;    
    res.render("index.ejs", {name: nameSize});
})

app.listen(port, () =>{
    console.log(`Your port ${port} is running`)
})