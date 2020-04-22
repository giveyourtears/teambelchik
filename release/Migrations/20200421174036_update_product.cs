using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace release.Migrations
{
    public partial class update_product : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
          migrationBuilder.AddColumn<bool>(
                name: "IsHot",
                table: "Products",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
          migrationBuilder.DropColumn(
                name: "IsHot",
                table: "Products");
        }
    }
}
