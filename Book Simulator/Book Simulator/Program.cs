using System;
/*
 Princess-Osaani Hornage - 2024

Book Simulator: Returns a summary of book attributes and calculates the time it 
will take to complete the book. Keeps track of number of times book has been completed 

 */

namespace Book_Simulator
{
    class Program
    {
        static void Main(string[] args)
        {
            //Variables
            int pageCount;
            string userAction = ""; 

            Console.WriteLine("Welcome to Book Simulator!");

            Console.Write("\nWhat is the book's title?: ");
            string title = Console.ReadLine(); 
            Console.Write("Who is the book's author?: ");
            string author = Console.ReadLine();
            Console.Write("How many pages does it have?: ");
            bool success = int.TryParse(Console.ReadLine(), out pageCount); 
            while(!success || pageCount < 0)
            {
                Console.WriteLine("Invalid input. Please enter a positive integer");
                Console.Write("How many pages does it have?: ");
                success = int.TryParse(Console.ReadLine(), out pageCount);
            }

            //Creates Book Object and fills with user input 
            Book book = new Book(title, author, pageCount);

            //Main Loop
            while(userAction != "quit")
            {
                Console.Write("What would you like to do (read, report, time, or quit)?: ");
                userAction = Console.ReadLine().Trim().ToLower();
                switch (userAction) 
                {
                    case "read":
                        int pgsToRead;
                        //Gets number of pages to read  
                        Console.Write("How many pages?: ");
                        bool valid = int.TryParse(Console.ReadLine(), out pgsToRead);

                        //Input Validation 
                        while (!valid)
                        {
                            Console.WriteLine("Please enter a valid positive integer");
                            Console.Write("How many pages?: ");
                            valid = int.TryParse(Console.ReadLine(), out pgsToRead);
                        }

                        //Increments page count
                        Console.WriteLine($"You have read {pgsToRead} pages");
                        book.ReadPages(pgsToRead); 
                        break;
                    case "report":
                            Console.WriteLine(book.BookReport()); //Prints out summary of book attributes 
                        break;
                    case "time":
                        int minToRead; 
                        Console.Write("How many minutes does it take you to read one page?: ");
                        bool valid2 = int.TryParse(Console.ReadLine(), out minToRead);
                        while (!valid2)
                        {
                            Console.WriteLine("Invalid input. Please enter a positive integer");
                            Console.Write("How many minutes does it take you to read one page?: ");
                            valid2 = int.TryParse(Console.ReadLine(), out minToRead);
                        }
                        int minutesToRead = book.TimeToFinishReading(minToRead);
                        Console.WriteLine($"It will take you {minutesToRead} minutes to finish the book"); 

                        break;
                    case "quit":
                        Console.WriteLine("Goodbye!");
                        break;
                    default:
                        Console.WriteLine($"Invalid choice: {userAction}"); 
                        break; 
                }

            }
        }
    }
}
