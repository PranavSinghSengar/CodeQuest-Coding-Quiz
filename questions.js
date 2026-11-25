const QUESTION_BANK = [
  {
    "id": 1,
    "level": "Beginner",
    "topic": "Arithmetic",
    "question": "What is 8 + 7?",
    "options": [
      "15",
      "14",
      "16",
      "56"
    ],
    "answer": 0,
    "explanation": "8 plus 7 equals 15."
  },
  {
    "id": 2,
    "level": "Beginner",
    "topic": "Arithmetic",
    "question": "What is 9 × 6?",
    "options": [
      "45",
      "54",
      "56",
      "63"
    ],
    "answer": 1,
    "explanation": "9 multiplied by 6 equals 54."
  },
  {
    "id": 3,
    "level": "Beginner",
    "topic": "Arithmetic",
    "question": "What is 25 % 4 in C++?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "The remainder after 25 divided by 4 is 1."
  },
  {
    "id": 4,
    "level": "Beginner",
    "topic": "Arithmetic",
    "question": "What is 18 / 3?",
    "options": [
      "3",
      "6",
      "9",
      "15"
    ],
    "answer": 1,
    "explanation": "18 divided by 3 equals 6."
  },
  {
    "id": 5,
    "level": "Beginner",
    "topic": "Variables",
    "question": "Which is a valid integer declaration?",
    "options": [
      "int age = 20;",
      "age int = 20;",
      "integer age;",
      "int = age;"
    ],
    "answer": 0,
    "explanation": "The type comes before the variable name."
  },
  {
    "id": 6,
    "level": "Beginner",
    "topic": "Variables",
    "question": "Which type stores true or false?",
    "options": [
      "char",
      "bool",
      "float",
      "string"
    ],
    "answer": 1,
    "explanation": "bool represents Boolean values."
  },
  {
    "id": 7,
    "level": "Beginner",
    "topic": "Variables",
    "question": "Which type is suitable for a single character?",
    "options": [
      "string",
      "int",
      "char",
      "double"
    ],
    "answer": 2,
    "explanation": "char stores a character."
  },
  {
    "id": 8,
    "level": "Beginner",
    "topic": "Variables",
    "question": "What does const mean?",
    "options": [
      "Variable is constant after initialization",
      "Variable is global",
      "Variable is a string",
      "Variable is deleted"
    ],
    "answer": 0,
    "explanation": "const prevents reassignment."
  },
  {
    "id": 9,
    "level": "Beginner",
    "topic": "Input/Output",
    "question": "Which object prints to the C++ console?",
    "options": [
      "cin",
      "cout",
      "main",
      "endl"
    ],
    "answer": 1,
    "explanation": "cout writes output."
  },
  {
    "id": 10,
    "level": "Beginner",
    "topic": "Input/Output",
    "question": "Which object reads console input?",
    "options": [
      "cout",
      "cin",
      "return",
      "printf_only"
    ],
    "answer": 1,
    "explanation": "cin reads standard input."
  },
  {
    "id": 11,
    "level": "Beginner",
    "topic": "Input/Output",
    "question": "Which operator sends data to cout?",
    "options": [
      ">>",
      "<<",
      "==",
      "&&"
    ],
    "answer": 1,
    "explanation": "<< is the stream insertion operator."
  },
  {
    "id": 12,
    "level": "Beginner",
    "topic": "Conditions",
    "question": "Which keyword starts a condition?",
    "options": [
      "if",
      "when",
      "check",
      "loop"
    ],
    "answer": 0,
    "explanation": "if executes a block when its condition is true."
  },
  {
    "id": 13,
    "level": "Beginner",
    "topic": "Conditions",
    "question": "What does == test?",
    "options": [
      "Assignment",
      "Equality",
      "Addition",
      "Division"
    ],
    "answer": 1,
    "explanation": "== compares two values."
  },
  {
    "id": 14,
    "level": "Beginner",
    "topic": "Conditions",
    "question": "Is 12 > 9 true or false?",
    "options": [
      "true",
      "false",
      "12",
      "9"
    ],
    "answer": 0,
    "explanation": "12 is greater than 9."
  },
  {
    "id": 15,
    "level": "Beginner",
    "topic": "Conditions",
    "question": "Which keyword gives an alternative branch?",
    "options": [
      "otherwise",
      "else",
      "elif",
      "next"
    ],
    "answer": 1,
    "explanation": "C++ uses else."
  },
  {
    "id": 16,
    "level": "Beginner",
    "topic": "Loops",
    "question": "Which loop checks its condition before running its body?",
    "options": [
      "while",
      "do-while",
      "switch",
      "class"
    ],
    "answer": 0,
    "explanation": "while checks before each iteration."
  },
  {
    "id": 17,
    "level": "Beginner",
    "topic": "Loops",
    "question": "How many times does for(i=0;i<4;i++) run?",
    "options": [
      "3",
      "4",
      "5",
      "Infinite"
    ],
    "answer": 1,
    "explanation": "i takes values 0, 1, 2 and 3."
  },
  {
    "id": 18,
    "level": "Beginner",
    "topic": "Loops",
    "question": "What does i++ do?",
    "options": [
      "Subtracts one",
      "Adds one",
      "Sets zero",
      "Doubles i"
    ],
    "answer": 1,
    "explanation": "The increment operator increases i by one."
  },
  {
    "id": 19,
    "level": "Beginner",
    "topic": "Loops",
    "question": "Which loop runs its body at least once?",
    "options": [
      "for",
      "while",
      "do-while",
      "if"
    ],
    "answer": 2,
    "explanation": "do-while checks the condition after the body."
  },
  {
    "id": 20,
    "level": "Beginner",
    "topic": "Functions",
    "question": "A function is best described as…",
    "options": [
      "Reusable named block of code",
      "A data type",
      "A compiler",
      "A loop condition"
    ],
    "answer": 0,
    "explanation": "Functions package reusable instructions."
  },
  {
    "id": 21,
    "level": "Beginner",
    "topic": "Functions",
    "question": "Which keyword returns a value?",
    "options": [
      "break",
      "return",
      "continue",
      "using"
    ],
    "answer": 1,
    "explanation": "return exits a function and may send a value back."
  },
  {
    "id": 22,
    "level": "Beginner",
    "topic": "Functions",
    "question": "Which return type means no value is returned?",
    "options": [
      "null",
      "empty",
      "void",
      "none"
    ],
    "answer": 2,
    "explanation": "void indicates no return value."
  },
  {
    "id": 23,
    "level": "Beginner",
    "topic": "Functions",
    "question": "What is a parameter?",
    "options": [
      "Named input in a function definition",
      "A compiler warning",
      "A loop",
      "A file"
    ],
    "answer": 0,
    "explanation": "Parameters receive values passed to a function."
  },
  {
    "id": 24,
    "level": "Beginner",
    "topic": "Arrays",
    "question": "What is the first array index in C++?",
    "options": [
      "1",
      "0",
      "-1",
      "Depends"
    ],
    "answer": 1,
    "explanation": "C++ arrays are zero-indexed."
  },
  {
    "id": 25,
    "level": "Beginner",
    "topic": "Arrays",
    "question": "How many elements are in int a[6]?",
    "options": [
      "5",
      "6",
      "7",
      "12"
    ],
    "answer": 1,
    "explanation": "The array contains six elements."
  },
  {
    "id": 26,
    "level": "Beginner",
    "topic": "Arrays",
    "question": "What is the last valid index of int a[6]?",
    "options": [
      "6",
      "5",
      "4",
      "0"
    ],
    "answer": 1,
    "explanation": "Indices range from 0 to 5."
  },
  {
    "id": 27,
    "level": "Beginner",
    "topic": "Strings",
    "question": "Which header provides std::string?",
    "options": [
      "<iostream>",
      "<string>",
      "<vector>",
      "<cmath>"
    ],
    "answer": 1,
    "explanation": "The string header declares std::string."
  },
  {
    "id": 28,
    "level": "Beginner",
    "topic": "Strings",
    "question": "What does text.length() return?",
    "options": [
      "Character count",
      "First character",
      "Last index",
      "Memory address"
    ],
    "answer": 0,
    "explanation": "length returns the number of characters."
  },
  {
    "id": 29,
    "level": "Beginner",
    "topic": "Operators",
    "question": "Which operator means logical AND?",
    "options": [
      "||",
      "!",
      "&&",
      "%"
    ],
    "answer": 2,
    "explanation": "&& is logical AND."
  },
  {
    "id": 30,
    "level": "Beginner",
    "topic": "Operators",
    "question": "Which operator means logical OR?",
    "options": [
      "||",
      "&&",
      "!",
      "/"
    ],
    "answer": 0,
    "explanation": "|| is logical OR."
  },
  {
    "id": 31,
    "level": "Beginner",
    "topic": "C++ Basics",
    "question": "What is the usual entry-point function?",
    "options": [
      "start()",
      "main()",
      "run()",
      "init()"
    ],
    "answer": 1,
    "explanation": "A hosted C++ program begins execution in main."
  },
  {
    "id": 32,
    "level": "Beginner",
    "topic": "C++ Basics",
    "question": "Which symbol ends most C++ statements?",
    "options": [
      ":",
      ";",
      ".",
      ","
    ],
    "answer": 1,
    "explanation": "A semicolon terminates most statements."
  },
  {
    "id": 33,
    "level": "Beginner",
    "topic": "C++ Basics",
    "question": "Which directive includes iostream?",
    "options": [
      "#include <iostream>",
      "using <iostream>",
      "include(iostream)",
      "import header"
    ],
    "answer": 0,
    "explanation": "The include directive makes declarations available."
  },
  {
    "id": 34,
    "level": "Beginner",
    "topic": "C++ Basics",
    "question": "What does // begin?",
    "options": [
      "Single-line comment",
      "Multi-line comment",
      "Division",
      "Loop"
    ],
    "answer": 0,
    "explanation": "// comments out the rest of that line."
  },
  {
    "id": 35,
    "level": "Beginner",
    "topic": "C++ Basics",
    "question": "cout and cin belong to which namespace?",
    "options": [
      "std",
      "cpp",
      "main",
      "io"
    ],
    "answer": 0,
    "explanation": "They are names in the standard namespace."
  },
  {
    "id": 36,
    "level": "Beginner",
    "topic": "Debugging",
    "question": "A syntax error is…",
    "options": [
      "Violation of language grammar",
      "Wrong result from valid code",
      "Slow execution",
      "Hardware issue"
    ],
    "answer": 0,
    "explanation": "Syntax errors break language rules."
  },
  {
    "id": 37,
    "level": "Beginner",
    "topic": "Debugging",
    "question": "A logical error means…",
    "options": [
      "Program cannot compile",
      "Program runs but result is wrong",
      "No keyboard",
      "Missing monitor"
    ],
    "answer": 1,
    "explanation": "The code runs but does not solve the intended problem."
  },
  {
    "id": 38,
    "level": "Beginner",
    "topic": "Algorithms",
    "question": "An algorithm is…",
    "options": [
      "Step-by-step problem-solving procedure",
      "Programming language",
      "Computer part",
      "Variable"
    ],
    "answer": 0,
    "explanation": "An algorithm is a defined sequence of steps."
  },
  {
    "id": 39,
    "level": "Beginner",
    "topic": "Arithmetic",
    "question": "What is 100 - 37?",
    "options": [
      "63",
      "73",
      "67",
      "53"
    ],
    "answer": 0,
    "explanation": "100 minus 37 equals 63."
  },
  {
    "id": 40,
    "level": "Beginner",
    "topic": "Arithmetic",
    "question": "What is 7 squared?",
    "options": [
      "14",
      "49",
      "21",
      "77"
    ],
    "answer": 1,
    "explanation": "7 multiplied by itself is 49."
  },
  {
    "id": 41,
    "level": "Intermediate",
    "topic": "Arithmetic",
    "question": "Which condition checks whether n is even?",
    "options": [
      "n % 2 == 0",
      "n / 2 == 0",
      "n * 2 == 0",
      "n % 2 == 1"
    ],
    "answer": 0,
    "explanation": "Even numbers have remainder zero when divided by two."
  },
  {
    "id": 42,
    "level": "Intermediate",
    "topic": "Arithmetic",
    "question": "What is 2 + 3 * 4 using operator precedence?",
    "options": [
      "20",
      "14",
      "24",
      "9"
    ],
    "answer": 1,
    "explanation": "Multiplication happens before addition."
  },
  {
    "id": 43,
    "level": "Intermediate",
    "topic": "Arithmetic",
    "question": "How do you calculate the square of n?",
    "options": [
      "n+n",
      "n*n",
      "n/n",
      "n%n"
    ],
    "answer": 1,
    "explanation": "Multiply n by itself."
  },
  {
    "id": 44,
    "level": "Intermediate",
    "topic": "Loops",
    "question": "What does continue do in a loop?",
    "options": [
      "Exits program",
      "Skips to next iteration",
      "Ends the loop",
      "Restarts main"
    ],
    "answer": 1,
    "explanation": "continue skips the rest of the current iteration."
  },
  {
    "id": 45,
    "level": "Intermediate",
    "topic": "Loops",
    "question": "What does break do in a loop?",
    "options": [
      "Skips one iteration",
      "Exits nearest loop",
      "Pauses loop",
      "Increments counter"
    ],
    "answer": 1,
    "explanation": "break terminates the nearest enclosing loop."
  },
  {
    "id": 46,
    "level": "Intermediate",
    "topic": "Functions",
    "question": "What is function overloading?",
    "options": [
      "Same name, different parameter lists",
      "Calling twice",
      "Returning two values",
      "Function inside main"
    ],
    "answer": 0,
    "explanation": "Overloads have distinct parameter lists."
  },
  {
    "id": 47,
    "level": "Intermediate",
    "topic": "Functions",
    "question": "Pass-by-reference means…",
    "options": [
      "Always makes a copy",
      "Parameter aliases original argument",
      "Deletes argument",
      "Only constants allowed"
    ],
    "answer": 1,
    "explanation": "A reference can access the original object."
  },
  {
    "id": 48,
    "level": "Intermediate",
    "topic": "Functions",
    "question": "Recursion is…",
    "options": [
      "A function calling itself",
      "A loop without condition",
      "Class inheritance",
      "Type conversion"
    ],
    "answer": 0,
    "explanation": "A recursive function calls itself and needs a base case."
  },
  {
    "id": 49,
    "level": "Intermediate",
    "topic": "Arrays",
    "question": "How can you find the maximum in an array?",
    "options": [
      "Scan and update current maximum",
      "Sort only first item",
      "Add all values",
      "Use modulo"
    ],
    "answer": 0,
    "explanation": "A linear scan compares each value to the current maximum."
  },
  {
    "id": 50,
    "level": "Intermediate",
    "topic": "Arrays",
    "question": "What is the time complexity of one full array scan?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Each of n elements is visited once."
  },
  {
    "id": 51,
    "level": "Intermediate",
    "topic": "Arrays",
    "question": "A 2D array commonly represents…",
    "options": [
      "Matrix or grid",
      "Boolean",
      "Function",
      "File"
    ],
    "answer": 0,
    "explanation": "Rows and columns form a grid."
  },
  {
    "id": 52,
    "level": "Intermediate",
    "topic": "Strings",
    "question": "Which function converts a string to an int?",
    "options": [
      "std::stoi",
      "std::tochar",
      "std::int",
      "std::parseint"
    ],
    "answer": 0,
    "explanation": "std::stoi converts a numeric string to an integer."
  },
  {
    "id": 53,
    "level": "Intermediate",
    "topic": "Pointers",
    "question": "A pointer stores…",
    "options": [
      "Memory address",
      "Only decimal number",
      "Class name",
      "Loop count"
    ],
    "answer": 0,
    "explanation": "A pointer holds an address."
  },
  {
    "id": 54,
    "level": "Intermediate",
    "topic": "Pointers",
    "question": "What does &variable produce?",
    "options": [
      "Dereferences it",
      "Its address",
      "Deletes it",
      "Multiplies it"
    ],
    "answer": 1,
    "explanation": "The address-of operator obtains an object's address."
  },
  {
    "id": 55,
    "level": "Intermediate",
    "topic": "Pointers",
    "question": "What does *ptr do for a valid pointer?",
    "options": [
      "Gets pointed-to object",
      "Gets pointer address",
      "Deletes pointer",
      "Gets pointer size"
    ],
    "answer": 0,
    "explanation": "Unary * dereferences a pointer."
  },
  {
    "id": 56,
    "level": "Intermediate",
    "topic": "OOP",
    "question": "A C++ class is…",
    "options": [
      "Blueprint for objects",
      "Loop",
      "Operator",
      "Header file"
    ],
    "answer": 0,
    "explanation": "A class defines a user-defined type."
  },
  {
    "id": 57,
    "level": "Intermediate",
    "topic": "OOP",
    "question": "An object is…",
    "options": [
      "Instance of a class",
      "Namespace",
      "Compiler",
      "Comment"
    ],
    "answer": 0,
    "explanation": "An object is an instance of a class."
  },
  {
    "id": 58,
    "level": "Intermediate",
    "topic": "OOP",
    "question": "Which access specifier restricts direct outside access?",
    "options": [
      "public",
      "private",
      "protected",
      "global"
    ],
    "answer": 1,
    "explanation": "private members are not directly accessible outside the class."
  },
  {
    "id": 59,
    "level": "Intermediate",
    "topic": "OOP",
    "question": "A constructor is used to…",
    "options": [
      "Initialize an object",
      "Destroy program",
      "Repeat loop",
      "Include header"
    ],
    "answer": 0,
    "explanation": "Constructors initialize objects when created."
  },
  {
    "id": 60,
    "level": "Intermediate",
    "topic": "OOP",
    "question": "Encapsulation means…",
    "options": [
      "Bundling data and methods with controlled access",
      "Only global variables",
      "Everything in main",
      "Compile to machine code"
    ],
    "answer": 0,
    "explanation": "Encapsulation protects and organizes object state."
  },
  {
    "id": 61,
    "level": "Intermediate",
    "topic": "OOP",
    "question": "Inheritance allows…",
    "options": [
      "Derived class to extend a base class",
      "Variable stores two values",
      "Loop calls itself",
      "Function returns nothing"
    ],
    "answer": 0,
    "explanation": "A derived class can reuse and extend base-class behavior."
  },
  {
    "id": 62,
    "level": "Intermediate",
    "topic": "STL",
    "question": "Which STL container is a dynamic array?",
    "options": [
      "map",
      "vector",
      "set",
      "queue"
    ],
    "answer": 1,
    "explanation": "std::vector is a resizable sequence container."
  },
  {
    "id": 63,
    "level": "Intermediate",
    "topic": "STL",
    "question": "Which header is required for vector?",
    "options": [
      "<vector>",
      "<arraylist>",
      "<listvector>",
      "<iostream>"
    ],
    "answer": 0,
    "explanation": "The vector container is declared in <vector>."
  },
  {
    "id": 64,
    "level": "Intermediate",
    "topic": "STL",
    "question": "What does vector.push_back(x) do?",
    "options": [
      "Appends x",
      "Removes first item",
      "Sorts vector",
      "Clears vector"
    ],
    "answer": 0,
    "explanation": "push_back adds an element at the end."
  },
  {
    "id": 65,
    "level": "Intermediate",
    "topic": "STL",
    "question": "Which algorithm sorts a range?",
    "options": [
      "std::find",
      "std::sort",
      "std::count",
      "std::swapall"
    ],
    "answer": 1,
    "explanation": "std::sort sorts an iterator range."
  },
  {
    "id": 66,
    "level": "Intermediate",
    "topic": "Files",
    "question": "Which stream reads from a file?",
    "options": [
      "ofstream",
      "ifstream",
      "ostream",
      "cout"
    ],
    "answer": 1,
    "explanation": "ifstream is an input file stream."
  },
  {
    "id": 67,
    "level": "Intermediate",
    "topic": "Files",
    "question": "Which stream writes to a file?",
    "options": [
      "ifstream",
      "ofstream",
      "istream",
      "cin"
    ],
    "answer": 1,
    "explanation": "ofstream is an output file stream."
  },
  {
    "id": 68,
    "level": "Intermediate",
    "topic": "Algorithms",
    "question": "Binary search requires…",
    "options": [
      "Sorted data",
      "Positive values only",
      "Even length",
      "No duplicates"
    ],
    "answer": 0,
    "explanation": "Binary search relies on sorted order."
  },
  {
    "id": 69,
    "level": "Intermediate",
    "topic": "Algorithms",
    "question": "Binary search has what time complexity?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "Always O(1)"
    ],
    "answer": 1,
    "explanation": "It halves the remaining search range each step."
  },
  {
    "id": 70,
    "level": "Intermediate",
    "topic": "Algorithms",
    "question": "Two nested loops each running n times are typically…",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "The inner loop runs n times for each of n outer iterations."
  },
  {
    "id": 71,
    "level": "Intermediate",
    "topic": "Debugging",
    "question": "An off-by-one error is…",
    "options": [
      "Wrong type",
      "Loop/index runs one too many or too few",
      "Missing library",
      "Network failure"
    ],
    "answer": 1,
    "explanation": "These errors often happen at loop boundaries."
  },
  {
    "id": 72,
    "level": "Intermediate",
    "topic": "C++ Basics",
    "question": "What does std:: qualify?",
    "options": [
      "A name in the standard namespace",
      "A comment",
      "A pointer",
      "A class"
    ],
    "answer": 0,
    "explanation": "std:: identifies a standard-library name."
  },
  {
    "id": 73,
    "level": "Intermediate",
    "topic": "C++ Basics",
    "question": "What is #pragma once commonly used for?",
    "options": [
      "Prevent repeated header inclusion",
      "Run main twice",
      "Allocate memory",
      "Enable recursion"
    ],
    "answer": 0,
    "explanation": "It prevents a header being included multiple times in common compilers."
  },
  {
    "id": 74,
    "level": "Intermediate",
    "topic": "OOP",
    "question": "What does virtual enable?",
    "options": [
      "Runtime polymorphism",
      "Compile-time constants",
      "File reading",
      "Loop control"
    ],
    "answer": 0,
    "explanation": "Virtual functions support dynamic dispatch."
  },
  {
    "id": 75,
    "level": "Intermediate",
    "topic": "Strings",
    "question": "What does s.substr(2, 3) request?",
    "options": [
      "Up to 3 characters starting at index 2",
      "Characters 2 through 3 only",
      "First 3 chars",
      "Last 3 chars"
    ],
    "answer": 0,
    "explanation": "substr takes a starting position and a character count."
  },
  {
    "id": 76,
    "level": "Intermediate",
    "topic": "Algorithms",
    "question": "A palindrome reads…",
    "options": [
      "The same forward and backward",
      "Only in sorted order",
      "As a prime number",
      "As a graph"
    ],
    "answer": 0,
    "explanation": "Examples include 'level' and '121'."
  },
  {
    "id": 77,
    "level": "Intermediate",
    "topic": "Arithmetic",
    "question": "What is 15 % 6?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "15 divided by 6 leaves remainder 3."
  },
  {
    "id": 78,
    "level": "Intermediate",
    "topic": "Functions",
    "question": "What is a function prototype?",
    "options": [
      "Declaration describing function signature",
      "A loop",
      "A runtime result",
      "A class object"
    ],
    "answer": 0,
    "explanation": "A prototype tells the compiler about a function before its definition."
  },
  {
    "id": 79,
    "level": "Intermediate",
    "topic": "OOP",
    "question": "What is a member function?",
    "options": [
      "Function declared as part of a class",
      "Global variable",
      "Header file",
      "Loop statement"
    ],
    "answer": 0,
    "explanation": "Member functions belong to a class and operate on its objects."
  },
  {
    "id": 80,
    "level": "Intermediate",
    "topic": "STL",
    "question": "Which container stores unique sorted keys?",
    "options": [
      "vector",
      "set",
      "queue",
      "stack"
    ],
    "answer": 1,
    "explanation": "std::set stores unique keys in sorted order."
  },
  {
    "id": 81,
    "level": "Advanced",
    "topic": "Algorithms",
    "question": "Average quicksort time complexity is…",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "Quicksort is O(n log n) on average; worst case can be O(n²)."
  },
  {
    "id": 82,
    "level": "Advanced",
    "topic": "Data Structures",
    "question": "Which structure follows LIFO?",
    "options": [
      "Queue",
      "Stack",
      "Heap",
      "Graph"
    ],
    "answer": 1,
    "explanation": "A stack removes the most recently added item first."
  },
  {
    "id": 83,
    "level": "Advanced",
    "topic": "Data Structures",
    "question": "Which structure follows FIFO?",
    "options": [
      "Stack",
      "Queue",
      "Tree",
      "Set"
    ],
    "answer": 1,
    "explanation": "A queue removes the earliest added item first."
  },
  {
    "id": 84,
    "level": "Advanced",
    "topic": "Data Structures",
    "question": "A hash table is commonly used for…",
    "options": [
      "Fast average key lookup",
      "Always sorting",
      "Graphics rendering",
      "Compilation"
    ],
    "answer": 0,
    "explanation": "Hash tables provide average constant-time lookup under suitable assumptions."
  },
  {
    "id": 85,
    "level": "Advanced",
    "topic": "Algorithms",
    "question": "Worst-case linear search complexity is…",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "The item may be last or absent."
  },
  {
    "id": 86,
    "level": "Advanced",
    "topic": "Trees",
    "question": "Which BST traversal visits values in sorted order?",
    "options": [
      "Preorder",
      "Inorder",
      "Postorder",
      "Level order"
    ],
    "answer": 1,
    "explanation": "Inorder visits left subtree, node, then right subtree."
  },
  {
    "id": 87,
    "level": "Advanced",
    "topic": "Algorithms",
    "question": "Big-O describes…",
    "options": [
      "Exact seconds",
      "Asymptotic growth of resource use",
      "Compiler version",
      "Source-file count"
    ],
    "answer": 1,
    "explanation": "Big-O describes how resource use grows with input size."
  },
  {
    "id": 88,
    "level": "Advanced",
    "topic": "Algorithms",
    "question": "Divide and conquer means…",
    "options": [
      "Split into smaller problems and combine solutions",
      "Guess randomly",
      "Trace manually",
      "Cast types"
    ],
    "answer": 0,
    "explanation": "The problem is split, solved recursively, and combined."
  },
  {
    "id": 89,
    "level": "Advanced",
    "topic": "Algorithms",
    "question": "Dynamic programming often stores…",
    "options": [
      "Previously solved subproblems",
      "Only user input",
      "Compiler logs",
      "Random values"
    ],
    "answer": 0,
    "explanation": "Memoization or tabulation avoids repeated work."
  },
  {
    "id": 90,
    "level": "Advanced",
    "topic": "Graphs",
    "question": "A graph edge represents…",
    "options": [
      "Connection between vertices",
      "Sorted array",
      "Pointer only",
      "Constructor"
    ],
    "answer": 0,
    "explanation": "Edges represent relationships between vertices."
  },
  {
    "id": 91,
    "level": "Advanced",
    "topic": "OOP",
    "question": "Runtime polymorphism in C++ commonly uses…",
    "options": [
      "Virtual functions",
      "Macros",
      "Global variables",
      "Namespaces"
    ],
    "answer": 0,
    "explanation": "Virtual dispatch selects an override at runtime."
  },
  {
    "id": 92,
    "level": "Advanced",
    "topic": "OOP",
    "question": "Why use a virtual base-class destructor?",
    "options": [
      "Correct derived destruction through base pointer",
      "Make constructors virtual",
      "Speed up loops",
      "Prevent objects"
    ],
    "answer": 0,
    "explanation": "It ensures the derived destructor runs when deleting through a base pointer."
  },
  {
    "id": 93,
    "level": "Advanced",
    "topic": "OOP",
    "question": "An abstract class has…",
    "options": [
      "At least one pure virtual function",
      "No methods",
      "Only public data",
      "No constructor"
    ],
    "answer": 0,
    "explanation": "A class with a pure virtual function cannot be instantiated directly."
  },
  {
    "id": 94,
    "level": "Advanced",
    "topic": "OOP",
    "question": "Composition models which relationship?",
    "options": [
      "Has-a",
      "Is-a only",
      "Calls-a",
      "Copies-a"
    ],
    "answer": 0,
    "explanation": "A class contains objects of other classes."
  },
  {
    "id": 95,
    "level": "Advanced",
    "topic": "Memory",
    "question": "RAII stands for…",
    "options": [
      "Resource Acquisition Is Initialization",
      "Runtime Array Index Inspection",
      "Read And Input Immediately",
      "Resource Allocation Interface"
    ],
    "answer": 0,
    "explanation": "RAII ties resource lifetime to object lifetime."
  },
  {
    "id": 96,
    "level": "Advanced",
    "topic": "Memory",
    "question": "Which smart pointer represents exclusive ownership?",
    "options": [
      "weak_ptr",
      "shared_ptr",
      "unique_ptr",
      "raw_ptr"
    ],
    "answer": 2,
    "explanation": "unique_ptr expresses sole ownership."
  },
  {
    "id": 97,
    "level": "Advanced",
    "topic": "Memory",
    "question": "A memory leak occurs when…",
    "options": [
      "Allocated memory is not properly released/reachable",
      "Syntax is invalid",
      "Vector is empty",
      "CPU is fast"
    ],
    "answer": 0,
    "explanation": "A program loses track of allocated resources without releasing them."
  },
  {
    "id": 98,
    "level": "Advanced",
    "topic": "Templates",
    "question": "A function template enables…",
    "options": [
      "Generic functions for multiple types",
      "File creation",
      "Thread start",
      "Integer-only sorting"
    ],
    "answer": 0,
    "explanation": "Templates parameterize code by type or value."
  },
  {
    "id": 99,
    "level": "Advanced",
    "topic": "Concurrency",
    "question": "Which header declares std::thread?",
    "options": [
      "<thread>",
      "<process>",
      "<parallel>",
      "<asyncio>"
    ],
    "answer": 0,
    "explanation": "The C++ thread library is declared in <thread>."
  },
  {
    "id": 100,
    "level": "Advanced",
    "topic": "Exceptions",
    "question": "Which keywords are used for C++ exception handling?",
    "options": [
      "try, catch, throw",
      "if, else, switch",
      "new, delete, free",
      "open, read, close"
    ],
    "answer": 0,
    "explanation": "throw signals an exception; try/catch handle it."
  }
];
