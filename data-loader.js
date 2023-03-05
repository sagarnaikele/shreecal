$(document).ready(function () {

    // move this code tho function
    var toolData = [
        {
          "Id": "1",
          "img": "",
          "Item Description": "Ampere Meter"
        },
        {
          "Id": "2",
          "img": "",
          "Item Description": "Anemo Meter"
        },
        {
          "Id": "3",
          "img": "",
          "Item Description": "Brass Weight"
        },
        {
          "Id": "4",
          "img": "",
          "Item Description": "Bush Lower D Type"
        },
        {
          "Id": "5",
          "img": "",
          "Item Description": "Bush Upper B Type"
        },
        {
          "Id": "6",
          "img": "",
          "Item Description": "Bush Upper D Type"
        },
        {
          "Id": "7",
          "img": "",
          "Item Description": "Centering Disk"
        },
        {
          "Id": "8",
          "img": "",
          "Item Description": "Centrifugal machine"
        },
        {
          "Id": "9",
          "img": "",
          "Item Description": "Centering Gauge"
        },
        {
          "Id": "10",
          "img": "",
          "Item Description": "CFM sensor"
        },
        {
          "Id": "11",
          "img": "",
          "Item Description": "Checking Gauge"
        },
        {
          "Id": "12",
          "img": "",
          "Item Description": "Die Punch Checking Zig"
        },
        {
          "Id": "13",
          "img": "",
          "Item Description": "Clamp Meter"
        },
        {
          "Id": "14",
          "img": "",
          "Item Description": "Compound Gauge"
        },
        {
          "Id": "15",
          "img": "",
          "Item Description": "Comnductance Meter"
        },
        {
          "Id": "16",
          "img": "",
          "Item Description": "Conductivity Meter"
        },
        {
          "Id": "17",
          "img": "",
          "Item Description": "Counter Meter"
        },
        {
          "Id": "18",
          "img": "",
          "Item Description": "Counter Meter Cum Rpm"
        },
        {
          "Id": "19",
          "img": "",
          "Item Description": "Data Logger"
        },
        {
          "Id": "20",
          "img": "",
          "Item Description": "Dead Weight"
        },
        {
          "Id": "21",
          "img": "",
          "Item Description": "Depth Gauge"
        },
        {
          "Id": "22",
          "img": "",
          "Item Description": "Dew Point Meter"
        },
        {
          "Id": "23",
          "img": "",
          "Item Description": "Dial gauge"
        },
        {
          "Id": "24",
          "img": "",
          "Item Description": "Dial Indicator"
        },
        {
          "Id": "25",
          "img": "",
          "Item Description": "Differential Pressure Indicator"
        },
        {
          "Id": "26",
          "img": "",
          "Item Description": "Differential Pressure Gauge"
        },
        {
          "Id": "27",
          "img": "",
          "Item Description": "Digital Anemo Meter"
        },
        {
          "Id": "28",
          "img": "",
          "Item Description": "Digital Clock"
        },
        {
          "Id": "29",
          "img": "",
          "Item Description": "Digital Counter Meter"
        },
        {
          "Id": "30",
          "img": "",
          "Item Description": "Digital Depth Gauge"
        },
        {
          "Id": "31",
          "img": "",
          "Item Description": "Digital Diff. Indicator"
        },
        {
          "Id": 32,
          "img": "",
          "Item Description": "Digital Flow Meter"
        },
        {
          "Id": 33,
          "img": "",
          "Item Description": "Digital Hygro Meter"
        },
        {
          "Id": 34,
          "img": "",
          "Item Description": "Digital Load Manager"
        },
        {
          "Id": 35,
          "img": "",
          "Item Description": "Digital Micrometer"
        },
        {
          "Id": 36,
          "img": "",
          "Item Description": "Digital Pressure Gauge"
        },
        {
          "Id": 37,
          "img": "",
          "Item Description": "Digital Pressure Indicator"
        },
        {
          "Id": 38,
          "img": "",
          "Item Description": "Digital Pressure Transmitter"
        },
        {
          "Id": 39,
          "img": "",
          "Item Description": "Digital Protector"
        },
        {
          "Id": 40,
          "img": "",
          "Item Description": "Digital Revolution meter"
        },
        {
          "Id": 41,
          "img": "",
          "Item Description": "Digital RPM Meter"
        },
        {
          "Id": 42,
          "img": "",
          "Item Description": "Digital Stop Watch"
        },
        {
          "Id": 43,
          "img": "",
          "Item Description": "Digital Techometer"
        },
        {
          "Id": 44,
          "img": "",
          "Item Description": "Digital Temp indicator With Sensor"
        },
        {
          "Id": 45,
          "img": "",
          "Item Description": "Digital Temperature Controller"
        },
        {
          "Id": 46,
          "img": "",
          "Item Description": "Digital Temperature Indicator"
        },
        {
          "Id": 47,
          "img": "",
          "Item Description": "Digital Temperature recorder(Per channel)"
        },
        {
          "Id": 48,
          "img": "",
          "Item Description": "Digital Temperature Scanner(Per channel)"
        },
        {
          "Id": 49,
          "img": "",
          "Item Description": "Digital Thermometer"
        },
        {
          "Id": 50,
          "img": "",
          "Item Description": "Digital thermometer With Probe"
        },
        {
          "Id": 51,
          "img": "",
          "Item Description": "Digital Thermometer With Sensor"
        },
        {
          "Id": 52,
          "img": "",
          "Item Description": "Digital Timer"
        },
        {
          "Id": 53,
          "img": "",
          "Item Description": "Digital torque tester"
        },
        {
          "Id": 54,
          "img": "",
          "Item Description": "Digital VAF Meter(Volt+Amp+Freq)"
        },
        {
          "Id": 55,
          "img": "",
          "Item Description": "Digital Vernier Caliper "
        },
        {
          "Id": 56,
          "img": "",
          "Item Description": "DT Apperatus Digital"
        },
        {
          "Id": 57,
          "img": "",
          "Item Description": "Dual Frequency Meter"
        },
        {
          "Id": 58,
          "img": "",
          "Item Description": "Energy Meter And CT"
        },
        {
          "Id": 59,
          "img": "",
          "Item Description": "Flow Meter (Using Ultrasonic Flow Meter)"
        },
        {
          "Id": 60,
          "img": "",
          "Item Description": "Flow Meter (Using Ultrasonic Flow Meter)"
        },
        {
          "Id": 61,
          "img": "",
          "Item Description": "Flow Transmitter (Using Ultrasonic Flow Meter)"
        },
        {
          "Id": 62,
          "img": "",
          "Item Description": "Force Meter"
        },
        {
          "Id": 63,
          "img": "",
          "Item Description": "Frequency Meter"
        },
        {
          "Id": 64,
          "img": "",
          "Item Description": "Fume Hood"
        },
        {
          "Id": 65,
          "img": "",
          "Item Description": "Gauge Block"
        },
        {
          "Id": 66,
          "img": "",
          "Item Description": "GO/NOGO Gauge"
        },
        {
          "Id": 67,
          "img": "",
          "Item Description": "Glass Thermometer"
        },
        {
          "Id": 68,
          "img": "",
          "Item Description": "GO/NOGO Gauge"
        },
        {
          "Id": 69,
          "img": "",
          "Item Description": "Hardness Tester"
        },
        {
          "Id": 70,
          "img": "",
          "Item Description": "Height Master Punch"
        },
        {
          "Id": 71,
          "img": "",
          "Item Description": "Hot Air Oven"
        },
        {
          "Id": 72,
          "img": "",
          "Item Description": "Hour Meter"
        },
        {
          "Id": 73,
          "img": "",
          "Item Description": "Hour Meter"
        },
        {
          "Id": 74,
          "img": "",
          "Item Description": "Hygro Meter"
        },
        {
          "Id": 75,
          "img": "",
          "Item Description": "Eluminated Micrscope"
        },
        {
          "Id": 76,
          "img": "",
          "Item Description": "Eluminated Comparator"
        },
        {
          "Id": 77,
          "img": "",
          "Item Description": "Inch Manometer"
        },
        {
          "Id": 78,
          "img": "",
          "Item Description": "Inclined Manometer"
        },
        {
          "Id": 79,
          "img": "",
          "Item Description": "Infrared Temperature gun"
        },
        {
          "Id": 80,
          "img": "",
          "Item Description": "Integrity Test Microscope"
        },
        {
          "Id": 81,
          "img": "",
          "Item Description": "Intensity Meter"
        },
        {
          "Id": 82,
          "img": "",
          "Item Description": "Leak Test Apperatus"
        },
        {
          "Id": 83,
          "img": "",
          "Item Description": "Linear Mesh Counter"
        },
        {
          "Id": 84,
          "img": "",
          "Item Description": "LOD Oven"
        },
        {
          "Id": 85,
          "img": "",
          "Item Description": "Lux Meter "
        },
        {
          "Id": 86,
          "img": "",
          "Item Description": "Magnehelic Gauge"
        },
        {
          "Id": 87,
          "img": "",
          "Item Description": "Magnetic Stirror(Multipoint=12)"
        },
        {
          "Id": 88,
          "img": "",
          "Item Description": "Magnetic Stirror(RPM Meter)"
        },
        {
          "Id": 89,
          "img": "",
          "Item Description": "Measuring tape"
        },
        {
          "Id": 90,
          "img": "",
          "Item Description": "Micro Meter"
        },
        {
          "Id": 91,
          "img": "",
          "Item Description": "Mini Data Logger"
        },
        {
          "Id": 92,
          "img": "",
          "Item Description": "Moisture Analyzer"
        },
        {
          "Id": 93,
          "img": "",
          "Item Description": "Moisture Analyzer(Texture Analyzer)"
        },
        {
          "Id": 94,
          "img": "",
          "Item Description": "Moisture Meter"
        },
        {
          "Id": 95,
          "img": "",
          "Item Description": "Muffle Furnace"
        },
        {
          "Id": 96,
          "img": "",
          "Item Description": "muffle Furnace Mapping (door opening)"
        },
        {
          "Id": 97,
          "img": "",
          "Item Description": "Multi Meter"
        },
        {
          "Id": 98,
          "img": "",
          "Item Description": "Nominal Aperture"
        },
        {
          "Id": 99,
          "img": "",
          "Item Description": "ORP Meter"
        },
        {
          "Id": 100,
          "img": "",
          "Item Description": "ORP Meter/SENSOR"
        },
        {
          "Id": 101,
          "img": "",
          "Item Description": "Oxygen meter"
        },
        {
          "Id": 102,
          "img": "",
          "Item Description": "PH Meter"
        },
        {
          "Id": 103,
          "img": "",
          "Item Description": "Photohelic gauge"
        },
        {
          "Id": 104,
          "img": "",
          "Item Description": "PID Controller"
        },
        {
          "Id": 105,
          "img": "",
          "Item Description": "Plug Gauge"
        },
        {
          "Id": 106,
          "img": "",
          "Item Description": "Pocket microscope"
        },
        {
          "Id": 107,
          "img": "",
          "Item Description": "Precision Pen microscope"
        },
        {
          "Id": 108,
          "img": "",
          "Item Description": "Precision pin"
        },
        {
          "Id": 109,
          "img": "",
          "Item Description": "Pressure gauge"
        },
        {
          "Id": 110,
          "img": "",
          "Item Description": "Pressure Indicator"
        },
        {
          "Id": 111,
          "img": "",
          "Item Description": "Pressure Switch"
        },
        {
          "Id": 112,
          "img": "",
          "Item Description": "Pressure Switch"
        },
        {
          "Id": 113,
          "img": "",
          "Item Description": "Pressure tranceducer"
        },
        {
          "Id": 114,
          "img": "",
          "Item Description": "Pressure transmitter"
        },
        {
          "Id": 115,
          "img": "",
          "Item Description": "RPM Indicator"
        },
        {
          "Id": 116,
          "img": "",
          "Item Description": "Radius gauge"
        },
        {
          "Id": 117,
          "img": "",
          "Item Description": "RH Controller With Semsor"
        },
        {
          "Id": 118,
          "img": "",
          "Item Description": "RH Sensor"
        },
        {
          "Id": 119,
          "img": "",
          "Item Description": "RH Transmitter"
        },
        {
          "Id": 120,
          "img": "",
          "Item Description": "Rota Meter(Using Ultrasonic Flow Meter)"
        },
        {
          "Id": 121,
          "img": "",
          "Item Description": "RPM Counter Meter"
        },
        {
          "Id": 122,
          "img": "",
          "Item Description": "RPM Meter"
        },
        {
          "Id": 123,
          "img": "",
          "Item Description": "RTD Sensor"
        },
        {
          "Id": 124,
          "img": "",
          "Item Description": "Rubber ball"
        },
        {
          "Id": 125,
          "img": "",
          "Item Description": "SS Scale"
        },
        {
          "Id": 126,
          "img": "",
          "Item Description": "Scale"
        },
        {
          "Id": 127,
          "img": "",
          "Item Description": "Scientific calculator"
        },
        {
          "Id": 128,
          "img": "",
          "Item Description": "Slide Warmer"
        },
        {
          "Id": 129,
          "img": "",
          "Item Description": "Slip Gauge"
        },
        {
          "Id": 130,
          "img": "",
          "Item Description": "Snap gauge"
        },
        {
          "Id": 131,
          "img": "",
          "Item Description": "sound Level Meter"
        },
        {
          "Id": 132,
          "img": "",
          "Item Description": "spirit level"
        },
        {
          "Id": 133,
          "img": "",
          "Item Description": "Digital protector"
        },
        {
          "Id": 134,
          "img": "",
          "Item Description": "SPM Meter"
        },
        {
          "Id": 135,
          "img": "",
          "Item Description": "SS Weight"
        },
        {
          "Id": 136,
          "img": "",
          "Item Description": "Standard dies (B Type)"
        },
        {
          "Id": 137,
          "img": "",
          "Item Description": "Standard dies (D Type)"
        },
        {
          "Id": 138,
          "img": "",
          "Item Description": "standard Punch Height"
        },
        {
          "Id": 139,
          "img": "",
          "Item Description": "Std. Height Gauge"
        },
        {
          "Id": 140,
          "img": "",
          "Item Description": "Std. Height Punch Gauge"
        },
        {
          "Id": 141,
          "img": "",
          "Item Description": "Std. Height Punch Gauge"
        },
        {
          "Id": 142,
          "img": "",
          "Item Description": "Steel Scale"
        },
        {
          "Id": 143,
          "img": "",
          "Item Description": "Stop Watch"
        },
        {
          "Id": 144,
          "img": "",
          "Item Description": "strip chart recorder(Per Channel)"
        },
        {
          "Id": 145,
          "img": "",
          "Item Description": "Tablet Hardness tester"
        },
        {
          "Id": 146,
          "img": "",
          "Item Description": "Tachometer"
        },
        {
          "Id": 147,
          "img": "",
          "Item Description": "TDS Meter"
        },
        {
          "Id": 148,
          "img": "",
          "Item Description": "Temp. & RH Indicator"
        },
        {
          "Id": 149,
          "img": "",
          "Item Description": "Temp Datalogger"
        },
        {
          "Id": 150,
          "img": "",
          "Item Description": "Temperature controller"
        },
        {
          "Id": 151,
          "img": "",
          "Item Description": "Temperature Gauge"
        },
        {
          "Id": 152,
          "img": "",
          "Item Description": "Temperature gun"
        },
        {
          "Id": 153,
          "img": "",
          "Item Description": "Temperature Indicator"
        },
        {
          "Id": 154,
          "img": "",
          "Item Description": "Temperature  indicator With Sensor"
        },
        {
          "Id": 155,
          "img": "",
          "Item Description": "Temperature Merter(Thermometer)"
        },
        {
          "Id": 156,
          "img": "",
          "Item Description": "Temperature Probe"
        },
        {
          "Id": 157,
          "img": "",
          "Item Description": "Temperature Sensor"
        },
        {
          "Id": 158,
          "img": "",
          "Item Description": "Temperature Switch"
        },
        {
          "Id": 159,
          "img": "",
          "Item Description": "Temperature transmitter"
        },
        {
          "Id": 160,
          "img": "",
          "Item Description": "Test Sieve"
        },
        {
          "Id": 161,
          "img": "",
          "Item Description": "Texture Analyzer"
        },
        {
          "Id": 162,
          "img": "",
          "Item Description": "Thermohygrometer"
        },
        {
          "Id": 163,
          "img": "",
          "Item Description": "Thermocouple"
        },
        {
          "Id": 164,
          "img": "",
          "Item Description": "Thermostat"
        },
        {
          "Id": 165,
          "img": "",
          "Item Description": "Thermostate Controller"
        },
        {
          "Id": 166,
          "img": "",
          "Item Description": "Thickness gauge"
        },
        {
          "Id": 167,
          "img": "",
          "Item Description": "Timer"
        },
        {
          "Id": 168,
          "img": "",
          "Item Description": "Timer Total Analyzer"
        },
        {
          "Id": 169,
          "img": "",
          "Item Description": "UV hour Meter"
        },
        {
          "Id": 170,
          "img": "",
          "Item Description": "UV Intensity Meter"
        },
        {
          "Id": 171,
          "img": "",
          "Item Description": "Vaccum Gauge"
        },
        {
          "Id": 172,
          "img": "",
          "Item Description": "Vaccum Indicator"
        },
        {
          "Id": 173,
          "img": "",
          "Item Description": "Vaccum Oven"
        },
        {
          "Id": 174,
          "img": "",
          "Item Description": "Vaccum Switch"
        },
        {
          "Id": 175,
          "img": "",
          "Item Description": "VAF Meter"
        },
        {
          "Id": 176,
          "img": "",
          "Item Description": "Vernier Caliper"
        },
        {
          "Id": 177,
          "img": "",
          "Item Description": "Volt meter"
        },
        {
          "Id": 178,
          "img": "",
          "Item Description": "Wall Clock"
        },
        {
          "Id": 179,
          "img": "",
          "Item Description": "Weighing Balance"
        },
        {
          "Id": 180,
          "img": "",
          "Item Description": "Weight"
        },
        {
          "Id": 181,
          "img": "",
          "Item Description": "Weight Box"
        },
        {
          "Id": 182,
          "img": "",
          "Item Description": "Analog Magnehelic Gauge"
        },
        {
          "Id": 183,
          "img": "",
          "Item Description": "Analog Pressure Gauge"
        },
        {
          "Id": 184,
          "img": "",
          "Item Description": "Analog Pressure Switch"
        },
        {
          "Id": 185,
          "img": "",
          "Item Description": "Analog Temperature Controller"
        },
        {
          "Id": 186,
          "img": "",
          "Item Description": "Analog Timer"
        },
        {
          "Id": 187,
          "img": "",
          "Item Description": "Analog Vaccum Gauge"
        },
        {
          "Id": 188,
          "img": "",
          "Item Description": "Calculator"
        },
        {
          "Id": 189,
          "img": "",
          "Item Description": "Dead Weight(200g,500g)"
        },
        {
          "Id": 190,
          "img": "",
          "Item Description": "Dial thickness Gauge"
        },
        {
          "Id": 191,
          "img": "",
          "Item Description": "Differential Pressure Transmitter"
        },
        {
          "Id": 192,
          "img": "",
          "Item Description": "Digital Clamp Meter"
        },
        {
          "Id": 193,
          "img": "",
          "Item Description": "Digital Magnehelic Gauge"
        },
        {
          "Id": 194,
          "img": "",
          "Item Description": "Digital Preesure Switch"
        },
        {
          "Id": 195,
          "img": "",
          "Item Description": "Digital Revolution Counter"
        },
        {
          "Id": 196,
          "img": "",
          "Item Description": "Digital RPM Indicator"
        },
        {
          "Id": 197,
          "img": "",
          "Item Description": "Digital Temperature Controller"
        },
        {
          "Id": 198,
          "img": "",
          "Item Description": "Digital Temperature Indicator"
        },
        {
          "Id": 199,
          "img": "",
          "Item Description": "digital thermo Hygrometer"
        },
        {
          "Id": 200,
          "img": "",
          "Item Description": "Digital Vaccum Gauge"
        },
        {
          "Id": 201,
          "img": "",
          "Item Description": "Flow Rota Meter"
        },
        {
          "Id": 202,
          "img": "",
          "Item Description": "Hardness Gauge"
        },
        {
          "Id": 203,
          "img": "",
          "Item Description": "High Pressure Switch"
        },
        {
          "Id": 204,
          "img": "",
          "Item Description": "Ms Weight 2 kg"
        },
        {
          "Id": 205,
          "img": "",
          "Item Description": "Ms Weight 500 g"
        },
        {
          "Id": 206,
          "img": "",
          "Item Description": "Ms Weight 2kg,500g,200g"
        },
        {
          "Id": 207,
          "img": "",
          "Item Description": "Multimeter (3.5 digit)"
        },
        {
          "Id": 208,
          "img": "",
          "Item Description": "Multimeter (4.5 digit)"
        },
        {
          "Id": 209,
          "img": "",
          "Item Description": "Multimeter (5.5 digit)"
        },
        {
          "Id": 210,
          "img": "",
          "Item Description": "Plunger Type dial gauge"
        },
        {
          "Id": 211,
          "img": "",
          "Item Description": "RH Controller"
        },
        {
          "Id": 212,
          "img": "",
          "Item Description": "RH Meter"
        },
        {
          "Id": 213,
          "img": "",
          "Item Description": "RH Temperature Sensor"
        },
        {
          "Id": 214,
          "img": "",
          "Item Description": "RH Temperature Transmitter"
        },
        {
          "Id": 215,
          "img": "",
          "Item Description": "Stainless Steel Scale"
        },
        {
          "Id": 216,
          "img": "",
          "Item Description": "Standard dead Weight Box(12 pcs)"
        },
        {
          "Id": 217,
          "img": "",
          "Item Description": "Temperature RH Sensor"
        },
        {
          "Id": 218,
          "img": "",
          "Item Description": "Thermal Data Logger"
        },
        {
          "Id": 219,
          "img": "",
          "Item Description": "Weight Box(1,2,5kg)"
        },
        {
          "Id": 220,
          "img": "",
          "Item Description": "Weight Box(8 pcs)"
        },
        {
          "Id": 221,
          "img": "",
          "Item Description": "Weight Box,1g to 200g(M1 Class)"
        },
        {
          "Id": 222,
          "img": "",
          "Item Description": "Weight Box 1g to 200g(F2 Class)"
        },
        {
          "Id": 223,
          "img": "",
          "Item Description": "Weight Box 1g to 200g(F1 Class)"
        },
        {
          "Id": 224,
          "img": "",
          "Item Description": "RH Indicator"
        },
        {
          "Id": 225,
          "img": "",
          "Item Description": "Hot Air Oven"
        },
        {
          "Id": 226,
          "img": "",
          "Item Description": "RPM Controoler"
        },
        {
          "Id": 227,
          "img": "",
          "Item Description": "Earth Tester"
        },
        {
          "Id": 228,
          "img": "",
          "Item Description": "Digital Master Clock"
        },
        {
          "Id": "229",
          "img": "",
          "Item Description": "Feeler Gauge"
        },
        {
          "Id": "230",
          "img": "",
          "Item Description": "Compond Preesure Gauge"
        },
        {
          "Id": "231",
          "img": "",
          "Item Description": "Measuring Bucket"
        },
        {
          "Id": "232",
          "img": "",
          "Item Description": "Mesuring Cylinder"
        },
        {
          "Id": "233",
          "img": "",
          "Item Description": "Water Bath"
        },
        {
          "Id": "234",
          "img": "",
          "Item Description": "yash"
        }
      ];

    // let table = document.getElementById("tbltools");
    let tableBody = document.getElementById("tblBody");


    toolData.forEach((item) => {
        let tr = document.createElement("tr");
        // image column must be third
        // id, desc, img [id,dec,img]
        let vals = Object.values(item);
        vals.forEach((elem) => {
            let td = document.createElement("td");
            td.innerText = elem;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
    $("#tbltools").DataTable();
});