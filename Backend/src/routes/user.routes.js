// src/routes/user.routes.js
import express from "express";
import { User } from "../models/user.models.js";
import multer from 'multer'
import Image from "../models/image.models.js";
import Options from "../models/option.models.js";
import nodemailer from 'nodemailer';

const router = express.Router();
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
      user: 'process.env.EMAIL', 
      pass: 'process.env.PASSWORD' 
  }
});

router.post("/register", async (req, res) => {
  const { username, email, fullname, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: "Username or email already exists" });
    }

    const newUser = new User({ username, email, fullname, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


const upload = multer({ dest: 'uploads/' }); 

router.post('/uploadImage', upload.single('image'), async (req, res) => {
  try {
      const { location } = req.body; 
      console.log('Location:', location); 
      const imageUrl = req.file.path; 

      const image = new Image({
          imageUrl: imageUrl,
          location: location
      });
      await image.save();

      res.status(200).json({ message: 'Image uploaded successfully', imageUrl: imageUrl, location: location });
  } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.post("/saveOption", async (req, res) => {
  const { selectedOption } = req.body;

  try {
    await Options.create({ selectedOption });

    const mailOptions = {
        from: 'process.env.EMAIL', 
        to: req.body.email, 
        subject: 'Subject of the email',
        text: 'Body of the email'
    };

    await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Option saved successfully" });
  } catch (error) {
      console.error("Error saving option:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
