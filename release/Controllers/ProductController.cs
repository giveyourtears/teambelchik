using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using release.Data.Repositories.Abstract;
using release.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace release.Controllers
{
  [Route("api/[controller]/[action]")]
  [ApiController]
  public class ProductController : ControllerBase
  {
    private readonly IRepo _repo;
    public ProductController(IRepo Repository)
    {
      _repo = Repository;
    }
    public IEnumerable<Product> GetProductsByCategory(string category)
    {
      return _repo.GetProductsByCategory(category);
    }
    public IEnumerable<Product> GetProductsBySubCategory(string sub_category)
    {
      return _repo.GetProductsBySubCategory(sub_category);
    }
    public IEnumerable<Product> GetProductsBySubSubCategory(string sub_sub_cat)
    {
      return _repo.GetProductsBySubSubCategory(sub_sub_cat);
    }
    public IEnumerable<Product> GetAllProducts()
    {
      return _repo.GetAllProducts();
    }
    public ProductCategory GetCategory(string cat)
    {
      return _repo.GetCategory(cat);
    }
    public ProductCategory GetSubCategory(string sub)
    {
      return _repo.GetSubCategory(sub);
    }
    public IEnumerable<ProductCategory> GetAllCategory()
    {
      return _repo.GetAllCategory();
    }
    public IEnumerable<Product> GetProductsHot()
    {
      return _repo.GetProductsHot();
    }
    public Product GetProduct(string product)
    {
      try
      {
        return _repo.GetProduct(product);
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
        return _repo.GetProduct(product);
      }
    }

    [HttpPost]
    public bool Login([FromBody]Login model)
    {
      try {
        if (model.login.Equals("test") && model.password.Equals("test")) return true;
      } catch(Exception e) {
        Console.WriteLine(e);
        return false;
      }
      return false;
    }

    [HttpDelete]
    public void DeleteProduct(string id)
    {
      _repo.DeleteProduct(id);
    }

    [HttpPut]
    public void AddCategory(ProductCategory category)
    {
      _repo.AddCategory(category);
    }

    [HttpDelete]
    public void DeleteCategory(string id)
    {
      _repo.DeleteCategory(id);
    }

    [HttpDelete]
    public void DeleteCallback(string id)
    {
      _repo.DeleteCallBack(id);
    }

    [HttpPost]
    public void UpdateCategory(ProductCategory category)
    {
      _repo.UpdateCategory(category);
    }

    [HttpPut]
    public void AddProduct(IFormCollection data)
    {
      var files = data.Files.ToList();
      var product = JsonConvert.DeserializeObject<Product>(data["product"]);
      var path = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp", "build", "product", product.Url);
      if (Directory.Exists(path))
      {
        Directory.Delete(path, true);
      }
      Directory.CreateDirectory(path);
      int countOfFiles = 0;
      for (var i = 0; i < files.Count; i++)
      {
        if (files[i].Length > 0)
        {
          using (var stream = new FileStream(path + "/" + product.Url + i + ".jpg", FileMode.Create))
          {
            files[i].CopyTo(stream);
          }
          countOfFiles++;
        }
      }
      product.CountImages = countOfFiles;
      _repo.AddProduct(product);
    }

    [HttpPost]
    public void UpdateProduct(IFormCollection data)
    {
      var files = data.Files.ToList();
      var product = JsonConvert.DeserializeObject<Product>(data["product"]);
      var path = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp", "build", "product", product.Url);
      if (Directory.Exists(path))
      {
        Directory.Delete(path, true);
      }
      Directory.CreateDirectory(path);
      int countOfFiles = 0;
      for (var i = 0; i < files.Count; i++)
      {
        if (files[i].Length > 0)
        {
          using (var stream = new FileStream(path + "/" + product.Url + i + ".jpg", FileMode.Create))
          {
            files[i].CopyTo(stream);
          }
          countOfFiles++;
        }
      }
      product.CountImages = countOfFiles;
      _repo.UpdateProduct(product);
    }
  }
}