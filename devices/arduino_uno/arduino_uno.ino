unsigned long tempReadingInterval;
unsigned long tempLastMeasurementTime;

unsigned long lightReadingInterval;
unsigned long lightLastMeasurementTime;

bool ledOn;

void setup() {
  // TODO: read reading intervals from config file
  
  Serial.begin(9600);

  tempLastMeasurementTime = millis();
  tempReadingInterval = 10000;
  
  lightLastMeasurementTime = millis();
  lightReadingInterval = 5000;
}

void loop() {
  readBluetooth();
  
  if (shouldMeasureTemp()) {
    doMeasurementTemp();
  }
  if (shouldMeasureLight()) {
    doMeasurementLight();
  }
}
