namespace WebStore.Domain.Services
{
    using System.Collections.Generic;
    using WebStore.Domain.Commands.CategoryComands;
    using WebStore.Domain.Entities;
    public interface ICategoryApplicationService
    {
        List<Category> Get();
        List<Category> Get(int skip, int take);
        Category Get(int id);
        Category Create(CreateCategoryCommand command);
        Category Update(EditCategoryCommand command);
        Category Delete(int id);
    }
}
