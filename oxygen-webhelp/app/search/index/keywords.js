define(function() {var keywords=[{w:"Acey-Deucey",p:["p0"]},{w:"Backgammon",p:["p1"]},{w:"Bearing",p:["p2"]},{w:"Off",p:["p2"]},{w:"Before",p:["p3"]},{w:"Beginning",p:["p3"]},{w:"the",p:["p3","p6","p9"]},{w:"Game",p:["p3","p6","p8","p9"]},{w:"Capture",p:["p4"]},{w:"First",p:["p5"]},{w:"Roll",p:["p5"]},{w:"Playing",p:["p6"]},{w:"Points",p:["p7"]},{w:"Required",p:["p8"]},{w:"Pieces",p:["p8"]},{w:"Setting",p:["p9"]},{w:"Up",p:["p9"]},{w:"Types",p:["p10"]},{w:"of",p:["p10"]},{w:"Rolls",p:["p10"]}];
var ph={};
ph["p0"]=[0];
ph["p1"]=[1];
ph["p2"]=[2, 3];
ph["p3"]=[4, 5, 6, 7];
ph["p4"]=[8];
ph["p5"]=[9, 10];
ph["p6"]=[11, 6, 7];
ph["p7"]=[12];
ph["p8"]=[13, 7, 14];
ph["p9"]=[15, 16, 6, 7];
ph["p10"]=[17, 18, 19];
     return {
         keywords: keywords,
         ph: ph
     }
});
