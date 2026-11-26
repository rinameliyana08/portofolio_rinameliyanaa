#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "MAX30100_PulseOximeter.h"

// Setting OLED
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
#define OLED_ADDRESS  0x3C  // Ganti kalau alamat OLED bukan 0x3C
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// Setting Sensor
#define REPORTING_PERIOD_MS 1000
PulseOximeter pox;
uint32_t tsLastReport = 0;

void onBeatDetected() {
  Serial.println("❤ Detak Terdeteksi!");
}

void setup() {
  Serial.begin(115200);
  
  // Mulai I2C
  Wire.begin(21, 22);  // Sesuaikan jika kamu pakai pin lain

  // Inisialisasi OLED
  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDRESS)) {
    Serial.println(F("OLED gagal ditemukan"));
    while (true);
  }
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 0);
  display.println("Inisialisasi MAX30100...");
  display.display();

  // Inisialisasi sensor MAX30100
  if (!pox.begin()) {
    Serial.println("Gagal inisialisasi MAX30100");
    display.println("Sensor Gagal!");
    display.display();
    while (1);
  }

  Serial.println("MAX30100 berhasil!");
  display.println("Sensor OK!");
  display.display();

  pox.setOnBeatDetectedCallback(onBeatDetected);
}

void loop() {
  pox.update();

  if (millis() - tsLastReport > REPORTING_PERIOD_MS) {
    float hr = pox.getHeartRate();
    float spo2 = pox.getSpO2();

    Serial.print("Heart rate: ");
    Serial.print(hr);
    Serial.print(" bpm / SpO2: ");
    Serial.print(spo2);
    Serial.println(" %");

    // Tampilkan ke OLED
    display.clearDisplay();
    display.setTextSize(1);
    display.setCursor(0, 0);
    display.println("Smart Health Monitor");
    display.setTextSize(1);
    display.setCursor(0, 16);
    display.print("Heart Rate: ");
    display.print(hr);
    display.println(" bpm");

    display.setCursor(0, 32);
    display.print("SpO2: ");
    display.print(spo2);
    display.println(" %");

    display.display();

    tsLastReport = millis();
  }
}
