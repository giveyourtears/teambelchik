using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using release.Models;

namespace release
{
  public class ApplicationDbContext : IdentityDbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
    {
      Database.EnsureCreated();
    }
    public DbSet<About> AboutPage { get; set; }
    public DbSet<Contacts> ContactsPage { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<ProductCategory> ProductCategories { get; set; }
    //public DbSet<SubProductCategory> SubProductCategories { get; set; }
    public DbSet<CallBack> CallBacks { get; set; }
  }
}
