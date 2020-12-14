using Microsoft.EntityFrameworkCore;
using FantasyFb.Models;

namespace FantasyFb.Data
{
    public class FantasyFbContext : DbContext
    {
        public FantasyFbContext (DbContextOptions<FantasyFbContext> options)
            : base(options)
        {
        }

        public DbSet<Player> Player { get; set; }    
    }
}