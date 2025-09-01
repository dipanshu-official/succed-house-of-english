// app.js
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import { sendMail } from "./config/maler.js";

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("✅ API is up and running with CORS!");
});

// app.js (excerpt)
app.post("/api/send-email", async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  try {
    await sendMail({
      to: process.env.EMAIL_USER,
      subject: `📩 New Inquiry - Succed House of English | From ${fullName}`,
      text: `
      🎓 You received a new inquiry for Succed House of English:

      👤 Name: ${fullName}
      📧 Email: ${email}
      📞 Phone: ${phone}

      📝 Message:
      ${message}

      ---
      📍 This inquiry came through your official portfolio/contact form.
      `.trim(),
    });

    console.log("✅ Email sent successfully (Succed House of English)");
    res.status(200).json({ message: "✅ Email sent successfully" });
  } catch (err) {
    console.error("❌ Email failed to send:", err);
    res
      .status(500)
      .json({ error: "❌ Email failed to send", details: err.message });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    // Extract the form data from the request body
    const formData = req.body;

    // Construct the email content using the form data
    await sendMail({
      to: process.env.EMAIL_USER,

      subject: "New Student Registration Form Submission",
      html: `
        <h2>New Registration Details</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
        <p><strong>Course:</strong> ${formData.course}</p>
        <p><strong>Level:</strong> ${formData.level}</p>
        <p><strong>Schedule:</strong> ${formData.schedule}</p>
        <p><strong>Location:</strong> ${formData.location}</p>
        <p><strong>Goals:</strong> ${formData.goals}</p>
        <p><strong>Experience:</strong> ${formData.experience}</p>
        <p><strong>Heard About Us:</strong> ${formData.hearAbout}</p>
      `,
    });

   

    console.log("Registration email sent successfully!");
    // Send a success response back to the client
    res.status(200).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error sending email:", error);
    // Send an error response back to the client
    res.status(500).json({ message: "Failed to send registration form." });
  }
});

export default app;
