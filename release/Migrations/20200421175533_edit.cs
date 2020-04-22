using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace release.Migrations
{
    public partial class edit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsHot",
                table: "Products");

            migrationBuilder.AddColumn<bool>(
                name: "Is_Hot",
                table: "Products",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
          migrationBuilder.DropColumn(
                name: "Is_Hot",
                table: "Products");
        }
    }
}
