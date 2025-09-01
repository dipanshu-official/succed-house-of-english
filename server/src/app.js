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
    res.status(500).json({ error: "❌ Email failed to send", details: err.message });
  }
});



export default app;
