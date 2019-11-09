const app = require('./config/server');
const PORT = '8080';

app.listen(PORT, () => console.log({ Status: "Online" }))
