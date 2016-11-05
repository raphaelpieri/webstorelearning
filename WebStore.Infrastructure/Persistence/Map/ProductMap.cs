namespace WebStore.Infrastructure.Persistence.Map
{
    using System.Data.Entity.ModelConfiguration;
    using WebStore.Domain.Entities;
    public class ProductMap : EntityTypeConfiguration<Product>
    {
        public ProductMap()
        {
            ToTable("tbProduct");
            HasKey(x => x.Id);

            Property(x => x.Description).HasMaxLength(1024).IsRequired();
            Property(x => x.Price).IsRequired();
            Property(x => x.Title).HasMaxLength(60).IsRequired();
            Property(x => x.QuantityOnHand).IsRequired();
            Property(x => x.Image);
            HasRequired(x => x.Category);

        }
    }
}
