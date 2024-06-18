using System;
using System.Collections.Generic;
using System.Text;

namespace Book_Simulator
{
    class Book
    {
        //Fields 
        private string title; 
        private string author;
        private int numOfPgs; //numer of pages in the book 
        private int pgsRead;  //how many pages the user has read so far 
        private int totalReads; //total number of times the user has fully read the book 

        //Constructor 
        public Book(string title, string author, int numOfPgs)
        {
            this.title = title;
            this.author = author;
            this.numOfPgs = numOfPgs;
            pgsRead = 0;
            totalReads = 0; 
        }

        //Methods 
        public void ReadPages(int pgsToRead)
        {
            //Updates pages read while its positive
            if(pgsToRead > 0)
            {
                pgsRead += pgsToRead;
            }

            //Checks to see if user completed book 
            if(pgsRead >= numOfPgs)
            {
                totalReads++;
                int pgsLeft = pgsRead - numOfPgs;
                pgsRead = pgsLeft; //resets pages read 
            }
        }

        //Calculates time it would take to finish reading the book 
        public int TimeToFinishReading(int minutesPerPage)
        {
            //Calculates how many pages are left
            int pgsLeft = numOfPgs - pgsRead;
            
            //Returns time
            return pgsLeft * minutesPerPage; 
        }

        //Prints a summary of book attributes 
        public String BookReport()
        {
            return title + " by " + author + " has " + numOfPgs + " page(s). You are " + pgsRead + 
                " page(s) in, and have read the book " + totalReads + " time(s)"; 
        }
    }
}
