// test/setup-react.ts
import React from "react"
import "../src/fonts"

globalThis.React = React

const green = "\x1b[32m"
const reset = "\x1b[0m"
console.log(green, "TEST SETUP COMPLETE: Registered fonts and shimmed React")
console.log(reset, "\n")
