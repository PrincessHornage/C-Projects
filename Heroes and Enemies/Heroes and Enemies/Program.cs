using System;

namespace Heroes_and_Enemies
{
    class Program
    {
        static void Main(string[] args)
        {
            //Variables 
            int partySize;
            int remainingSpots;
            int saiyanCount,hunterCount  = 0;
            int jinchurikiCount = 0; 

            //Intro and data collection 
            Console.WriteLine("\t------ Welcome to Heroes v/s Enemies ------\n\n\n");
            Console.Write("Please enter the size of your hero party (1-7): ");
            bool success = int.TryParse(Console.ReadLine(), out partySize);
            while (!success || partySize > 7 || partySize < 0)
            {
                Console.Write("Invalid answer. Please enter an integer between (1 - 7): ");
                success = int.TryParse(Console.ReadLine(), out partySize);
            }//Input Validation 

            //Gets type of heros and amount to add to party 
            Console.Write("How many Saiyans would you like?: ");
            bool success2 = int.TryParse(Console.ReadLine(), out saiyanCount);
            while (!success2 || saiyanCount < 0 || saiyanCount > 7 || saiyanCount > partySize)//Input Validation 
            {
                Console.Write($"Invalid answer. Please enter an integer between (1 - {partySize}): ");
                success2 = int.TryParse(Console.ReadLine(), out saiyanCount);
            }

            //Calculates remainging spots on team 
            remainingSpots = partySize - saiyanCount;

            //Makes sure team isn't filled 
            if(IsTeamFull(remainingSpots, partySize) == true)//if not gets jinchuriki count 
            {
                Console.WriteLine($"Saiyan Count: {saiyanCount} \nHunter Count: {hunterCount} \nJinchuriki Count: {jinchurikiCount}");
                Console.WriteLine("Your team is now filled. You cannot add anymore heroes to your team");
            } else
            {
                Console.Write("How many jinchurikis would you like?: ");
                bool success3 = int.TryParse(Console.ReadLine(), out jinchurikiCount);//Input Validation 
                while (!success3 || jinchurikiCount > remainingSpots)
                {
                    Console.Write($"Invalid answer. Please enter an integer between (1 - {remainingSpots}): ");
                    success3 = int.TryParse(Console.ReadLine(), out jinchurikiCount);
                }

                //Calculates remainging spots on team 
                remainingSpots -= jinchurikiCount;

                //Checks to make sure Hunters can be added 
                if (IsTeamFull(remainingSpots, partySize) == false)
                {
                    Console.Write("How many Hunters would you like?: ");
                    bool success4 = int.TryParse(Console.ReadLine(), out hunterCount);//Input Validation 
                    while (!success4 || hunterCount > remainingSpots)
                    {
                        Console.Write($"Invalid answer. Please enter an integer between (1 - {remainingSpots}): ");
                        success4 = int.TryParse(Console.ReadLine(), out hunterCount);
                    }
                }
                else //Otherwise prints out error statement 
                {
                    Console.WriteLine("Your team is now filled. You cannot add anymore heroes to your team");
                }

                Console.WriteLine($"Saiyan Count: {saiyanCount} \nHunter Count: {hunterCount} \nJinchuriki Count: {jinchurikiCount}");
            }
           
              

              
            
        }
        //------ Helper Methods ------ 

         //Checks to see if team is full 
         public static bool IsTeamFull(int spotsLeft, int partySize)
         {
            //Returns true if team slots have all filled
            if (spotsLeft == 0 || spotsLeft <= 0)
            {
                return true;
            }
            else  //Returns remaining spots left 
            {
                Console.WriteLine($"You have {spotsLeft} out of {partySize} slots left on your team. ");
                return false;
            }



         }
    }
}
