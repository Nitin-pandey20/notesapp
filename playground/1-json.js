const fs=require('fs');
const book={
title: "Book",
author: "Author",
}
const bookJSON=JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)