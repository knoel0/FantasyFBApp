using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FantasyFb.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Player",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Number = table.Column<int>(nullable: true),
                    Team = table.Column<string>(nullable: true),
                    QB = table.Column<int>(nullable: true),
                    RB = table.Column<int>(nullable: true),
                    WR = table.Column<int>(nullable: true),
                    TE = table.Column<int>(nullable: true),
                    K = table.Column<int>(nullable: true),
                    D_ST = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Player", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Player");
        }
    }
}
