function pickRandom(arr, count){
return arr.sort(()=>0.5-Math.random()).slice(0,count);
}

/* ======================= C PROGRAMMING (20) ======================= */
const cQuestions = [
{section:"C Programming",type:"mcq",q:"What is the scope of a static variable inside a function?",options:["Local","Global","Retained between calls","Deleted"],answer:2},
{section:"C Programming",type:"mcq",q:"Which header defines malloc?",options:["stdlib.h","stdio.h","string.h","math.h"],answer:0},
{section:"C Programming",type:"mcq",q:"What is a dangling pointer?",options:["Uninitialized pointer","Freed pointer","NULL pointer","Constant pointer"],answer:1},
{section:"C Programming",type:"mcq",q:"volatile keyword prevents?",options:["Compilation","Optimization","Execution","Memory"],answer:1},
{section:"C Programming",type:"mcq",q:"Which operator gives address?",options:["*","&","->","%"],answer:1},
{section:"C Programming",type:"mcq",q:"sizeof(char) is?",options:["1","2","4","Depends"],answer:0},
{section:"C Programming",type:"mcq",q:"Function prototype ensures?",options:["Syntax","Type checking","Speed","Memory"],answer:1},
{section:"C Programming",type:"mcq",q:"Bitwise XOR operator?",options:["&","|","^","~"],answer:2},
{section:"C Programming",type:"mcq",q:"calloc initializes memory?",options:["Yes","No","Sometimes","Undefined"],answer:0},
{section:"C Programming",type:"mcq",q:"Free memory using?",options:["delete","free","remove","release"],answer:1},
{section:"C Programming",type:"mcq",q:"Enum is used for?",options:["Variables","Constants","Pointers","Arrays"],answer:1},
{section:"C Programming",type:"mcq",q:"Header guard prevents?",options:["Errors","Multiple inclusion","Optimization","Memory leak"],answer:1},
{section:"C Programming",type:"mcq",q:"Stack overflow occurs due to?",options:["Large array","Deep recursion","Pointer","Malloc"],answer:1},
{section:"C Programming",type:"mcq",q:"Which is infinite loop?",options:["while(1)","for(;;)","Both","None"],answer:2},
{section:"C Programming",type:"mcq",q:"Structure is?",options:["Primitive","User defined","Pointer","Macro"],answer:1},
{section:"C Programming",type:"mcq",q:"Preprocessor runs?",options:["Before compile","After compile","Runtime","Never"],answer:0},
{section:"C Programming",type:"mcq",q:"Recursion means?",options:["Loop","Function calling itself","Macro","Pointer"],answer:1},
{section:"C Programming",type:"mcq",q:"Which is correct pointer declaration?",options:["int *p","int p*","pointer int p","*int p"],answer:0},
{section:"C Programming",type:"mcq",q:"NULL pointer points to?",options:["Garbage","0","Stack","Heap"],answer:1},
{section:"C Programming",type:"mcq",q:"Memory allocated by malloc is stored in?",options:["Stack","Heap","ROM","Register"],answer:1}
];

/* ======================= C++ PROGRAMMING (20) ======================= */
const cppQuestions = [
{section:"C++ Programming",type:"mcq",q:"What enables runtime polymorphism?",options:["Overloading","Virtual functions","Templates","Macros"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Destructor name starts with?",options:["~","!","#","$"],answer:0},
{section:"C++ Programming",type:"mcq",q:"Which STL container is dynamic?",options:["array","vector","tuple","bitset"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Constructor is called when?",options:["Object created","Deleted","Compiled","Run"],answer:0},
{section:"C++ Programming",type:"mcq",q:"Smart pointer avoids?",options:["Crash","Memory leak","Loop","Compile error"],answer:1},
{section:"C++ Programming",type:"mcq",q:"new allocates memory in?",options:["Stack","Heap","ROM","Flash"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Function overloading is?",options:["Runtime","Compile time","Memory","Loop"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Which is OOP pillar?",options:["Encapsulation","Linking","Stack","Register"],answer:0},
{section:"C++ Programming",type:"mcq",q:"Template used for?",options:["Loop","Generic programming","Memory","Speed"],answer:1},
{section:"C++ Programming",type:"mcq",q:"nullptr introduced in?",options:["C++98","C++11","C++17","C++20"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Exception handled by?",options:["try-catch","if","while","switch"],answer:0},
{section:"C++ Programming",type:"mcq",q:"Friend keyword allows?",options:["Inheritance","Private access","Public only","None"],answer:1},
{section:"C++ Programming",type:"mcq",q:"delete used for?",options:["Stack","Heap","Flash","Cache"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Move semantics improves?",options:["Performance","Loop","Error","None"],answer:0},
{section:"C++ Programming",type:"mcq",q:"const member function cannot?",options:["Modify object","Read object","Return value","Call function"],answer:0},
{section:"C++ Programming",type:"mcq",q:"Which is container adaptor?",options:["vector","stack","map","set"],answer:1},
{section:"C++ Programming",type:"mcq",q:"Inheritance keyword?",options:["extends","inherits","public","link"],answer:2},
{section:"C++ Programming",type:"mcq",q:"Reference must be?",options:["Initialized","Deleted","Null","Free"],answer:0},
{section:"C++ Programming",type:"mcq",q:"Which prevents inheritance?",options:["private","protected","final","static"],answer:2},
{section:"C++ Programming",type:"mcq",q:"std namespace used for?",options:["C","STL","RTOS","Driver"],answer:1}
];

/* ======================= EMBEDDED SYSTEMS (20) ======================= */
const embeddedQuestions = [
{section:"Embedded Systems",type:"mcq",q:"SPI is?",options:["Async","Sync","Parallel","Analog"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"I2C uses how many wires?",options:["1","2","3","4"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"CAN priority based on?",options:["ID","Speed","Clock","Voltage"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"Watchdog prevents?",options:["Crash","Hang","Compile error","Loop"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"Flash memory is?",options:["Volatile","Non volatile","Temporary","RAM"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"DMA reduces?",options:["CPU load","Speed","RAM","Power"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"UART is?",options:["Sync","Async","Parallel","None"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"GPIO stands for?",options:["General IO","General Purpose Input Output","Graph IO","None"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"Bootloader used for?",options:["Debug","Firmware update","Sleep","Clock"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"Polling wastes?",options:["CPU time","Flash","Clock","Voltage"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"EEPROM is?",options:["Volatile","Non volatile","RAM","Cache"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"ISR stands for?",options:["Interrupt Service Routine","Internal Speed Rate","Input Signal Reset","None"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"ARM is?",options:["Architecture","Protocol","Language","Memory"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"Oscillator provides?",options:["Clock","Voltage","Current","Reset"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"Pull-up resistor connected to?",options:["GND","VCC","Clock","Data"],answer:1},
{section:"Embedded Systems",type:"mcq",q:"Debouncing used for?",options:["Switch","UART","Flash","ADC"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"Bare metal means?",options:["No OS","No RAM","No Flash","No CPU"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"ADC resolution defines?",options:["Accuracy","Range","Voltage","Clock"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"Interrupt latency depends on?",options:["Priority","Clock","RAM","Speed"],answer:0},
{section:"Embedded Systems",type:"mcq",q:"NVIC is?",options:["Interrupt controller","Memory","Clock","Protocol"],answer:0}
];

/* ======================= RTOS (20) ======================= */
const rtosQuestions = [
{section:"RTOS",type:"mcq",q:"RTOS guarantees?",options:["Graphics","Deterministic timing","RAM","Speed"],answer:1},
{section:"RTOS",type:"mcq",q:"Semaphore used for?",options:["Sync","Memory","Clock","Loop"],answer:0},
{section:"RTOS",type:"mcq",q:"Mutex prevents?",options:["Deadlock","Race condition","Delay","Crash"],answer:1},
{section:"RTOS",type:"mcq",q:"Priority inversion solved by?",options:["Priority inheritance","Delay","Queue","Sleep"],answer:0},
{section:"RTOS",type:"mcq",q:"Task states include?",options:["Ready","Blocked","Running","All"],answer:3},
{section:"RTOS",type:"mcq",q:"Queue used for?",options:["IPC","Flash","Clock","Reset"],answer:0},
{section:"RTOS",type:"mcq",q:"Tick interrupt used for?",options:["Scheduling","Memory","Voltage","ADC"],answer:0},
{section:"RTOS",type:"mcq",q:"Idle task runs when?",options:["No task ready","Boot","Crash","Sleep"],answer:0},
{section:"RTOS",type:"mcq",q:"Binary semaphore value?",options:["0/1","0-10","1-100","None"],answer:0},
{section:"RTOS",type:"mcq",q:"Time slicing allows?",options:["Round robin","Delay","Crash","Reset"],answer:0},
{section:"RTOS",type:"mcq",q:"Critical section disables?",options:["Interrupts","Clock","RAM","ADC"],answer:0},
{section:"RTOS",type:"mcq",q:"Deadlock caused by?",options:["Circular wait","Delay","Flash","Sleep"],answer:0},
{section:"RTOS",type:"mcq",q:"RTOS kernel manages?",options:["Tasks","Memory","Scheduling","All"],answer:3},
{section:"RTOS",type:"mcq",q:"Preemptive scheduling means?",options:["Higher priority runs","FIFO","Delay","None"],answer:0},
{section:"RTOS",type:"mcq",q:"Task delay API?",options:["vTaskDelay","printf","malloc","free"],answer:0},
{section:"RTOS",type:"mcq",q:"ISR should be?",options:["Short","Long","Blocking","Recursive"],answer:0},
{section:"RTOS",type:"mcq",q:"Heap used for?",options:["Dynamic memory","Stack","Flash","Clock"],answer:0},
{section:"RTOS",type:"mcq",q:"Context switching occurs during?",options:["Interrupt","Sleep","Flash","Loop"],answer:0},
{section:"RTOS",type:"mcq",q:"Blocking call causes?",options:["Wait state","Crash","Reset","Speed"],answer:0},
{section:"RTOS",type:"mcq",q:"Stack overflow detected by?",options:["Hook","Loop","ISR","Clock"],answer:0}
];

/* ======================= HARDWARE ======================= */
const hardwareMCQ = [
{section:"Hardware",type:"mcq",q:"Ohm's law is?",options:["V=IR","I=V/R","P=VI","All"],answer:3},
{section:"Hardware",type:"mcq",q:"ADC converts?",options:["A→D","D→A","V→I","None"],answer:0},
{section:"Hardware",type:"mcq",q:"MOSFET controlled by?",options:["Current","Voltage","Power","None"],answer:1}
];

const hardwareText = [

{
type:"text",
q:"Voltage divider: Vin=12V, R1=4kΩ, R2=2kΩ. Find Vout (Enter numeric value only, no units).",
image:"images/voltage_divider.png",
answer:4,
marks:2.5,
tolerance:0.2
},

{
type:"text",
q:"Voltage divider: Vin=10V, R1=10kΩ, R2=10kΩ. Find Vout (Enter numeric value only, no units).",
image:"images/voltage_divider.png",
answer:5,
marks:2.5,
tolerance:0.2
}

];


// const hardwareText = [
// {section:"Hardware",type:"text",q:"Voltage divider: Vin=10V, R1=10kΩ, R2=10kΩ. Find Vout.",answer:5,marks:2.5,tolerance:0.2},
// {section:"Hardware",type:"text",q:"Voltage divider: Vin=12V, R1=4kΩ, R2=2kΩ. Find Vout.",answer:4,marks:2.5,tolerance:0.2}
// ];

/* ======================= CODING ======================= */
const codingQuestions = [
{section:"C Programming Question",type:"coding",marks:5,description:"Write a C program to reverse a number.",testCases:[{input:"123",output:"321"},{input:"90",output:"09"}]},
{section:"C Programming Question",type:"coding",marks:5,description:"Write a C program to check if number is prime.",testCases:[{input:"7",output:"Prime"},{input:"4",output:"Not Prime"}]},
{section:"C Programming Question",type:"coding",marks:5,description:"Write a C program to find factorial.",testCases:[{input:"5",output:"120"}]},
{section:"C Programming Question",type:"coding",marks:5,description:"Write a C program to check palindrome number.",testCases:[{input:"121",output:"Palindrome"}]},
{section:"C Programming Question",type:"coding",marks:5,description:"Write a C program to sum digits of number.",testCases:[{input:"123",output:"6"}]},
{section:"C Programming Question",type:"coding",marks:5,description:"Write a C program to print Fibonacci series up to N.",testCases:[{input:"5",output:"0 1 1 2 3"}]}
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




        // const selectedQuestions = [
        // ...pickRandom(cQuestions,5),
        // ...pickRandom(cppQuestions,5),
        // ...pickRandom(embeddedQuestions,5),
        // ...pickRandom(rtosQuestions,5),
        // ...pickRandom(hardwareMCQ,3),
        // ...pickRandom(hardwareText,2),
        // ...pickRandom(codingQuestions,1)
        // ];
