using Microsoft.AspNetCore.Mvc;
using release.Data.Repositories.Abstract;
using release.Models;

namespace release.Controllers
{
  [Route("api/[controller]/[action]")]
  [ApiController]
  public class AboutController : ControllerBase
  {
    private readonly IRepo _repo;
    public AboutController(IRepo Repository)
    {
      _repo = Repository;
    }

    public About About()
    {
      return _repo.About();
    }

    [HttpPost]
    public void UpdateAbout(About about)
    {
      _repo.UpdateAbout(about);
    }
  }
}