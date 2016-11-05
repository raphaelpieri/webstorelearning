namespace WebStore.Domain.Services
{
    using System.Collections.Generic;
    using WebStore.Domain.Commands.UserCommands;
    using WebStore.Domain.Entities;
    public interface IUserApplicationService
    {
        User Register(RegisterUserCommand command);
        User Authenticate(string email, string password);
        List<User> List();
    }
}
