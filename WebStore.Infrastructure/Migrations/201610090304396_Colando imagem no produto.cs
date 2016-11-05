namespace WebStore.Infrastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Colandoimagemnoproduto : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.tbProduct", "Image", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.tbProduct", "Image");
        }
    }
}
