namespace WebStore.Domain.Scopes
{
    using WebStore.Domain.Entities;
    using WebStore.SharedKernel.Validation;

    public static class CategoryScope
    {
        public static bool CreateCategoryScopeIsValid(this Category category)
        {
            return AssertionConcern.IsSatisfiedBy
            (
                AssertionConcern.AssertNotEmpty(category.Title, "O titulo é obrigatorio"),
                AssertionConcern.AssertLength(category.Title, 3, 15, "Tamanho em caracteres invalidos")
            );
        }
        public static bool UpdateCategoryScopeIsValid(this Category category, string title)
        {
            return AssertionConcern.IsSatisfiedBy
            (
                AssertionConcern.AssertNotEmpty(title, "O titulo é obrigatorio"),
                AssertionConcern.AssertLength(title, 3, 15, "Tamanho em caracteres invalidos")
            );
        }
    }
}
