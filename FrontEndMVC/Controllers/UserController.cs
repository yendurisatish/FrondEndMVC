using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FrontEndMVC.Controllers
{
    public class UserController : Controller
    {
        //
        // GET: /User/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult UserHome()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult ApplyDeposits()
        {
            return View();
        }
        //[HttpPost]
        //public ActionResult Upload()
        //{
        //    string directory = @"C:\Users\saivenkatas\Desktop\doc\file\";
        //    string stored=null;
        //    HttpPostedFileBase photo = Request.Files[0];
        //    if(photo!=null&&photo.ContentLength>0)
        //    {
        //        var filename = Path.GetFileName(photo.FileName);
        //        stored=Path.Combine(directory,filename);
        //       photo.SaveAs(stored);
                
              
        //    }
        //    TempData["url"] = stored;
        //  //  return RedirectToAction("ApplyLoans");
        //    return View();
        //}
        public ActionResult ApplyLoans()
        {
            return View();
        }
        public ActionResult SendMoney()
        {
            return View();
        }
        public ActionResult TransactionHistory()
        {
            return View();
        }
        public ActionResult ViewDeposits()
        {
            return View();
        }
        public ActionResult ViewLoans()
        {
            return View();
        }
        public ActionResult ViewUnApprovedLoans()
        {
            return View();
        }
	}
}