using System;
/*
   Princess-Osaani Hornage 2024

   RPG Character Creator - Simulates an RPG adventure with hard-coded attribute stats
 */
namespace RPG_Character_Creator
{
    class Program
    {
        static void Main(string[] args)
        {
            //Creates Character 
            RPGCharacter player1 = new RPGCharacter("Grimbil Baggins", 17, 9, 14, 21);

            //Lists all player attributes 
            player1.PrintStats();

            //Player gets attaked
            player1.GetAttacked();

            //Player reads a book 
            player1.ReadBook();

            //Player takes a nap 
            player1.TakeNap();

            //Reprints stats
            player1.PrintStats();

            //Creates Player 2
            RPGCharacter player2 = new RPGCharacter("Shiro Baggins", 1, 2, 3, 3);

            player2.PrintStats();

            player2.GoSuperSaiyan();

            player2.PrintStats(); 

        }
    }
}
