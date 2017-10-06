USE [GreenLotus]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 10/07/2017 00:29:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[ID_Role] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Role] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Role] ON
INSERT [dbo].[Role] ([ID_Role], [Name]) VALUES (1, N'Admin ( cấp cao )')
INSERT [dbo].[Role] ([ID_Role], [Name]) VALUES (2, N'Quản lý ')
INSERT [dbo].[Role] ([ID_Role], [Name]) VALUES (3, N'Người dùng bình thường')
SET IDENTITY_INSERT [dbo].[Role] OFF
/****** Object:  Table [dbo].[AboutUs]    Script Date: 10/07/2017 00:29:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AboutUs](
	[ID_AboutUs] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[WhyChoose] [nvarchar](max) NULL,
	[OurMission] [nvarchar](max) NULL,
	[Lang] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_AboutUs] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AboutPeople]    Script Date: 10/07/2017 00:29:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AboutPeople](
	[ID_AboutPeople] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[RoleName] [nvarchar](200) NULL,
	[PictureURL] [nvarchar](max) NULL,
	[Lang] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_AboutPeople] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AboutPartner]    Script Date: 10/07/2017 00:29:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AboutPartner](
	[ID_AboutPartner] [int] IDENTITY(1,1) NOT NULL,
	[PictureURL] [nvarchar](max) NULL,
	[URLReferences] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[Lang] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_AboutPartner] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AboutPartner] ON
INSERT [dbo].[AboutPartner] ([ID_AboutPartner], [PictureURL], [URLReferences], [Description], [Lang]) VALUES (2, N'http://10.211.55.3:1088/Image/partner-1507231599.png', N'diachi', N'mota', N'vn')
INSERT [dbo].[AboutPartner] ([ID_AboutPartner], [PictureURL], [URLReferences], [Description], [Lang]) VALUES (3, N'http://10.211.55.3:1088/Image/partner-1507231599.png', N'diachi', N'mota', N'en')
SET IDENTITY_INSERT [dbo].[AboutPartner] OFF
/****** Object:  StoredProcedure [dbo].[updatePartner]    Script Date: 10/07/2017 00:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[updatePartner]
	@ID_AboutPartner int,
	@PictureURL nvarchar(max),
	@URLRefercens nvarchar(max),
	@Description nvarchar(max),
	@Lang nvarchar(50)
as
update AboutPartner
set PictureURL = @PictureURL,
URLReferences = @URLRefercens,
[Description] = @Description,
Lang = @Lang
where ID_AboutPartner = @ID_AboutPartner
GO
/****** Object:  StoredProcedure [dbo].[addPartner]    Script Date: 10/07/2017 00:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[addPartner]
	@PictureURL nvarchar(max),
	@URLRefercens nvarchar(max),
	@Description nvarchar(max),
	@Lang nvarchar(50)
as
insert into AboutPartner(PictureURL, URLReferences, [Description], Lang)
values(@PictureURL, @URLRefercens, @Description, @Lang)
GO
/****** Object:  StoredProcedure [dbo].[getAllPartner]    Script Date: 10/07/2017 00:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getAllPartner]
as
select *
from AboutPartner
GO
/****** Object:  StoredProcedure [dbo].[deletePartner]    Script Date: 10/07/2017 00:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[deletePartner]
	@ID int
as
delete AboutPartner
where ID_AboutPartner = @ID
GO
/****** Object:  Table [dbo].[Users]    Script Date: 10/07/2017 00:29:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[ID_Users] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NULL,
	[Password] [nvarchar](200) NULL,
	[ID_Role] [int] NULL,
	[Email] [nvarchar](200) NULL,
	[Address] [nvarchar](200) NULL,
	[Status] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Users] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Users] ON
INSERT [dbo].[Users] ([ID_Users], [UserName], [Password], [ID_Role], [Email], [Address], [Status]) VALUES (1, N'System Admin', N'sa123456', 1, N'sa@gmail.com', N'123 nguyễn văn cừ, Q1', 1)
SET IDENTITY_INSERT [dbo].[Users] OFF
/****** Object:  StoredProcedure [dbo].[updateUser]    Script Date: 10/07/2017 00:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[updateUser]
	@ID_Users int,
	@Username nvarchar(50),
	@Address nvarchar(200),
	@Password nvarchar(200),
	@ID_Role int,
	@Status bit
  as
  update Users
  set UserName = @Username,
	  [Password] = @Password,
	  ID_Role = @ID_Role,
	  [Address] = @Address,
	  [Status] = @Status
  where ID_Users = @ID_Users
GO
/****** Object:  StoredProcedure [dbo].[getUserByID]    Script Date: 10/07/2017 00:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[getUserByID]
  @ID int
  as
  select u.ID_Users ,u.Username, u.Password, u.Email, u.Address, r.Name, u.Status, r.ID_Role from Users as u, Role as r
  where u.ID_Users = @ID and r.ID_Role = u.ID_Role
GO
/****** Object:  StoredProcedure [dbo].[getAllUser]    Script Date: 10/07/2017 00:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[getAllUser]
  as
  select u.ID_Users ,u.Username, u.Password, u.Email, u.Address, r.Name, u.Status from Users as u, Role as r
  where r.ID_Role = u.ID_Role
GO
/****** Object:  StoredProcedure [dbo].[checkLogin]    Script Date: 10/07/2017 00:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[checkLogin]
  @email nvarchar(200),
  @pass nvarchar(200)
  as
  select u.ID_Users ,u.Username, u.Password, u.Email, u.Address, r.Name, u.[Status] from Users as u, Role as r
  where Email = @email and [Password] = @pass and r.ID_Role = u.ID_Role and u.[Status] = 1
GO
/****** Object:  StoredProcedure [dbo].[addUser]    Script Date: 10/07/2017 00:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[addUser]
  @Username nvarchar(50),
  @Address nvarchar(200),
  @Email nvarchar(200),
  @Password nvarchar(200),
  @ID_Role int
  as
  insert into Users(UserName, [Password], ID_Role, Email, [Address], Status)
  values(@Username, @Password, @ID_Role, @Email, @Address, 1)
GO
/****** Object:  ForeignKey [FK__Users__ID_Role__108B795B]    Script Date: 10/07/2017 00:29:28 ******/
ALTER TABLE [dbo].[Users]  WITH CHECK ADD FOREIGN KEY([ID_Role])
REFERENCES [dbo].[Role] ([ID_Role])
GO
