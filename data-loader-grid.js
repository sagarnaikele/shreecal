$(document).ready(function () {

   // move this code tho function
    var toolData = [
        {
          "id": "1",
          "img": "",
          "itemdesc": "Ampere Meter"
        },
        {
          "id": "2",
          "img": "",
          "itemdesc": "Anemo Meter"
        },
        {
          "id": "3",
          "img": "",
          "itemdesc": "Brass Weight"
        },
        {
          "id": "4",
          "img": "",
          "itemdesc": "Bush Lower D Type"
        },
        {
          "id": "5",
          "img": "",
          "itemdesc": "Bush Upper B Type"
        },
        {
          "id": "6",
          "img": "",
          "itemdesc": "Bush Upper D Type"
        },
        {
          "id": "7",
          "img": "",
          "itemdesc": "Centering Disk"
        },
        {
          "id": "8",
          "img": "",
          "itemdesc": "Centrifugal machine"
        },
        {
          "id": "9",
          "img": "",
          "itemdesc": "Centering Gauge"
        },
        {
          "id": "10",
          "img": "",
          "itemdesc": "CFM sensor"
        },
        {
          "id": "11",
          "img": "",
          "itemdesc": "Checking Gauge"
        },
        {
          "id": "12",
          "img": "",
          "itemdesc": "Die Punch Checking Zig"
        },
        {
          "id": "13",
          "img": "",
          "itemdesc": "Clamp Meter"
        },
        {
          "id": "14",
          "img": "",
          "itemdesc": "Compound Gauge"
        },
        {
          "id": "15",
          "img": "",
          "itemdesc": "Comnductance Meter"
        },
        {
          "id": "16",
          "img": "",
          "itemdesc": "Conductivity Meter"
        },
        {
          "id": "17",
          "img": "",
          "itemdesc": "Counter Meter"
        },
        {
          "id": "18",
          "img": "",
          "itemdesc": "Counter Meter Cum Rpm"
        },
        {
          "id": "19",
          "img": "",
          "itemdesc": "Data Logger"
        },
        {
          "id": "20",
          "img": "",
          "itemdesc": "Dead Weight"
        },
        {
          "id": "21",
          "img": "",
          "itemdesc": "Depth Gauge"
        },
        {
          "id": "22",
          "img": "",
          "itemdesc": "Dew Point Meter"
        },
        {
          "id": "23",
          "img": "",
          "itemdesc": "Dial gauge"
        },
        {
          "id": "24",
          "img": "",
          "itemdesc": "Dial Indicator"
        },
        {
          "id": "25",
          "img": "",
          "itemdesc": "Differential Pressure Indicator"
        },
        {
          "id": "26",
          "img": "",
          "itemdesc": "Differential Pressure Gauge"
        },
        {
          "id": "27",
          "img": "",
          "itemdesc": "Digital Anemo Meter"
        },
        {
          "id": "28",
          "img": "",
          "itemdesc": "Digital Clock"
        },
        {
          "id": "29",
          "img": "",
          "itemdesc": "Digital Counter Meter"
        },
        {
          "id": "30",
          "img": "",
          "itemdesc": "Digital Depth Gauge"
        },
        {
          "id": "31",
          "img": "",
          "itemdesc": "Digital Diff. Indicator"
        },
        {
          "id": 32,
          "img": "",
          "itemdesc": "Digital Flow Meter"
        },
        {
          "id": 33,
          "img": "",
          "itemdesc": "Digital Hygro Meter"
        },
        {
          "id": 34,
          "img": "",
          "itemdesc": "Digital Load Manager"
        },
        {
          "id": 35,
          "img": "",
          "itemdesc": "Digital Micrometer"
        },
        {
          "id": 36,
          "img": "",
          "itemdesc": "Digital Pressure Gauge"
        },
        {
          "id": 37,
          "img": "",
          "itemdesc": "Digital Pressure Indicator"
        },
        {
          "id": 38,
          "img": "",
          "itemdesc": "Digital Pressure Transmitter"
        },
        {
          "id": 39,
          "img": "",
          "itemdesc": "Digital Protector"
        },
        {
          "id": 40,
          "img": "",
          "itemdesc": "Digital Revolution meter"
        },
        {
          "id": 41,
          "img": "",
          "itemdesc": "Digital RPM Meter"
        },
        {
          "id": 42,
          "img": "",
          "itemdesc": "Digital Stop Watch"
        },
        {
          "id": 43,
          "img": "",
          "itemdesc": "Digital Techometer"
        },
        {
          "id": 44,
          "img": "",
          "itemdesc": "Digital Temp indicator With Sensor"
        },
        {
          "id": 45,
          "img": "",
          "itemdesc": "Digital Temperature Controller"
        },
        {
          "id": 46,
          "img": "",
          "itemdesc": "Digital Temperature Indicator"
        },
        {
          "id": 47,
          "img": "",
          "itemdesc": "Digital Temperature recorder(Per channel)"
        },
        {
          "id": 48,
          "img": "",
          "itemdesc": "Digital Temperature Scanner(Per channel)"
        },
        {
          "id": 49,
          "img": "",
          "itemdesc": "Digital Thermometer"
        },
        {
          "id": 50,
          "img": "",
          "itemdesc": "Digital thermometer With Probe"
        },
        {
          "id": 51,
          "img": "",
          "itemdesc": "Digital Thermometer With Sensor"
        },
        {
          "id": 52,
          "img": "",
          "itemdesc": "Digital Timer"
        },
        {
          "id": 53,
          "img": "",
          "itemdesc": "Digital torque tester"
        },
        {
          "id": 54,
          "img": "",
          "itemdesc": "Digital VAF Meter(Volt+Amp+Freq)"
        },
        {
          "id": 55,
          "img": "",
          "itemdesc": "Digital Vernier Caliper "
        },
        {
          "id": 56,
          "img": "",
          "itemdesc": "DT Apperatus Digital"
        },
        {
          "id": 57,
          "img": "",
          "itemdesc": "Dual Frequency Meter"
        },
        {
          "id": 58,
          "img": "",
          "itemdesc": "Energy Meter And CT"
        },
        {
          "id": 59,
          "img": "",
          "itemdesc": "Flow Meter (Using Ultrasonic Flow Meter)"
        },
        {
          "id": 60,
          "img": "",
          "itemdesc": "Flow Meter (Using Ultrasonic Flow Meter)"
        },
        {
          "id": 61,
          "img": "",
          "itemdesc": "Flow Transmitter (Using Ultrasonic Flow Meter)"
        },
        {
          "id": 62,
          "img": "",
          "itemdesc": "Force Meter"
        },
        {
          "id": 63,
          "img": "",
          "itemdesc": "Frequency Meter"
        },
        {
          "id": 64,
          "img": "",
          "itemdesc": "Fume Hood"
        },
        {
          "id": 65,
          "img": "",
          "itemdesc": "Gauge Block"
        },
        {
          "id": 66,
          "img": "",
          "itemdesc": "GO/NOGO Gauge"
        },
        {
          "id": 67,
          "img": "",
          "itemdesc": "Glass Thermometer"
        },
        {
          "id": 68,
          "img": "",
          "itemdesc": "GO/NOGO Gauge"
        },
        {
          "id": 69,
          "img": "",
          "itemdesc": "Hardness Tester"
        },
        {
          "id": 70,
          "img": "",
          "itemdesc": "Height Master Punch"
        },
        {
          "id": 71,
          "img": "",
          "itemdesc": "Hot Air Oven"
        },
        {
          "id": 72,
          "img": "",
          "itemdesc": "Hour Meter"
        },
        {
          "id": 73,
          "img": "",
          "itemdesc": "Hour Meter"
        },
        {
          "id": 74,
          "img": "",
          "itemdesc": "Hygro Meter"
        },
        {
          "id": 75,
          "img": "",
          "itemdesc": "Eluminated Micrscope"
        },
        {
          "id": 76,
          "img": "",
          "itemdesc": "Eluminated Comparator"
        },
        {
          "id": 77,
          "img": "",
          "itemdesc": "Inch Manometer"
        },
        {
          "id": 78,
          "img": "",
          "itemdesc": "Inclined Manometer"
        },
        {
          "id": 79,
          "img": "",
          "itemdesc": "Infrared Temperature gun"
        },
        {
          "id": 80,
          "img": "",
          "itemdesc": "Integrity Test Microscope"
        },
        {
          "id": 81,
          "img": "",
          "itemdesc": "Intensity Meter"
        },
        {
          "id": 82,
          "img": "",
          "itemdesc": "Leak Test Apperatus"
        },
        {
          "id": 83,
          "img": "",
          "itemdesc": "Linear Mesh Counter"
        },
        {
          "id": 84,
          "img": "",
          "itemdesc": "LOD Oven"
        },
        {
          "id": 85,
          "img": "",
          "itemdesc": "Lux Meter "
        },
        {
          "id": 86,
          "img": "",
          "itemdesc": "Magnehelic Gauge"
        },
        {
          "id": 87,
          "img": "",
          "itemdesc": "Magnetic Stirror(Multipoint=12)"
        },
        {
          "id": 88,
          "img": "",
          "itemdesc": "Magnetic Stirror(RPM Meter)"
        },
        {
          "id": 89,
          "img": "",
          "itemdesc": "Measuring tape"
        },
        {
          "id": 90,
          "img": "",
          "itemdesc": "Micro Meter"
        },
        {
          "id": 91,
          "img": "",
          "itemdesc": "Mini Data Logger"
        },
        {
          "id": 92,
          "img": "",
          "itemdesc": "Moisture Analyzer"
        },
        {
          "id": 93,
          "img": "",
          "itemdesc": "Moisture Analyzer(Texture Analyzer)"
        },
        {
          "id": 94,
          "img": "",
          "itemdesc": "Moisture Meter"
        },
        {
          "id": 95,
          "img": "",
          "itemdesc": "Muffle Furnace"
        },
        {
          "id": 96,
          "img": "",
          "itemdesc": "muffle Furnace Mapping (door opening)"
        },
        {
          "id": 97,
          "img": "",
          "itemdesc": "Multi Meter"
        },
        {
          "id": 98,
          "img": "",
          "itemdesc": "Nominal Aperture"
        },
        {
          "id": 99,
          "img": "",
          "itemdesc": "ORP Meter"
        },
        {
          "id": 100,
          "img": "",
          "itemdesc": "ORP Meter/SENSOR"
        },
        {
          "id": 101,
          "img": "",
          "itemdesc": "Oxygen meter"
        },
        {
          "id": 102,
          "img": "",
          "itemdesc": "PH Meter"
        },
        {
          "id": 103,
          "img": "",
          "itemdesc": "Photohelic gauge"
        },
        {
          "id": 104,
          "img": "",
          "itemdesc": "PID Controller"
        },
        {
          "id": 105,
          "img": "",
          "itemdesc": "Plug Gauge"
        },
        {
          "id": 106,
          "img": "",
          "itemdesc": "Pocket microscope"
        },
        {
          "id": 107,
          "img": "",
          "itemdesc": "Precision Pen microscope"
        },
        {
          "id": 108,
          "img": "",
          "itemdesc": "Precision pin"
        },
        {
          "id": 109,
          "img": "",
          "itemdesc": "Pressure gauge"
        },
        {
          "id": 110,
          "img": "",
          "itemdesc": "Pressure Indicator"
        },
        {
          "id": 111,
          "img": "",
          "itemdesc": "Pressure Switch"
        },
        {
          "id": 112,
          "img": "",
          "itemdesc": "Pressure Switch"
        },
        {
          "id": 113,
          "img": "",
          "itemdesc": "Pressure tranceducer"
        },
        {
          "id": 114,
          "img": "",
          "itemdesc": "Pressure transmitter"
        },
        {
          "id": 115,
          "img": "",
          "itemdesc": "RPM Indicator"
        },
        {
          "id": 116,
          "img": "",
          "itemdesc": "Radius gauge"
        },
        {
          "id": 117,
          "img": "",
          "itemdesc": "RH Controller With Semsor"
        },
        {
          "id": 118,
          "img": "",
          "itemdesc": "RH Sensor"
        },
        {
          "id": 119,
          "img": "",
          "itemdesc": "RH Transmitter"
        },
        {
          "id": 120,
          "img": "",
          "itemdesc": "Rota Meter(Using Ultrasonic Flow Meter)"
        },
        {
          "id": 121,
          "img": "",
          "itemdesc": "RPM Counter Meter"
        },
        {
          "id": 122,
          "img": "",
          "itemdesc": "RPM Meter"
        },
        {
          "id": 123,
          "img": "",
          "itemdesc": "RTD Sensor"
        },
        {
          "id": 124,
          "img": "",
          "itemdesc": "Rubber ball"
        },
        {
          "id": 125,
          "img": "",
          "itemdesc": "SS Scale"
        },
        {
          "id": 126,
          "img": "",
          "itemdesc": "Scale"
        },
        {
          "id": 127,
          "img": "",
          "itemdesc": "Scientific calculator"
        },
        {
          "id": 128,
          "img": "",
          "itemdesc": "Slide Warmer"
        },
        {
          "id": 129,
          "img": "",
          "itemdesc": "Slip Gauge"
        },
        {
          "id": 130,
          "img": "",
          "itemdesc": "Snap gauge"
        },
        {
          "id": 131,
          "img": "",
          "itemdesc": "sound Level Meter"
        },
        {
          "id": 132,
          "img": "",
          "itemdesc": "spirit level"
        },
        {
          "id": 133,
          "img": "",
          "itemdesc": "Digital protector"
        },
        {
          "id": 134,
          "img": "",
          "itemdesc": "SPM Meter"
        },
        {
          "id": 135,
          "img": "",
          "itemdesc": "SS Weight"
        },
        {
          "id": 136,
          "img": "",
          "itemdesc": "Standard dies (B Type)"
        },
        {
          "id": 137,
          "img": "",
          "itemdesc": "Standard dies (D Type)"
        },
        {
          "id": 138,
          "img": "",
          "itemdesc": "standard Punch Height"
        },
        {
          "id": 139,
          "img": "",
          "itemdesc": "Std. Height Gauge"
        },
        {
          "id": 140,
          "img": "",
          "itemdesc": "Std. Height Punch Gauge"
        },
        {
          "id": 141,
          "img": "",
          "itemdesc": "Std. Height Punch Gauge"
        },
        {
          "id": 142,
          "img": "",
          "itemdesc": "Steel Scale"
        },
        {
          "id": 143,
          "img": "",
          "itemdesc": "Stop Watch"
        },
        {
          "id": 144,
          "img": "",
          "itemdesc": "strip chart recorder(Per Channel)"
        },
        {
          "id": 145,
          "img": "",
          "itemdesc": "Tablet Hardness tester"
        },
        {
          "id": 146,
          "img": "",
          "itemdesc": "Tachometer"
        },
        {
          "id": 147,
          "img": "",
          "itemdesc": "TDS Meter"
        },
        {
          "id": 148,
          "img": "",
          "itemdesc": "Temp. & RH Indicator"
        },
        {
          "id": 149,
          "img": "",
          "itemdesc": "Temp Datalogger"
        },
        {
          "id": 150,
          "img": "",
          "itemdesc": "Temperature controller"
        },
        {
          "id": 151,
          "img": "",
          "itemdesc": "Temperature Gauge"
        },
        {
          "id": 152,
          "img": "",
          "itemdesc": "Temperature gun"
        },
        {
          "id": 153,
          "img": "",
          "itemdesc": "Temperature Indicator"
        },
        {
          "id": 154,
          "img": "",
          "itemdesc": "Temperature  indicator With Sensor"
        },
        {
          "id": 155,
          "img": "",
          "itemdesc": "Temperature Merter(Thermometer)"
        },
        {
          "id": 156,
          "img": "",
          "itemdesc": "Temperature Probe"
        },
        {
          "id": 157,
          "img": "",
          "itemdesc": "Temperature Sensor"
        },
        {
          "id": 158,
          "img": "",
          "itemdesc": "Temperature Switch"
        },
        {
          "id": 159,
          "img": "",
          "itemdesc": "Temperature transmitter"
        },
        {
          "id": 160,
          "img": "",
          "itemdesc": "Test Sieve"
        },
        {
          "id": 161,
          "img": "",
          "itemdesc": "Texture Analyzer"
        },
        {
          "id": 162,
          "img": "",
          "itemdesc": "Thermohygrometer"
        },
        {
          "id": 163,
          "img": "",
          "itemdesc": "Thermocouple"
        },
        {
          "id": 164,
          "img": "",
          "itemdesc": "Thermostat"
        },
        {
          "id": 165,
          "img": "",
          "itemdesc": "Thermostate Controller"
        },
        {
          "id": 166,
          "img": "",
          "itemdesc": "Thickness gauge"
        },
        {
          "id": 167,
          "img": "",
          "itemdesc": "Timer"
        },
        {
          "id": 168,
          "img": "",
          "itemdesc": "Timer Total Analyzer"
        },
        {
          "id": 169,
          "img": "",
          "itemdesc": "UV hour Meter"
        },
        {
          "id": 170,
          "img": "",
          "itemdesc": "UV Intensity Meter"
        },
        {
          "id": 171,
          "img": "",
          "itemdesc": "Vaccum Gauge"
        },
        {
          "id": 172,
          "img": "",
          "itemdesc": "Vaccum Indicator"
        },
        {
          "id": 173,
          "img": "",
          "itemdesc": "Vaccum Oven"
        },
        {
          "id": 174,
          "img": "",
          "itemdesc": "Vaccum Switch"
        },
        {
          "id": 175,
          "img": "",
          "itemdesc": "VAF Meter"
        },
        {
          "id": 176,
          "img": "",
          "itemdesc": "Vernier Caliper"
        },
        {
          "id": 177,
          "img": "",
          "itemdesc": "Volt meter"
        },
        {
          "id": 178,
          "img": "",
          "itemdesc": "Wall Clock"
        },
        {
          "id": 179,
          "img": "",
          "itemdesc": "Weighing Balance"
        },
        {
          "id": 180,
          "img": "",
          "itemdesc": "Weight"
        },
        {
          "id": 181,
          "img": "",
          "itemdesc": "Weight Box"
        },
        {
          "id": 182,
          "img": "",
          "itemdesc": "Analog Magnehelic Gauge"
        },
        {
          "id": 183,
          "img": "",
          "itemdesc": "Analog Pressure Gauge"
        },
        {
          "id": 184,
          "img": "",
          "itemdesc": "Analog Pressure Switch"
        },
        {
          "id": 185,
          "img": "",
          "itemdesc": "Analog Temperature Controller"
        },
        {
          "id": 186,
          "img": "",
          "itemdesc": "Analog Timer"
        },
        {
          "id": 187,
          "img": "",
          "itemdesc": "Analog Vaccum Gauge"
        },
        {
          "id": 188,
          "img": "",
          "itemdesc": "Calculator"
        },
        {
          "id": 189,
          "img": "",
          "itemdesc": "Dead Weight(200g,500g)"
        },
        {
          "id": 190,
          "img": "",
          "itemdesc": "Dial thickness Gauge"
        },
        {
          "id": 191,
          "img": "",
          "itemdesc": "Differential Pressure Transmitter"
        },
        {
          "id": 192,
          "img": "",
          "itemdesc": "Digital Clamp Meter"
        },
        {
          "id": 193,
          "img": "",
          "itemdesc": "Digital Magnehelic Gauge"
        },
        {
          "id": 194,
          "img": "",
          "itemdesc": "Digital Preesure Switch"
        },
        {
          "id": 195,
          "img": "",
          "itemdesc": "Digital Revolution Counter"
        },
        {
          "id": 196,
          "img": "",
          "itemdesc": "Digital RPM Indicator"
        },
        {
          "id": 197,
          "img": "",
          "itemdesc": "Digital Temperature Controller"
        },
        {
          "id": 198,
          "img": "",
          "itemdesc": "Digital Temperature Indicator"
        },
        {
          "id": 199,
          "img": "",
          "itemdesc": "digital thermo Hygrometer"
        },
        {
          "id": 200,
          "img": "",
          "itemdesc": "Digital Vaccum Gauge"
        },
        {
          "id": 201,
          "img": "",
          "itemdesc": "Flow Rota Meter"
        },
        {
          "id": 202,
          "img": "",
          "itemdesc": "Hardness Gauge"
        },
        {
          "id": 203,
          "img": "",
          "itemdesc": "High Pressure Switch"
        },
        {
          "id": 204,
          "img": "",
          "itemdesc": "Ms Weight 2 kg"
        },
        {
          "id": 205,
          "img": "",
          "itemdesc": "Ms Weight 500 g"
        },
        {
          "id": 206,
          "img": "",
          "itemdesc": "Ms Weight 2kg,500g,200g"
        },
        {
          "id": 207,
          "img": "",
          "itemdesc": "Multimeter (3.5 digit)"
        },
        {
          "id": 208,
          "img": "",
          "itemdesc": "Multimeter (4.5 digit)"
        },
        {
          "id": 209,
          "img": "",
          "itemdesc": "Multimeter (5.5 digit)"
        },
        {
          "id": 210,
          "img": "",
          "itemdesc": "Plunger Type dial gauge"
        },
        {
          "id": 211,
          "img": "",
          "itemdesc": "RH Controller"
        },
        {
          "id": 212,
          "img": "",
          "itemdesc": "RH Meter"
        },
        {
          "id": 213,
          "img": "",
          "itemdesc": "RH Temperature Sensor"
        },
        {
          "id": 214,
          "img": "",
          "itemdesc": "RH Temperature Transmitter"
        },
        {
          "id": 215,
          "img": "",
          "itemdesc": "Stainless Steel Scale"
        },
        {
          "id": 216,
          "img": "",
          "itemdesc": "Standard dead Weight Box(12 pcs)"
        },
        {
          "id": 217,
          "img": "",
          "itemdesc": "Temperature RH Sensor"
        },
        {
          "id": 218,
          "img": "",
          "itemdesc": "Thermal Data Logger"
        },
        {
          "id": 219,
          "img": "",
          "itemdesc": "Weight Box(1,2,5kg)"
        },
        {
          "id": 220,
          "img": "",
          "itemdesc": "Weight Box(8 pcs)"
        },
        {
          "id": 221,
          "img": "",
          "itemdesc": "Weight Box,1g to 200g(M1 Class)"
        },
        {
          "id": 222,
          "img": "",
          "itemdesc": "Weight Box 1g to 200g(F2 Class)"
        },
        {
          "id": 223,
          "img": "",
          "itemdesc": "Weight Box 1g to 200g(F1 Class)"
        },
        {
          "id": 224,
          "img": "",
          "itemdesc": "RH Indicator"
        },
        {
          "id": 225,
          "img": "",
          "itemdesc": "Hot Air Oven"
        },
        {
          "id": 226,
          "img": "",
          "itemdesc": "RPM Controoler"
        },
        {
          "id": 227,
          "img": "",
          "itemdesc": "Earth Tester"
        },
        {
          "id": 228,
          "img": "",
          "itemdesc": "Digital Master Clock"
        },
        {
          "id": "229",
          "img": "",
          "itemdesc": "Feeler Gauge"
        },
        {
          "id": "230",
          "img": "",
          "itemdesc": "Compond Preesure Gauge"
        },
        {
          "id": "231",
          "img": "",
          "itemdesc": "Measuring Bucket"
        },
        {
          "id": "232",
          "img": "",
          "itemdesc": "Mesuring Cylinder"
        },
        {
          "id": "233",
          "img": "",
          "itemdesc": "Water Bath"
        },
        {
          "id": "234",
          "img": "",
          "itemdesc": "yash"
        }
      ];


    let container = document.getElementById("toolContainer");
    

    toolData.forEach((item) => {
      let gridItem = document.createElement("div");
      // image column must be third
      // id, desc, img [id,dec,img]
      // let vals = Object.values(item);
      // let cols=[item.id,item.itemdesc,item.img];

          

          let img = document.createElement("img");
          img.src=item.img;

          var br = document.createElement("br");

          let span = document.createElement("span");
          span.innerHTML=item.itemdesc;

          gridItem.className = 'grid-item';

          gridItem.appendChild(img);
          gridItem.appendChild(br);
          gridItem.appendChild(span);
          container.appendChild(gridItem);
  });
});