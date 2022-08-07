package com.news.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "article")
public class Article {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "articleid")
	private int articleId;

	@Column(name = "articletitle")
	private String articleTitle;

	@Column(name = "articlelink")
	private String articleLink;

	@Column(name = "categoryid")
	private int categoryId;

	@Column(name = "likescount")
	private int likesCount;

	@Column(name = "commentscount")
	private int commentCount;

	@Column(name = "imageurl")
	private String imageURL;

	@Column(name = "description")
	private String description;

	public Article(int articleId, String articleTitle, String articleLink, int categoryId, int likesCount,
			int commentCount, String imageURL, String description) {
		super();
		this.articleId = articleId;
		this.articleTitle = articleTitle;
		this.articleLink = articleLink;
		this.categoryId = categoryId;
		this.likesCount = likesCount;
		this.commentCount = commentCount;
		this.imageURL = imageURL;
		this.description = description;
	}

	public Article() {
		super();
	}

	public int getArticleId() {
		return articleId;
	}

	public void setArticleId(int articleId) {
		this.articleId = articleId;
	}

	public String getArticleTitle() {
		return articleTitle;
	}

	public void setArticleTitle(String articleTitle) {
		this.articleTitle = articleTitle;
	}

	public String getArticleLink() {
		return articleLink;
	}

	public void setArticleLink(String articleLink) {
		this.articleLink = articleLink;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public int getLikesCount() {
		return likesCount;
	}

	public void setLikesCount(int likesCount) {
		this.likesCount = likesCount;
	}

	public int getCommentCount() {
		return commentCount;
	}

	public void setCommentCount(int commentCount) {
		this.commentCount = commentCount;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Article [articleId=" + articleId + ", articleTitle=" + articleTitle + ", articleLink=" + articleLink
				+ ", categoryId=" + categoryId + ", likesCount=" + likesCount + ", commentCount=" + commentCount
				+ ", imageURL=" + imageURL + ", description=" + description + "]";
	}

}
