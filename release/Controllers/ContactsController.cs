using Microsoft.AspNetCore.Mvc;
using release.Data.Repositories.Abstract;
using release.Models;

namespace release.Controllers
{
  [Route("api/[controller]/[action]")]
  [ApiController]
  public class ContactsController : ControllerBase
  {
    private readonly IRepo _repo;
    public ContactsController(IRepo Repository)
    {
      _repo = Repository;
    }

    public Contacts Contacts()
    {
      return _repo.Contacts();
    }

    [HttpPost]
    public void UpdateContacts(Contacts contacts)
    {
      _repo.UpdateContacts(contacts);
    }
  }
}