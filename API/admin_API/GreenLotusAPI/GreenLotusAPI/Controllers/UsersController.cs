using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GreenLotusAPI.Models;
using System.Web.Http.Cors;

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
            var status = db.updateUser(user.ID_Users ,user.UserName, user.Address, user.Password, user.ID_Role, user.Status);
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
    }
}
