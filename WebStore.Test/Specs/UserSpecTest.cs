namespace WebStore.Test.Specs
{
    using Domain.Entities;
    using Domain.Specs;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using System.Collections.Generic;
    using System.Linq;

    [TestClass]
    public class UserSpecTest
    {
        private List<User> _users;
        public UserSpecTest()
        {
            this._users = new List<User>();
            _users.Add(new User("raphaeldppf@gmail.com", "12345", false));
        }

        [TestMethod]
        [TestCategory("User Specs - Authenticate")]
        public void ShouldAuthenticateWhenEmailIsCorrect()
        {
            var exp = UserSpecs.AuthenticateUser("raphaeldppf@gmail.com", "12345");
            var user = _users.AsQueryable().Where(exp).FirstOrDefault();

            Assert.AreNotEqual(null, user);
        }

        [TestMethod]
        [TestCategory("User Specs - Authenticate")]
        public void ShouldNoAuthenticateWhenEmailIsWrong()
        {
            var exp = UserSpecs.AuthenticateUser("raphaeldppf@hotmail.com", "12345");
            var user = _users.AsQueryable().Where(exp).FirstOrDefault();

            Assert.AreEqual(null, user);
        }
    }
}
