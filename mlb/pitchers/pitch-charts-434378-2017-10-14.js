var allpitches = [100,3,31,110,32,85,111,28,38,111,19,37,111,40,69,111,33,14,311,88,84,311,90,91,110,71,76,311,91,85,300,91,100,311,86,66,110,35,71,111,0,43,210,71,69,311,83,100,110,65,51,100,33,89,310,71,60,311,70,60,100,71,94,111,55,55,110,20,77,111,0,55,100,0,18,111,47,49,300,100,100,311,47,24,311,41,54,311,71,75,100,90,70,100,79,88,111,63,75,111,42,32,111,47,43,111,55,68,111,60,66,100,65,97,110,58,46,200,84,100,100,14,38,111,46,66,111,32,32,311,83,60,110,82,82,111,60,63,111,2,24,110,35,90,111,16,56,311,64,62,111,52,46,211,28,37,311,89,56,200,0,60,110,64,90,111,65,47,111,57,65,110,59,58,311,80,43,311,99,57,110,9,65,111,36,45,110,79,28,311,83,78,110,25,26,111,62,45,100,3,16,311,98,49,300,81,88,100,16,0,111,32,67,100,0,62,110,43,73,210,66,67,411,13,82,111,72,42,110,70,62,200,100,100,311,68,99,111,34,52,111,27,51,111,1,30,210,56,43,311,83,98,311,100,99,200,61,97,210,70,79,300,82,100,111,77,41,100,12,23,100,23,12,111,37,57,311,68,68,300,100,96,311,100,100,100,0,59,311,61,73,111,89,33,111,48,17,310,68,77,310,69,80,200,0,53,311,98,96,311,100,67,110,44,58,100,0,43,211,34,48,400,17,100,111,26,8,110,35,79,311,52,75,300,100,100,300,90,100,300,100,100,111,22,32,111,6,76,210,25,72,111,23,45,111,64,23,300,92,97,311,77,63,111,16,19,100,82,13,311,67,68];
var allabs = [0,434378,458731,1,8,434378,592450,1,12,434378,544369,1,14,434378,596142,2,17,434378,595885,2,20,434378,516770,2,24,434378,543305,2,30,434378,453943,3,35,434378,452104,3,37,434378,458731,3,44,434378,592450,4,47,434378,544369,4,50,434378,596142,4,53,434378,595885,5,57,434378,516770,5,60,434378,543305,5,62,434378,453943,5,64,434378,452104,5,71,434378,458731,6,75,434378,592450,6,79,434378,544369,6,82,434378,596142,7,85,434378,595885,7,91,434378,516770,7,95,434378,543305,7,97,434378,453943,8,100,434378,452104,8,104,434378,458731,8,109,434378,592450,9,115,434378,544369,9,116,434378,596142,9,118,434378,595885,9,124,0,0,0];
var num_abs = 32;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*4;returnabs[2*iii+1]=i*4+4;for (iiii=allabs[i*4+3];iiii<30;iiii++){        nabsc[iiii]+=1;}
iii++;}}}
return iii;}
function sendAb(i){
return allabs[returnabs[2*i+1]]-allabs[returnabs[2*i]];
}
function sendAge(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+2];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}