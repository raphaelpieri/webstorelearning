namespace WebStore.Domain.Services
{
    using System.Collections.Generic;
    using WebStore.Domain.Commands.ProductCommands;
    using WebStore.Domain.Entities;

    public interface IProductApplicationService
    {
        List<Product> Get();
        List<Product> Get(int skip, int take);
        List<Product> GetOutOfStock();
        Product Get(int id);
        Product Create(CreateProductCommand command);
        Product UpdateBasicInformation(UpdateProductInfoCommand command);
        Product Delete(int id);
    }
}
