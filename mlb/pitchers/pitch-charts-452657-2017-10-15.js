var allpitches = [110,61,52,100,100,79,111,73,100,111,49,31,110,66,57,111,60,67,111,73,50,100,80,99,110,25,67,100,99,78,100,95,42,100,14,59,110,79,66,100,100,55,100,80,82,100,100,65,111,45,52,111,76,42,111,48,69,100,57,20,110,51,47,110,61,51,111,40,47,100,71,91,111,0,81,110,81,43,100,100,48,200,0,76,110,83,70,400,100,85,111,82,67,100,100,47,100,74,5,210,65,35,111,34,47,110,89,67,110,46,74,111,21,13,210,64,77,110,90,39,111,60,46,100,100,25,400,84,78,400,100,52,100,64,0,110,63,61,100,0,78,100,56,88,111,23,83,110,71,77,100,13,1,110,72,28,400,75,100,400,81,100,111,38,90,100,92,93,100,95,40,111,66,45,211,52,56,111,33,63,100,82,90,100,100,36,100,87,11,110,65,31,111,69,72,100,100,40,110,81,58,411,85,97,100,100,44,100,0,91,111,18,71,100,87,19,100,100,20,211,53,100,100,44,0,211,60,53,200,100,56,411,66,59,200,100,32,111,86,44,200,47,100,111,38,37,200,84,0,110,52,90,100,62,100,111,63,68,111,54,51,211,46,78,200,100,12,100,0,84,211,85,62,100,59,12,400,85,81,110,51,57,111,54,22,111,100,35,100,29,79,111,42,54,111,32,40,200,19,100,100,1,49,111,45,62,400,87,100];
var allabs = [0,452657,621035,1,4,452657,457759,1,6,452657,641355,1,7,452657,571771,2,12,452657,523253,2,19,452657,605131,2,25,452657,624577,2,32,452657,518586,2,35,452657,448179,3,38,452657,621035,3,41,452657,457759,3,45,452657,641355,3,49,452657,571771,3,55,452657,523253,4,60,452657,605131,4,65,452657,624577,4,72,452657,518586,4,77,452657,518586,5,82,452657,434158,5,87,452657,621035,5,91,452657,457759,5,96,452657,641355,5,103,0,0,0];
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