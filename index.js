require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { isArmstrong, isPrime, isPerfect, digitSum } = require("./utils");
const { default: axios } = require("axios");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      email: "ebubenwanze@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/Poeticrow/hng12-stage-0-backend-task",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Route: Number Classification API
app.get("/api/classify-number", async (req, res) => {
  const number = req.query.number;

  // Input Validation
  if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
    return res.status(400).json({
      number: number,
      error: true,
    });
  }

  const num = parseInt(number);

  try {
    // Fetch Fun Fact from Numbers API
    const funFactResponse = await axios.get(
      `http://numbersapi.com/${num}/math?json`
    );

    const funFact = funFactResponse.data.text;

    // Classify Number Properties
    const properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");

    // Response JSON
    return res.status(200).json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties: properties,
      digit_sum: digitSum(num),
      fun_fact: funFact,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
