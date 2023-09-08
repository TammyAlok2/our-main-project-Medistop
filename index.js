import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const port = process.env.PORT || 3008;
import dotenv from 'dotenv';
dotenv.config();
//passward = 3gEW0yLODDsWAoV1
//const username = "Aloktam123";
//const password = "<password>";
//const cluster = "<cluster name>";
//const dbname = "myFirstDatabase";
//const uris =  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;
//const uri = "mongodb+srv://Aloktam123:QxBiftJl36u85JkT@cluster0.5vq9abp.mongodb.net/?retryWrites=true&w=majority";
const user =[];
const userData = [];
//mangodb connection
//const urise = "mongodb+srv://amwaura89:password@cluster0.uim76jv.mongodb.net/?retryWrites=true&w=majority";
const uri = process.env.MANGO_URI ||  "mongodb+srv://Aloktam1234:3gEW0yLODDsWAoV1@cluster0.lhpfmkl.mongodb.net/?retryWrites=true&w=majority";


mongoose.set('strictQuery', false);
async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("connected to MongoDB");
    }
    catch (error) {
        console.log(error);
    }
}

connect();
 
  

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const app = express();

// Using Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Setting up View Engine
app.set("view engine", "ejs");

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const decoded = jwt.verify(token, "sdjasdbajsdbjasd");

    req.user = await User.findById(decoded._id);

    next();
  } else {
    res.redirect("/login");
  }
};

app.get("/", isAuthenticated, (req, res) => {
  res.render("logout", { name: req.user.name });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/prescription",(req,res)=>{
res.render("prescription")
})
app.get("/schemes",(req,res)=>{
  res.render("scheme")
  })
  app.get("/appointment",(req,res)=>{
    res.render("appoint")
    })
    app.get("/home",(req,res)=>{
      res.render('home')
    })
     app.get("/appointment",(req,res)=>{
      res.render('appoint')
    })
    app.get('/information', (req,res) =>{
      res.render('Information');
    })


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) return res.redirect("/register");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.render("login", { email, message: "Incorrect Password" });

  const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    return res.redirect("/login");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() +60 * 1000),
  });
  res.redirect("/information");
});

app.get("/logout", (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.redirect("/home");
});
app.get('/signout',(req,res)=>{
  res.render('logout',{name:req.body.name})
})
app.post('/appoint',(req,res)=>{ 
  user.push({
    patientname: req.body.name,
    patientdate:req.body.date,
    patientTime:req.body.time,
    patientNumber:req.body.number,
    patientState:req.body.state,
    patientCity:req.body.city,


    
    patientHospital:req.body.hospital,
  })
  res.render('appoint')
  
})
app.get('/user',(req,res)=>{
  res.json(user)
})

app.post('/userData',(req,res)=>{
  userData.push({
    name:req.body.name,
    fatherName:req.body.fatherName,
    phoneNum:req.body.phone,
BirthDate:req.body.birthDate,
  })
res.redirect('/');
  })
app.get('/userData',(req,res)=>{
  res.json(userData);
})

app.listen(port, () => {
  console.log(`Server is working ${port}`);
});

 


