const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const folder = path.join(__dirname, "files");

// Create files folder if it does not exist
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
}

const server = http.createServer((req, res) => {

    const url = new URL(req.url, `http://${req.headers.host}`);
    const filename = url.searchParams.get("name");
    const filePath = filename ? path.join(folder, filename) : null;

    // CREATE
    if (req.method === "POST" && url.pathname === "/create") {
        let data = "";

        req.on("data", chunk => {
            data += chunk;
        });

        req.on("end", () => {
            fs.writeFile(filePath, data, err => {
                if (err) {
                    res.end("Error creating file");
                } else {
                    res.end("File created successfully");
                }
            });
        });
    }

    // READ
    else if (req.method === "GET" && url.pathname === "/read") {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.end("File not found");
            } else {
                res.end(data);
            }
        });
    }

    // UPDATE
    else if (req.method === "PUT" && url.pathname === "/update") {
        let data = "";

        req.on("data", chunk => {
            data += chunk;
        });

        req.on("end", () => {
            fs.writeFile(filePath, data, err => {
                if (err) {
                    res.end("Error updating file");
                } else {
                    res.end("File updated successfully");
                }
            });
        });
    }

    // DELETE
    else if (req.method === "DELETE" && url.pathname === "/delete") {
        fs.unlink(filePath, err => {
            if (err) {
                res.end("File not found");
            } else {
                res.end("File deleted successfully");
            }
        });
    }

    else {
        res.end("Invalid request");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});