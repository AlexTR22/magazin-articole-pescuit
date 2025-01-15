using MagazinPescuitBackend.Models;
using Microsoft.AspNetCore.Mvc;

namespace MagazinPescuitBackend.Services
{
    public class ProductService
    {
        static List<Product> products;
        static ProductService()
        {
            products = new List<Product>()
            {
                new Product() { Id=0,Category="mulinete",Description="prod 1",Name="prod 1", Price=100 },
                new Product() { Id=1,Category="mulinete",Description="prod 2",Name="prod 2", Price=150 },
                new Product() { Id=0,Category="mulinete",Description="prod 1",Name="prod 1", Price=100 },
                new Product() { Id=1,Category="mulinete",Description="prod 2",Name="prod 2", Price=150 },
                new Product() { Id=0,Category="mulinete",Description="prod 1",Name="prod 1", Price=100 },
                new Product() { Id=1,Category="mulinete",Description="prod 2",Name="prod 2", Price=150 },
                new Product() { Id=0,Category="lansete",Description="prod 1",Name="prod 1", Price=100 },
                new Product() { Id=1,Category="lansete",Description="prod 2",Name="prod 2", Price=150 },
                new Product() { Id=0,Category="lansete",Description="prod 1",Name="prod 1", Price=100 },
                new Product() { Id=1,Category="lansete",Description="prod 2",Name="prod 2", Price=150 },
                new Product() { Id=0,Category="lansete",Description="prod 1",Name="prod 1", Price=100 },
                new Product() { Id=1,Category="lansete",Description="prod 2",Name="prod 2", Price=150 },
                new Product() { Id=0,Category="lansete",Description="prod 1",Name="prod 1", Price=100 },
                new Product() { Id=1,Category="lansete",Description="prod 2",Name="prod 2", Price=150 },
                new Product() { Id=0,Category="lansete",Description="prod 1",Name="prod 1", Price=100 },
                new Product() { Id=1,Category="lansete",Description="prod 2",Name="prod 2", Price=150 }

            };
        }

        public static List<Product> GetProducts() => products;

        public static Product GetProductById(int id)
        {
            return products[id];
        }

        internal static List<Product> GetProductByCategory(string category)
        {
            return products.Where(p => p.Category == category).ToList();
        }
    }
}
