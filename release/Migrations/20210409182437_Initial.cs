using Microsoft.EntityFrameworkCore.Migrations;

namespace release.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Is_Hot",
                table: "Products",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Is_Hot",
                table: "Products",
                type: "bit",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
