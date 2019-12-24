package com.microservice.createbook;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/create-book")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping()
    public ResponseEntity<?> createBook(@RequestBody  BookModel bookBody) {
        BookModel bookModel = bookService.createBook(bookBody);
        return ResponseEntity.status(HttpStatus.CREATED).body(bookModel);
    }

    @GetMapping()
    public List<BookModel> getAllBook() {
        return bookService.retrieveBooks();
    }
}
