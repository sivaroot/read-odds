package com.microservice.createbook;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public BookModel createBook(BookModel bookModel) {
       return bookRepository.save(bookModel);
    }

    public List<BookModel> retrieveBooks() {
        return bookRepository.findAll();
    }
}
