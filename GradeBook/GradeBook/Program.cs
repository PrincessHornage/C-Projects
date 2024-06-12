using System;

namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {
            //Variables 
            int assignmentCount;
            int index;
            double changedGrade;

            Console.WriteLine("Welcome to the Gradebook");
            Console.Write("How many assignments have you had?: ");
            bool success = int.TryParse(Console.ReadLine(), out assignmentCount);

            //Input Validation
            while (!success)
            {
                Console.WriteLine("Invalid input. Please enter a positive integer.");
                Console.Write("How many assignments have you had?: ");
                success = int.TryParse(Console.ReadLine(), out assignmentCount);
            }

            //Initalizes array sizes 
            string[] names = new string[assignmentCount];
            double[] grades = new double[assignmentCount];

            //Fills arrays 
            for (int i = 0; i < names.Length; i++)
            {
                Console.Write("Enter a name: ");
                names[i] = Console.ReadLine();
                Console.Write("Enter a grade: ");
                bool valid = double.TryParse(Console.ReadLine(), out grades[i]);
                while (!valid)
                {
                    Console.WriteLine("Invalid Input. Please enter a positive integer");
                    Console.WriteLine("Enter a grade: ");
                    valid = double.TryParse(Console.ReadLine(), out grades[i]);
                }
            }

            //Prints Grade Report
            GradeReport();

            //Asks for index placement 
            Console.Write("What is the index of the grade to replace?: ");
            bool newIndex = int.TryParse(Console.ReadLine(), out index);
            while (!newIndex || index > names.Length || index < 0)
            {
                Console.WriteLine($"Index must be a number between 1 and {assignmentCount}");
                Console.Write("What is the index of the grade to replace?: ");
                newIndex = int.TryParse(Console.ReadLine(), out index);
            }

            //Asks for new grade
            Console.Write("What is the new grade?: ");
            bool newGrade = double.TryParse(Console.ReadLine(), out changedGrade);
            while (!newGrade)
            {
                Console.WriteLine("Invalid Input. Please enter a positive integer");
                Console.WriteLine("Enter a grade: ");
                newGrade = double.TryParse(Console.ReadLine(), out changedGrade);
            }


            //Replaces Grade
            grades[index - 1] = changedGrade;

            //Reprints grade report
            GradeReport();

            void GradeReport()
            {
                Console.WriteLine("Grade report: ");

                for (int i = 0; i < names.Length; i++)
                {
                    Console.WriteLine($"\t{i + 1}: {names[i]}: {grades[i]}");
                }
                Console.WriteLine("----------------------------------------");

                //Calculates Final Average
                double finalAvg = 0;
                for (int i = 0; i < grades.Length; i++)
                {
                    finalAvg += grades[i];
                }
                finalAvg = finalAvg / grades.Length;

                Console.WriteLine($"Final Average: {finalAvg}");
            }

        }
    }
}
