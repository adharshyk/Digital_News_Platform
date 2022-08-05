package com.news.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "likes")
public class Likes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="likeid")
	private int likeId;
	
	@Column(name="likescount")
	private int likesCount;

	
	@Column(name="articleid")
	private int articleId;

	
	@Column(name="userid")
	private int userId;

	public Likes() {
		super();
	}

	public Likes(int likeId, int likesCount, int articleId, int userId) {
		super();
		this.likeId = likeId;
		this.likesCount = likesCount;
		this.articleId = articleId;
		this.userId = userId;
	}

	public int getLikeId() {
		return likeId;
	}

	public void setLikeId(int likeId) {
		this.likeId = likeId;
	}

	public int getLikesCount() {
		return likesCount;
	}

	public void setLikesCount(int likesCount) {
		this.likesCount = likesCount;
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

	
	

}
