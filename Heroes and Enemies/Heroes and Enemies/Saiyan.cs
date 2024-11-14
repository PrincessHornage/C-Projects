using System;
using System.Collections.Generic;
using System.Text;

namespace Heroes_and_Enemies
{
    class Saiyan:Hero
    {
        //Fields 
        private bool isSuperSaiyan; 
        private int superSaiyanlevel; 

        //Properties 
        public bool IsSuperSaiyan { get { return isSuperSaiyan; } }
        public int SuperSaiyanLevel { get { return superSaiyanlevel; } }

        //Constructors
        public Saiyan(String name, int age)
        {
            this.name = name;
            this.age = age;
            this.health = 100;
            this.powerLevel = 10;
            this.speed = 10;
            this.strength = 10;
            this.dexterity = 10;
            this.intelligence = 10;
            this.isSuperSaiyan = false;
            this.superSaiyanlevel = 0; 
        }
        public Saiyan(String name, int age, int health, int powerLevel, int speed, int strength, int dexterity, int intelligence)
        {
            this.name = name;
            this.age = age;
            this.health = health;
            this.powerLevel = powerLevel;
            this.speed = speed;
            this.strength = strength;
            this.dexterity = dexterity;
            this.intelligence = intelligence; 
            this.isSuperSaiyan = false;
            this.superSaiyanlevel = 0; 
        }

        //Methods 
        public override void PrintStats()//Prints all stats
        {
            Console.WriteLine($"\t--- Hero Summary ---\nName: {name}\nAge: {age} \nHealth: {health} \nPower Level: {powerLevel} " +
              $"\nSpeed: {speed} \nStrength: {strength} \nDexterity: {dexterity} \nIntelligence: {intelligence}");
            if (isSuperSaiyan == false)
            {
                Console.WriteLine("Super Saiyan Status: Unachieved"); 
            }
            else
            {
                Console.WriteLine($"Super Saiyan Status: Achieved\nSuper Saiyan Level: {superSaiyanlevel}");
            }

        }

        //Increases Super Saiyan Level 
        public void AscendSaiyan()
        {
            //Checks to see if power level adequate
            if(powerLevel < speed + strength || strength < 50)
            {
                Console.WriteLine($"Cannot ascend {name}. They must have a power level greater than the sum of your speed and strength" +
                    $" and a strength level greater than 50");
            }
            else if(powerLevel > speed + strength && strength > 50)
            {
                Console.Write("Are you sure you want to continue? You will be able to ascend your saiyan, but your strength and health will be reduced by 50%. Is this okay?(yes/no): ");
                string confirm = Console.ReadLine().Trim().ToLower();
                switch (confirm)
                {
                    case "yes":
                        superSaiyanlevel++; //Increases supersaiyan level
                        isSuperSaiyan = true; //Updates super saiyan achievement

                        //Increments stats 
                        health /= 2;
                        strength /= 2;

                        Console.WriteLine($"Congratulations! You can now transform into super saiyan {superSaiyanlevel}! Your health is now {health} and your strength is at {strength}");

                        break;
                    case "no":
                        Console.WriteLine("Cancelling ascenction for later."); 
                        break;
                    default:
                        Console.Write("Invalid response. Are you sure you want to continue? You will be able to ascend your saiyan, but your strength and health will be reduced by 50%. Is this okay?(yes/no): ");
                        confirm = Console.ReadLine().Trim().ToLower();
                        break; 
                }
            }
        }
       
    }
}
