using release.Data.Repositories.Abstract;
using release.Models;
using System;
using System.Collections.Generic;
using System.Linq;


namespace release.Data.Repositories.Concrete
{
  public class Repo : IRepo
  {
    private readonly ApplicationDbContext _ctx;
    public Repo(ApplicationDbContext applicationDbContext)
    {
      _ctx = applicationDbContext;
    }

    public About About()
    {
      return _ctx.AboutPage.FirstOrDefault();
    }

    public void UpdateAbout(About about)
    {
      var oldAbout = _ctx.AboutPage.FirstOrDefault(r => r.Id == about.Id);
      if (oldAbout != null)
      {
        oldAbout.Description = about.Description;
        oldAbout.PriceDescription = about.PriceDescription;
        oldAbout.QualityDescription = about.QualityDescription;
        oldAbout.StabilityDescription = about.StabilityDescription;
      }
      _ctx.SaveChanges();
    }

    public Contacts Contacts()
    {
      return _ctx.ContactsPage.FirstOrDefault();
    }

    public void UpdateContacts(Contacts contacts)
    {
      var oldContacts = _ctx.ContactsPage.FirstOrDefault(r => r.Id == contacts.Id);
      if (oldContacts != null)
      {
        oldContacts.Address = contacts.Address;
        oldContacts.Email = contacts.Email;
        oldContacts.Phone = contacts.Phone;
        oldContacts.WorkTime = contacts.WorkTime;
      }
      _ctx.SaveChanges();
    }

    public Product GetProduct(string productName)
    {
      var product = _ctx.Products.FirstOrDefault(r => r.Url.Equals(productName));
      return product;
    }
    public void AddCategory(ProductCategory category)
    {
      _ctx.Add(category);
      _ctx.SaveChanges();
    }

    public void DeleteCategory(string id)
    {
      var category = _ctx.ProductCategories.FirstOrDefault(t => t.Id == Guid.Parse(id));
      _ctx.Remove(category);
      _ctx.SaveChanges();
    }
    public void UpdateCategory(ProductCategory category)
    {
      var oldCategory = _ctx.ProductCategories.FirstOrDefault(t => t.Id == category.Id);
      if (oldCategory != null)
      {
        oldCategory.Name = category.Name;
        oldCategory.Url = category.Url;
      }
      _ctx.SaveChanges();
    }
    public void AddProduct(Product product)
    {
      _ctx.Add(product);
      _ctx.SaveChanges();
    }

    public void AddCallBack(CallBack callBack)
    {
      _ctx.Add(callBack);
      _ctx.SaveChanges();
    }

    public void DeleteCallBack(string id)
    {
      try {
        var callback = _ctx.CallBacks.FirstOrDefault(t => t.Id == Guid.Parse(id));
        _ctx.Remove(callback);
        _ctx.SaveChanges();
      } catch(Exception e) {
        Console.WriteLine(e);
      }
      
    }

    public void DeleteProduct(string id)
    {
      var product = _ctx.Products.FirstOrDefault(t => t.Id == Guid.Parse(id));
      _ctx.Remove(product);
      _ctx.SaveChanges();
    }

    public void UpdateProduct(Product product)
    {
      var oldProduct = _ctx.Products.FirstOrDefault(t => t.Id == product.Id);
      if (oldProduct != null)
      {
        oldProduct.Name = product.Name;
        oldProduct.Size = product.Size;
        oldProduct.Url = product.Url;
        oldProduct.Color = product.Color;
        oldProduct.Description = product.Description;
        oldProduct.CountImages = product.CountImages;
      }
      _ctx.SaveChanges();
    }
    private IEnumerable<Product> products => _ctx.Products.ToList();

    public IEnumerable<Product> GetProductsByCategory(string category)
    {
      var result = products.Where(c => c.Category == category);
      return result;
    }

    public IEnumerable<Product> GetProductsBySubCategory(string sub_category)
    {

      try
      {
        var result = products.Where(c => c.SubCategory == sub_category);
        return result;
      }
      catch (Exception e)
      {
        Console.WriteLine("error" + e);
      }
      return products;
    }

    public IEnumerable<Product> GetProductsBySubSubCategory(string sub_sub_cat)
    {
      var result = products.Where(c => c.Sub_Category == sub_sub_cat);
      return result;
    }

    public IEnumerable<CallBack> GetAllCallBacks()
    {
      var result = _ctx.CallBacks.OrderByDescending(call => call.DateNow);
      return result;
    }
    public IEnumerable<Product> GetAllProducts()
    {
      var second = _ctx.Products;
      return second;
    }
    //public IEnumerable<SubProductCategory> GetAllSubCategory()
    //{
    //  var result = _ctx.SubProductCategories;
    //  return result;
    //}
    public IEnumerable<Product> GetProductsHot()
    {
      //var products = _ctx.Products.Where(c => c.IsHot == true).ToList();
      var products = _ctx.Products.ToList();
      return products;
    }
    private IEnumerable<ProductCategory> categories => _ctx.ProductCategories.ToList();
    public ProductCategory GetCategory(string cat)
    {
      var categoryproduct = categories.FirstOrDefault(r => r.Url.Equals(cat));
      return categoryproduct;
    }
    public ProductCategory GetSubCategory(string sub)
    {
      var categoryproduct = categories.FirstOrDefault(r => r.Url.Equals(sub));
      return categoryproduct;
    }
    public IEnumerable<ProductCategory> GetAllCategory()
    {
      var result = _ctx.ProductCategories;
      return result;
    }
  }
}