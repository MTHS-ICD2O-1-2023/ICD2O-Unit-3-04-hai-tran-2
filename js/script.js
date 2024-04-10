


// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of sphere
 */
function convertingTemperature() {
  // input
  const temperatureInFahrenheit = parseFloat(document.getElementById('temperature-in-fahrenheit').value)
  // process
  const temperatureInCelcius = (temperatureInFahrenheit - 32) * 5.0/9.0
  // output
  document.getElementById('answer').innerHTML = "The temperature is: " + temperatureInCelcius.toFixed(3) + " °C"
}
