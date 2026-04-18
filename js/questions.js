/* ═══════════════════════════════════════════════════════════════
   questions.js  —  Experience-level + Scope-aware question bank
   questScope   : 'both' | 'sw' | 'hw'
   experienceLevel: 1 (Fresher) → 5 (Expert 5+yr)
   ═══════════════════════════════════════════════════════════════ */

function pickRandom(arr, count){
  const copy = arr.slice().sort(()=>0.5-Math.random());
  return copy.slice(0, Math.min(count, copy.length));
}

/* ════════════════════ C PROGRAMMING (25 q) ═══════════════════ */
const cQuestions = [
// L1 — Fresher
{level:1,section:"C Programming",type:"mcq",q:"Which header file defines malloc()?",options:["stdlib.h","stdio.h","string.h","math.h"],answer:0},
{level:1,section:"C Programming",type:"mcq",q:"Which operator gives the address of a variable?",options:["* (dereference)","& (address-of)","-> (arrow)","% (modulus)"],answer:1},
{level:1,section:"C Programming",type:"mcq",q:"sizeof(char) is guaranteed to be?",options:["1 byte","2 bytes","4 bytes","Platform dependent"],answer:0},
{level:1,section:"C Programming",type:"mcq",q:"Which is the bitwise XOR operator?",options:["& (AND)","| (OR)","^ (XOR)","~ (NOT)"],answer:2},
{level:1,section:"C Programming",type:"mcq",q:"Which function releases heap memory?",options:["delete","free()","remove()","release()"],answer:1},
{level:1,section:"C Programming",type:"mcq",q:"Which creates an infinite loop?",options:["while(1) only","for(;;) only","Both while(1) and for(;;)","Neither"],answer:2},
{level:1,section:"C Programming",type:"mcq",q:"A structure in C is?",options:["A primitive type","A user-defined composite type","A pointer type","A macro"],answer:1},
{level:1,section:"C Programming",type:"mcq",q:"A NULL pointer points to?",options:["Garbage memory","Address 0 (no valid location)","The stack","The heap"],answer:1},
{level:1,section:"C Programming",type:"mcq",q:"Memory from malloc() is stored in?",options:["Stack","Heap","ROM","Register"],answer:1},
{level:1,section:"C Programming",type:"mcq",q:"The C preprocessor runs at which stage?",options:["Before compilation","After compilation","At runtime","At linking"],answer:0},
// L2 — Junior 1-2yr
{level:2,section:"C Programming",type:"mcq",q:"What is a dangling pointer?",options:["Uninitialized pointer","Pointer to freed memory","NULL pointer","Constant pointer"],answer:1},
{level:2,section:"C Programming",type:"mcq",q:"'volatile' prevents the compiler from doing what?",options:["Compilation","Optimisation of that variable","Execution","Memory allocation"],answer:1},
{level:2,section:"C Programming",type:"mcq",q:"Scope of a static variable inside a function?",options:["Local to block only","Global across files","Retained between calls, local scope","Deleted after function ends"],answer:2},
{level:2,section:"C Programming",type:"mcq",q:"Does calloc() initialise allocated memory?",options:["Yes, always to zero","No, undefined","Sometimes","Depends on OS"],answer:0},
{level:2,section:"C Programming",type:"mcq",q:"What does a header guard (#ifndef) prevent?",options:["Compile errors","Multiple inclusion of the same header","Optimization","Memory leaks"],answer:1},
// L3 — Mid 2-3yr
{level:3,section:"C Programming",type:"mcq",q:"Difference between memcpy() and memmove()?",options:["No difference","memmove handles overlapping regions","memcpy is faster always","memmove allocates memory"],answer:1},
{level:3,section:"C Programming",type:"mcq",q:"What does 'restrict' keyword tell the compiler?",options:["Variable is constant","Pointer is the only reference to that memory","Variable is volatile","Function is inline"],answer:1},
{level:3,section:"C Programming",type:"mcq",q:"What is a function pointer?",options:["Pointer inside a function","Variable holding address of a function","Return type qualifier","A macro"],answer:1},
{level:3,section:"C Programming",type:"mcq",q:"'static' at file scope means?",options:["Thread-safe","Symbol visible only within the file","Constant","In ROM"],answer:1},
{level:3,section:"C Programming",type:"mcq",q:"Bit-fields in structs allow?",options:["Must be 8 bits","Specifying exact bit width","Always unsigned","Cannot be in unions"],answer:1},
// L4 — Senior 3-5yr
{level:4,section:"C Programming",type:"mcq",q:"What is a memory barrier/fence?",options:["Allocate aligned memory","Prevent reordering of memory ops by CPU/compiler","Free memory safely","Lock a mutex"],answer:1},
{level:4,section:"C Programming",type:"mcq",q:"What does 'extern' do on a variable declaration?",options:["Creates a new global","Declares variable defined in another translation unit","Makes it constant","Allocates in BSS"],answer:1},
{level:4,section:"C Programming",type:"mcq",q:"Difference between .bss and .data sections?",options:["No difference",".bss = zero-init globals; .data = non-zero-init globals","bss is code, data is variables","bss is ROM, data is RAM"],answer:1},
// L5 — Expert 5+yr
{level:5,section:"C Programming",type:"mcq",q:"Purpose of __attribute__((packed)) in GCC?",options:["Faster execution","Remove struct padding to minimise size","Enable SIMD","Mark as inline"],answer:1},
{level:5,section:"C Programming",type:"mcq",q:"What causes a strict aliasing violation?",options:["malloc without free","Accessing memory through an incompatible pointer type","Stack overflow","Uninitialised variable"],answer:1},
];

/* ═══════════════════════ C++ PROGRAMMING (25 q) ══════════════ */
const cppQuestions = [
// L1
{level:1,section:"C++ Programming",type:"mcq",q:"Runtime polymorphism in C++ is enabled by?",options:["Function overloading","Virtual functions","Templates","Macros"],answer:1},
{level:1,section:"C++ Programming",type:"mcq",q:"Destructor name starts with?",options:["~ (tilde)","! (exclamation)","# (hash)","$ (dollar)"],answer:0},
{level:1,section:"C++ Programming",type:"mcq",q:"Dynamically resizing array in STL?",options:["std::array","std::vector","std::tuple","std::bitset"],answer:1},
{level:1,section:"C++ Programming",type:"mcq",q:"Constructor is called when?",options:["Object is created","Object is deleted","Code compiled","Program starts"],answer:0},
{level:1,section:"C++ Programming",type:"mcq",q:"'new' operator allocates memory in?",options:["Stack","Heap","ROM","Flash"],answer:1},
{level:1,section:"C++ Programming",type:"mcq",q:"nullptr introduced in which standard?",options:["C++98","C++11","C++17","C++20"],answer:1},
{level:1,section:"C++ Programming",type:"mcq",q:"Exception handling uses?",options:["try-catch","if-else","while loops","switch-case"],answer:0},
{level:1,section:"C++ Programming",type:"mcq",q:"Which keyword prevents class inheritance?",options:["private","protected","final","static"],answer:2},
// L2
{level:2,section:"C++ Programming",type:"mcq",q:"Smart pointers primarily avoid?",options:["Crashes","Memory leaks","Infinite loops","Compile errors"],answer:1},
{level:2,section:"C++ Programming",type:"mcq",q:"Function overloading resolved at?",options:["Runtime","Compile time","Memory allocation","Link time"],answer:1},
{level:2,section:"C++ Programming",type:"mcq",q:"C++ templates are used for?",options:["Loops","Generic programming","Memory management","Speed"],answer:1},
{level:2,section:"C++ Programming",type:"mcq",q:"A 'const' member function cannot?",options:["Modify object state","Read object data","Return a value","Call const functions"],answer:0},
{level:2,section:"C++ Programming",type:"mcq",q:"Move semantics in C++11 improve?",options:["Avoiding copies at runtime","Loop execution","Error handling","None"],answer:0},
// L3
{level:3,section:"C++ Programming",type:"mcq",q:"RAII stands for?",options:["Random Access Iterator Interface","Resource Acquisition Is Initialization","Runtime Array Index","None"],answer:1},
{level:3,section:"C++ Programming",type:"mcq",q:"std::move() does what?",options:["Physically moves memory","Casts to rvalue reference enabling move","Copies the object","Deletes original"],answer:1},
{level:3,section:"C++ Programming",type:"mcq",q:"Diamond problem in C++?",options:["Operator<< error","Ambiguity inheriting same base twice","Pointer arithmetic error","Stack overflow"],answer:1},
{level:3,section:"C++ Programming",type:"mcq",q:"'override' specifier ensures?",options:["Forces inline","Function overrides virtual base method; compile error if not","Method is const","Prevents inheritance"],answer:1},
// L4
{level:4,section:"C++ Programming",type:"mcq",q:"std::atomic<T> guarantees?",options:["Lock-based safety","Lock-free atomic read-modify-write","Memory allocation","Type conversion"],answer:1},
{level:4,section:"C++ Programming",type:"mcq",q:"In embedded C++, exceptions often disabled because?",options:["Exceptions slower","Code size and stack overhead unacceptable on constrained systems","C-only","Always enabled"],answer:1},
{level:4,section:"C++ Programming",type:"mcq",q:"A vtable in C++ is?",options:["A variable table","Lookup table of virtual function pointers per class","A hash table","Memory allocation table"],answer:1},
// L5
{level:5,section:"C++ Programming",type:"mcq",q:"The 'as-if' rule means?",options:["Code runs as if single-threaded","Compiler may transform code so long as observable behaviour unchanged","Functions called as if virtual","Templates instantiated at runtime"],answer:1},
{level:5,section:"C++ Programming",type:"mcq",q:"std::memory_order addresses?",options:["Memory leaks","CPU/compiler reordering of atomic operations across threads","Stack alignment","Cache invalidation"],answer:1},
{level:5,section:"C++ Programming",type:"mcq",q:"Placement new does what?",options:["Allocates on stack","Constructs object at specific pre-allocated address","Deletes then reallocates","Aligns memory"],answer:1},
{level:5,section:"C++ Programming",type:"mcq",q:"MISRA C++ restricts dynamic allocation because?",options:["Too slow","Heap fragmentation and unpredictable timing in safety-critical systems","No malloc in C++","Compiler limitation"],answer:1},
{level:5,section:"C++ Programming",type:"mcq",q:"constexpr evaluation happens at?",options:["Runtime","Compile time","Link time","Loader time"],answer:1},
];

/* ═══════════════════════ EMBEDDED SYSTEMS (25 q) ═════════════ */
const embeddedQuestions = [
// L1
{level:1,section:"Embedded Systems",type:"mcq",q:"Flash memory is?",options:["Volatile","Non-volatile","Temporary","Same as RAM"],answer:1},
{level:1,section:"Embedded Systems",type:"mcq",q:"A watchdog timer prevents?",options:["Crashes","System hangs/freezes","Compile errors","Infinite loops only"],answer:1},
{level:1,section:"Embedded Systems",type:"mcq",q:"GPIO stands for?",options:["General Purpose Input/Output","Graphics Processing I/O","Global Peripheral Interface","General Protocol I/O"],answer:0},
{level:1,section:"Embedded Systems",type:"mcq",q:"UART is used for?",options:["Parallel transfer","Serial asynchronous communication","USB protocol","Ethernet"],answer:1},
{level:1,section:"Embedded Systems",type:"mcq",q:"ADC stands for?",options:["Analog to Digital Converter","Address Decode Circuit","Auto Driver Control","Advanced Data Circuit"],answer:0},
{level:1,section:"Embedded Systems",type:"mcq",q:"A bootloader does what?",options:["Tests RAM","Initialises hardware and loads main firmware","Schedules OS tasks","Provides debug interface"],answer:1},
// L2
{level:2,section:"Embedded Systems",type:"mcq",q:"SPI is a?",options:["Asynchronous protocol","Synchronous protocol","Parallel bus","Analog interface"],answer:1},
{level:2,section:"Embedded Systems",type:"mcq",q:"I2C uses how many signal wires?",options:["1","2 (SDA + SCL)","3","4"],answer:1},
{level:2,section:"Embedded Systems",type:"mcq",q:"DMA primarily reduces?",options:["CPU load during transfers","Bus speed","RAM usage","Power"],answer:0},
{level:2,section:"Embedded Systems",type:"mcq",q:"ISR stands for?",options:["Interrupt Service Routine","Internal System Register","Instruction Set Reference","I2C Slave Register"],answer:0},
{level:2,section:"Embedded Systems",type:"mcq",q:"'Big-endian' means?",options:["Most significant byte at lowest address","Least significant byte first","Byte order doesn't matter","Big memory allocation"],answer:0},
// L3
{level:3,section:"Embedded Systems",type:"mcq",q:"CAN bus priority determined by?",options:["Message ID (lower = higher priority)","Bus speed","Clock frequency","Voltage level"],answer:0},
{level:3,section:"Embedded Systems",type:"mcq",q:"Polling vs interrupt-driven I/O?",options:["No difference","Polling checks continuously; interrupt notifies only when needed","Interrupts slower","Polling uses less power"],answer:1},
{level:3,section:"Embedded Systems",type:"mcq",q:"Memory-mapped register is?",options:["Register stored in RAM","Peripheral register accessed via normal memory read/write","CPU internal register","DMA descriptor"],answer:1},
{level:3,section:"Embedded Systems",type:"mcq",q:"Clock stretching in I2C means?",options:["Speeding up clock","Slave holds SCL low to pause until ready","Master delays ACK","Error recovery"],answer:1},
// L4
{level:4,section:"Embedded Systems",type:"mcq",q:"ARM Cortex-M NVIC is?",options:["Non-Volatile IC","Nested Vectored Interrupt Controller — manages priorities","Network Virtual Interface","Non-cached region"],answer:1},
{level:4,section:"Embedded Systems",type:"mcq",q:"HAL in embedded software?",options:["Hardware Abstraction Layer — isolates app from hardware","High Allocation Library","Hardware Alarm Logic","Heap Allocation Layer"],answer:0},
{level:4,section:"Embedded Systems",type:"mcq",q:"MPU in embedded context?",options:["Main Processing Unit","Memory Protection Unit — restricts memory access per region","Multi-Protocol UART","Micro Power Unit"],answer:1},
{level:4,section:"Embedded Systems",type:"mcq",q:"LMA vs VMA in linker script?",options:["LMA=Load Address (where stored), VMA=Virtual Address (where runs)","LMA for libraries","VMA for variables only","Same thing"],answer:0},
// L5
{level:5,section:"Embedded Systems",type:"mcq",q:"Cache thrashing is?",options:["Flash overwrite","Repeated eviction and reload of cache lines from poor access patterns","Cache corruption","Cache power failure"],answer:1},
{level:5,section:"Embedded Systems",type:"mcq",q:"ARM Cortex-M hard fault is?",options:["Compilation error","Unrecoverable CPU exception from illegal access or instruction","Soft reset","Peripheral timeout"],answer:1},
{level:5,section:"Embedded Systems",type:"mcq",q:"MISRA C defines?",options:["A microcontroller architecture","Coding guidelines for safety-critical C to avoid undefined behaviour","A protocol","An RTOS standard"],answer:1},
{level:5,section:"Embedded Systems",type:"mcq",q:"False sharing in multi-core means?",options:["Shared memory corruption","Two cores modifying different vars on same cache line causing excess coherency traffic","Incorrect mutex use","Interrupt sharing"],answer:1},
{level:5,section:"Embedded Systems",type:"mcq",q:"Scatter-loading file in ARM toolchain?",options:["Debug configuration","Describes memory layout: ROM/RAM regions and section placement","Compiler flags","Test vectors"],answer:1},
];

/* ═══════════════════════ RTOS (25 q) ════════════════════════ */
const rtosQuestions = [
// L1
{level:1,section:"RTOS",type:"mcq",q:"RTOS stands for?",options:["Real-Time Operating System","Remote Terminal OS","Rapid Task Organiser","Registered Thread OS"],answer:0},
{level:1,section:"RTOS",type:"mcq",q:"A task in RTOS is similar to?",options:["A variable","A thread/process","A register","An interrupt"],answer:1},
{level:1,section:"RTOS",type:"mcq",q:"Semaphore used for?",options:["Memory allocation","Synchronisation and signalling between tasks","Clock config","GPIO control"],answer:1},
{level:1,section:"RTOS",type:"mcq",q:"Preemptive scheduling means?",options:["Tasks run to completion","Higher priority task can interrupt a lower priority task","Equal CPU sharing","No task switching"],answer:1},
{level:1,section:"RTOS",type:"mcq",q:"Mutex is?",options:["A memory region","Mutual exclusion lock to protect shared resources","An interrupt handler","A timer callback"],answer:1},
// L2
{level:2,section:"RTOS",type:"mcq",q:"Binary semaphore vs mutex difference?",options:["No difference","Mutex has ownership; semaphore does not","Binary semaphore faster","Mutex allows multiple holders"],answer:1},
{level:2,section:"RTOS",type:"mcq",q:"Priority inversion occurs when?",options:["Two tasks same priority","Low-priority task holds resource needed by high-priority task","Too many tasks","Stack overflow"],answer:1},
{level:2,section:"RTOS",type:"mcq",q:"Message queue is?",options:["Debug log","FIFO buffer for passing data between tasks safely","Mutex type","Memory pool"],answer:1},
{level:2,section:"RTOS",type:"mcq",q:"Tick rate in FreeRTOS?",options:["CPU clock speed","Frequency of RTOS timer interrupt for scheduling","Baud rate","DMA cycle rate"],answer:1},
// L3
{level:3,section:"RTOS",type:"mcq",q:"Priority inheritance purpose?",options:["Copy priority to child tasks","Raise low-priority task temporarily to prevent inversion","Give all tasks same priority","Disable preemption"],answer:1},
{level:3,section:"RTOS",type:"mcq",q:"Hard vs soft real-time?",options:["No difference","Hard: missing deadline catastrophic; Soft: degrades quality only","Soft is faster","Hard uses RTOS only"],answer:1},
{level:3,section:"RTOS",type:"mcq",q:"Counting semaphore tracks?",options:["Mutual exclusion","Available resource count (e.g. N buffer slots)","Task deletion","Clock management"],answer:1},
{level:3,section:"RTOS",type:"mcq",q:"Stack overflow in RTOS?",options:["Too many nested functions globally","Task stack grows beyond allocated size corrupting adjacent memory","Heap exhaustion","Register overflow"],answer:1},
// L4
{level:4,section:"RTOS",type:"mcq",q:"Rate-Monotonic Scheduling theorem?",options:["Assign by task runtime","Shorter period = higher priority; schedulable if CPU util below a bound","Equal time slices","Longest task first"],answer:1},
{level:4,section:"RTOS",type:"mcq",q:"Tickless idle in FreeRTOS?",options:["No timer","Stop tick interrupt during idle to save power","Remove idle task","Fixed polling"],answer:1},
{level:4,section:"RTOS",type:"mcq",q:"vTaskDelay vs vTaskDelayUntil?",options:["Same","vTaskDelayUntil maintains fixed period regardless of execution time; vTaskDelay is relative","vTaskDelay more accurate","vTaskDelayUntil deprecated"],answer:1},
{level:4,section:"RTOS",type:"mcq",q:"Deadlock is?",options:["CPU exception","Two+ tasks each waiting for resource held by the other","Stack overflow","Memory leak"],answer:1},
// L5
{level:5,section:"RTOS",type:"mcq",q:"EDF scheduling?",options:["Static priority","Task with nearest deadline runs next — dynamic","Round-robin","FIFO"],answer:1},
{level:5,section:"RTOS",type:"mcq",q:"Sporadic task in real-time systems?",options:["No timing","Arrives irregularly with minimum inter-arrival time","Interrupt handler","Idle task"],answer:1},
{level:5,section:"RTOS",type:"mcq",q:"Priority Ceiling Protocol?",options:["Set max stack size","Assign ceiling priority equal to highest priority task that may acquire mutex","Disable preemption","Remove inheritance"],answer:1},
{level:5,section:"RTOS",type:"mcq",q:"AUTOSAR OS alarm is?",options:["Error flag","Mechanism to activate task or set event at specified counter value","Hardware interrupt","Log entry"],answer:1},
{level:5,section:"RTOS",type:"mcq",q:"Temporal isolation in RTOS design?",options:["Time zones","Preventing one task's timing from affecting another's deadlines","Clock sync","No shared memory"],answer:1},
];

/* ══════════════════ HARDWARE MCQ (40 q — pure HW/electronics) ════════════════ */
const hardwareMCQ = [
// L1 — Fundamentals
{level:1,section:"Hardware",type:"mcq",q:"A resistor's primary function?",options:["Store charge","Oppose current flow","Amplify voltage","Convert AC to DC"],answer:1},
{level:1,section:"Hardware",type:"mcq",q:"A capacitor stores energy in?",options:["Magnetic field","Electric field","Chemical form","Kinetic form"],answer:1},
{level:1,section:"Hardware",type:"mcq",q:"Ohm's Law: V = ?",options:["I + R","I × R","I / R","I² × R"],answer:1},
{level:1,section:"Hardware",type:"mcq",q:"A diode allows current?",options:["In both directions","In one direction only","Store energy","Generate clock"],answer:1},
{level:1,section:"Hardware",type:"mcq",q:"An LED stands for?",options:["Light Emitting Diode","Low Energy Device","Linear Element Driver","Load Enabling Diode"],answer:0},
{level:1,section:"Hardware",type:"mcq",q:"A capacitor in DC steady state acts as?",options:["Short circuit","Open circuit","Resistor","Inductor"],answer:1},
{level:1,section:"Hardware",type:"mcq",q:"An inductor stores energy in?",options:["Electric field","Magnetic field","Chemical form","Heat"],answer:1},
{level:1,section:"Hardware",type:"mcq",q:"Kirchhoff's Current Law states?",options:["Sum of voltages in loop = 0","Sum of currents entering a node = sum leaving","V = IR","P = IV"],answer:1},
{level:1,section:"Hardware",type:"mcq",q:"Resistors in series: total resistance?",options:["Parallel sum","Direct sum (R1+R2+...)","Product","Harmonic mean"],answer:1},
{level:1,section:"Hardware",type:"mcq",q:"Pull-up resistor on a digital input does what?",options:["Limits current to ground","Ensures line reads HIGH when no driver is active","Filters noise","Debounces button"],answer:1},
// L2 — Intermediate electronics
{level:2,section:"Hardware",type:"mcq",q:"MOSFET in saturation acts as?",options:["Open circuit","Controlled current source","Short circuit","Variable resistor only"],answer:1},
{level:2,section:"Hardware",type:"mcq",q:"Decoupling capacitor near IC VCC?",options:["Increase gain","Suppress high-frequency supply noise","Store motor energy","Block surges"],answer:1},
{level:2,section:"Hardware",type:"mcq",q:"Level shifter purpose?",options:["Increase frequency","Convert signal between voltage levels (e.g. 5V→3.3V)","Amplify current","Filter AC"],answer:1},
{level:2,section:"Hardware",type:"mcq",q:"Zener diode is primarily used for?",options:["Rectification","Voltage regulation/clamping","Signal amplification","Power conversion"],answer:1},
{level:2,section:"Hardware",type:"mcq",q:"A transistor (BJT) in saturation region?",options:["Acts as open switch","Acts as closed switch (maximum current)","Acts as amplifier","Acts as capacitor"],answer:1},
{level:2,section:"Hardware",type:"mcq",q:"In a half-wave rectifier, output frequency relative to input?",options:["Same","Double","Half","No change (DC)"],answer:0},
{level:2,section:"Hardware",type:"mcq",q:"What does a smoothing capacitor do in a power supply?",options:["Boosts voltage","Reduces ripple on DC output","Converts AC to DC","Regulates current"],answer:1},
{level:2,section:"Hardware",type:"mcq",q:"An optocoupler is used to?",options:["Amplify optical signals","Electrically isolate two circuit sections using light","Convert light to voltage","Drive LEDs"],answer:1},
// L3 — PCB and signal integrity
{level:3,section:"Hardware",type:"mcq",q:"Signal reflection on PCB trace?",options:["Light from board","Wave returning due to impedance mismatch","Noise from nearby component","ESD event"],answer:1},
{level:3,section:"Hardware",type:"mcq",q:"PCB trace impedance at high frequencies?",options:["Resistance only; irrelevant","Characteristic impedance; must match source/load to prevent reflections","Only for power traces","Controlled by via size only"],answer:1},
{level:3,section:"Hardware",type:"mcq",q:"Differential pair on PCB?",options:["Two parallel power rails","Two complementary signals routed together to reject common-mode noise","Redundant supply","Two separate grounds"],answer:1},
{level:3,section:"Hardware",type:"mcq",q:"A snubber circuit?",options:["Debug interface","Suppresses voltage spikes across switching element","Amplifies signal","Generates clock"],answer:1},
{level:3,section:"Hardware",type:"mcq",q:"Ground plane in PCB design?",options:["Provides mechanical strength only","Low-impedance return path; reduces EMI","Increases capacitance intentionally","Used only on 4-layer boards"],answer:1},
{level:3,section:"Hardware",type:"mcq",q:"Via in PCB is used for?",options:["Mechanical support","Connecting traces on different layers","Filtering RF noise","Connecting grounds only"],answer:1},
{level:3,section:"Hardware",type:"mcq",q:"Crosstalk on PCB traces is caused by?",options:["Incorrect solder","Electromagnetic coupling between adjacent traces","Via plating","Wrong component value"],answer:1},
// L4 — Advanced electronics
{level:4,section:"Hardware",type:"mcq",q:"EMC in hardware design?",options:["Extended Memory Controller","Electromagnetic Compatibility — device neither emits nor is susceptible to EMI","Energy Management Circuit","None"],answer:1},
{level:4,section:"Hardware",type:"mcq",q:"Skin effect in PCB?",options:["PCB surface finish","At high frequencies current concentrates on conductor surface increasing resistance","Via plating issue","Solder mask property"],answer:1},
{level:4,section:"Hardware",type:"mcq",q:"Common-mode choke is used to?",options:["Boost signal amplitude","Filter common-mode noise on differential pairs","Regulate voltage","Reduce DC resistance"],answer:1},
{level:4,section:"Hardware",type:"mcq",q:"Return path discontinuity in PCB causes?",options:["Increased current","EMI and signal integrity issues due to longer return current path","Better filtering","Reduced crosstalk"],answer:1},
{level:4,section:"Hardware",type:"mcq",q:"Bypass vs bulk capacitor?",options:["Same thing","Bypass filters HF noise close to IC; bulk handles large low-frequency transients","Bypass is larger","Bulk is always ceramic"],answer:1},
{level:4,section:"Hardware",type:"mcq",q:"ESD protection diode purpose?",options:["Amplify signals","Clamp voltage spikes from static discharge to protect IC inputs","Regulate supply","Block DC"],answer:1},
// L5 — Expert
{level:5,section:"Hardware",type:"mcq",q:"Guard ring on PCB?",options:["Mechanical protection","Grounded copper ring around sensitive pad to prevent leakage currents","ESD discharge path","Thermal management"],answer:1},
{level:5,section:"Hardware",type:"mcq",q:"PDN analysis (Power Delivery Network)?",options:["Network routing","Ensuring supply stays in spec under load transients by analysing impedance profile","Cable management","PCB stack-up"],answer:1},
{level:5,section:"Hardware",type:"mcq",q:"S-parameters describe?",options:["Software parameters","Scattering parameters describing RF network input/output signal relationships","Sensor parameters","Safety parameters"],answer:1},
{level:5,section:"Hardware",type:"mcq",q:"Controlled impedance PCB trace requires?",options:["Any copper thickness","Specific trace width/spacing, dielectric constant and layer stack-up","No design constraint","Maximum copper pour"],answer:1},
{level:5,section:"Hardware",type:"mcq",q:"FMEA in hardware design?",options:["Firmware Memory Error Analysis","Failure Modes and Effects Analysis — identify and mitigate failure risks","Field Measurement Evaluation","Frequency Modulation Error Analysis"],answer:1},
];

/* ════════════════════ HARDWARE TEXT — Numerical Calculations (12 q) ══════════════════ */
const hardwareText = [
// L1
{level:1,section:"Hardware",type:"text",
  q:"Voltage divider: R1=10kΩ (top), R2=10kΩ (bottom), supply=5V. What is V_out across R2? (Volts)",
  image:"images/voltage_divider.png", answer:2.5, tolerance:0.05, marks:2},
{level:1,section:"Hardware",type:"text",
  q:"A circuit has V=12V and R=4kΩ. What is the current I? (in mA)",
  answer:3.0, tolerance:0.05, marks:2},
{level:2,section:"Hardware",type:"text",
  q:"Voltage divider: R1=15kΩ, R2=5kΩ, supply=12V. What is V_out? (Volts)",
  answer:3.0, tolerance:0.05, marks:2},
{level:2,section:"Hardware",type:"text",
  q:"Two capacitors C1=10µF and C2=10µF in parallel. Total capacitance? (µF)",
  answer:20.0, tolerance:0.1, marks:2},
{level:3,section:"Hardware",type:"text",
  q:"5V sensor output → MCU GPIO via voltage divider: R1=20kΩ, R2=33kΩ. What is V_out to GPIO? (Volts, 2dp)",
  answer:3.09, tolerance:0.1, marks:2},
{level:3,section:"Hardware",type:"text",
  q:"RC circuit: R=10kΩ, C=100nF. What is the time constant τ? (in ms, 1dp)",
  answer:1.0, tolerance:0.05, marks:2},
{level:3,section:"Hardware",type:"text",
  q:"A 100Ω resistor dissipates P watts when 50mA flows through it. What is P? (in mW)",
  answer:250.0, tolerance:1.0, marks:2},
{level:4,section:"Hardware",type:"text",
  q:"Voltage divider: R1=47kΩ, R2=10kΩ, supply=9V. What is V_out? (Volts, 2dp)",
  answer:1.58, tolerance:0.05, marks:2},
{level:4,section:"Hardware",type:"text",
  q:"Op-amp inverting amplifier: R_in=2kΩ, R_f=20kΩ, V_in=0.5V. What is V_out? (Volts)",
  answer:-5.0, tolerance:0.1, marks:2},
{level:4,section:"Hardware",type:"text",
  q:"LC resonance: L=1mH, C=1µF. What is resonant frequency f? (in kHz, 2dp)",
  answer:5.03, tolerance:0.05, marks:2},
{level:5,section:"Hardware",type:"text",
  q:"A 3.3V ADC with 12-bit resolution (4096 counts). Measured value is 2048 counts. What is the input voltage? (Volts, 3dp)",
  answer:1.650, tolerance:0.002, marks:2},
{level:5,section:"Hardware",type:"text",
  q:"Buck converter: V_in=12V, V_out=3.3V, ideal efficiency 100%. What is the duty cycle D? (as decimal, 2dp)",
  answer:0.28, tolerance:0.01, marks:2},
];

/* ════════════════════ CODING CHALLENGES (12 q, L1–L5) ══════════════════════ */
const codingQuestions = [
{level:1,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>Reverse a Number</strong><br>Read one integer. Print its digits reversed.<br><br><strong>Example:</strong> Input: <code>1234</code> → Output: <code>4321</code>`,
  testCases:[{input:"1234",output:"4321"},{input:"100",output:"1"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int n; scanf("%d",&n);\n    // your code\n    return 0;\n}`},
{level:1,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>Prime Number Check</strong><br>Read integer N. Print <code>Prime</code> or <code>Not Prime</code>.<br><br><strong>Example:</strong> Input: <code>7</code> → Output: <code>Prime</code>`,
  testCases:[{input:"7",output:"Prime"},{input:"4",output:"Not Prime"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int n; scanf("%d",&n);\n    return 0;\n}`},
{level:2,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>Palindrome Check</strong><br>Read one integer. Print <code>Palindrome</code> or <code>Not Palindrome</code>.<br><br><strong>Example:</strong> Input: <code>121</code> → Output: <code>Palindrome</code>`,
  testCases:[{input:"121",output:"Palindrome"},{input:"123",output:"Not Palindrome"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int n; scanf("%d",&n);\n    return 0;\n}`},
{level:2,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>Sum of Digits</strong><br>Read one integer. Print sum of its digits.<br><br><strong>Example:</strong> Input: <code>123</code> → Output: <code>6</code>`,
  testCases:[{input:"123",output:"6"},{input:"999",output:"27"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int n; scanf("%d",&n);\n    return 0;\n}`},
{level:2,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>Fibonacci Series</strong><br>Read N. Print first N Fibonacci numbers from 0, space-separated.<br><br><strong>Example:</strong> Input: <code>5</code> → Output: <code>0 1 1 2 3</code>`,
  testCases:[{input:"5",output:"0 1 1 2 3"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int n; scanf("%d",&n);\n    return 0;\n}`},
{level:3,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>Count Set Bits</strong><br>Read unsigned integer. Print number of 1-bits.<br><br><strong>Example:</strong> Input: <code>13</code> → Output: <code>3</code>`,
  testCases:[{input:"13",output:"3"},{input:"255",output:"8"}],
  starterCode:`#include <stdio.h>\nint main() {\n    unsigned int n; scanf("%u",&n);\n    return 0;\n}`},
{level:3,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>XOR Swap</strong><br>Read two integers A and B. Swap without temp variable using XOR. Print A then B separated by space.<br><br><strong>Example:</strong> Input: <code>3 5</code> → Output: <code>5 3</code>`,
  testCases:[{input:"3 5",output:"5 3"},{input:"10 20",output:"20 10"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int a,b; scanf("%d %d",&a,&b);\n    return 0;\n}`},
{level:3,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>Bit Manipulation</strong><br>Read N (number), P (bit position 0-indexed), OP (1=Set,2=Clear,3=Toggle). Print result.<br><br><strong>Example:</strong> Input: <code>5 1 1</code> → Output: <code>7</code>`,
  testCases:[{input:"5 1 1",output:"7"},{input:"7 1 2",output:"5"},{input:"5 0 3",output:"4"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int n,p,op; scanf("%d %d %d",&n,&p,&op);\n    return 0;\n}`},
{level:4,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>Factorial</strong><br>Read integer N (0 ≤ N ≤ 15). Print N!<br><br><strong>Example:</strong> Input: <code>5</code> → Output: <code>120</code>`,
  testCases:[{input:"5",output:"120"},{input:"10",output:"3628800"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int n; scanf("%d",&n);\n    return 0;\n}`},
{level:4,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>Circular Buffer</strong><br>Read buffer size N then M writes (one integer each). Simulate circular buffer, print final contents index 0 to N-1 space-separated. Use 0 for empty.<br><br><strong>Example:</strong> Input: <code>3 4\n1 2 3 4</code> → Output: <code>4 2 3</code>`,
  testCases:[{input:"3\n4\n1 2 3 4",output:"4 2 3"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int n,m; scanf("%d %d",&n,&m);\n    return 0;\n}`},
{level:5,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>CRC-8 Checksum</strong><br>Read N bytes (integers 0-255). Compute CRC-8 (poly 0x07, init 0x00). Print final CRC.<br><br><strong>Example:</strong> Input: <code>3\n49 50 51</code> → Output: <code>106</code>`,
  testCases:[{input:"3\n49 50 51",output:"106"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int n; scanf("%d",&n);\n    unsigned char crc=0x00;\n    // compute CRC-8 poly 0x07\n    printf("%d\\n",crc);\n    return 0;\n}`},
{level:5,section:"Coding Challenge",type:"coding",marks:4,
  description:`<strong>Moving Average Filter</strong><br>Read window size W then N values. Print W-sample moving average once W samples available, one per line, 2dp.<br><br><strong>Example:</strong> Input: <code>3\n5\n1 2 3 4 5</code> → Output: <code>2.00\n3.00\n4.00</code>`,
  testCases:[{input:"3\n5\n1 2 3 4 5",output:"2.00\n3.00\n4.00"}],
  starterCode:`#include <stdio.h>\nint main() {\n    int w,n; scanf("%d %d",&w,&n);\n    return 0;\n}`},
];

/* ══════════════════════════════════════════════════════════════════
   QUESTION SELECTION — time-proportional, scope + experience aware
   ═══════════════════════════════════════════════════════════════ */

function getExperienceLevel(){ return parseInt(localStorage.getItem('examExperienceLevel')||'2'); }
function getQuestScope(){ return (localStorage.getItem('examQuestScope')||'both').trim().toLowerCase(); }
function getExamDuration(){ return parseInt(localStorage.getItem('examDuration')||'60'); }

function filterByLevel(pool, level){
  const minLevel = Math.max(1, level-1);
  const eligible = pool.filter(q => q.level >= minLevel && q.level <= level);
  return eligible.length >= 4 ? eligible : pool.filter(q => q.level <= level);
}

// Minutes per MCQ based on difficulty level
function mcqMinutes(level){ return level<=2 ? 1.5 : level<=4 ? 2.0 : 2.5; }

// Compute how many questions to pick from each pool
function computeCounts(durationMin, scope, level){
  const usable    = durationMin * 0.85;   // 15% safety buffer
  const mpm       = mcqMinutes(level);
  const textMin   = 3.0;
  const codingMin = 15.0;

  if(scope === 'sw'){
    const avail = usable - codingMin;
    const n = Math.max(1, Math.floor(avail / (4 * mpm)));
    return { c:n, cpp:n, embedded:n, rtos:n, hwMCQ:0, hwText:0, coding:1 };
  }
  if(scope === 'hw'){
    const hwMCQn  = Math.max(3, Math.floor(usable * 0.70 / mpm));
    const hwTextn = Math.max(1, Math.floor(usable * 0.30 / textMin));
    return { c:0, cpp:0, embedded:0, rtos:0, hwMCQ:hwMCQn, hwText:hwTextn, coding:0 };
  }
  // both
  const avail    = usable - codingMin;
  const swN      = Math.max(1, Math.floor(avail * 0.70 / (4 * mpm)));
  const hwMCQn   = Math.max(2, Math.floor(avail * 0.30 * 0.70 / mpm));
  const hwTextn  = Math.max(1, Math.floor(avail * 0.30 * 0.30 / textMin));
  return { c:swN, cpp:swN, embedded:swN, rtos:swN, hwMCQ:hwMCQn, hwText:hwTextn, coding:1 };
}

const _expLevel = getExperienceLevel();
const _scope    = getQuestScope();
const _counts   = computeCounts(getExamDuration(), _scope, _expLevel);

let selectedQuestions = [];

if(_scope === 'sw'){
  selectedQuestions = [
    ...pickRandom(filterByLevel(cQuestions,       _expLevel), _counts.c).map(q=>({...q,section:"C Programming"})),
    ...pickRandom(filterByLevel(cppQuestions,      _expLevel), _counts.cpp).map(q=>({...q,section:"C++ Programming"})),
    ...pickRandom(filterByLevel(embeddedQuestions, _expLevel), _counts.embedded).map(q=>({...q,section:"Embedded Systems"})),
    ...pickRandom(filterByLevel(rtosQuestions,     _expLevel), _counts.rtos).map(q=>({...q,section:"RTOS"})),
    ...pickRandom(filterByLevel(codingQuestions,   _expLevel), _counts.coding).map(q=>({...q,section:"Coding Challenge"})),
  ];
} else if(_scope === 'hw'){
  selectedQuestions = [
    ...pickRandom(filterByLevel(hardwareMCQ,  _expLevel), _counts.hwMCQ).map(q=>({...q,section:"Hardware"})),
    ...pickRandom(filterByLevel(hardwareText, _expLevel), _counts.hwText).map(q=>({...q,section:"Hardware"})),
  ];
} else {
  selectedQuestions = [
    ...pickRandom(filterByLevel(cQuestions,       _expLevel), _counts.c).map(q=>({...q,section:"C Programming"})),
    ...pickRandom(filterByLevel(cppQuestions,      _expLevel), _counts.cpp).map(q=>({...q,section:"C++ Programming"})),
    ...pickRandom(filterByLevel(embeddedQuestions, _expLevel), _counts.embedded).map(q=>({...q,section:"Embedded Systems"})),
    ...pickRandom(filterByLevel(rtosQuestions,     _expLevel), _counts.rtos).map(q=>({...q,section:"RTOS"})),
    ...pickRandom(filterByLevel(hardwareMCQ,       _expLevel), _counts.hwMCQ).map(q=>({...q,section:"Hardware"})),
    ...pickRandom(filterByLevel(hardwareText,      _expLevel), _counts.hwText).map(q=>({...q,section:"Hardware"})),
    ...pickRandom(filterByLevel(codingQuestions,   _expLevel), _counts.coding).map(q=>({...q,section:"Coding Challenge"})),
  ];
}
