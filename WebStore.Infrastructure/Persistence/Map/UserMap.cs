namespace WebStore.Infrastructure.Persistence.Map
{
    using System.Data.Entity.ModelConfiguration;
    using WebStore.Domain.Entities;
    public class UserMap : EntityTypeConfiguration<User>
    {
        public UserMap()
        {
            ToTable("tbUser");

            HasKey(x => x.Id);

            Property(x => x.Email)
                .HasMaxLength(160)
                .IsRequired();

            Property(x => x.Password)
                .HasMaxLength(32)
                .IsFixedLength()
                .IsRequired();

            Property(x => x.IsAdmin)
                .IsRequired();
        }
    }
}
