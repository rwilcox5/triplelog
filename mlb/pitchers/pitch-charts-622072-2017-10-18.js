var allpitches = [110,84,46,111,38,9,111,46,16,100,95,12,100,11,50,111,42,27,111,75,67,100,100,94,110,76,73,200,0,69,211,33,70,210,46,58,100,100,62,411,66,93,100,60,0,111,65,21,111,71,37,110,95,54,210,9,51,400,87,100,100,0,53,211,0,100,411,87,65,100,100,0,211,30,82,110,59,33,111,70,47,411,69,87,100,100,57,110,74,72,111,77,65,110,88,82,410,55,86,400,100,93,111,34,42,400,100,75,111,55,48,210,32,80,211,43,90,111,73,27,411,76,72,100,7,34,111,55,55,400,67,100,100,3,91,111,22,51,111,90,69,111,100,27,200,0,100,211,63,52,411,87,100,111,37,42,100,100,46,411,93,67,411,55,77,100,33,0,411,100,53,411,58,94,111,68,9,411,69,86,110,81,84,411,76,100,411,55,88,110,71,27,211,4,78,111,44,50,211,0,96,100,27,83,100,100,44,111,86,62];
var allabs = [0,622072,546991,1,3,622072,656941,1,7,622072,592178,1,11,622072,519203,2,16,622072,575929,2,17,622072,608365,2,22,622072,595879,2,25,622072,445055,2,28,622072,453562,3,32,622072,546991,3,37,622072,656941,3,40,622072,592178,4,47,622072,519203,4,52,622072,575929,4,54,622072,608365,5,61,622072,595879,5,63,622072,445055,5,67,622072,453562,5,70,0,0,0];
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