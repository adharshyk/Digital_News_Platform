create database newsplatform;
use newsplatform;

create table admin(emailid varchar(255) primary key,password varchar(20));
insert into admin values('admin@gmail.com','admin');
select * from admin;

create table user(userid int primary key auto_increment,emailid varchar(255) ,password varchar(20),
name varchar(50),mobile bigint,city varchar(20),gender varchar(20),dob date);

insert into user(emailid,password,name,mobile,city,gender,dob) 
values("xyz@gmail.com", "xyz", "Adharsh", 8888888888, "Kerala", "male","2000-07-13"),
("ks@gmail.com", "ks123", "Kishor", 888656788, "Latur", "male","1995-07-13"),
("Sk@gmail.com", "sk123", "Salman", 887777788, "Delhi", "male","1990-07-13");

select * from user;

create table articlecategory(categoryid  int primary key auto_increment ,categoryname varchar(50));
alter table articlecategory auto_increment = 101;
insert into articlecategory (categoryname) values ("Sports"),
("Entertainment"),
("Business"),
("Politics");

select * from articlecategory;


create table article(articleid int primary key auto_increment,articletitle varchar(100),imageurl varchar(255),
articlelink varchar(255),categoryid int,likescount int,commentscount int, 
foreign key (categoryid) references articlecategory (categoryid));

alter table article auto_increment = 1001;

insert into article (articletitle,imageurl,articlelink,categoryid,likescount,commentscount)
values("commonwealth","https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA10kGHp.img?w=380&h=285&m=6&x=278&y=59&s=58&d=58","https://www.msn.com/en-in/sports/other/commonwealth-games-day-8-live-bhavina-patel-ensures-para-tt-medal-bajrang-punia-reaches-quarters/ar-AA10kOdm?cvid=e76500dab63f417eb29d9a7bff4de9d8#image=1",101,50,70);

insert into article(articletitle,imageurl,articlelink,categoryid,likescount,commentscount)
values("Asia cup","https://c.ndtvimg.com/2022-07/v5t1unf8_deepak-hooda-afp_625x300_25_July_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605","https://sports.ndtv.com/west-indies-vs-india-2022/4th-t20i-iyer-hooda-to-fight-for-asia-cup-berth-as-india-eye-series-win-3227772",101,40,20),
("RBI repo rate","https://c.ndtvimg.com/2022-08/0prrjnlo_image_625x300_05_August_22.png","https://www.ndtv.com/business/rbi-ready-to-do-whatever-it-takes-governor-after-rate-hike-to-highest-since-2019-3227186#pfrom=home-business_topstories",103,40,10),
("Congress Strike","https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA10kVdk.img?w=534&h=356&m=6","https://www.msn.com/en-in/news/politics/gandhi-siblings-other-congress-leaders-detained-amid-protest-over-inflation-live-updates/ar-AA10kmeP",104,100,100);

select * from article;

create table comments(commentid int primary key auto_increment, description varchar(255),
articleid int,userid int, foreign key(articleid) references article(articleid),
foreign key(userid) references user(userid) );

alter table comments auto_increment = 2001;

insert into comments(description,articleid,userid)
 values ("proud Moments", 1001,2),
("Awesome", 1001,3),
("Inflation....", 1003,1),
("Stop this....", 1004,3),
("Virat...", 1002,2),
("Government....", 1004,1);

select * from comments;

create table likes(likeid int primary key auto_increment,articleid int,userid int,
foreign key(articleid) references article(articleid),
foreign key(userid) references user(userid));

alter table likes auto_increment = 3001;

