var allpitches = [111,20,28,-3.818101728365832,10.948824041677513,92.9,100,53,100,-7.140839601865572,12.135769870646762,93.7,111,49,37,-5.137917668019516,12.358917161252279,93.6,110,13,71,-6.4349244204126475,10.955124713966125,93.7,111,54,59,-7.379836343337096,11.384516902709665,93.8,110,44,22,-6.370903037229864,10.514585299168811,94.5,111,47,55,-8.147777287733664,11.282345496949679,94.6,300,100,100,-1.1732560448199745,0.3759571219797888,82.3,300,62,100,0.3774353445750516,-5.948379606144564,79.1,111,19,17,-3.991418785186644,11.586639751611923,93.7,110,47,60,-5.435830578882721,9.915370650264983,93.2,100,73,79,-4.761661197163008,9.048503096836944,93.8,100,0,52,-6.129304733552484,9.084716277554364,93.3,111,39,45,-2.4321480046652884,11.475296729084592,93.5,400,12,100,-11.766992629197276,6.552267043674757,88.0,111,26,68,-5.371332925751988,12.3209331609498,94.3,100,32,18,-4.351829547002892,11.001309165533868,94.3,110,34,77,-5.543471308686348,11.199736564756535,93.7,300,80,31,1.48688767653798,-4.312661635484112,80.8,111,51,53,-5.5664499038082,11.376168036092531,94.8,111,41,39,-3.278169010749276,11.91483907913646,93.8,310,58,62,3.990828868596888,-2.1570152376147957,79.7,100,41,14,-6.925840751275835,10.42336019399676,93.9,111,39,57,-6.827467309744728,10.30420482135954,94.6,110,7,52,-3.65051355349338,11.525293655406085,94.3,111,70,25,-4.839475270373376,11.283523556928648,94.1,311,72,100,0.6676704567550956,-3.8547804187547996,81.5];
var allabs = [0,2,623182,7,1,2,571740,7,5,3,572227,7,10,21,458015,8,16,3,594807,8,22,2,553993,8,24,3,571697,8,27,0,0,0];
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