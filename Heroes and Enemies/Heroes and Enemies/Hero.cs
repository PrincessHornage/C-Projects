using System;
using System.Collections.Generic;
using System.Text;

namespace Heroes_and_Enemies
{
    //Parent Class
    class Hero
    {
        //Fields
        protected String name;
        protected int age;
        protected int health;
        protected int powerLevel;
        protected int speed;
        protected int strength;
        protected int dexterity;
        protected int intelligence;

        //Properties
        public String Name
        {
            get { return this.name; }
            set { this.name = value; }
        }
        public int Age { get { return age; } }
        public int Health { get { return health; } }
        public int PowerLevel { get { return powerLevel; } }
        public int Speed { get { return speed; } }
        public int Strength { get { return strength; } }
        public int Dexterity { get { return dexterity; } }
        public int Intelligence { get { return intelligence; } }

        //Constructors
        public Hero(String name, int age)//Default Constructor
        {
            this.name = name;
            this.age = age;
            this.health = 100;
            this.powerLevel = 5;
            this.speed = 10;
            this.strength = 10;
            this.dexterity = 10;
            this.intelligence = 10; 
        }
        public Hero(String name, int age, int health, int powerLevel, int speed, int strength, int dexterity, int intelligence)
        {
            this.name = name;
            this.age = age;
            this.health = health;
            this.powerLevel = powerLevel;
            this.speed = speed;
            this.strength = strength;
            this.dexterity = dexterity;
            this.intelligence = intelligence;
        }

        //Methods 
        public virtual void PrintStats()
        {
            Console.WriteLine($"\t--- Hero Summary ---\nName: {name}\nAge: {age} \nHealth: {health} \nPower Level: {powerLevel} " +
               $"\nSpeed: {speed} \nStrength: {strength} \nDexterity: {dexterity} \nIntelligence: {intelligence}\n");
        }
        
        //Checks to see if character has died
        public bool IsDead()
        {
            if(health <= 0)
            {
                return true;
            }
            else
            {
                return false; 
            }
        }

        //Increases character stats and decreases health 
        public void Train()
        {
            //Prevents training if health is too low 
            if(health < 25)
            {
                Console.WriteLine("You are too weak to train. Heal your body first"); 
            } 
            else
            {
                health -= 35;
                strength += 20;
                speed += 20;
                dexterity += 20;
                powerLevel += strength + speed;
                Console.WriteLine($"{name}'s training really paid off! You lost some health but you gained a ton of experiece!");
            }
           
        }
    }
}
