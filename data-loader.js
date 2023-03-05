$(document).ready(function () {

    var toolData = [
        {
            "Id": "1",
            "Item Description": "Ampere Meter"
        },
        {
            "Id": "2",
            "Item Description": "Anemo Meter"
        },
        {
            "Id": "3",
            "Item Description": "Brass Weight"
        },
        {
            "Id": "4",
            "Item Description": "Bush Lower D Type"
        },
        {
            "Id": "5",
            "Item Description": "Bush Upper B Type"
        },
        {
            "Id": "6",
            "Item Description": "Bush Upper D Type"
        },
        {
            "Id": "7",
            "Item Description": "Centering Disk"
        },
        {
            "Id": "8",
            "Item Description": "Centrifugal machine"
        },
        {
            "Id": "9",
            "Item Description": "Centering Gauge"
        },
        {
            "Id": "10",
            "Item Description": "CFM sensor"
        },
        {
            "Id": "11",
            "Item Description": "Checking Gauge"
        },
        {
            "Id": "12",
            "Item Description": "Die Punch Checking Zig"
        },
        {
            "Id": "13",
            "Item Description": "Clamp Meter"
        },
        {
            "Id": "14",
            "Item Description": "Compound Gauge"
        },
        {
            "Id": "15",
            "Item Description": "Comnductance Meter"
        },
        {
            "Id": "16",
            "Item Description": "Conductivity Meter"
        },
        {
            "Id": "17",
            "Item Description": "Counter Meter"
        },
        {
            "Id": "18",
            "Item Description": "Counter Meter Cum Rpm"
        },
        {
            "Id": "19",
            "Item Description": "Data Logger"
        },
        {
            "Id": "20",
            "Item Description": "Dead Weight"
        },
        {
            "Id": "21",
            "Item Description": "Depth Gauge"
        },
        {
            "Id": "22",
            "Item Description": "Dew Point Meter"
        },
        {
            "Id": "23",
            "Item Description": "Dial gauge"
        },
        {
            "Id": "24",
            "Item Description": "Dial Indicator"
        },
        {
            "Id": "25",
            "Item Description": "Differential Pressure Indicator"
        },
        {
            "Id": "26",
            "Item Description": "Differential Pressure Gauge"
        },
        {
            "Id": "27",
            "Item Description": "Digital Anemo Meter"
        },
        {
            "Id": "28",
            "Item Description": "Digital Clock"
        },
        {
            "Id": "29",
            "Item Description": "Digital Counter Meter"
        },
        {
            "Id": "30",
            "Item Description": "Digital Depth Gauge"
        },
        {
            "Id": "31",
            "Item Description": "Digital Diff. Indicator"
        },
        {
            "Id": 32,
            "Item Description": "Digital Flow Meter"
        },
        {
            "Id": 33,
            "Item Description": "Digital Hygro Meter"
        },
        {
            "Id": 34,
            "Item Description": "Digital Load Manager"
        },
        {
            "Id": 35,
            "Item Description": "Digital Micrometer"
        },
        {
            "Id": 36,
            "Item Description": "Digital Pressure Gauge"
        },
        {
            "Id": 37,
            "Item Description": "Digital Pressure Indicator"
        },
        {
            "Id": 38,
            "Item Description": "Digital Pressure Transmitter"
        },
        {
            "Id": 39,
            "Item Description": "Digital Protector"
        },
        {
            "Id": 40,
            "Item Description": "Digital Revolution meter"
        },
        {
            "Id": 41,
            "Item Description": "Digital RPM Meter"
        },
        {
            "Id": 42,
            "Item Description": "Digital Stop Watch"
        },
        {
            "Id": 43,
            "Item Description": "Digital Techometer"
        },
        {
            "Id": 44,
            "Item Description": "Digital Temp indicator With Sensor"
        },
        {
            "Id": 45,
            "Item Description": "Digital Temperature Controller"
        },
        {
            "Id": 46,
            "Item Description": "Digital Temperature Indicator"
        },
        {
            "Id": 47,
            "Item Description": "Digital Temperature recorder(Per channel)"
        },
        {
            "Id": 48,
            "Item Description": "Digital Temperature Scanner(Per channel)"
        },
        {
            "Id": 49,
            "Item Description": "Digital Thermometer"
        },
        {
            "Id": 50,
            "Item Description": "Digital thermometer With Probe"
        },
        {
            "Id": 51,
            "Item Description": "Digital Thermometer With Sensor"
        },
        {
            "Id": 52,
            "Item Description": "Digital Timer"
        },
        {
            "Id": 53,
            "Item Description": "Digital torque tester"
        },
        {
            "Id": 54,
            "Item Description": "Digital VAF Meter(Volt+Amp+Freq)"
        },
        {
            "Id": 55,
            "Item Description": "Digital Vernier Caliper "
        },
        {
            "Id": 56,
            "Item Description": "DT Apperatus Digital"
        },
        {
            "Id": 57,
            "Item Description": "Dual Frequency Meter"
        },
        {
            "Id": 58,
            "Item Description": "Energy Meter And CT"
        },
        {
            "Id": 59,
            "Item Description": "Flow Meter (Using Ultrasonic Flow Meter)"
        },
        {
            "Id": 60,
            "Item Description": "Flow Meter (Using Ultrasonic Flow Meter)"
        },
        {
            "Id": 61,
            "Item Description": "Flow Transmitter (Using Ultrasonic Flow Meter)"
        },
        {
            "Id": 62,
            "Item Description": "Force Meter"
        },
        {
            "Id": 63,
            "Item Description": "Frequency Meter"
        },
        {
            "Id": 64,
            "Item Description": "Fume Hood"
        },
        {
            "Id": 65,
            "Item Description": "Gauge Block"
        },
        {
            "Id": 66,
            "Item Description": "GO\/NOGO Gauge"
        },
        {
            "Id": 67,
            "Item Description": "Glass Thermometer"
        },
        {
            "Id": 68,
            "Item Description": "GO\/NOGO Gauge"
        },
        {
            "Id": 69,
            "Item Description": "Hardness Tester"
        },
        {
            "Id": 70,
            "Item Description": "Height Master Punch"
        },
        {
            "Id": 71,
            "Item Description": "Hot Air Oven"
        },
        {
            "Id": 72,
            "Item Description": "Hour Meter"
        },
        {
            "Id": 73,
            "Item Description": "Hour Meter"
        },
        {
            "Id": 74,
            "Item Description": "Hygro Meter"
        },
        {
            "Id": 75,
            "Item Description": "Eluminated Micrscope"
        },
        {
            "Id": 76,
            "Item Description": "Eluminated Comparator"
        },
        {
            "Id": 77,
            "Item Description": "Inch Manometer"
        },
        {
            "Id": 78,
            "Item Description": "Inclined Manometer"
        },
        {
            "Id": 79,
            "Item Description": "Infrared Temperature gun"
        },
        {
            "Id": 80,
            "Item Description": "Integrity Test Microscope"
        },
        {
            "Id": 81,
            "Item Description": "Intensity Meter"
        },
        {
            "Id": 82,
            "Item Description": "Leak Test Apperatus"
        },
        {
            "Id": 83,
            "Item Description": "Linear Mesh Counter"
        },
        {
            "Id": 84,
            "Item Description": "LOD Oven"
        },
        {
            "Id": 85,
            "Item Description": "Lux Meter "
        },
        {
            "Id": 86,
            "Item Description": "Magnehelic Gauge"
        },
        {
            "Id": 87,
            "Item Description": "Magnetic Stirror(Multipoint=12)"
        },
        {
            "Id": 88,
            "Item Description": "Magnetic Stirror(RPM Meter)"
        },
        {
            "Id": 89,
            "Item Description": "Measuring tape"
        },
        {
            "Id": 90,
            "Item Description": "Micro Meter"
        },
        {
            "Id": 91,
            "Item Description": "Mini Data Logger"
        },
        {
            "Id": 92,
            "Item Description": "Moisture Analyzer"
        },
        {
            "Id": 93,
            "Item Description": "Moisture Analyzer(Texture Analyzer)"
        },
        {
            "Id": 94,
            "Item Description": "Moisture Meter"
        },
        {
            "Id": 95,
            "Item Description": "Muffle Furnace"
        },
        {
            "Id": 96,
            "Item Description": "muffle Furnace Mapping (door opening)"
        },
        {
            "Id": 97,
            "Item Description": "Multi Meter"
        },
        {
            "Id": 98,
            "Item Description": "Nominal Aperture"
        },
        {
            "Id": 99,
            "Item Description": "ORP Meter"
        },
        {
            "Id": 100,
            "Item Description": "ORP Meter\/SENSOR"
        },
        {
            "Id": 101,
            "Item Description": "Oxygen meter"
        },
        {
            "Id": 102,
            "Item Description": "PH Meter"
        },
        {
            "Id": 103,
            "Item Description": "Photohelic gauge"
        },
        {
            "Id": 104,
            "Item Description": "PID Controller"
        },
        {
            "Id": 105,
            "Item Description": "Plug Gauge"
        },
        {
            "Id": 106,
            "Item Description": "Pocket microscope"
        },
        {
            "Id": 107,
            "Item Description": "Precision Pen microscope"
        },
        {
            "Id": 108,
            "Item Description": "Precision pin"
        },
        {
            "Id": 109,
            "Item Description": "Pressure gauge"
        },
        {
            "Id": 110,
            "Item Description": "Pressure Indicator"
        },
        {
            "Id": 111,
            "Item Description": "Pressure Switch"
        },
        {
            "Id": 112,
            "Item Description": "Pressure Switch"
        },
        {
            "Id": 113,
            "Item Description": "Pressure tranceducer"
        },
        {
            "Id": 114,
            "Item Description": "Pressure transmitter"
        },
        {
            "Id": 115,
            "Item Description": "RPM Indicator"
        },
        {
            "Id": 116,
            "Item Description": "Radius gauge"
        },
        {
            "Id": 117,
            "Item Description": "RH Controller With Semsor"
        },
        {
            "Id": 118,
            "Item Description": "RH Sensor"
        },
        {
            "Id": 119,
            "Item Description": "RH Transmitter"
        },
        {
            "Id": 120,
            "Item Description": "Rota Meter(Using Ultrasonic Flow Meter)"
        },
        {
            "Id": 121,
            "Item Description": "RPM Counter Meter"
        },
        {
            "Id": 122,
            "Item Description": "RPM Meter"
        },
        {
            "Id": 123,
            "Item Description": "RTD Sensor"
        },
        {
            "Id": 124,
            "Item Description": "Rubber ball"
        },
        {
            "Id": 125,
            "Item Description": "SS Scale"
        },
        {
            "Id": 126,
            "Item Description": "Scale"
        },
        {
            "Id": 127,
            "Item Description": "Scientific calculator"
        },
        {
            "Id": 128,
            "Item Description": "Slide Warmer"
        },
        {
            "Id": 129,
            "Item Description": "Slip Gauge"
        },
        {
            "Id": 130,
            "Item Description": "Snap gauge"
        },
        {
            "Id": 131,
            "Item Description": "sound Level Meter"
        },
        {
            "Id": 132,
            "Item Description": "spirit level"
        },
        {
            "Id": 133,
            "Item Description": "Digital protector"
        },
        {
            "Id": 134,
            "Item Description": "SPM Meter"
        },
        {
            "Id": 135,
            "Item Description": "SS Weight"
        },
        {
            "Id": 136,
            "Item Description": "Standard dies (B Type)"
        },
        {
            "Id": 137,
            "Item Description": "Standard dies (D Type)"
        },
        {
            "Id": 138,
            "Item Description": "standard Punch Height"
        },
        {
            "Id": 139,
            "Item Description": "Std. Height Gauge"
        },
        {
            "Id": 140,
            "Item Description": "Std. Height Punch Gauge"
        },
        {
            "Id": 141,
            "Item Description": "Std. Height Punch Gauge"
        },
        {
            "Id": 142,
            "Item Description": "Steel Scale"
        },
        {
            "Id": 143,
            "Item Description": "Stop Watch"
        },
        {
            "Id": 144,
            "Item Description": "strip chart recorder(Per Channel)"
        },
        {
            "Id": 145,
            "Item Description": "Tablet Hardness tester"
        },
        {
            "Id": 146,
            "Item Description": "Tachometer"
        },
        {
            "Id": 147,
            "Item Description": "TDS Meter"
        },
        {
            "Id": 148,
            "Item Description": "Temp. & RH Indicator"
        },
        {
            "Id": 149,
            "Item Description": "Temp Datalogger"
        },
        {
            "Id": 150,
            "Item Description": "Temperature controller"
        },
        {
            "Id": 151,
            "Item Description": "Temperature Gauge"
        },
        {
            "Id": 152,
            "Item Description": "Temperature gun"
        },
        {
            "Id": 153,
            "Item Description": "Temperature Indicator"
        },
        {
            "Id": 154,
            "Item Description": "Temperature  indicator With Sensor"
        },
        {
            "Id": 155,
            "Item Description": "Temperature Merter(Thermometer)"
        },
        {
            "Id": 156,
            "Item Description": "Temperature Probe"
        },
        {
            "Id": 157,
            "Item Description": "Temperature Sensor"
        },
        {
            "Id": 158,
            "Item Description": "Temperature Switch"
        },
        {
            "Id": 159,
            "Item Description": "Temperature transmitter"
        },
        {
            "Id": 160,
            "Item Description": "Test Sieve"
        },
        {
            "Id": 161,
            "Item Description": "Texture Analyzer"
        },
        {
            "Id": 162,
            "Item Description": "Thermohygrometer"
        },
        {
            "Id": 163,
            "Item Description": "Thermocouple"
        },
        {
            "Id": 164,
            "Item Description": "Thermostat"
        },
        {
            "Id": 165,
            "Item Description": "Thermostate Controller"
        },
        {
            "Id": 166,
            "Item Description": "Thickness gauge"
        },
        {
            "Id": 167,
            "Item Description": "Timer"
        },
        {
            "Id": 168,
            "Item Description": "Timer Total Analyzer"
        },
        {
            "Id": 169,
            "Item Description": "UV hour Meter"
        },
        {
            "Id": 170,
            "Item Description": "UV Intensity Meter"
        },
        {
            "Id": 171,
            "Item Description": "Vaccum Gauge"
        },
        {
            "Id": 172,
            "Item Description": "Vaccum Indicator"
        },
        {
            "Id": 173,
            "Item Description": "Vaccum Oven"
        },
        {
            "Id": 174,
            "Item Description": "Vaccum Switch"
        },
        {
            "Id": 175,
            "Item Description": "VAF Meter"
        },
        {
            "Id": 176,
            "Item Description": "Vernier Caliper"
        },
        {
            "Id": 177,
            "Item Description": "Volt meter"
        },
        {
            "Id": 178,
            "Item Description": "Wall Clock"
        },
        {
            "Id": 179,
            "Item Description": "Weighing Balance"
        },
        {
            "Id": 180,
            "Item Description": "Weight"
        },
        {
            "Id": 181,
            "Item Description": "Weight Box"
        },
        {
            "Id": 182,
            "Item Description": "Analog Magnehelic Gauge"
        },
        {
            "Id": 183,
            "Item Description": "Analog Pressure Gauge"
        },
        {
            "Id": 184,
            "Item Description": "Analog Pressure Switch"
        },
        {
            "Id": 185,
            "Item Description": "Analog Temperature Controller"
        },
        {
            "Id": 186,
            "Item Description": "Analog Timer"
        },
        {
            "Id": 187,
            "Item Description": "Analog Vaccum Gauge"
        },
        {
            "Id": 188,
            "Item Description": "Calculator"
        },
        {
            "Id": 189,
            "Item Description": "Dead Weight(200g,500g)"
        },
        {
            "Id": 190,
            "Item Description": "Dial thickness Gauge"
        },
        {
            "Id": 191,
            "Item Description": "Differential Pressure Transmitter"
        },
        {
            "Id": 192,
            "Item Description": "Digital Clamp Meter"
        },
        {
            "Id": 193,
            "Item Description": "Digital Magnehelic Gauge"
        },
        {
            "Id": 194,
            "Item Description": "Digital Preesure Switch"
        },
        {
            "Id": 195,
            "Item Description": "Digital Revolution Counter"
        },
        {
            "Id": 196,
            "Item Description": "Digital RPM Indicator"
        },
        {
            "Id": 197,
            "Item Description": "Digital Temperature Controller"
        },
        {
            "Id": 198,
            "Item Description": "Digital Temperature Indicator"
        },
        {
            "Id": 199,
            "Item Description": "digital thermo Hygrometer"
        },
        {
            "Id": 200,
            "Item Description": "Digital Vaccum Gauge"
        },
        {
            "Id": 201,
            "Item Description": "Flow Rota Meter"
        },
        {
            "Id": 202,
            "Item Description": "Hardness Gauge"
        },
        {
            "Id": 203,
            "Item Description": "High Pressure Switch"
        },
        {
            "Id": 204,
            "Item Description": "Ms Weight 2 kg"
        },
        {
            "Id": 205,
            "Item Description": "Ms Weight 500 g"
        },
        {
            "Id": 206,
            "Item Description": "Ms Weight 2kg,500g,200g"
        },
        {
            "Id": 207,
            "Item Description": "Multimeter (3.5 digit)"
        },
        {
            "Id": 208,
            "Item Description": "Multimeter (4.5 digit)"
        },
        {
            "Id": 209,
            "Item Description": "Multimeter (5.5 digit)"
        },
        {
            "Id": 210,
            "Item Description": "Plunger Type dial gauge"
        },
        {
            "Id": 211,
            "Item Description": "RH Controller"
        },
        {
            "Id": 212,
            "Item Description": "RH Meter"
        },
        {
            "Id": 213,
            "Item Description": "RH Temperature Sensor"
        },
        {
            "Id": 214,
            "Item Description": "RH Temperature Transmitter"
        },
        {
            "Id": 215,
            "Item Description": "Stainless Steel Scale"
        },
        {
            "Id": 216,
            "Item Description": "Standard dead Weight Box(12 pcs)"
        },
        {
            "Id": 217,
            "Item Description": "Temperature RH Sensor"
        },
        {
            "Id": 218,
            "Item Description": "Thermal Data Logger"
        },
        {
            "Id": 219,
            "Item Description": "Weight Box(1,2,5kg)"
        },
        {
            "Id": 220,
            "Item Description": "Weight Box(8 pcs)"
        },
        {
            "Id": 221,
            "Item Description": "Weight Box,1g to 200g(M1 Class)"
        },
        {
            "Id": 222,
            "Item Description": "Weight Box 1g to 200g(F2 Class)"
        },
        {
            "Id": 223,
            "Item Description": "Weight Box 1g to 200g(F1 Class)"
        },
        {
            "Id": 224,
            "Item Description": "RH Indicator"
        },
        {
            "Id": 225,
            "Item Description": "Hot Air Oven"
        },
        {
            "Id": 226,
            "Item Description": "RPM Controoler"
        },
        {
            "Id": 227,
            "Item Description": "Earth Tester"
        },
        {
            "Id": 228,
            "Item Description": "Digital Master Clock"
        },
        {
            "Id": "229",
            "Item Description": "Feeler Gauge"
        },
        {
            "Id": "230",
            "Item Description": "Compond Preesure Gauge"
        },
        {
            "Id": "231",
            "Item Description": "Measuring Bucket"
        },
        {
            "Id": "232",
            "Item Description": "Mesuring Cylinder"
        },
        {
            "Id": "233",
            "Item Description": "Water Bath"
        },
        {
            "Id": "234",
            "Item Description": "yash"
        }
    ];

   // let table = document.getElementById("tbltools");
    let tableBody = document.getElementById("tblBody");

    
    toolData.forEach((item) => {
        let tr = document.createElement("tr");
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

