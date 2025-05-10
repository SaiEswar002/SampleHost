app.use(express.static("./frontend/build"));
app.get("*", (req, res) => {
res.sendFile(path.resolve(_dirname, "frontend", "src", "main.jsx")) });

app.listen(port, () => {
console.log(`App is listening at ${port});`)
}); 