
import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

dotenv.config();
// Connect to DB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
