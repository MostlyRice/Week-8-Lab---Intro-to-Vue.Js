# Week 8 Lab: Intro to Vue.js

Week 8 Lab for MCTC's Web Client and Server Programming class.

This lab is being hosted on [Github pages](https://mostlyrice.github.io/Week-8-Lab---Intro-to-Vue.Js/)

Assignement Questions:

### What does "Property ... was accessed during render but is not defined on instance" mean, in your own words?

- What this error means is that whatever was referenced in the template was not defined.

### In your own words, how do you fix it?

- To fix this, we simply define the component that has the r eactive property as defined in the the data method. Then we reference the name in the template to redner that value.
