# AI Tools

## Initial Test
Used GitHub CoPilot to generate some basic Java code for me. (I would have done this for the AI module in Company Policies, but something went wrong and I had to clean install so many github related things...)

**Input 1:** Generate a java function that counts down backwards from six to zero.
**Output:**
```
    public static void countdown() {
        for (int i = 6; i >= 0; i--) {
            System.out.println(i);
        }
    }
```

**Analysis:** No problems there, though the function name should probably be CamelCased ("Countdown" may be one word in english, but in Java it's typically written as [CountDown](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/CountDownLatch.html). Since this is a method, it would be `countDown`). The brackets around the println statement aren't needed, but I'll keep them there for now.

Either way, that saves time on having to format the loop myself.


**Input 2:** Generate a blank java main function.
**Output:** 
```
    public static void main(String[] args) {
    }
```
**Analysis:** Yep, that's a blank function. Saves a bit of time when you just need a template.


**Input 3:** Generate get/set functions for both age and name.
**Output:**
```
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
```

**Analysis:** Properly formatted and a BIG timesaver.



**Input 4:** create an instance of copilotTest with the name Lucy and an age of 33. Print this information to console.

**Output:**
```
    copilotTest person = new copilotTest("Lucy", 33);
    System.out.println("Name: " + person.getName());
    System.out.println("Age: " + person.getAge());
```

**Analysis:** That works, though I was expecting it to be printed on one line. Easily fixed:

`System.out.println("Name: " + person.getName() + " | Age: " + person.getAge());`

**Input 5:** Generate code for a simple rock-papers-scissors game. The player should be able to input their choice via the console, and the result should be printed to console.

**Output:**
```
import java.util.Scanner;
import java.util.Random;

public class game {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
            
        String[] choices = {"rock", "paper", "scissors"};
            
        System.out.print("Enter your choice (rock, paper, scissors): ");
        String playerChoice = scanner.nextLine().toLowerCase();
            
        int computerIndex = random.nextInt(3);
        String computerChoice = choices[computerIndex];
            
        System.out.println("Computer chose: " + computerChoice);
            
        if (playerChoice.equals(computerChoice)) {
            System.out.println("It's a tie!");
        } else if ((playerChoice.equals("rock") && computerChoice.equals("scissors")) ||
                    (playerChoice.equals("paper") && computerChoice.equals("rock")) ||
                    (playerChoice.equals("scissors") && computerChoice.equals("paper"))) {
            System.out.println("You win!");
        } else {
            System.out.println("You lose!");
        }
            
        scanner.close();
    }
}
```

**Analysis:** Surprisingly effective. Uncommented but easy to read. The AI correctly turned user input to lowercase before processing. However, the game cannot identify if the user's input is an invalid object (e.g. "bongos") and will simply tell them they lost. More useful feedback is needed.

## Reflections
### Which AI tools did you try?
ChatGPT, GitHub Copilot (after it repeatedly crashed last time...)


## What worked well? What didn’t?
GitHub Copilot: Excellent at generating basic code templates and automating simple tasks. In particular, it saved me a *lot* of time by generating get/setter functions for a class's variables (which I had previously added to the class manually).

Some formatting issues, mostly relating to camelCase and personal preference re - brackets. At no point did it comment its code. There will always be a need to clean up after it.

I admit, I'm not a very creative prompt writer yet. Currently I feel more comfortable having it write one chunk of code at a time. This process is slow but reliable, and I will probably stick with it until I'm more used to prompt writing.

In terms of debugging, it could fix typos and missing brackets for me, but I couldn't think of any logical problems to test on it.

ChatGPT: I asked it to explain Node.js to me in simple terms, and to its credit it did that. However, its summary read like a rephrased version of [w3 schools's](https://www.w3schools.com/nodejs/). W3 Schools's site comes with the added bonus of linking sources, and knowing articles have already been fact checked.

I think I prefer to use ChatGPT to find key terms to use in a search engine, rather than taking it as fact.

## When do you think AI is most useful for coding?
Mostly for automating tasks that are easy, time consuming, and very tedious. I would like to experiment further with asking it to solve logic problems, but half the challenge is knowing what to ask. The other half is being able to confirm that it did the work correctly.