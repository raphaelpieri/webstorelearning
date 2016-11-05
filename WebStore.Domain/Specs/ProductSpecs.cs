namespace WebStore.Domain.Specs
{
    using System;
    using System.Linq.Expressions;
    using WebStore.Domain.Entities;

    public class ProductSpecs
    {
        public static Expression<Func<Product, bool>> GetProductsInStock()
        {
            return x => x.QuantityOnHand > 0;
        }

        public static Expression<Func<Product, bool>> GetProductsOutOfStock()
        {
            return x => x.QuantityOnHand == 0;
        }
    }
}
