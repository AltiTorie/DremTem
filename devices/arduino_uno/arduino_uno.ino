char END_OF_THE_CMD_INDICATOR = '#';
char character;
String cmd;
unsigned long readingInterval;
unsigned long lastMeasurementTime;
bool ledOn;

void setup() {
  Serial.begin(9600);
  lastMeasurementTime = millis();
  readingInterval = 2000;
  ledOn = false;
  pinMode(13, OUTPUT);
}

void loop() {
  readBluetooth();
  
  if (shouldMeasure()) {
    doMeasurement();
    lastMeasurementTime = millis();
  }
  
  delay(200);
}
