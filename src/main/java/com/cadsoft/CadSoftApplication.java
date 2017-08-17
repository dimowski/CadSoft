package com.cadsoft;

import com.cadsoft.repository.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CadSoftApplication {

    @Autowired
    private ProgramRepository repository;

/*    @Bean
    CommandLineRunner commandLineRunner() {
        return (args) -> repository.save(new Program("Test", "Descr", "ShortDescr", new byte[50]));
    }*/

    public static void main(String[] args) {
        SpringApplication.run(CadSoftApplication.class, args);
    }
}
