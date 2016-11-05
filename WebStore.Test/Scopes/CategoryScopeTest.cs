using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebStore.Domain.Entities;
using WebStore.Domain.Scopes;

namespace WebStore.Test.Scopes
{
    [TestClass]
    public class CategoryScopeTest
    {
        private readonly Category category;
        public CategoryScopeTest()
        {
            category = new Category("placa mãe");
        }

        [TestMethod]
        [TestCategory("Category Scopes - Register")]
        public void ShouldRegisterCategory()
        {
            Assert.AreEqual(true, CategoryScope.CreateCategoryScopeIsValid(category));
        }

        [TestMethod]
        [TestCategory("Category Scopes - Update")]
        public void ShouldUpdateCategory()
        {
            Assert.AreEqual(true, CategoryScope.UpdateCategoryScopeIsValid(category, "processador"));
        }
    }
}
