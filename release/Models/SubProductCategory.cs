using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace release.Models
{
  public class SubProductCategory : CommonModel
  {
    public string Name { get; set; }
    public string Url { get; set; }
    [ForeignKey("ProductCategory")]
    public Guid CategoryId { get; set; }
    [JsonIgnore]
    public virtual ProductCategory Category { get; set; }
    public virtual ICollection<Product> Products { get; set; }
  }
}