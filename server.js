const express = require("express");
const userRoutes = require('./routes/UserRoutes.js');
const candidateRoutes = require('./routes/CandidateRoutes.js');
const bodyParser = require('body-parser'); 


const app = express();

require("dotenv").config();

app.use(bodyParser.json()); 


// Use the routers
app.use('/user', userRoutes);
// app.use('/candidate', candidateRoutes);

const PORT =  process.env.PORT || 3000;

app.get("/", (req, res) => {
  const message = `    
    <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f9;
                    color: #333;
                    text-align: center;
                }
                .container {
                    max-width: 800px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #4CAF50;
                    font-size: 2.5em;
                }
                p {
                    font-size: 1.2em;
                    line-height: 1.6;
                }
                a {
                    color: #0077B5;
                    text-decoration: none;
                    font-weight: bold;
                }
                .footer {
                    margin-top: 30px;
                    font-size: 1.1em;
                }
                .footer a {
                    text-decoration: none;
                    color: #0077B5;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Voting Application API Server Status</h1>
                <p>The server is running on port: <strong>${PORT}</strong>.</p>
                <p>This API is created by <strong>Vaibhav Vats</strong>.</p>
                <div class="footer">
                    <p>You can visit the API documentation here: 
                    <a href="https://github.com/vaibhavvatsbhartiya/voting_application_api" target="_blank">API Docs</a></p>
                    <p>Connect with me on LinkedIn: 
                    <a href="https://www.linkedin.com/in/vaibhav-vats-" target="_blank">Vaibhav Vats LinkedIn</a></p>
                </div>
            </div>
        </body>
    </html>
    `;
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
