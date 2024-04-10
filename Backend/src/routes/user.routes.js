// src/routes/user.routes.js
import express from "express";
import { User } from "../models/user.models.js";
import multer from 'multer'
import Image from "../models/image.models.js";
import Options from "../models/option.models.js";
import nodemailer from 'nodemailer';

const router = express.Router();
// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service provider
  auth: {
      user: 'process.env.EMAIL', // Replace with your email address
      pass: 'process.env.PASSWORD' // Replace with your email password
  }
});

router.post("/register", async (req, res) => {
  const { username, email, fullname, password } = req.body;

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: "Username or email already exists" });
    }

    // Create a new user
    const newUser = new User({ username, email, fullname, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


const upload = multer({ dest: 'uploads/' }); // Define upload directory

router.post('/uploadImage', upload.single('image'), async (req, res) => {
  try {
      // Process and save image
      const { location } = req.body; // Assuming location is sent in the request body
      console.log('Location:', location); // Log the location data
      const imageUrl = req.file.path; // Assuming you're storing the image path in the database

      // Save the image URL and location to the database using the Image model
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
    // Save the selected option to the database
    await Options.create({ selectedOption });

    // Send email to the user
    const mailOptions = {
        from: 'process.env.EMAIL', // Replace with your email address
        to: req.body.email, // Assuming email is sent in the request body
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
