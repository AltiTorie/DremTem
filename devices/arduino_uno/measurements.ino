//void doMeasurement() {
//  if(ledOn){
//    digitalWrite(13, LOW);
//    ledOn = false;
//  }
//  else{
//    digitalWrite(13, HIGH);
//    ledOn = true;
//  }
//  lastMeasurementTime = millis();
//}
//
//bool shouldMeasure() {
//  if (millis() - lastMeasurementTime > readingInterval) {
//    return true;
//  }
//  return false;
//}


const byte tempSensor = A1;
const byte lightSensor = A2;

bool shouldMeasureTemp() {
  if (millis() - tempLastMeasurementTime > tempReadingInterval) {
    return true;
  }
  return false;
}

void doMeasurementTemp() {
  Serial.print("Temp: ");
  Serial.println(analogRead(tempSensor));
  
  tempLastMeasurementTime = millis();
}

bool shouldMeasureLight() {
  if (millis() - lightLastMeasurementTime > lightReadingInterval) {
    return true;
  }
  return false;
}

void doMeasurementLight() {
  Serial.print("Light: ");
  Serial.println(analogRead(lightSensor));
  
  lightLastMeasurementTime = millis();
}
