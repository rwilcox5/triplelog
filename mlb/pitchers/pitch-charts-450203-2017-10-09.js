var allpitches = [100,81,100,110,89,35,100,96,100,111,17,77,111,85,52,100,93,100,100,100,89,100,48,90,110,69,43,111,37,43,111,2,55,111,13,70,100,100,78,110,52,68,211,29,61,111,56,44,200,28,29,211,59,75,211,89,52,211,100,100,111,83,70,111,43,74,100,85,88,111,54,72,100,0,46,111,51,37,210,18,35,211,76,86,100,73,83,200,71,98,100,32,93,100,72,96,100,90,34,110,56,79,200,87,27,110,75,81,210,10,52,100,94,82,111,26,46,111,12,67,211,67,82,200,100,76,210,12,76,110,85,69,200,97,97,100,100,93,111,60,44,111,43,50,111,31,54,111,32,26,100,99,100,111,17,62,211,57,36,111,10,94,100,0,25,211,100,53,100,0,79,211,37,63,100,8,40,111,0,56,111,15,50,111,10,42,100,100,90,100,76,90,211,94,90,210,81,82,100,74,88,211,70,97,111,80,31,211,59,70,111,31,91,100,33,0,110,63,64,211,58,58,111,12,44,210,39,61,111,64,89,100,55,100,110,88,67,100,100,100,100,77,93,111,34,57,100,52,98];
var allabs = [0,450203,456030,1,5,450203,593428,1,10,450203,643217,1,12,450203,605141,1,15,450203,519048,1,20,450203,434670,2,24,450203,646240,2,28,450203,543877,2,32,450203,598265,2,37,450203,456030,2,43,450203,593428,2,47,450203,643217,3,50,450203,605141,3,52,450203,519048,3,53,450203,434670,3,60,450203,646240,4,65,450203,543877,4,71,450203,598265,4,75,450203,456030,5,77,450203,593428,5,83,0,0,0];
var num_abs = 20;
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