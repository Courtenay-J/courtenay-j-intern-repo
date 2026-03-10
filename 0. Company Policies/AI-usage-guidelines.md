# AI Usage Guidelines

# Research Notes
## What AI tools are typically used for your role?
- GitHub Copilot
- ChatGPT/OpenAI (quick analysis of topics. OpenAI is integrated into Focus Bear)
- Cursor (fork of VSC with extra AI features)
- Codeium (AI-powered autocomplete; Copilot is similar)

## What are the benefits and risks of using AI in a professional setting?
**Benefits:**
- Automates basic or common tasks
- Quickly summarises large chunks of text
- Help phrase difficult subjects 
- Generally saves time

**Risks:**
- LLMs are word calculators, not fact checkers - information never guaranteed to be correct
- AI-generated code may be inefficient and difficult to maintain
- AI-generated installation software may download malicious code by mistake
- GenAI may write malicious code by itself
- LLMs may generate inappropriate or insensitive material
- Sensitive or copyright information fed into third-party AI may be stored for its training

## What types of information should never be entered into AI tools?
- Sensitive or confidential information: Focus Bear user data, Focus Bear staff information, training materials, payment information, etc.
- Proprietary code
- Copyright material
- Anything that would violate Swinburne's AI policies

## How can you fact-check and validate AI-generated content to ensure accuracy?
- For facts: google names, sources, key figures. *Never* assume a generated citation is accurate.
- For code: individual excerpts can be quickly tested by:
  - Checking them in a code editor for mistakes (missing brackets, obvious logical errors)
  - Cross-checking with documentation to ensure the functions used both exist and do what they're supposed to be doing (e.g. googling "println java")
  - Running them in an isolated environment and see if it crashes (make sure it's not installing anything third party, first)


# Reflection
## When should you use AI for assistance, and when should you rely on your own skills?
- Use AI to create basic templates and generate simple functions (e.g. ask it to create a for-while loop)
- Use AI as a *starting point* for research. e.g. generate key terms relevant to a topic I am looking for
- Rely on own skills for testing


## How can you avoid over-reliance on AI while still benefiting from it?
- Ensure I understand the basic logic of what I'm being asked to do first
- Use AI as a starting point for investigations - have it summarise information, highlight key areas, then look those terms up in reliable sources to ensure they're correct.

## What steps will you take to ensure data privacy when using AI tools?
- Never ever ever *ever* enter any names, faces, contact info, etc. of anyone, Focus Bear employee/customer or otherwise
- Never ask AI to write a confidential response
- Never copy the work of another person into GenerativeAI without their express consent

# Task
##  Identify one task you can improve using an AI tool, and try it out.
Although I have considerable programming experience and a strong understanding of coding standards, I have a bad memory. I often waste time at the start of a coding session opening up a template/looking at documentation to remind myself of a given language's syntax.

From what I understand, ChatGPT can quickly generate code examples.

For this exercise I thought I'd ask ChatGPT to generate a basic java function to refresh my memory, provide a start for a more complicated function, and to see how efficient its output is.


## Review the AI-generated output critically—did it require editing or fact-checking?
**My Prompt:**
> Generate a basic java function. It should accept a string as a parameter, convert it to capital letters, and print the end result to the console.

*(For this test, we're going to ignore this can be accomplished via `System.out.println(stringname.toUpperCase());`)*


**ChatGPT Output:**
```
public static void printUppercase(String input) {
    if (input != null) {
        String result = input.toUpperCase();
        System.out.println(result);
    } else {
        System.out.println("Input is null");
    }
}
```

**Analysis:**

This code is perfectly functional. ChatGPT correctly identified it should have a void output, ccontains a fallback for a null input, and it additionally provided an example of how it may be called. However:
- `printUppercase` is not properly CamelCased (compare to Java function `toUpperCase`)
- The brackets around the else statement are not needed and clutter the code
- As a matter of personal preference, I prefer shorter variable names. `result` is only used once, so it can be safely shortened to `r`
- It does not throw an exception if `input` is a different type of variable, such as an integer (though I believe that would result in a compilation error?)

I'd tidy it up as follows:
```
public static void printUpperCase(String input){
  if (input!=null){
    String r = input.toUpperCase();
    System.out.println(r);
  }
  else
    System.out.println("Input is invalid.");
}
```

or even:
```
public static void printUpperCase(String i){
  if (input!=null)
    System.out.println(i.toUpperCase());

  else
    System.out.println("Input is invalid.");
}
```


It's a small change, but keeps things maintainable in the long run.

...Though if this were a more in-depth function, I'd also expect more comments, and a proper function header.

## Document one best practice you will follow when using AI tools at Focus Bear.

Always double-check AI output. Check that code runs the way it's supposed to, and tidy up formatting errors every time to prevent long-term maintainability problems.