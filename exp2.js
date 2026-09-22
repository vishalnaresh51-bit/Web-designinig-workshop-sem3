const fs = require('fs');

// CREATE
fs.writeFile('example.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('1. File created successfully');

    // READ
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('2. File content:', data);

        // UPDATE
        fs.writeFile('example.txt', 'Welcome to Advance FSD', (err) => {
            if (err) throw err;
            console.log('3. File updated successfully');

            // DELETE
            fs.unlink('example.txt', (err) => {
                if (err) throw err;
                console.log('4. File deleted successfully');
            });
        });
    });
});