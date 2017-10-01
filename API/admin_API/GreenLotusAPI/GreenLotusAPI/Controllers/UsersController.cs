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
            var status = db.addUser(user.Password,
                                   user.Address,
                                   user.Email,
                                   user.UserName,
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
    }
}
