namespace WebStore.ApplicationService
{
    using System.Collections.Generic;
    using WebStore.Domain.Commands.ProductCommands;
    using WebStore.Domain.Entities;
    using WebStore.Domain.Repositories;
    using WebStore.Domain.Services;
    using WebStore.Infrastructure.Persistence;

    public class ProductApplicationService : ApplicationService, IProductApplicationService
    {
        private IProductRepository _repository;

        public ProductApplicationService(IProductRepository repository, IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            this._repository = repository;
        }

        public Product Create(CreateProductCommand command)
        {
            var product = new Product(command.Title, command.Description, command.Price, command.QuantityOnHand, command.CategoryId, command.Image);
            product.Register();
            _repository.Create(product);

            if (Commit())
                return product;

            return null;
        }

        public Product Delete(int id)
        {
            var product = _repository.Get(id);
            _repository.Delete(product);

            if (Commit())
                return product;

            return null;
        }

        public List<Product> Get()
        {
            return _repository.GetProductsInStock();
        }

        public Product Get(int id)
        {
            return _repository.Get(id);
        }

        public List<Product> Get(int skip, int take)
        {
            return _repository.Get(skip, take);
        }

        public List<Product> GetOutOfStock()
        {
            return _repository.GetProductsOutOfStock();
        }

        public Product UpdateBasicInformation(UpdateProductInfoCommand command)
        {
            var product = _repository.Get(command.Id);
            product.UpdateInfo(command.Title, command.Description, command.CategoryId);
            _repository.Update(product);

            if (Commit())
                return product;

            return null;
        }
    }
}
