namespace release.Models
{
  public class ProductCategory : CommonModel
  {
    public string Name { get; set; }
    public string Url { get; set; }
    //public virtual ICollection<SubProductCategory> SubProductCategories { get; set; }
  }
}
