const byte tempSensor = A1;
const byte lightSensor = A2;

bool shouldMeasureTemp() {
  if ((millis() - tempLastMeasurementTime > tempReadingInterval) && tempSensorOn) {
    return true;
  }
  return false;
}

void measureTemp() {
  float celsiusTemp = analogRead(tempSensor) / 2.048;
  Serial.print("Temp: ");
  Serial.println(celsiusTemp);

  tempLastMeasurementTime = millis();
}

bool shouldMeasureLight() {
  if ((millis() - lightLastMeasurementTime > lightReadingInterval) && lightSensorOn) {
    return true;
  }
  return false;
}

void measureLight() {
  Serial.print("Light: ");
  Serial.println(analogRead(lightSensor));

  lightLastMeasurementTime = millis();
}
