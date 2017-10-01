create database GreenLotus
go
use GreenLotus

create table [Role]
(
	ID_Role int identity primary key(1,1),
	Name nvarchar(200)
)

create table Users
(
	ID_Users int identity primary key(1,1),
	UserName nvarchar(50),
	[Password] nvarchar(200),
	ID_Role int foreign key references [Role](ID_Role),
	Email nvarchar(200),
	[Address] nvarchar(200)
)

create table AboutUs
(
	ID_AboutUs int identity primary key(1,1),
	[Description] nvarchar(max),
	WhyChoose nvarchar(max),
	OurMission nvarchar(max),
	[Lang] int
)

create table AboutPeople
(
	ID_AboutPeople int identity primary key(1,1),
	Description nvarchar(max),
	RoleName nvarchar(200),
	PictureURL nvarchar(max)
)

create table AboutPartner
(
	ID_AboutPartner int identity primary key(1,1),
	PictureURL nvarchar(max),
	URLReferences nvarchar(max)
)



