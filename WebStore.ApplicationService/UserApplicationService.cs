namespace WebStore.ApplicationService
{
    using System.Collections.Generic;
    using WebStore.Domain.Commands.UserCommands;
    using WebStore.Domain.Entities;
    using WebStore.Domain.Repositories;
    using WebStore.Domain.Services;
    using WebStore.Infrastructure.Persistence;

    public class UserApplicationService : ApplicationService, IUserApplicationService
    {
        private IUserRepository _repository;

        public UserApplicationService(IUserRepository repository, IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            this._repository = repository;
        }

        public User Register(RegisterUserCommand command)
        {
            var user = new User(command.Email, command.Password, command.IsAdmin);
            user.Register();
            _repository.Register(user);

            if (Commit())
                return user;

            return null;
        }

        public User Authenticate(string username, string password)
        {
            return _repository.Authenticate(username, password);
        }

        public List<User> List()
        {
            return _repository.List();
        }
    }
}
