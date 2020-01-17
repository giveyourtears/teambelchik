using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using release.Data.Repositories.Abstract;
using release.Models;

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
    public IEnumerable<Product> GetProductsByCategory(string type_cat)
    {
      return _repo.GetProductsByCategory(type_cat);
    }
    public IEnumerable<Product> GetProductsBySubCategory(string type)
    {
      return _repo.GetProductsBySubCategory(type);
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
      try {
        return _repo.GetProduct(product);
      }
      catch(Exception e) {
        Console.WriteLine(e);
        return _repo.GetProduct(product);
      }
    }

    [HttpPost]
    public bool Login([FromBody]Login model)
    {
      if (model.login.Equals("test") && model.password.Equals("test")) return true;
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