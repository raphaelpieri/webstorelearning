namespace WebStore.SharedKernel.Events.Contracts
{
    using System;
    public interface IDomainEvent
    {
        DateTime DateOccurred { get; }
    }
}
