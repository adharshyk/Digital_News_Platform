package com.news.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.news.entity.Article;
import com.news.entity.Comments;

@RepositoryRestResource(path = "comments")
@CrossOrigin("http://localhost:4200/")
public interface CommentsRepository extends JpaRepository<Comments, Integer> {

	public Page<Comments> findByUserId(@RequestParam("id")Integer id, Pageable page );
}
