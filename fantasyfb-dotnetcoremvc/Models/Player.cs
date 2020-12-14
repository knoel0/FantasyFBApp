using System;
using System.ComponentModel.DataAnnotations;

namespace FantasyFb.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Number { get; set; }
        public string Team { get; set; }
        public int QB { get; set; }
        public int RB { get; set; }
        public int WR { get; set; }
        public int TE { get; set; }
        public int K { get; set; }
        [Display(Name = "DST")]
        public int D_ST { get; set; }
        
    }
}