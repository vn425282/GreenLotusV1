USE [GreenLotus]
GO
/****** Object:  StoredProcedure [dbo].[addAboutPeople]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


  CREATE proc [dbo].[addAboutPeople]
  @Description nvarchar(max),
  @RoleName nvarchar(200),
  @PictureURL nvarchar(max),
  @Lang nvarchar(50)
  as
  insert into AboutPeople(Description, RoleName, PictureURL, Lang, [Type])
  values(@Description, @RoleName, @PictureURL, @Lang, 'people')

GO
/****** Object:  StoredProcedure [dbo].[addBlog]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[addBlog]
@DateCreate datetime,
@Tag nvarchar(max),
@Author nvarchar(200),
@ImageTitle nvarchar(max),
@VideoPath nvarchar(max),
@Description nvarchar(max),
@Lang nvarchar(50),
@Title nvarchar(max)
as
insert into Blog(DateCreate, Tag, Author, ImageTitle, VideoPath, [Description], Lang, Title)
values(@DateCreate, @Tag, @Author, @ImageTitle, @VideoPath, @Description, @Lang, @Title)
GO
/****** Object:  StoredProcedure [dbo].[addClientSaid]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

  
  CREATE proc [dbo].[addClientSaid]
  @Description nvarchar(max),
  @RoleName nvarchar(200),
  @PictureURL nvarchar(max),
  @Lang nvarchar(50)
  as
  insert into AboutPeople(Description, RoleName, PictureURL, Lang, [Type])
  values(@Description, @RoleName, @PictureURL, @Lang, 'clientsaid')
GO
/****** Object:  StoredProcedure [dbo].[addPartner]    Script Date: 11/5/17 13:33:24 ******/
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
/****** Object:  StoredProcedure [dbo].[addUser]    Script Date: 11/5/17 13:33:24 ******/
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
/****** Object:  StoredProcedure [dbo].[checkLogin]    Script Date: 11/5/17 13:33:24 ******/
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
/****** Object:  StoredProcedure [dbo].[deleteAboutPeople]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
  create proc [dbo].[deleteAboutPeople]
  @ID_AboutPeople int
  as
  delete AboutPeople
  where ID_AboutPeople = @ID_AboutPeople

GO
/****** Object:  StoredProcedure [dbo].[deleteBlog]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[deleteBlog]
@ID_Blog int
as
delete Blog
where ID_Blog = @ID_Blog
GO
/****** Object:  StoredProcedure [dbo].[deletePartner]    Script Date: 11/5/17 13:33:24 ******/
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
/****** Object:  StoredProcedure [dbo].[getAboutPeople]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
  create proc [dbo].[getAboutPeople]
  as
  select * from AboutPeople

GO
/****** Object:  StoredProcedure [dbo].[getAllAboutUs]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

  create proc [dbo].[getAllAboutUs]
  as
  select * from AboutUs

GO
/****** Object:  StoredProcedure [dbo].[getAllPartner]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getAllPartner]
as
select *
from AboutPartner


GO
/****** Object:  StoredProcedure [dbo].[getAllUser]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[getAllUser]
  as
  select u.ID_Users ,u.Username, u.Password, u.Email, u.Address, r.Name, u.Status from Users as u, Role as r
  where r.ID_Role = u.ID_Role


GO
/****** Object:  StoredProcedure [dbo].[getBlog]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getBlog]
as
select * from Blog
GO
/****** Object:  StoredProcedure [dbo].[getUserByID]    Script Date: 11/5/17 13:33:24 ******/
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
/****** Object:  StoredProcedure [dbo].[updateAboutPeople]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
  create proc [dbo].[updateAboutPeople]
  @ID_AboutPeople int,
  @Description nvarchar(max),
  @RoleName nvarchar(200),
  @PictureURL nvarchar(max),
  @Lang nvarchar(50)
  as
  update AboutPeople
  set [Description] = @Description, RoleName = @RoleName, PictureURL = @PictureURL, Lang = @Lang
  where ID_AboutPeople = @ID_AboutPeople

GO
/****** Object:  StoredProcedure [dbo].[updateAboutUs]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
  CREATE proc [dbo].[updateAboutUs]
  @ID_AboutUs int,
  @Description nvarchar(max),
  @WhyChoose nvarchar(max),
  @OurMission nvarchar(max)
  as
  update AboutUs
  set Description = @Description,
  WhyChoose = @WhyChoose,
  OurMission = @OurMission
  where ID_AboutUs = @ID_AboutUs

GO
/****** Object:  StoredProcedure [dbo].[updateBlog]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[updateBlog]
@ID_Blog int,
@DateCreate datetime,
@Tag nvarchar(max),
@Author nvarchar(200),
@ImageTitle nvarchar(max),
@VideoPath nvarchar(max),
@Description nvarchar(max),
@Lang nvarchar(50),
@Title nvarchar(max)
as
update Blog
set DateCreate = @DateCreate
, Tag = @Tag
, Author = @Author
, ImageTitle = @ImageTitle
, VideoPath = @VideoPath
, [Description] = @Description
, Lang = @Lang
, Title = @Title
where ID_Blog = @ID_Blog
GO
/****** Object:  StoredProcedure [dbo].[updatePartner]    Script Date: 11/5/17 13:33:24 ******/
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
/****** Object:  StoredProcedure [dbo].[updateUser]    Script Date: 11/5/17 13:33:24 ******/
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
/****** Object:  Table [dbo].[AboutPartner]    Script Date: 11/5/17 13:33:24 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AboutPeople]    Script Date: 11/5/17 13:33:24 ******/
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
	[Type] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_AboutPeople] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AboutUs]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AboutUs](
	[ID_AboutUs] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[WhyChoose] [nvarchar](max) NULL,
	[OurMission] [nvarchar](max) NULL,
	[Lang] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_AboutUs] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Blog]    Script Date: 11/5/17 13:33:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Blog](
	[ID_Blog] [int] IDENTITY(1,1) NOT NULL,
	[DateCreate] [datetime] NULL,
	[Tag] [nvarchar](max) NULL,
	[Author] [nvarchar](200) NULL,
	[ImageTitle] [nvarchar](max) NULL,
	[VideoPath] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[Lang] [nvarchar](50) NULL,
	[Title] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Blog] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Role]    Script Date: 11/5/17 13:33:24 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 11/5/17 13:33:24 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[AboutPartner] ON 

INSERT [dbo].[AboutPartner] ([ID_AboutPartner], [PictureURL], [URLReferences], [Description], [Lang]) VALUES (8, N'/Image/partner-1507570790.png', N'http://fptplay.vn', N'fptvn', N'vn')
INSERT [dbo].[AboutPartner] ([ID_AboutPartner], [PictureURL], [URLReferences], [Description], [Lang]) VALUES (9, N'/Image/partner-1507570805.png', N'http://www.fptplay.vn', N'fpt is the IT company', N'en')
INSERT [dbo].[AboutPartner] ([ID_AboutPartner], [PictureURL], [URLReferences], [Description], [Lang]) VALUES (10, N'/Image/partner-1509283353.png', N'https://www.google.com.vn', N'Dịch vụ vận chuyển số 1 Việt Nam', N'vn')
INSERT [dbo].[AboutPartner] ([ID_AboutPartner], [PictureURL], [URLReferences], [Description], [Lang]) VALUES (11, N'/Image/partner-1509283441.jpg', N'http://www.viettel.vn', N'Hãng nhà mạng internet, phone ', N'vn')
INSERT [dbo].[AboutPartner] ([ID_AboutPartner], [PictureURL], [URLReferences], [Description], [Lang]) VALUES (12, N'/Image/partner-1509283470.png', N'https://www.vietnamairlines.com/', N'Hãng hàng không số 1 Việt Nam', N'vn')
INSERT [dbo].[AboutPartner] ([ID_AboutPartner], [PictureURL], [URLReferences], [Description], [Lang]) VALUES (13, N'/Image/partner-1509283539.png', N'http://www.vinamilk.vn', N'Hãng sữa hàng đầu VN', N'vn')
INSERT [dbo].[AboutPartner] ([ID_AboutPartner], [PictureURL], [URLReferences], [Description], [Lang]) VALUES (14, N'/Image/partner-1509283565.jpg', N'http://www.mb.vn', N'Ngân hàng quân đội VN', N'vn')
SET IDENTITY_INSERT [dbo].[AboutPartner] OFF
SET IDENTITY_INSERT [dbo].[AboutPeople] ON 

INSERT [dbo].[AboutPeople] ([ID_AboutPeople], [Description], [RoleName], [PictureURL], [Lang], [Type]) VALUES (1, N'Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO Giám đốc CEO', N'Nguyễn Văn A - Giám đốc CEO', N'/Image/about-people-1509296900.jpg', N'vn', N'people')
INSERT [dbo].[AboutPeople] ([ID_AboutPeople], [Description], [RoleName], [PictureURL], [Lang], [Type]) VALUES (2, N'Nếu người đàn ông không uống trà, anh ấy không thể cảm nhận được sự thật và cái đẹp.', N'CEO Apple', N'/Image/about-clientsaid-1509286659.png', N'vn', N'clientsaid')
INSERT [dbo].[AboutPeople] ([ID_AboutPeople], [Description], [RoleName], [PictureURL], [Lang], [Type]) VALUES (3, N'CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO CFO', N'CFO', N'/Image/about-people-1509296917.jpg', N'vn', N'people')
INSERT [dbo].[AboutPeople] ([ID_AboutPeople], [Description], [RoleName], [PictureURL], [Lang], [Type]) VALUES (5, N'Tôi đánh giá cao nỗ lực của GreenLotus trong việc hợp tác xây dựng dự án', N'CEO Apple', N'/Image/clientsaid-1507815688.png', N'vn', N'clientsaid')
INSERT [dbo].[AboutPeople] ([ID_AboutPeople], [Description], [RoleName], [PictureURL], [Lang], [Type]) VALUES (1004, N'Khách sạn chúng tôi rất hân hạnh khi được làm việc cùng GreenLotus', N'CEO Confidento', N'/Image/clientsaid-1509285749.png', N'vn', N'clientsaid')
INSERT [dbo].[AboutPeople] ([ID_AboutPeople], [Description], [RoleName], [PictureURL], [Lang], [Type]) VALUES (1005, N'Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh Trưởng phòng kinh doanh', N'Trưởng phòng kinh doanh', N'/Image/about-people-1509296943.jpg', N'vn', N'people')
INSERT [dbo].[AboutPeople] ([ID_AboutPeople], [Description], [RoleName], [PictureURL], [Lang], [Type]) VALUES (1006, N'Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án Quản lý dự án ', N'Quản lý dự án', N'/Image/about-people-1509296954.jpg', N'vn', N'people')
SET IDENTITY_INSERT [dbo].[AboutPeople] OFF
SET IDENTITY_INSERT [dbo].[AboutUs] ON 

INSERT [dbo].[AboutUs] ([ID_AboutUs], [Description], [WhyChoose], [OurMission], [Lang]) VALUES (1, N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p><span style="color: rgb(85, 85, 85);">Tạo nên giá trị. Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị Tạo nên giá trị</span></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p><span style="color: rgb(85, 85, 85);">Chúng tôi là đơn vị tốt nhất Việt Nam. Chúng tôi là đơn vị tốt nhất Việt Nam. Chúng tôi là đơn vị tốt nhất Việt Nam. Chúng tôi là đơn vị tốt nhất Việt Nam. Chúng tôi là đơn vị tốt nhất Việt Nam.Chúng tôi là đơn vị tốt nhất Việt Nam. Chúng tôi là đơn vị tốt nhất Việt Nam</span></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p><span style="color: rgb(85, 85, 85);">Hợp tác và cùng phát triển. Hợp tác và cùng phát triển Hợp tác và cùng phát triển Hợp tác và cùng phát triển Hợp tác và cùng phát triển Hợp tác và cùng phát triển Hợp tác và cùng phát triển Hợp tác và cùng phát triển Hợp tác và cùng phát triển Hợp tác và cùng phát triển</span></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'vn')
INSERT [dbo].[AboutUs] ([ID_AboutUs], [Description], [WhyChoose], [OurMission], [Lang]) VALUES (2, N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p>Description about us<img src="data:image/png;base64,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"></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p>why choose us ?</p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p>our mission is ... ?</p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'en')
SET IDENTITY_INSERT [dbo].[AboutUs] OFF
SET IDENTITY_INSERT [dbo].[Blog] ON 

INSERT [dbo].[Blog] ([ID_Blog], [DateCreate], [Tag], [Author], [ImageTitle], [VideoPath], [Description], [Lang], [Title]) VALUES (4, CAST(0x0000A81B01676190 AS DateTime), N'Tin tức khác', N'System Admin', N'/Image/news-1507977793.png', N'uploads/video-1507977787.mp4', N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><h2><strong style="color: rgb(255, 0, 0);">Công ty thương mại dịch vụ là gì ?</strong></h2><p><br></p><p><strong>Công ty tnhh thương mại dịch vụ là</strong>&nbsp;<span style="color: rgb(0, 128, 0);">công ty tnhh</span>&nbsp;chuyên về các loại hình&nbsp;<a href="http://tuvanthanhlapcongtytnhh.com/tu-van-thanh-lap-cong-ty-tnhh/dich-vu-thanh-lap-cong-ty-tnhh-hcm.html" target="_blank" style="color: rgb(195, 0, 5);"><strong>dịch vụ</strong></a>&nbsp;du lịch, thể thao, vận tải, ngân hàng, văn hóa, thể thao, đoàn thể xã hội... với trách nhiệm hữu hạn. Gồm công ty tnhh một thành viên và công ty tnhh hai thành viên trở lên. Định nghĩa cực kỳ đơn giản nếu các bạn đã&nbsp;<a href="http://tuvanthanhlapcongtytnhh.com/tu-van-thanh-lap-cong-ty-tnhh/dinh-nghia-cong-ty-tnhh-la-gi.html" target="_blank" style="color: rgb(0, 128, 0);"><strong>tìm hiểu công ty tnhh là gì ?</strong></a></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Khám phá&nbsp;</span><a href="http://tuvanthanhlapcongtytnhh.com/tu-van-thanh-lap-cong-ty-tnhh/thuong-mai-la-gi.html" target="_blank" style="color: rgb(195, 0, 5);"><strong>thương mại là gì ? thương mại điện tử là gì ?</strong></a><span style="color: rgb(0, 0, 0);">&nbsp;và</span><a href="http://tuvanthanhlapcongtytnhh.com/hoi-dap/doanh-nghiep-thuong-mai-la-gi.html" target="_blank" style="color: rgb(195, 0, 5);"><strong>doanh nghiệp thương mại là gì ?</strong></a><span style="color: rgb(0, 0, 0);">cùng nhiều kiến thức bổ ích xoay quanh vấn đề này.</span></p><p><br></p><h3><strong style="color: rgb(255, 0, 0);">Giấy tờ thành lập công ty tnhh thương mại dịch vụ gồm</strong></h3><p><br></p><ul><li>Giấy đề nghị đăng kí kinh doanh.</li><li>Dự thảo điều lệ công ty.</li><li>Thông tin cá nhân chứng thực người đứng đầu công ty.</li><li>Danh sách người ủy quyền hợp lệ và giấy tờ chứng nhận người ủy quyền.</li><li>Giấy chứng nhận&nbsp;<a href="http://tuvanthanhlapcongtytnhh.com/tu-van-thanh-lap-cong-ty-tnhh/su-khac-nhau-giua-von-dieu-le-va-von-phap-dinh-la-gi.html" target="_blank" style="color: rgb(195, 0, 5);"><strong>vốn pháp định</strong></a>&nbsp;của cơ quan; giấy phép của giám đốc và nhân viên theo quy định của pháp luật&nbsp;<a href="http://tuvanthanhlapcongtytnhh.com/blog/nhung-nganh-nghe-kinh-doanh-co-dieu-kien.html" target="_blank" style="color: rgb(0, 128, 0);"><strong>những ngành nghề yêu cầu vốn pháp định</strong></a>&nbsp;và yêu cầu giấy chứng nhận ngành nghề.</li><li><br></li></ul><h3>&nbsp;<strong style="color: rgb(255, 0, 0);">Lưu ý về việc thành lập công ty</strong></h3><p>Tên công ty có ý nghĩa hết sức quan trọng với một công ty tnhh thương mại dịch vụ. Nó còn là một thương hiệu của công ty trong suốt quá trình hoạt động sau này. Bạn cần lựa chọn tên công ty là duy nhất và không bị trùng lặp với các công ty khác.</p><p><br></p><p><strong>Ý tưởng kinh doanh :</strong>&nbsp;đối với nghành dịch vụ thì có 14 nghành mà bạn có thể lựa chọn để kinh doanh. Đừng đi theo số đông nếu muốn trở lên riêng biệt trong thị trường đang phát triển mạnh mẽ này.</p><p><strong>Ngân sách :</strong>&nbsp;loại hình kinh doanh này đòi hỏi số vốn đầu tư khá lớn cũng như sự đảm bảo thương hiệu và uy tín. Chính vì thế khi đã xác định kinh doanh bạn cần chuẩn bị số vốn đầu tư khá lớn trước khi thành lập doanh nghiệp.</p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'vn', N' Công ty tnhh thương mại dịch vụ là gì ? ')
INSERT [dbo].[Blog] ([ID_Blog], [DateCreate], [Tag], [Author], [ImageTitle], [VideoPath], [Description], [Lang], [Title]) VALUES (1002, CAST(0x0000A81B01687170 AS DateTime), N'Sự kiện', N'System Admin', N'/Image/news-1509288735.jpg', N'', N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p><span style="color: rgb(51, 51, 51);">Office-tel Sunrise Riverside được nhiều khách hàng đánh giá là mô hình đầu tư hiệu quả có hiệu suất sinh lời cao ngay Nam Sài Gòn nhờ nhiều ưu điểm nổi bật:&nbsp;</span></p><ul><li>Vị thế trung tâm Nam Sài Gòn, dễ dàng di chuyển đến SC Vivo City, Cresent Mall, Siêu thị Lotte, Đại học RMIT, Bệnh viện FV</li><li>Trải nghiệm chuỗi tiện ích cao cấp, chuẩn “resort” như hồ bơi, công viên, khu liên hợp thể thao rộng lớn</li><li>Khả năng sinh lợi cao từ mô hình đa năng: văn phòng làm việc, đăng ký kinh doanh, đồng thời được tận hưởng trọn vẹn tiện ích của Khu phức hợp, thương mại đẳng cấp</li></ul><p>Đặc biệt, dự án đang áp dụng ưu đãi hấp dẫn với Chương trình cam kết cho thuê lên đến 500 triệu đồng/2,5 năm.</p><p>&nbsp;</p><p><img src="https://www.novaland.com.vn/Data/Sites/1/media/tin-tuc/thong-tin-du-an/srr/%5B2017_10_18%5D-srr_edm-01.jpg"></p><p><br></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'vn', N'SUNRISE RIVERSIDE CAM KẾT CHO THUÊ ĐẾN 30 THÁNG')
INSERT [dbo].[Blog] ([ID_Blog], [DateCreate], [Tag], [Author], [ImageTitle], [VideoPath], [Description], [Lang], [Title]) VALUES (1003, CAST(0x0000A81B01697B74 AS DateTime), N'Tin tức khác', N'System Admin', N'/Image/news-1509288918.jpg', N'', N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p>FPT Nhật Bản chính thức cán mốc doanh thu 100 triệu USD (tương đương hơn 2.200 tỷ đồng) trong 10 tháng đầu năm 2016. Với kỷ lục doanh thu này, FPT Nhật Bản hiện là công ty dịch vụ CNTT Việt Nam lớn nhất tại Nhật Bản, đồng thời tiệm cận TOP 50 công ty cung cấp dịch vụ CNTT lớn nhất tại Nhật Bản, bao gồm các công ty tên tuổi như Fujitsoft, DTS, Systena...</p><p><br></p><p>Trong hơn 10 năm qua, doanh thu của FPT Nhật Bản luôn đạt mức tăng trưởng 32%/năm. Tốc độ tăng trưởng doanh thu của FPT Nhật Bản cao gấp 2,5 lần mức tăng trưởng bình quân của kim ngạch xuất khẩu Việt Nam – Nhật Bản (13,9%/năm) trong giai đoạn 2006-2015. Bên cạnh đó, theo số liệu của Tổng cục Hải quan, tính đến hết tháng 9/2016, có 24/80 thị trường xuất khẩu của Việt Nam có kim ngạch xuất khẩu dưới 100 triệu USD.</p><p><br></p><p>Nhật Bản luôn là thị trường quan trọng số một của FPT trong chiến lược toàn cầu hóa. Với 760 cán bộ nhân viên hiện tại và nguồn lực hỗ trợ gồm 4.500 kỹ sư CNTT trong nước, FPT Nhật Bản đặt mục tiêu năm 2017 đứng trong danh sách 50 công ty dịch vụ CNTT lớn tại Nhật Bản. Đồng thời dự kiến đóng góp 50% trong mục tiêu doanh thu 1 tỷ USD từ thị trường nước ngoài vào năm 2020 của FPT.</p><p><br></p><p>Theo ông Hoàng Nam Tiến, Chủ tịch FPT Software<em>: "Cuộc cách mạng công nghiệp lần thứ 3 những năm 1960 đã tạo nên cường quốc Nhật Bản, và&nbsp;trong cuộc cách mạng công nghiệp lần thứ tư – Cách mạng công nghệ số (Digital Transformation) - nước Nhật&nbsp;đang&nbsp;cần tăng tốc.&nbsp;Ngành phần mềm Việt Nam đang có cơ hội đồng hành cùng Nhật Bản trong việc thay đổi vị thế của đất nước trong cuộc cách mạng này. Đó là nguồn nhân lực trẻ có kiến thức về IoT, S.M.A.C sẵn sàng cho cuộc cách mạng số. Tôi tin rằng với kinh nghiệm hơn 10 năm làm việc tại Nhật Bản, với nguồn nhân lực sử dụng tiếng Nhật đông đảo và quan trọng nhất là đáp ứng được yêu cầu khắt khe về chất lượng, FPT Nhật Bản sẽ có cơ hội phát triển mạnh mẽ hơn nữa tại thị trường này trong thời gian tới”.</em></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'vn', N'FPT Nhật Bản cán mốc doanh thu 100 triệu USD')
INSERT [dbo].[Blog] ([ID_Blog], [DateCreate], [Tag], [Author], [ImageTitle], [VideoPath], [Description], [Lang], [Title]) VALUES (1004, CAST(0x0000A81F00C65CDC AS DateTime), N'Sự kiện', N'System Admin', N'/Image/news-1509289054.png', N'', N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p><strong>TẬP ĐOÀN CÔNG NGHỆ HÀNG ĐẦU VIỆT NAM</strong></p><p><strong>﻿</strong></p><p>Thành lập ngày 13/09/1988, với lĩnh vực kinh doanh cốt lõi là CNTT và Viễn thông, FPT đã cung cấp dịch vụ tới 63/63 tỉnh thành tại Việt Nam và không ngừng mở rộng hoạt động trên thị trường toàn cầu với sự hiện diện tại 21 quốc gia.</p><p>&nbsp;</p><p>Trong suốt quá trình hoạt động, FPT luôn nỗ lực với mục tiêu cao nhất là mang lại sự hài lòng cho khách hàng thông qua những dịch vụ, sản phẩm và giải pháp công nghệ tối ưu nhất. Đồng thời, FPT không ngừng nghiên cứu và tiên phong trong các xu hướng công nghệ mới góp phần khẳng định vị thế của Việt Nam trên trên bản đồ công nghệ thế giới.</p><p><br></p><p>28+&nbsp;năm</p><p><strong>thành lập</strong></p><p>1,8 tỷ USD</p><p><strong>doanh thu năm 2016</strong></p><p>21 quốc gia</p><p><strong>hiện diện</strong></p><p>28.397+</p><p><strong>nhân viên</strong></p><p>50 khách hàng</p><p><strong>trong Fortune 500</strong></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'vn', N'Về đối tác FPT')
INSERT [dbo].[Blog] ([ID_Blog], [DateCreate], [Tag], [Author], [ImageTitle], [VideoPath], [Description], [Lang], [Title]) VALUES (1005, CAST(0x0000A81B016A4504 AS DateTime), N'Tin tức khác', N'System Admin', N'/Image/news-1509289132.jpg', N'', N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p><br></p><p><img src="http://cafefcdn.com/2017/photo-1-1509096188033.jpg" alt="Nhờ có mảnh vườn nhỏ ngay trong nhà mà con người có thể tận hưởng cuộc sống xanh mát và bầu không khí trong lành. "></p><p>Nhờ có mảnh vườn nhỏ ngay trong nhà mà con người có thể tận hưởng cuộc sống xanh mát và bầu không khí trong lành.</p><p><img src="http://cafefcdn.com/2017/photo-2-1509096188037.jpg" alt="Ngày càng có nhiều người quan tâm và thích kiểu thiết kế lồng ghép thiên nhiên như thế này. "></p><p>Ngày càng có nhiều người quan tâm và thích kiểu thiết kế lồng ghép thiên nhiên như thế này.</p><p><img src="http://cafefcdn.com/2017/photo-3-1509096188039.jpg" alt="Chỉ chiếm khoảng diện tích rất nhỏ nhưng khoảng vườn này lại là không gian lý tưởng mang màu xanh tươi mát và không khí dễ chịu cho chủ nhà. "></p><p>Chỉ chiếm khoảng diện tích rất nhỏ nhưng khoảng vườn này lại là không gian lý tưởng mang màu xanh tươi mát và không khí dễ chịu cho chủ nhà.</p><p><img src="http://cafefcdn.com/2017/photo-4-1509096188041.jpg" alt="Một góc vườn nhỏ vừa có tác dụng như một giếng trời mang ánh sáng cho ngôi hà vừa là không gian thư giãn vui chơi cho cả gia đình. "></p><p>Một góc vườn nhỏ vừa có tác dụng như một giếng trời mang ánh sáng cho ngôi hà vừa là không gian thư giãn vui chơi cho cả gia đình.</p><p><img src="http://cafefcdn.com/2017/photo-5-1509096188042.jpg" alt="Với hệ thống kính bao quanh chủ nhà hoàn toàn không phải lo nước mưa bị tràn ra sàn nhà. "></p><p>Với hệ thống kính bao quanh chủ nhà hoàn toàn không phải lo nước mưa bị tràn ra sàn nhà.</p><p><img src="http://cafefcdn.com/2017/photo-6-1509096188044.jpg" alt="Với những ngôi nhà có diện tích rộng bạn cũng có thể tạo một khu vườn nhỏ ngay lối đi như thế này. "></p><p>Với những ngôi nhà có diện tích rộng bạn cũng có thể tạo một khu vườn nhỏ ngay lối đi như thế này.</p><p><img src="http://cafefcdn.com/2017/photo-7-1509096188046.jpg" alt="Một góc nhỏ tràn ngập cây xanh góp phần tạo nên phong cách độc đáo cho ngôi nhà. "></p><p>Một góc nhỏ tràn ngập cây xanh góp phần tạo nên phong cách độc đáo cho ngôi nhà.</p><p><br></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'vn', N'Xu hướng tạo "vườn trong nhà" trong thiết kế nhà ở')
INSERT [dbo].[Blog] ([ID_Blog], [DateCreate], [Tag], [Author], [ImageTitle], [VideoPath], [Description], [Lang], [Title]) VALUES (1006, CAST(0x0000A81B016AB584 AS DateTime), N'Tin tức khác', N'System Admin', N'/Image/news-1509289218.jpg', N'', N'<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Insert text here ..."><p><br></p><h2><strong>Với diện tích chỉ vẻn vẹn 47m2 nhưng căn hộ nhỏ này luôn khiến người xem phải trầm trồ, tán thưởng bởi sự tiện nghi, hiện đại, cuốn hút mà phong cách Scandinavia mang lại.</strong></h2><p><br></p><p>Phòng ngủ được thiết kế tách biệt để giữ được sự riêng tư của chủ nhân và quan trọng nhất là mọi ngõ ngách trong căn hộ tí hon này đều ngập tràn ánh sáng tự nhiên.</p><p><img src="http://cafefcdn.com/thumb_w/640/2017/photo-1-1509263373431.jpg" alt="Trên diện tích 47m2 ngôi nhà được thiết kế với đầy đủ các không gian chức năng gồm: phòng khách, bếp, góc ăn uống, phòng ngủ và khu nhà tắm. "></p><p>Trên diện tích 47m2 ngôi nhà được thiết kế với đầy đủ các không gian chức năng gồm: phòng khách, bếp, góc ăn uống, phòng ngủ và khu nhà tắm.</p><p><img src="http://cafefcdn.com/thumb_w/640/2017/photo-2-1509263373436.jpg" alt="Thiết kế mở từ phòng bếp đến phòng khách và ra phòng ăn tạo cảm giác căn hộ trông rộng hơn, trong khi đó những chiếc cửa sổ cao sát trần cho phép ánh sáng tự nhiên tràn vào bên trong căn hộ. "></p><p>Thiết kế mở từ phòng bếp đến phòng khách và ra phòng ăn tạo cảm giác căn hộ trông rộng hơn, trong khi đó những chiếc cửa sổ cao sát trần cho phép ánh sáng tự nhiên tràn vào bên trong căn hộ.</p><p><img src="http://cafefcdn.com/thumb_w/640/2017/photo-3-1509263373479.jpg" alt="Không gian tiếp khách được chủ nhà dành riêng một vị trí đẹp nhất và thoáng nhất cạnh cửa sổ. Nơi đây cũng được bài trí khá đơn giản với 1 chiếc ghế sofa dài kê sát tường và 1 bàn trà nhỏ. "></p><p>Không gian tiếp khách được chủ nhà dành riêng một vị trí đẹp nhất và thoáng nhất cạnh cửa sổ. Nơi đây cũng được bài trí khá đơn giản với 1 chiếc ghế sofa dài kê sát tường và 1 bàn trà nhỏ.</p><p><img src="http://cafefcdn.com/thumb_w/640/2017/photo-4-1509263373481.jpg" alt="Tô điểm cho không gian phòng khách là cây xanh, chiếc đàn ghita và những bức tranh treo tường. Góc nhỏ này được phối hợp nhẹ nhàng giữa tông màu trắng và xanh lam tạo nên cảm giác mát mẻ, thoải mái vô cùng. "></p><p>Tô điểm cho không gian phòng khách là cây xanh, chiếc đàn ghita và những bức tranh treo tường. Góc nhỏ này được phối hợp nhẹ nhàng giữa tông màu trắng và xanh lam tạo nên cảm giác mát mẻ, thoải mái vô cùng.</p><p><br></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>', N'vn', N' Căn hộ chỉ 47m2 nhưng nhìn đâu cũng đẹp, cũng yêu')
SET IDENTITY_INSERT [dbo].[Blog] OFF
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([ID_Role], [Name]) VALUES (1, N'Admin ( cấp cao )')
INSERT [dbo].[Role] ([ID_Role], [Name]) VALUES (2, N'Quản lý ')
INSERT [dbo].[Role] ([ID_Role], [Name]) VALUES (3, N'Người dùng bình thường')
SET IDENTITY_INSERT [dbo].[Role] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([ID_Users], [UserName], [Password], [ID_Role], [Email], [Address], [Status]) VALUES (1, N'System Admin', N'sa123456', 1, N'sa@gmail.com', N'123 nguyễn văn cừ, Q1', 1)
SET IDENTITY_INSERT [dbo].[Users] OFF
ALTER TABLE [dbo].[Users]  WITH CHECK ADD FOREIGN KEY([ID_Role])
REFERENCES [dbo].[Role] ([ID_Role])
GO
