using MagazinPescuitBackend.Models;
using MagazinPescuitBackend.Services;
using Microsoft.AspNetCore.Mvc;

namespace MagazinPescuitBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            return ProductService.GetProducts().ToList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetById(int id)
        {
            return ProductService.GetProductById(id);
        }

        [HttpGet("category/{category}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetByCategory(string category)
        {
            return ProductService.GetProductByCategory(category).ToList();
        }
    }
}
 