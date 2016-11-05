namespace WebStore.Infrastructure.Persistence.Map
{
    using System.Data.Entity.ModelConfiguration;
    using WebStore.Domain.Entities;
    public class OrderMap : EntityTypeConfiguration<Order>
    {
        public OrderMap()
        {
            ToTable("tbOrder");
            HasKey(x => x.Id);

            Property(x => x.Date).IsRequired();
            Property(x => x.Status).IsRequired();
            Ignore(x => x.Total);

            HasRequired(x => x.User);
            HasMany(x => x.OrderItems).WithRequired(x => x.Order);
        }
    }
}
