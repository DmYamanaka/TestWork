using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication.Migrations
{
    public partial class dma : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Empl",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false),
                    FIO = table.Column<string>(name: "F.I.O.", type: "nvarchar(50)", maxLength: 50, nullable: true),
                    DateofBirth = table.Column<DateTime>(name: "Date of Birth", type: "date", nullable: true),
                    Dateofemployment = table.Column<DateTime>(name: "Date of employment", type: "date", nullable: true),
                    Wage = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empl", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Empl");
        }
    }
}
