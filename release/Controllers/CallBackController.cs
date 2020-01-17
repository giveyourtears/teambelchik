using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using release.Data.Repositories.Abstract;
using release.Models;

namespace release.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CallBackController : ControllerBase
    {
      private readonly IRepo _repo;
      public CallBackController(IRepo Repository)
      {
        _repo = Repository;
      }
      
      public IEnumerable<CallBack> GetCallBacks()
      {
        return _repo.GetAllCallBacks();
      }

      public string AddCallBack(CallBack callBack)
      {
      try
      {
        _repo.AddCallBack(callBack);
        return "true";
      }
      catch (Exception e)
      {
        return e.ToString();
      }
      }
      public void DeleteCallBack(string id)
      {
        _repo.DeleteCallBack(id);
      }
    }
}