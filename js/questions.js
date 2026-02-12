// ==============================
// QUESTION BANK (CATEGORY BASED)
// ==============================
const questionBank = {

c_cpp: [
{ id:1,type:"single",question:"Size of int in 32-bit system?",
options:["2 bytes","4 bytes","8 bytes","Depends"],answer:[1]},
{ id:2,type:"single",question:"Which is not OOP principle?",
options:["Encapsulation","Inheritance","Compilation","Polymorphism"],answer:[2]},
{ id:3,type:"single",question:"malloc returns?",
options:["int","void*","char*","None"],answer:[1]},
{ id:4,type:"single",question:"Pointer dereference operator?",
options:["&","*","->","%"],answer:[1]},
{ id:5,type:"multiple",question:"Storage classes?",
options:["auto","register","public","static"],answer:[0,1,3]},
{ id:6,type:"single",question:"Dynamic container in C++?",
options:["array","vector","stack","queue"],answer:[1]},
{ id:7,type:"single",question:"sizeof(char)?",
options:["1","2","4","8"],answer:[0]},
{ id:8,type:"single",question:"Prevent header re-inclusion?",
options:["#include","#define","#pragma once","#endif"],answer:[2]},
{ id:9,type:"single",question:"volatile keyword is used for?",
options:["constant","prevent optimization","loop","pointer"],answer:[1]},
{ id:10,type:"single",question:"Loop executes at least once?",
options:["for","while","do-while","none"],answer:[2]}
],

embedded:[
{ id:11,type:"single",question:"Automotive protocol?",
options:["SPI","UART","CAN","I2C"],answer:[2]},
{ id:12,type:"single",question:"UART is?",
options:["Sync","Async","Parallel","None"],answer:[1]},
{ id:13,type:"single",question:"RTOS ensures?",
options:["Graphics","Deterministic timing","RAM","Speed"],answer:[1]},
{ id:14,type:"single",question:"Watchdog used for?",
options:["Reset","Voltage","Speed","Clock"],answer:[0]},
{ id:15,type:"single",question:"I2C wires?",
options:["2","3","4","5"],answer:[0]},
{ id:16,type:"single",question:"SPI is?",
options:["Half","Full","Simplex","None"],answer:[1]},
{ id:17,type:"single",question:"Interrupt reduces?",
options:["Polling","Speed","Memory","Power"],answer:[0]},
{ id:18,type:"single",question:"Bootloader used for?",
options:["Debug","Firmware update","Sleep","Interrupt"],answer:[1]},
{ id:19,type:"single",question:"Non volatile memory?",
options:["RAM","SRAM","Flash","Cache"],answer:[2]},
{ id:20,type:"single",question:"GPIO stands for?",
options:["General IO","General Purpose Input Output","Graph IO","None"],answer:[1]}
],

hardware:[
{ id:21,type:"single",question:"Ohm law?",
options:["V=IR","I=V/R","P=VI","Both A & B"],answer:[3]},
{ id:22,type:"single",question:"Pull-up connects to?",
options:["GND","VCC","Output","Clock"],answer:[1]},
{ id:23,type:"single",question:"Capacitor stores?",
options:["Current","Voltage","Charge","Resistance"],answer:[2]},
{ id:24,type:"single",question:"BJT is?",
options:["Voltage device","Current device","Resistor","Capacitor"],answer:[1]},
{ id:25,type:"single",question:"MOSFET controlled by?",
options:["Current","Voltage","Power","None"],answer:[1]},
{ id:26,type:"single",question:"ADC converts?",
options:["D→A","A→D","V→I","None"],answer:[1]},
{ id:27,type:"single",question:"Resistance unit?",
options:["Volt","Amp","Ohm","Farad"],answer:[2]},
{ id:28,type:"single",question:"Diode current flow?",
options:["Both","One direction","Reverse only","None"],answer:[1]},
{ id:29,type:"single",question:"Ground means?",
options:["0V reference","High voltage","Signal","Clock"],answer:[0]},
{ id:30,type:"single",question:"Transistor as switch operates in?",
options:["Active","Cutoff & Saturation","Linear","None"],answer:[1]}
]
};


// ==============================
// CODING QUESTION (FOR FUTURE)
// ==============================
const codingQuestion = {
description:"Write a C/C++ program to read an integer and print its reverse.",
testCases:[
{input:"123",output:"321"},
{input:"100",output:"001"},
{input:"4567",output:"7654"},
{input:"90",output:"09"}
]
};



// ======================================================
// ✅ THIS PART FIXES YOUR CURRENT ERROR
// Converts questionBank → flat array used by test.js
// ======================================================

function pickRandom(arr, count){
return arr.sort(()=>0.5-Math.random()).slice(0,count);
}

/* Select questions from each section */
const selectedQuestions = [
...pickRandom(questionBank.c_cpp,5),
...pickRandom(questionBank.embedded,5),
...pickRandom(questionBank.hardware,5)
];

/* Convert to format expected by test.js */
const questions = selectedQuestions.map(q=>({
id:q.id,
q:q.question,
options:q.options,
answer:q.answer[0]   // because test.js expects single index
}));

