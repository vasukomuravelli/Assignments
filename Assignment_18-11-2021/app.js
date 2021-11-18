const express = require("express");

const app = express();

// console.log(express);

const books = require("./MOCK_DATA.json");

app.use(express.json());

app.get("/",(req,res)=>{
    res.send(books);
});

app.post("/",(req,res)=>{
    books.push(req.body)
    res.send(books);
});

app.get("/:first_name",(req,res)=>{
    let newBook = books.filter((book)=>{
        if(req.params.first_name === book.first_name)
        {
            return book;
        }
    })
    res.send(newBook);
});

app.patch("/:last_name",(req,res)=>{
    const newBooks = books.map((book)=>{
        if(req.params.last_name === book.last_name)
        {
            if(req?.body?.first_name) book.first_name = req.body.first_name;
            if(req?.body?.last_name) book.last_name = req.body.last_name;
            if(req?.body?.Book_title) book.Book_title = req.body.Book_title;
            if(req?.body?.content) book.content = req.body.content;
        }
        return book;
    });
    res.send(newBooks);
});

app.delete("/:Book_title",(req,res)=>{
    const newbooks = books.filter((book)=>{
        if(req.params.Book_title !== book.Book_title)
        {
            return book;
        }
    })
    res.send(newbooks);
})

app.listen("9876",()=>{
    console.log("Listening on 9876");
})