package com.news.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.news.entity.User;

@RepositoryRestResource(path = "user")
@CrossOrigin("http://localhost:4200/")
public interface UserRepository extends JpaRepository<User, Integer>{

}
