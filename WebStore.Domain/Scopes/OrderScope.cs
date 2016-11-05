namespace WebStore.Domain.Scopes
{
    using System.Linq;
    using WebStore.Domain.Entities;
    using WebStore.SharedKernel.Validation;
    public static class OrderScope
    {
        public static bool PlaceOrderScopeIsValid(this Order order)
        {
            return AssertionConcern.IsSatisfiedBy
            (
                AssertionConcern.AssertIsGreaterThan(order.OrderItems.Count(), 0, "Nenhum produto foi adicionado ao pedido")
            );
        }
    }
}
