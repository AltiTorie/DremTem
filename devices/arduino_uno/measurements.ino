void doMeasurement() {
  if(ledOn){
    digitalWrite(13, LOW);
    ledOn = false;
  }
  else{
    digitalWrite(13, HIGH);
    ledOn = true;
  }
}


bool shouldMeasure() {
  if (millis() - lastMeasurementTime > readingInterval) {
    return true;
  }
  return false;
}
