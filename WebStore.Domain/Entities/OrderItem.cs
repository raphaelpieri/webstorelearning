namespace WebStore.Domain.Entities
{
    using WebStore.Domain.Scopes;
    public class OrderItem
    {
        public OrderItem()
        {

        }
        public OrderItem(int quantity, decimal price)
        {
            this.Quantity = quantity;
            this.Price = price;

        }


        public int Id { get; private set; }
        public int Quantity { get; private set; }
        public decimal Price { get; private set; }
        public int ProductId { get; private set; }
        public Product Product { get; private set; }
        public int OrderId { get; private set; }
        public Order Order { get; private set; }

        public bool Register()
        {
            return this.RegisterOrderItemScopeIsValid();
        }

        public void AddProduct(Product product, int quantity, decimal price)
        {
            if (!this.AddProductScopeIsValid(product, price, quantity))
                return;

            this.ProductId = product.Id;
            this.Product = product;
            this.Quantity = quantity;
            this.Price = price;

            // Reserva o estoque
            this.Product.UpdateQuantityOnHand(this.Product.QuantityOnHand - quantity);
        }
    }
}
