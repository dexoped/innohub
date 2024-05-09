import express from "express"
import mongoose from "mongoose"
import User from "./model/user.js";
import dotenv from "dotenv"

const MONGO_URL = "mongodb+srv://ankit1:ankit123@cluster0.y1qhgms.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


console.log("MONGO_URL", MONGO_URL)
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/user", async (req, res) => {
    try {
        const user = req.body;
        const createdUser = await User.create(user);
        res.status(201).json(createdUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the password
        if (!(password === user.password)) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});


mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    })
}).catch((err) => {
    console.log("MongoDB connection error", err);
})
