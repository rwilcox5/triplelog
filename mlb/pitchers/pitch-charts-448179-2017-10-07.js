var allpitches = [111,37,26,111,41,41,100,84,0,211,73,45,100,100,25,111,100,47,200,0,83,100,36,70,111,31,32,200,74,20,100,64,86,111,57,31,100,8,10,200,0,95,111,71,61,111,58,52,211,76,75,100,0,99,100,0,40,110,44,71,110,31,85,100,0,100,200,0,63,110,66,34,210,60,33,200,100,22,111,82,42,110,34,61,111,51,80,200,0,78,111,61,24,111,54,34,111,59,45,200,0,83,100,6,77,100,0,70,110,4,68,111,28,50,111,72,40,211,21,88,100,22,12,210,76,42,200,100,96,200,100,52,110,72,23,200,100,0,100,100,32,110,74,25,111,79,65,111,31,45,211,73,70,100,3,50,100,8,55,111,47,24,111,46,39,210,56,63,110,92,74,200,37,82,200,37,100,110,45,35,111,78,63,111,56,31,110,43,60,211,15,56,110,77,27,211,31,57,200,92,18,200,100,13,111,53,38,211,46,66,100,16,59,211,64,54,100,46,100,100,32,98,110,29,64,111,93,0,200,0,100,110,28,66];
var allabs = [0,448179,444482,1,4,448179,572041,1,10,448179,502671,1,12,448179,502110,1,17,448179,518614,1,23,448179,455104,1,27,448179,571875,2,29,448179,606466,2,31,448179,592662,2,33,448179,444482,2,38,448179,572041,3,40,448179,502671,3,46,448179,502110,3,51,448179,518614,3,56,448179,455104,3,61,448179,571875,4,64,448179,606466,4,72,448179,592662,4,78,0,0,0];
var num_abs = 18;
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