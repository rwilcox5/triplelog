var allpitches = [111,35,68,110,85,62,110,40,58,300,56,100,111,9,95,100,41,1,111,84,63,111,71,18,100,94,100,311,0,100,111,45,55,100,78,100,100,100,89,111,89,82,100,82,100,110,84,86,311,45,62,111,61,65,110,91,73,300,93,57,111,71,66,111,25,81,110,53,64,100,91,78,111,44,89,100,27,23,111,51,75,411,57,78,111,6,30,100,0,34,411,62,70,110,36,42,300,100,100,111,40,42,100,83,100,110,35,89,300,15,100,111,78,66,311,23,73,100,0,70,100,55,100,100,26,18,110,56,76,411,51,69,110,83,40,110,77,59,300,22,100,411,62,100,111,93,63,100,100,63,110,58,67,300,94,75,111,36,86,111,17,53,111,61,65,100,66,100,100,20,100,110,78,57,111,100,63,300,56,97,100,0,65,111,23,43,400,68,100,100,87,26,100,5,72,111,0,73,110,84,91,111,28,29,310,51,63,100,11,87,111,22,51,311,0,100,100,95,87,100,3,67,110,46,70,111,2,68,111,49,38,100,55,100,311,44,93,100,100,83,311,65,100,111,73,55,300,26,100,311,41,72];
var allabs = [0,572971,621035,1,1,572971,457759,1,8,572971,641355,1,11,572971,624577,1,14,572971,571771,2,17,572971,608369,2,18,572971,523253,2,22,572971,605131,3,25,572971,477132,3,28,572971,621035,3,31,572971,457759,4,34,572971,641355,4,39,572971,624577,4,44,572971,571771,5,48,572971,608369,5,49,572971,523253,5,54,572971,605131,6,55,572971,477132,6,59,572971,621035,6,64,572971,457759,6,68,572971,641355,6,72,572971,624577,7,77,572971,571771,7,82,572971,608369,7,84,0,0,0];
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