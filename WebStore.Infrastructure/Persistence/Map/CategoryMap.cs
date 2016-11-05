namespace WebStore.Infrastructure.Persistence.Map
{
    using System.Data.Entity.ModelConfiguration;
    using WebStore.Domain.Entities;
    public class CategoryMap : EntityTypeConfiguration<Category>
    {
        public CategoryMap()
        {
            ToTable("tbCategory");
            HasKey(x => x.Id);
            Property(x => x.Title).HasMaxLength(60).IsRequired();
        }
    }
}
