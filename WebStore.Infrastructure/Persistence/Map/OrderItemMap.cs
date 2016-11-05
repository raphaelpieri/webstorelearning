namespace WebStore.Infrastructure.Persistence.Map
{
    using System.Data.Entity.ModelConfiguration;
    using WebStore.Domain.Entities;
    class OrderItemMap : EntityTypeConfiguration<OrderItem>
    {
        public OrderItemMap()
        {
            ToTable("tbOrderItems");
            HasKey(x => x.Id);
            Property(x => x.Price).IsRequired();
            Property(x => x.Quantity).IsRequired();

            HasRequired(x => x.Order);
            HasRequired(x => x.Product);
        }
    }
}
