namespace WebStore.Infrastructure.Persistence
{
    using System;
    public interface IUnitOfWork : IDisposable
    {
        void Commit();
    }
}
