var allpitches = [111,69,26,4.487344436309298,13.08789197692036,99.7,111,62,25,3.217517984806734,12.988251430319835,99.9,111,60,45,1.0318134016884983,12.839859533331872,102.7,111,68,8,2.3662056081198792,14.813953458238622,102.2,111,33,12,3.869629066365931,14.216477608848862,101.6,100,100,12,1.8227013953188895,13.711746441505444,101.5,310,62,28,-6.406955665561881,3.886394551013458,87.0,111,82,51,7.296388462033995,13.093962499987729,102.3,110,38,69,1.9515822630320243,12.977461077381214,100.0,100,100,66,3.1839285500576597,13.267485243885433,101.5,311,80,41,-5.664985405137174,11.288555192327259,88.1,111,52,19,4.281723588840159,11.06411131387139,101.9,110,52,18,3.3564213626760235,12.373687233101233,101.4,100,80,0,4.194859269772681,11.399299639600528,101.7,111,64,5,2.6115718384131634,14.940976070567874,101.0,111,32,34,3.393755019444975,13.269270225958932,102.3,111,38,14,6.683807605438424,10.404854355851114,102.5,311,44,76,-5.57588460581462,2.3942456666492036,89.4,111,32,0,1.7264831636201547,11.810987613146233,101.1,111,77,4,5.442596878418216,14.278681546030601,102.0,111,68,34,6.281330834934125,12.415351390279334,103.8,311,46,55,-4.299908796925599,5.102526472997457,89.7,100,5,1,3.1256886379146707,9.653970798882556,100.5,100,0,34,3.086240957794332,10.249026249826295,100.6,111,7,51,2.872709475119975,11.075293708924761,100.3,111,7,37,4.175241784848863,11.239160088880991,101.2,111,50,39,2.902397700929015,11.10387996210898,100.7,100,91,40,3.6813703389593497,13.010699473197054,102.1,111,66,46,2.514808281090004,14.072955865920033,101.1,100,90,40,4.3200880253565614,13.958657510011754,102.4,111,47,39,1.0552495712055099,14.131345835705662,100.6,100,31,0,3.0664664791928553,11.626077511411154,103.5,111,50,13,1.1901782762128401,12.377666121540194,101.3,111,42,35,4.750244204158942,13.381721404898773,101.8];
var allabs = [0,3,543228,8,4,3,570482,8,8,3,596019,9,12,20,543401,9,17,20,608070,9,22,3,457803,9,27,2,467793,9,34,0,0,0];
var num_abs = 7;
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
        return allpitches[(firstp+ii)*6];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+2];
}
function sendXM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+3];
}
function sendYM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+4];
}
function sendVel(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+5];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendEvent(i){var abn = returnabs[2*i]; return allabs[abn+1];}