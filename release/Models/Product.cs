namespace release.Models
{
  public class Product : CommonModel
  {
    public string Name { get; set; }
    public string Color { get; set; }
    public string Size { get; set; }
    public string Price { get; set; }
    public string Description { get; set; }
    public int CountImages { get; set; }
    public string Url { get; set; }
    public string Category { get; set; }
    public string SubCategory { get; set; }
    public string Sub_Category { get; set; }

    //[ForeignKey("SubProductCategory")]
    //public Guid SubProductCategoryId { get; set; }
    //public virtual SubProductCategory SubProductCategory { get; set; }
  }
}
