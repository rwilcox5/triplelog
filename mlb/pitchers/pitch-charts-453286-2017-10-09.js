var allpitches = [110,50,22,200,0,42,200,0,20,110,81,41,111,77,34,310,40,48,111,44,57,411,39,94,100,100,36,210,37,52,111,96,60,111,38,53,100,88,14,300,100,78,111,44,26,100,77,58,110,21,27,100,21,100,211,35,50,110,72,33,100,100,32,100,100,13,100,43,9,110,52,55,111,67,39,111,55,66,110,31,35,210,50,62,111,89,55,411,0,63,300,87,80,100,100,52,111,32,33,111,85,33,411,38,61,110,40,71,311,92,78,111,54,34,310,21,51,110,20,26,111,11,33,100,0,0,100,100,34,100,0,0,400,0,25,411,45,71,111,27,56,110,60,38,111,90,7,400,33,100,411,12,87,300,74,100,311,28,42,400,0,68,411,15,57,100,100,77,300,100,100,111,11,48,100,83,0,100,0,34,111,84,61,100,0,12,111,60,51,100,85,100,111,69,50,411,9,56,100,0,24,111,89,23,311,61,48,111,46,24,111,67,37,100,100,56,311,54,70,110,69,68,311,49,87,311,64,73,300,100,97,100,60,92,311,71,72,211,35,63,300,68,87,300,84,98,300,100,98,110,62,78,400,17,81,400,0,80,111,100,70,111,11,24,400,0,54,411,0,62,310,41,42,111,81,12,300,81,100,100,51,0,111,66,15,111,53,27,200,3,76,111,34,52];
var allabs = [0,453286,445055,1,5,453286,592178,1,8,453286,519203,1,12,453286,575929,2,15,453286,450314,2,19,453286,656941,2,27,453286,518792,3,30,453286,608365,3,35,453286,500779,3,39,453286,445055,4,43,453286,592178,4,47,453286,519203,4,51,453286,575929,4,57,453286,450314,4,58,453286,656941,5,64,453286,518792,5,68,453286,608365,5,74,453286,500779,5,79,453286,445055,6,80,453286,592178,6,85,453286,519203,6,90,453286,575929,7,96,453286,450314,7,98,0,0,0];
var num_abs = 23;
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