const url = 'https://spreadsheets.google.com/feeds/cells/1CVspA6QNrgjfaQin5M9rVI1zXcE-DBFJAV2aeTAEsU4/od6/public/basic?alt=json';

fetch(url)
.then(response => response.json() )
.then(data => response => {
    console.log(data)
})