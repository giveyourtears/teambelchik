
using System;
using System.ComponentModel.DataAnnotations.Schema;

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
    public string Type { get; set; }
    public string SubCat { get; set; }


    //[ForeignKey("SubProductCategory")]
    //public Guid SubProductCategoryId { get; set; }
    //public virtual SubProductCategory SubProductCategory { get; set; }
  }
}
