var allpitches = [110,73,41,100,0,36,111,28,23,111,54,45,300,100,70,311,87,62,211,32,78,111,61,5,200,76,100,400,40,100,100,99,0,100,0,58,100,100,52,111,29,69,110,16,34,200,100,95,100,96,79,100,100,55,300,100,96,400,55,99,100,100,36,300,51,19,110,85,51,111,39,23,111,71,21,111,41,34,111,15,45,111,60,30,111,76,23,111,10,48,411,34,49,111,66,0,310,80,62,111,18,9,311,77,66,111,34,1,200,64,100,400,37,100,100,72,0,311,96,67,310,86,76,100,0,32,300,100,100,311,62,53,100,64,5,410,28,70,111,69,31,300,85,100,110,51,40,111,71,24,100,100,0,400,78,100,100,63,3,110,35,17,111,61,2,111,100,17,200,100,100,400,46,97,110,68,76,411,32,89,410,79,37,111,81,33,310,82,38,400,69,97,111,29,9,400,79,100,111,59,37,110,77,58,100,100,84,111,57,43];
var allabs = [0,519144,543807,1,4,519144,502210,1,11,519144,514888,1,14,519144,621043,1,19,519144,503556,1,21,519144,608324,1,25,519144,493329,2,29,519144,594828,2,32,519144,435263,2,40,519144,543807,2,44,519144,502210,2,47,519144,514888,2,53,519144,621043,2,56,519144,503556,3,60,519144,608324,3,62,519144,493329,3,67,519144,594828,3,70,0,0,0];
var num_abs = 17;
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