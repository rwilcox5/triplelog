var allpitches = [110,13,45,210,41,39,211,54,80,200,96,60,111,30,71,100,0,12,210,17,34,411,30,83,111,0,32,411,29,59,111,55,34,210,67,65,200,54,94,111,50,77,400,86,100,400,0,60,211,65,89,411,2,86,110,95,59,400,55,100,411,46,100,211,75,48,211,40,38,200,100,100,200,74,100,400,0,65,411,7,60];
var allabs = [0,201710060,3,1,1,3,201710060,3,4,1,8,201710060,20,6,1,11,201710110,3,1,2,17,201710110,3,3,2,21,201710110,3,6,2,27,0,0,0];
var num_abs = 6;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*5;returnabs[2*iii+1]=i*5+5;for (iiii=allabs[i*5+4];iiii<30;iiii++){        nabsc[iiii]+=1;}
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
function sendEvent(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendDate(i){var abn = returnabs[2*i]; return allabs[abn+1];}