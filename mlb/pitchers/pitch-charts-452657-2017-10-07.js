var allpitches = [111,73,34,110,52,44,111,47,31,100,0,28,211,14,83,110,85,53,100,99,78,111,55,38,110,36,48,100,17,80,111,83,69,211,34,59,110,21,56,100,25,100,111,88,40,100,57,0,100,100,33,110,68,31,100,100,25,111,38,27,100,100,43,410,50,74,111,54,97,111,59,51,411,44,77,111,64,70,111,67,34,100,100,42,211,73,44,100,100,19,411,32,65,110,45,24,211,25,64,100,31,18,100,32,87,111,44,47,200,4,89,111,90,41,210,59,10,111,51,22,111,95,56,100,11,28,100,14,80,111,62,27,100,9,76,411,69,50,100,36,0,100,0,9,111,67,51,100,97,47,100,100,31,111,69,74,411,77,53,211,35,63,100,91,2,411,67,45,200,100,29,200,85,71,111,25,36,111,22,34,200,11,100,411,68,51,111,59,34,100,56,0,100,31,2,200,100,2,100,54,8,100,100,42,200,0,73,110,62,49,111,98,46,400,47,100,111,100,77,111,41,50,211,40,47,411,68,75,111,56,11,200,5,100,111,31,36,100,100,58,111,23,75,100,100,31,111,50,74,111,62,0,400,0,91,111,75,68];
var allabs = [0,452657,607208,1,1,452657,547180,1,5,452657,543685,1,8,452657,502517,1,12,452657,475582,2,15,452657,150029,2,20,452657,446308,2,24,452657,572191,3,26,452657,461829,3,29,452657,607208,3,31,452657,547180,4,38,452657,543685,4,41,452657,502517,4,44,452657,475582,5,49,452657,150029,5,53,452657,446308,5,56,452657,572191,5,64,452657,435062,5,68,452657,607208,5,73,452657,547180,6,81,452657,543685,6,83,452657,502517,6,86,0,0,0];
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