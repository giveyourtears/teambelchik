using Microsoft.AspNetCore.Mvc;
using release.Data.Repositories.Abstract;
using release.Models;
using System;
using System.Collections.Generic;

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
        Guid g = Guid.NewGuid();
        DateTime now_date = DateTime.Now;
        CallBack callBack1 = new CallBack { Id = g, Name = callBack.Name, PhoneNumber = callBack.PhoneNumber, DateNow = now_date };
        _repo.AddCallBack(callBack1);
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