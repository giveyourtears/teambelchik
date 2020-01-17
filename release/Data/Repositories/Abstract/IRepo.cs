using release.Models;
using System.Collections.Generic;

namespace release.Data.Repositories.Abstract
{
  public interface IRepo
  {
    About About();
    void UpdateAbout(About about);
    Contacts Contacts();
    IEnumerable<Product> GetAllProducts();
    IEnumerable<CallBack> GetAllCallBacks();
    IEnumerable<ProductCategory> GetAllCategory();
    //IEnumerable<SubProductCategory> GetAllSubCategory();
    IEnumerable<Product> GetProductsByCategory(string type_cat);
    IEnumerable<Product> GetProductsBySubCategory(string sub_type);
    IEnumerable<Product> GetProductsHot();
    ProductCategory GetCategory(string cat);
    ProductCategory GetSubCategory(string sub);

    //SubProductCategory GetSubCategory(string categoryName);
    Product GetProduct(string productName);
    //List<ProductCategory> GetSubCategoryByCategory();
    void UpdateContacts(Contacts contacts);
    void AddProduct(Product product);
    void AddCallBack(CallBack callBack);
    void DeleteCallBack(string id);
    void AddCategory(ProductCategory category);
    void DeleteCategory(string id);
    void UpdateCategory(ProductCategory category);
    void DeleteProduct(string id);
    void UpdateProduct(Product product);

  }
}
