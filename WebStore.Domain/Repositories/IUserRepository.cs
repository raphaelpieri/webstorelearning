namespace WebStore.Domain.Repositories
{
    using System.Collections.Generic;
    using WebStore.Domain.Entities;
    public interface IUserRepository
    {
        void Register(User user);
        User Authenticate(string email, string password);
        User GetByEmail(string email);
        List<User> List();
    }
}
