using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace release.Migrations
{
    public partial class date_column : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateNow",
                table: "CallBacks",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateNow",
                table: "CallBacks");
        }
    }
}
