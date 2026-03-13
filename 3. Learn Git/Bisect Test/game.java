import java.util.Scanner;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

    /*
        class game: Text-based rock-scissors-paper. Accepts user's move via console, generates
        a random move for the computer, and prints result of game.

        Disclosure: This code was AI generated via GitHub Copilot as part of issue #59, then cleaned up.
        This was intended for testing git bisect, not as a coding exercise.

        Last Updated: 2023-03-13, 7:40pm
    */
    public class game {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            int computerIndex = new Random().nextInt(3);
            List<String> choices = Arrays.asList("rock","scissors","paper");
            
            //Get user's move
            System.out.println("Let's play rock scissors paper!");
            System.out.print("Enter your choice (rock, scissors, paper): ");
            String playerChoice = scanner.nextLine().toLowerCase();
            String computerChoice = choices.get(computerIndex);

            //Display result
            System.out.println("\nThree, two, one, GO!\n");
            System.out.println("You chose: " + playerChoice);
            System.out.println("Computer chose: " + computerChoice);
            
            System.out.println("--- RESULT ---");

            //Determine outcome
            if (!choices.contains(playerChoice))
                System.out.println("...You're not *cheating*, are you? (Invalid input)");
            else if (playerChoice.equals(computerChoice)) 
                System.out.println("It's a tie!");
            else if ((playerChoice.equals("rock") && computerChoice.equals("scissors")) ||
                    (playerChoice.equals("paper") && computerChoice.equals("rock")) ||
                    (playerChoice.equals("scissors") && computerChoice.equals("paper"))) 
                System.out.println("You win!");
            else
                System.out.println("You lose!");

            //End the game
            scanner.close();
        }
    }
