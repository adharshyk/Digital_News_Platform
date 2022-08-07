package com.news.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "comments")
public class Comments {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "commentid")
	private int commentId;

	@Column(name = "description")
	private String description;

	@Column(name = "articleid")
	private int articleId;

	@Column(name = "userid")
	private int userId;

	public Comments() {
		super();
	}

	public Comments(int commentId, String description, int articleId, int userId) {
		super();
		this.commentId = commentId;
		this.description = description;
		this.articleId = articleId;
		this.userId = userId;
	}

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getArticleId() {
		return articleId;
	}

	public void setArticleId(int articleId) {
		this.articleId = articleId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Comments [commentId=" + commentId + ", description=" + description + ", articleId=" + articleId
				+ ", userId=" + userId + "]";
	}

}
