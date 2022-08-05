package com.news.repository;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import com.news.entity.Article;


@RepositoryRestResource(path = "article")
@CrossOrigin("http://localhost:4200/")
public interface ArticleRepository extends JpaRepository<Article, Integer> {

	public Page<Article> findByCategoryId(@RequestParam("id")Integer id, Pageable page );
	public List<Article>findByArticleTitleContainsIgnoreCase(String name);
}

