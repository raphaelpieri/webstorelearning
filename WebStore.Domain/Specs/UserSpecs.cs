namespace WebStore.Domain.Specs
{
    using SharedKernel.Events.Helpers;
    using System;
    using System.Linq.Expressions;
    using WebStore.Domain.Entities;

    public class UserSpecs
    {
        public static Expression<Func<User, bool>> AuthenticateUser(string email, string password)
        {
            string encriptedPassword = StringHelper.Encrypt(password);
            return x => x.Email == email && x.Password == encriptedPassword;
        }

        public static Expression<Func<User, bool>> GetByEmail(string email)
        {
            return x => x.Email == email;
        }
    }
}
