var allpitches = [111,82,61,111,45,49,110,87,73,100,6,74,100,64,100,100,96,65,110,50,80,111,0,45,111,6,56,100,20,4,111,75,65,111,18,56,110,83,56,100,100,78,100,77,89,111,63,51,111,100,59,111,73,58,100,57,30,111,47,62,100,94,63,100,91,74,111,88,59,100,100,88,310,73,37,100,37,9,111,100,62,110,20,62,110,76,65,100,100,41,111,3,28,400,96,100,100,93,96,111,56,68,110,46,62,111,86,44,100,71,100,311,10,67,111,22,52,311,49,68,100,27,87,311,36,100,311,27,100,100,88,100,311,22,77,100,8,93,100,94,100,311,28,50,311,0,90,110,49,47,310,86,68,311,13,74,310,75,89,300,0,100,111,3,40,311,9,88,100,83,74,310,26,66,311,14,68,110,0,73,100,34,100,311,62,56,110,6,47,400,83,97,111,47,16,111,14,67,100,6,51,110,79,66,310,65,47,100,96,71,111,80,45,100,97,100,311,22,61,300,6,87,100,100,81,311,49,62,300,78,8,110,76,71,311,29,72,100,83,100,100,16,100,311,36,43,111,59,41,111,37,28,100,9,100,111,31,66];
var allabs = [0,572971,458731,1,2,572971,592450,1,8,572971,596142,1,12,572971,544369,2,17,572971,543305,2,18,572971,516770,2,20,572971,595885,2,23,572971,453943,2,28,572971,452104,3,34,572971,458731,3,36,572971,592450,3,39,572971,596142,3,43,572971,544369,3,49,572971,543305,4,52,572971,516770,4,56,572971,595885,4,60,572971,453943,5,62,572971,452104,5,66,572971,458731,5,71,572971,592450,5,77,572971,596142,5,79,572971,544369,5,86,0,0,0];
var num_abs = 22;
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