using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GreenLotusAPI.Models;
using System.Web.Http.Cors;
using System.Drawing;
using System.IO;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Text;

namespace GreenLotusAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {
        GreenLotusAPIDataContext db = new GreenLotusAPIDataContext();
        public class LoginInfo
        {
            public string email { get; set; }
            public string pass { get; set; }
        }

        public class Base64ImageObj
        {
            public string urlBase64 { get; set; }
            public string prefix { get; set; }
            public string extend { get; set; }
        }


        [Route("api/users/getAllUser")]
        [HttpGet]
        public IHttpActionResult GetAllUser()
        {
            var listUser = db.getAllUser().ToList<getAllUserResult>();
            return Ok(new { results = listUser });
        }

        [Route("api/users/getUserByID")]
        [HttpPost]
        public IHttpActionResult GetUserByID(User user)
        {
            var listUser = db.getUserByID(user.ID_Users).ToList<getUserByIDResult>();
            return Ok(new { results = listUser });
        }

        [Route("api/users/getUserForLogin")]
        [HttpPost]
        public IHttpActionResult GetUserForLogin(LoginInfo loginInfo)
        {
            var users = db.checkLogin(loginInfo.email, loginInfo.pass).FirstOrDefault();
            return Ok(new { results = users });
        }

        [Route("api/users/addUser")]
        [HttpPost]
        public IHttpActionResult AddUser(User user)
        {
            var status = db.addUser(user.UserName,
                                   user.Address,
                                   user.Email,
                                   user.Password,
                                   user.ID_Role);
            return Ok(new { results = status });
        }

        [Route("api/users/updateUser")]
        [HttpPost]
        public IHttpActionResult UpdateUser(User user)
        {
            var status = db.updateUser(user.ID_Users, user.UserName, user.Address, user.Password, user.ID_Role, user.Status);
            return Ok(new { results = status });
        }

        [Route("api/partner/getAllPartner")]
        [HttpGet]
        public IHttpActionResult GetAllPartner()
        {
            var listPartner = db.getAllPartner().ToList<getAllPartnerResult>();
            return Ok(new { results = listPartner });
        }

        [Route("api/partner/addPartner")]
        [HttpPost]
        public IHttpActionResult AddPartner(AboutPartner p)
        {
            var status = db.addPartner(p.PictureURL, p.URLReferences, p.Description, p.Lang);
            return Ok(new { results = status });
        }

        [Route("api/partner/updatePartner")]
        [HttpPost]
        public IHttpActionResult UpdatePartner(AboutPartner p)
        {
            var status = db.updatePartner(p.ID_AboutPartner, p.PictureURL, p.URLReferences, p.Description, p.Lang);
            return Ok(new { results = status });
        }

        [Route("api/partner/deletePartner")]
        [HttpPost]
        public IHttpActionResult DeletePartner(AboutPartner p)
        {
            var status = db.deletePartner(p.ID_AboutPartner);
            return Ok(new { results = status });
        }

        [Route("api/shared/uploadBase64ImgToServer")]
        [HttpPost]
        public IHttpActionResult UploadBase64ImgToServer(Base64ImageObj base64Image)
        {
            try
            {
                byte[] bytes = Convert.FromBase64String(base64Image.urlBase64);
                // string filePath = "./image/MyImage.jpg";
                string path = Directory.GetCurrentDirectory();

                Int32 unixTimestamp = (Int32)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds;
                var filePath = HttpContext.Current.Server.MapPath("~/Image/" + base64Image.prefix + "-" + unixTimestamp + "." + base64Image.extend);
                File.WriteAllBytes(filePath, bytes);
                return Ok(new { results = "/Image/" + base64Image.prefix + "-" + unixTimestamp + "." + base64Image.extend });
            }
            catch (Exception e)
            {
                return Ok(new { results = e });
            }
        }

        [Route("api/about/getAllAboutUs")]
        [HttpGet]
        public IHttpActionResult GetAllAboutUs()
        {
            var listAboutUS = db.getAllAboutUs().ToList<getAllAboutUsResult>();
            return Ok(new { results = listAboutUS });
        }

        [Route("api/about/updateAboutUs")]
        [HttpPost]
        public IHttpActionResult UpdateAboutUs(AboutUs aboutUs)
        {
            var status = db.updateAboutUs(aboutUs.ID_AboutUs, aboutUs.Description, aboutUs.WhyChoose, aboutUs.OurMission);
            return Ok(new { results = status });
        }

        [Route("api/about/getAboutPeople")]
        [HttpGet]
        public IHttpActionResult getAboutPeople()
        {
            var listAboutPeople = db.getAboutPeople().ToList<getAboutPeopleResult>();
            return Ok(new { results = listAboutPeople });
        }

        [Route("api/about/addAboutPeople")]
        [HttpPost]
        public IHttpActionResult AddAboutPeople(AboutPeople p)
        {
            var status = db.addAboutPeople(p.Description, p.RoleName, p.PictureURL, p.Lang);
            return Ok(new { results = status });
        }


        [Route("api/about/addClientSaid")]
        [HttpPost]
        public IHttpActionResult AddClientSaid(AboutPeople p)
        {
            var status = db.addClientSaid(p.Description, p.RoleName, p.PictureURL, p.Lang);
            return Ok(new { results = status });
        }

        [Route("api/about/updateAboutPeople")]
        [HttpPost]
        public IHttpActionResult UpdateAboutPeople(AboutPeople p)
        {
            var status = db.updateAboutPeople(p.ID_AboutPeople, p.Description, p.RoleName, p.PictureURL, p.Lang);
            return Ok(new { results = status });
        }

        [Route("api/about/deleteAboutPeople")]
        [HttpPost]
        public IHttpActionResult DeleteAboutPeople(AboutPeople p)
        {
            var status = db.deleteAboutPeople(p.ID_AboutPeople);
            return Ok(new { results = status });
        }

        [Route("api/upload/uploadFile")]
        [HttpPost]
        public HttpResponseMessage UploadFile()
        {
            try {
                var file = HttpContext.Current.Request.Files[0];
                if (file.ContentLength > 0)
                {
                    var fileName = Path.GetFileName(file.FileName);
                    Int32 unixTimestamp = (Int32)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds;
                    string[] extendtion = file.FileName.Split('.');
                    string customExtend = "error";
                    if (extendtion.Length > 1)
                    {
                        customExtend = extendtion[extendtion.Length - 1];
                    }
                    string videoNameChanged = "video-" + unixTimestamp + "." + customExtend;
                    var path = Path.Combine(HttpContext.Current.Server.MapPath("~/uploads"), videoNameChanged);
                    file.SaveAs(path);
                    var content = JsonConvert.SerializeObject(fileName, new JsonSerializerSettings
                    {
                        ContractResolver = new CamelCasePropertyNamesContractResolver()
                    });

                    var response = Request.CreateResponse(HttpStatusCode.OK);
                    response.Content = new StringContent("uploads/" + videoNameChanged, Encoding.UTF8, "application/json");
                    return response;
                }
                var responseF = Request.CreateResponse(HttpStatusCode.OK);
                responseF.Content = new StringContent("UPLOAD FAILED", Encoding.UTF8, "application/json");
                return responseF;
            }catch(Exception ex)
            {
                var responseF = Request.CreateResponse(HttpStatusCode.OK);
                responseF.Content = new StringContent("UPLOAD FAILED" + ex, Encoding.UTF8, "application/json");
                return responseF;
            }
        }

        [Route("api/blog/getAllBlog")]
        [HttpGet]
        public IHttpActionResult GetAllBlog()
        {
            var listBlog = db.getBlog().ToList<getBlogResult>();
            return Ok(new { results = listBlog });
        }

        [Route("api/blog/addBlog")]
        [HttpPost]
        public IHttpActionResult AddBlog(Blog b)
        {
            var status = db.addBlog(b.DateCreate, b.Tag, b.Author, b.ImageTitle, b.VideoPath, b.Description, b.Lang, b.Title);
            return Ok(new { results = status });
        }

        [Route("api/blog/updateBlog")]
        [HttpPost]
        public IHttpActionResult UpdateBlog(Blog b)
        {
            var status = db.updateBlog(b.ID_Blog, b.DateCreate, b.Tag, b.Author, b.ImageTitle, b.VideoPath, b.Description, b.Lang, b.Title);
            return Ok(new { results = status });
        }

        [Route("api/blog/deleteBlog")]
        [HttpPost]
        public IHttpActionResult DeleteBlog(Blog b)
        {
            var status = db.deleteBlog(b.ID_Blog);
            return Ok(new { results = status });
        }
    }
}
