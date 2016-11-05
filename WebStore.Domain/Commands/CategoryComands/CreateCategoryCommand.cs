﻿namespace WebStore.Domain.Commands.CategoryComands
{
    public class CreateCategoryCommand
    {
        public CreateCategoryCommand(string title)
        {
            this.Title = title;
        }
        public string Title { get; set; }
    }
}
