using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace FantasyFb.Models
{
    public class PlayerTeamViewModel
    {
        public List<Player> Players { get; set; }
        public SelectList Teams { get; set; }
        public string PlayerTeam { get; set; }
        public string SearchString { get; set; }
    }
}