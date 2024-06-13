using System;
using System.Collections.Generic;
using System.Text;

namespace RPG_Character_Creator
{
    class RPGCharacter
    {
        //Fields
        private string name;
        private double strength;
        private double dexterity;
        private double intelligence;
        private double health;
        private double speed; 

        //Constructor
        public RPGCharacter(string name, int strength, int dexterity, int intelligence, int health)
        {
            //Initalizes Fields 
            this.name = name;
            this.dexterity = dexterity; 
            this.strength = strength;
            this.intelligence = intelligence;
            this.health = health;
            speed = Math.Floor((health + dexterity)/4.0); //formula to calculate speed 
        }

        //Decreases Health
        public void GetAttacked()
        {
            Console.WriteLine($"{name} was attacked.");
            health -= 4;
            strength++;
            dexterity++; 
            Console.WriteLine("\tHealth decreased by 4 points ");
            Console.WriteLine("\tStrength and dexterity increase by 1 point");
            speed = Math.Round((health + dexterity) / 4.0);
            Console.WriteLine();
        }

        //Increases Intelligence
        public void ReadBook()
        {
            intelligence += 2;
            Console.WriteLine($"{name} read a book"); 
            Console.WriteLine("\tIntelligence increases by 2 points");
            Console.WriteLine();

        }

        //Increases Health 
        public void TakeNap()
        {
            Console.WriteLine($"{name} took a nap");
            health += 6;
            Console.WriteLine("\tIncreased health by 6 points");
            speed = Math.Round((health + dexterity) / 4.0);
            Console.WriteLine();
        }

        //Increases Strength 
        public void GoSuperSaiyan()
        {
            Console.Write($"{name} went Super Saiyan");
            strength += 11;
            health -= 15;
            Console.WriteLine("\tStrength increased by 11");
            Console.WriteLine("\tHealth decreased by 11");
            speed = Math.Round((health + dexterity) / 4.0);
            Console.WriteLine();
        }

        //Prints all player stats
        public void PrintStats()
        {
            Console.WriteLine("RPG Character");
            Console.WriteLine($"\tName: {name} \n\tStrength: {strength} " +
                $"\n\tDexterity: {dexterity} \n\tIntelligence: {intelligence}" +
                $"\n\tHealth: {health} \n\tSpeed: {speed}");
            Console.WriteLine();
        }
    }
}
