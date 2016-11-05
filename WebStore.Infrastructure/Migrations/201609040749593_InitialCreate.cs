namespace WebStore.Infrastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.tbCategory",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false, maxLength: 60),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.tbOrderItems",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Quantity = c.Int(nullable: false),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ProductId = c.Int(nullable: false),
                        OrderId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.tbOrder", t => t.OrderId, cascadeDelete: true)
                .ForeignKey("dbo.tbProduct", t => t.ProductId, cascadeDelete: true)
                .Index(t => t.ProductId)
                .Index(t => t.OrderId);
            
            CreateTable(
                "dbo.tbOrder",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Date = c.DateTime(nullable: false),
                        UserId = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Email = c.String(nullable: false, maxLength: 160),
                        Password = c.String(nullable: false, maxLength: 32, fixedLength: true),
                        IsAdmin = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.tbProduct",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false, maxLength: 60),
                        Description = c.String(nullable: false, maxLength: 1024),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        QuantityOnHand = c.Int(nullable: false),
                        CategoryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.tbCategory", t => t.CategoryId, cascadeDelete: true)
                .Index(t => t.CategoryId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.tbOrderItems", "ProductId", "dbo.tbProduct");
            DropForeignKey("dbo.tbProduct", "CategoryId", "dbo.tbCategory");
            DropForeignKey("dbo.tbOrder", "UserId", "dbo.User");
            DropForeignKey("dbo.tbOrderItems", "OrderId", "dbo.tbOrder");
            DropIndex("dbo.tbProduct", new[] { "CategoryId" });
            DropIndex("dbo.tbOrder", new[] { "UserId" });
            DropIndex("dbo.tbOrderItems", new[] { "OrderId" });
            DropIndex("dbo.tbOrderItems", new[] { "ProductId" });
            DropTable("dbo.tbProduct");
            DropTable("dbo.User");
            DropTable("dbo.tbOrder");
            DropTable("dbo.tbOrderItems");
            DropTable("dbo.tbCategory");
        }
    }
}
