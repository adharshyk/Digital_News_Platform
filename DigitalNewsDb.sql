create database news;
use news;

create table admin(email varchar(255) primary key,password varchar(20));
insert into admin values('admin@gmail.com','admin');

create table user(userid int primary key,emailid varchar(255) ,password varchar(20),name varchar(50),mobile bigint,city varchar(20),gender varchar(20),dob date);
      
select * from user;

create table newscategory(categoryid int primary key auto_increment,categoryname varchar(50));

create table newsitem(newsid int primary key,newstitle varchar(100),newslink varchar(255),categoryid int,numberoflikes int,numberofcomments int, foreign key (categoryid) references newscategory (categoryid));
select * from newsitem;
drop table newsitem ;

create table comments(commentid int primary key, description varchar(255),newsid int,userid int, foreign key(newsid) references newsitem(newsid),foreign key(userid) references user(userid) );
select * from comment;

create table likes(likes int,newsid int,userid int,foreign key(newsid) references newsitem(newsid),foreign key(userid) references user(userid));
select * from likes;

