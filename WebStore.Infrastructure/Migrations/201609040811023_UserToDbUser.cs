namespace WebStore.Infrastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserToDbUser : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.User", newName: "tbUser");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.tbUser", newName: "User");
        }
    }
}
