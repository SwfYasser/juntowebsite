const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const homeRoutes = require("./routes/home");
app.use("/", homeRoutes);

// Add more routes later
// const clubsRoutes = require("./routes/clubs");
// app.use("/clubs", clubsRoutes);

const clubsRoutes = require("./routes/clubs");
app.use("/clubs", clubsRoutes);

const infoRoutes = require("./routes/info");
app.use("/information", infoRoutes)

const contactRoutes = require("./routes/contact");
app.use("/contact", contactRoutes)

app.get("/test", (req, res) => {
    res.render(("test"))
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});