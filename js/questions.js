function pickRandom(arr, count){
  return [...arr].sort(()=>0.5-Math.random()).slice(0,count);
}

/* ======================= C PROGRAMMING (20) ======================= */
const cQuestions = [
{section:"C Programming",type:"mcq",q:"What is the scope of a static variable inside a function?",options:["Local to block only","Global across files","Retained between calls, local scope","Deleted after function ends"],answer:2},
{section:"C Programming",type:"mcq",q:"Which header file defines malloc()?",options:["stdlib.h","stdio.h","string.h","math.h"],answer:0},
{section:"C Programming",type:"mcq",q:"What is a dangling pointer?",options:["An uninitialized pointer","A pointer to freed memory","A NULL pointer","A constant pointer"],answer:1},
{section:"C Programming",type:"mcq",q:"The 'volatile' keyword prevents the compiler from doing what?",options:["Compilation","Optimization of that variable","Execution","Memory allocation"],answer:1},
{section:"C Programming",type:"mcq",q:"Which operator gives the address of a variable?",options:["* (dereference)","& (address-of)","-> (arrow)","% (modulus)"],answer:1},
{section:"C Programming",type:"mcq",q:"sizeof(char) is guaranteed to be?",options:["1 byte","2 bytes","4 bytes","Platform dependent"],answer:0},
{section:"C Programming",type:"mcq",q:"What does a function prototype ensure?",options:["Correct syntax only","Type checking at compile time","Execution speed","Memory allocation"],answer:1},
{section:"C Programming",type:"mcq",q:"Which is the bitwise XOR operator in C?",options:["& (AND)","| (OR)","^ (XOR)","~ (NOT)"],answer:2},
{section:"C Programming",type:"mcq",q:"Does calloc() initialize allocated memory to zero?",options:["Yes, always","No, undefined","Sometimes","Depends on OS"],answer:0},
{section:"C Programming",type:"mcq",q:"Which function is used to release heap memory?",options:["delete","free()","remove()","release()"],answer:1},
{section:"C Programming",type:"mcq",q:"What is enum primarily used for?",options:["Creating variables","Defining named integer constants","Working with pointers","Declaring arrays"],answer:1},
{section:"C Programming",type:"mcq",q:"What does a header guard (#ifndef) prevent?",options:["Compile errors","Multiple inclusion of the same header","Optimization","Memory leaks"],answer:1},
{section:"C Programming",type:"mcq",q:"Stack overflow is most commonly caused by?",options:["Large global array","Infinite or very deep recursion","Pointer arithmetic","Calling malloc"],answer:1},
{section:"C Programming",type:"mcq",q:"Which of the following creates an infinite loop?",options:["while(1) only","for(;;) only","Both while(1) and for(;;)","Neither"],answer:2},
{section:"C Programming",type:"mcq",q:"A structure in C is?",options:["A primitive data type","A user-defined composite data type","A pointer type","A macro"],answer:1},
{section:"C Programming",type:"mcq",q:"The C preprocessor runs at which stage?",options:["Before compilation","After compilation","At runtime","Never explicitly"],answer:0},
{section:"C Programming",type:"mcq",q:"Recursion is defined as?",options:["A type of loop","A function that calls itself","A preprocessor macro","A pointer technique"],answer:1},
{section:"C Programming",type:"mcq",q:"Which is the correct pointer declaration in C?",options:["int *p","int p*","pointer int p","*int p"],answer:0},
{section:"C Programming",type:"mcq",q:"A NULL pointer points to?",options:["Garbage memory","Address 0 (no valid location)","The stack","The heap"],answer:1},
{section:"C Programming",type:"mcq",q:"Memory allocated by malloc() is stored in?",options:["Stack","Heap","ROM","CPU Register"],answer:1}
];

/* ======================= C++ PROGRAMMING (20) ======================= */
const cppQuestions = [
{section:"C++ Programming",type:"mcq",q:"What mechanism enables runtime polymorphism in C++?",options:["Function overloading","Virtual functions","Templates","Macros"],answer:1},
{section:"C++ Programming",type:"mcq",q:"A destructor name always starts with which symbol?",options:["~ (tilde)","! (exclamation)","# (hash)","$ (dollar)"],answer:0},
{section:"C++ Programming",type:"mcq",q:"Which STL container is a dynamically resizing array?",options:["std::array","std::vector","std::tuple","std::bitset"],answer:1},
{section:"C++ Programming",type:"mcq",q:"A constructor is automatically called when?",options:["An object is created","An object is deleted","Code is compiled","Program starts"],answer:0},
{section:"C++ Programming",type:"mcq",q:"Smart pointers (like unique_ptr) primarily avoid?",options:["Program crashes","Memory leaks","Infinite loops","Compile errors"],answer:1},
{section:"C++ Programming",type:"mcq",q:"The 'new' operator allocates memory in?",options:["Stack","Heap","ROM","Flash storage"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Function overloading is resolved at?",options:["Runtime","Compile time","Memory allocation","Linking time"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Which is one of the four pillars of OOP?",options:["Encapsulation","Linking","Stack management","Register use"],answer:0},
{section:"C++ Programming",type:"mcq",q:"C++ templates are used for?",options:["Loops","Generic programming","Memory management","Speed optimization"],answer:1},
{section:"C++ Programming",type:"mcq",q:"nullptr was introduced in which C++ standard?",options:["C++98","C++11","C++17","C++20"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Exception handling in C++ uses which construct?",options:["try-catch blocks","if-else statements","while loops","switch-case"],answer:0},
{section:"C++ Programming",type:"mcq",q:"The 'friend' keyword in C++ allows?",options:["Inheritance from a class","Access to private members","Public-only access","None of the above"],answer:1},
{section:"C++ Programming",type:"mcq",q:"The 'delete' operator releases memory from?",options:["Stack","Heap","Flash","CPU Cache"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Move semantics in C++11 primarily improve?",options:["Runtime performance","Loop execution","Error handling","None"],answer:0},
{section:"C++ Programming",type:"mcq",q:"A 'const' member function cannot?",options:["Modify the object's state","Read the object's data","Return a value","Call other const functions"],answer:0},
{section:"C++ Programming",type:"mcq",q:"Which is a container adaptor in STL?",options:["std::vector","std::stack","std::map","std::set"],answer:1},
{section:"C++ Programming",type:"mcq",q:"In C++, inheritance is specified using which keyword?",options:["extends","inherits","public/private/protected","link"],answer:2},
{section:"C++ Programming",type:"mcq",q:"A C++ reference variable must be?",options:["Initialized at declaration","Deleted when done","Set to null","Freed manually"],answer:0},
{section:"C++ Programming",type:"mcq",q:"Which keyword prevents a class from being inherited?",options:["private","protected","final","static"],answer:2},
{section:"C++ Programming",type:"mcq",q:"The 'std' namespace primarily contains?",options:["C standard library","C++ STL and standard library","RTOS APIs","Hardware drivers"],answer:1}
];

/* ======================= EMBEDDED SYSTEMS (20) ======================= */
const embeddedQuestions = [
{section:"Embedded Systems",type:"mcq",q:"SPI (Serial Peripheral Interface) is a?",options:["Asynchronous protocol","Synchronous protocol","Parallel bus","Analog interface"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"I2C bus uses how many signal wires?",options:["1","2 (SDA + SCL)","3","4"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"In CAN bus, message priority is determined by?",options:["Message ID (lower ID = higher priority)","Bus speed","Clock frequency","Voltage level"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"A watchdog timer is used to prevent?",options:["Crashes","System hangs / software freezes","Compile errors","Infinite loops in software only"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"Flash memory is?",options:["Volatile (loses data on power off)","Non-volatile (retains data)","Temporary storage","The same as RAM"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"DMA (Direct Memory Access) primarily reduces?",options:["CPU load during data transfers","Bus speed","RAM usage","Power consumption"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"UART is a?",options:["Synchronous protocol","Asynchronous protocol","Parallel protocol","None of the above"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"GPIO stands for?",options:["General Input Output","General Purpose Input Output","Graph I/O","None of the above"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"A bootloader is primarily used for?",options:["Debugging only","Firmware update / initial program load","Sleep mode management","Clock configuration"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"CPU polling for an event wastes?",options:["CPU time (busy waiting)","Flash memory","Clock cycles only","Supply voltage"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"EEPROM is?",options:["Volatile memory","Non-volatile, byte-writable memory","Same as RAM","CPU cache"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"ISR stands for?",options:["Interrupt Service Routine","Internal Speed Rate","Input Signal Reset","Instruction Set Register"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"ARM refers to?",options:["A processor architecture","A communication protocol","A programming language","A type of memory"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"A crystal oscillator in an embedded system provides?",options:["System clock","Supply voltage","Current regulation","Reset signal"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"A pull-up resistor connects the signal line to?",options:["GND (logic 0 default)","VCC (logic 1 default)","Clock line","Data bus"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"Debouncing is used to handle?",options:["Mechanical switch contact bounce","UART noise","Flash corruption","ADC errors"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"'Bare metal' embedded programming means?",options:["No operating system","No RAM available","No flash storage","No CPU"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"ADC resolution (e.g., 12-bit) determines?",options:["Measurement accuracy / step size","Voltage range","Input frequency","Clock speed"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"Interrupt latency is most affected by?",options:["Interrupt priority and nesting","Clock frequency","RAM size","Bus speed"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"NVIC stands for what in ARM Cortex-M?",options:["Nested Vectored Interrupt Controller","Non-Volatile Interrupt Cache","Network Vector Interface Controller","None"],answer:0}
];

/* ======================= RTOS (20) ======================= */
const rtosQuestions = [
{section:"RTOS",type:"mcq",q:"An RTOS (Real-Time OS) guarantees?",options:["High-resolution graphics","Deterministic, bounded response times","Unlimited RAM","Maximum speed"],answer:1},
{section:"RTOS",type:"mcq",q:"A semaphore is used for?",options:["Task synchronization and signaling","Memory allocation","Clock management","Loop control"],answer:0},
{section:"RTOS",type:"mcq",q:"A mutex (mutual exclusion) prevents?",options:["Deadlock always","Race conditions on shared resources","Task delays","System crashes"],answer:1},
{section:"RTOS",type:"mcq",q:"Priority inversion is resolved by?",options:["Priority inheritance protocol","Adding delays","Using queues","Putting tasks to sleep"],answer:0},
{section:"RTOS",type:"mcq",q:"Which includes ALL valid RTOS task states?",options:["Ready only","Blocked only","Running only","Ready, Running, Blocked, Suspended"],answer:3},
{section:"RTOS",type:"mcq",q:"A message queue is used for?",options:["Inter-task communication (IPC)","Flash operations","Clock generation","Hardware reset"],answer:0},
{section:"RTOS",type:"mcq",q:"The RTOS tick interrupt is used for?",options:["Scheduling and time management","Memory management","Voltage control","ADC sampling"],answer:0},
{section:"RTOS",type:"mcq",q:"The idle task in an RTOS runs when?",options:["No other task is ready to run","At boot only","On crash","During sleep mode"],answer:0},
{section:"RTOS",type:"mcq",q:"A binary semaphore can have values?",options:["0 or 1 only","0 to 10","1 to 100","Any integer"],answer:0},
{section:"RTOS",type:"mcq",q:"Time slicing in an RTOS enables?",options:["Round-robin scheduling among equal-priority tasks","Task delays","System reset","Power saving"],answer:0},
{section:"RTOS",type:"mcq",q:"Entering a critical section typically disables?",options:["Interrupts (or the scheduler)","System clock","RAM access","ADC sampling"],answer:0},
{section:"RTOS",type:"mcq",q:"Deadlock is caused by?",options:["Circular resource waiting","Simple task delays","Flash write errors","Deep sleep"],answer:0},
{section:"RTOS",type:"mcq",q:"The RTOS kernel manages?",options:["Tasks only","Memory only","Scheduling only","Tasks, memory, timing, and IPC"],answer:3},
{section:"RTOS",type:"mcq",q:"Preemptive scheduling means?",options:["Higher priority task runs immediately, preempting lower priority","First-In-First-Out always","Tasks add delays","None of the above"],answer:0},
{section:"RTOS",type:"mcq",q:"In FreeRTOS, which API delays a task for a time period?",options:["vTaskDelay()","printf()","malloc()","free()"],answer:0},
{section:"RTOS",type:"mcq",q:"An ISR (Interrupt Service Routine) should always be?",options:["Short and non-blocking","As long as needed","Blocking when needed","Recursive"],answer:0},
{section:"RTOS",type:"mcq",q:"Heap memory in an RTOS is used for?",options:["Dynamic memory allocation (tasks, queues, etc.)","Stack storage","Flash programming","Clock sources"],answer:0},
{section:"RTOS",type:"mcq",q:"Context switching primarily occurs during?",options:["Interrupt or scheduler tick","Deep sleep","Flash write","Main loop iteration"],answer:0},
{section:"RTOS",type:"mcq",q:"A blocking API call causes the calling task to?",options:["Enter wait state (Blocked)","Crash the system","Reset the MCU","Run faster"],answer:0},
{section:"RTOS",type:"mcq",q:"Stack overflow detection in FreeRTOS is done via?",options:["Stack overflow hook (vApplicationStackOverflowHook)","Main loop check","ISR detection","Clock monitoring"],answer:0}
];

/* ======================= HARDWARE ======================= */
const hardwareMCQ = [
{section:"Hardware",type:"mcq",q:"Ohm's Law states?",options:["V=IR","I=V/R","P=VI","All of the above are derived from Ohm's Law"],answer:3},
{section:"Hardware",type:"mcq",q:"An ADC (Analog-to-Digital Converter) converts?",options:["Analog signal → Digital value","Digital value → Analog signal","Voltage → Current","None"],answer:0},
{section:"Hardware",type:"mcq",q:"A MOSFET is primarily controlled by?",options:["Gate current","Gate voltage","Drain power","None of the above"],answer:1}
];

const hardwareText = [
{
  section:"Hardware",
  type:"text",
  q:"Voltage Divider: Vin=12V, R1=4kΩ, R2=2kΩ. Calculate Vout across R2. (Enter numeric value only, no units e.g: 4)",
  image:"images/voltage_divider.png",
  answer:4,
  marks:1.5,
  tolerance:0.2
},
{
  section:"Hardware",
  type:"text",
  q:"Voltage Divider: Vin=10V, R1=10kΩ, R2=10kΩ. Calculate Vout across R2. (Enter numeric value only, no units e.g: 5)",
  image:"images/voltage_divider.png",
  answer:5,
  marks:1.5,
  tolerance:0.2
}
];

/* ======================= CODING ======================= */
const codingQuestions = [
{
  section:"C Programming Question",
  type:"coding",
  marks:4,
  description:`<strong>Reverse a Number</strong><br>
Read one integer from stdin and print its reverse.<br><br>
<strong>Rules:</strong><br>
• Use <code>scanf</code> to read input and <code>printf</code> to print output<br>
• Do NOT include extra text, labels, or newlines in your output<br>
• Your <code>main()</code> must return 0<br>
• Do NOT use <code>printf</code> for any debug/extra output<br><br>
<strong>Example:</strong><br>
Input: <code>123</code> → Output: <code>321</code><br>
Input: <code>90</code> → Output: <code>09</code>`,
  testCases:[{input:"123",output:"321"},{input:"90",output:"09"}],
  starterCode:`#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    \n    // Write your logic here\n    // Print ONLY the result using printf\n    \n    return 0;\n}`
},
{
  section:"C Programming Question",
  type:"coding",
  marks:4,
  description:`<strong>Prime Number Check</strong><br>
Read one integer from stdin. Print <code>Prime</code> if it is prime, else print <code>Not Prime</code>.<br><br>
<strong>Rules:</strong><br>
• Use <code>scanf</code> to read input and <code>printf</code> to print output<br>
• Print ONLY the words <code>Prime</code> or <code>Not Prime</code> — no extra text<br>
• Your <code>main()</code> must return 0<br><br>
<strong>Example:</strong><br>
Input: <code>7</code> → Output: <code>Prime</code><br>
Input: <code>4</code> → Output: <code>Not Prime</code>`,
  testCases:[{input:"7",output:"Prime"},{input:"4",output:"Not Prime"}],
  starterCode:`#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    \n    // Write your logic here\n    // printf("Prime"); or printf("Not Prime");\n    \n    return 0;\n}`
},
{
  section:"C Programming Question",
  type:"coding",
  marks:4,
  description:`<strong>Factorial</strong><br>
Read one integer N from stdin and print N! (factorial).<br><br>
<strong>Rules:</strong><br>
• Use <code>scanf</code> to read input and <code>printf</code> to print output<br>
• Print ONLY the numeric result — no labels or extra text<br>
• Your <code>main()</code> must return 0<br><br>
<strong>Example:</strong><br>
Input: <code>5</code> → Output: <code>120</code>`,
  testCases:[{input:"5",output:"120"}],
  starterCode:`#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    \n    // Write your logic here\n    // printf("%lld", result);\n    \n    return 0;\n}`
},
{
  section:"C Programming Question",
  type:"coding",
  marks:4,
  description:`<strong>Palindrome Check</strong><br>
Read one integer from stdin. Print <code>Palindrome</code> if the number reads the same forwards and backwards, else print <code>Not Palindrome</code>.<br><br>
<strong>Rules:</strong><br>
• Use <code>scanf</code> to read input and <code>printf</code> to print output<br>
• Print ONLY <code>Palindrome</code> or <code>Not Palindrome</code><br>
• Your <code>main()</code> must return 0<br><br>
<strong>Example:</strong><br>
Input: <code>121</code> → Output: <code>Palindrome</code>`,
  testCases:[{input:"121",output:"Palindrome"}],
  starterCode:`#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    \n    // Write your logic here\n    \n    return 0;\n}`
},
{
  section:"C Programming Question",
  type:"coding",
  marks:4,
  description:`<strong>Sum of Digits</strong><br>
Read one integer from stdin and print the sum of its digits.<br><br>
<strong>Rules:</strong><br>
• Use <code>scanf</code> to read input and <code>printf</code> to print output<br>
• Print ONLY the numeric result<br>
• Your <code>main()</code> must return 0<br><br>
<strong>Example:</strong><br>
Input: <code>123</code> → Output: <code>6</code>`,
  testCases:[{input:"123",output:"6"}],
  starterCode:`#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    \n    // Write your logic here\n    \n    return 0;\n}`
},
{
  section:"C Programming Question",
  type:"coding",
  marks:4,
  description:`<strong>Fibonacci Series</strong><br>
Read one integer N from stdin. Print the first N numbers of the Fibonacci sequence (starting from 0), separated by single spaces.<br><br>
<strong>Rules:</strong><br>
• Use <code>scanf</code> to read input and <code>printf</code> to print output<br>
• Print numbers separated by spaces, no trailing space or newline<br>
• Your <code>main()</code> must return 0<br><br>
<strong>Example:</strong><br>
Input: <code>5</code> → Output: <code>0 1 1 2 3</code>`,
  testCases:[{input:"5",output:"0 1 1 2 3"}],
  starterCode:`#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    \n    // Write your logic here\n    \n    return 0;\n}`
}
];

/* ======================= FINAL SELECTION ======================= */
const selectedQuestions = [
  ...pickRandom(cQuestions,5).map(q=>({...q, section:"C Programming"})),
  ...pickRandom(cppQuestions,5).map(q=>({...q, section:"C++ Programming"})),
  ...pickRandom(embeddedQuestions,5).map(q=>({...q, section:"Embedded Systems"})),
  ...pickRandom(rtosQuestions,5).map(q=>({...q, section:"RTOS"})),
  ...pickRandom(hardwareMCQ,3).map(q=>({...q, section:"Hardware"})),
  ...pickRandom(hardwareText,2).map(q=>({...q, section:"Hardware"})),
  ...pickRandom(codingQuestions,1).map(q=>({...q, section:"Coding Challenge"}))
];
