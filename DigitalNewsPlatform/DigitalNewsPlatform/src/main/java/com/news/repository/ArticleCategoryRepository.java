package com.news.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.news.entity.ArticleCategory;

@RepositoryRestResource(path = "articlecategory")
@CrossOrigin("http://localhost:4200/")
public interface ArticleCategoryRepository extends JpaRepository<ArticleCategory, Integer> {


	public List<ArticleCategory>findByCategoryNameContainsIgnoreCase(String name);
	
}
