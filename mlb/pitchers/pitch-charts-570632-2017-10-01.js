var allpitches = [111,30,69,110,30,67,100,0,44,100,0,32,100,0,48,111,38,62,111,37,32,100,0,49,400,8,63,111,45,45,400,15,84,111,19,72,111,75,40,111,24,73,100,0,39,400,11,91,110,76,69,100,100,82,110,56,67,111,31,23,100,0,26,100,0,73,100,0,61,100,29,89,310,52,31,111,0,37,400,67,100,411,7,37,111,79,34,111,34,88,500,50,100,500,50,100,500,50,100,500,50,100,111,7,62,111,38,72,111,8,48,100,15,98,411,33,93,411,0,41,300,17,23,100,0,54,111,18,23,411,29,65,300,0,0,400,25,86,411,16,54,400,37,92,100,83,86,110,13,65,100,100,57,111,13,61,311,100,62,100,97,70,400,100,83,311,55,60,111,28,49,100,7,51,310,49,76,100,0,66,100,0,71,111,4,56,100,0,11,110,85,65,310,23,22,100,100,40,311,68,44,100,17,31,110,69,31,410,70,57,100,93,77,300,100,65,311,65,27,100,0,31,100,1,88,111,18,76,111,27,99,100,11,20,411,32,34,310,25,63,300,100,73,100,0,29,111,22,53,300,34,8,111,46,23,100,0,42,110,82,66,100,99,31,100,79,0,411,28,84,411,31,80,300,1,31,111,10,84,111,16,58,411,35,63,111,62,45,100,0,79,411,46,86,311,100,94,111,53,31,311,41,34,311,78,100,400,61,89,100,0,23,400,44,85,110,49,55,111,41,64,111,22,56,411,14,58];
var allabs = [0,570632,645277,1,1,570632,435559,1,7,570632,518692,1,13,570632,455976,1,14,570632,572669,2,20,570632,547004,2,24,570632,621020,2,30,570632,607054,2,34,570632,608331,2,37,570632,645277,3,40,570632,435559,3,44,570632,518692,3,47,570632,455976,3,52,570632,572669,3,56,570632,547004,3,63,570632,621020,3,67,570632,607054,4,73,570632,608331,4,76,570632,645277,4,79,570632,435559,5,86,570632,518692,5,91,570632,455976,5,93,570632,572669,5,102,570632,547004,5,109,0,0,0];
var num_abs = 24;
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