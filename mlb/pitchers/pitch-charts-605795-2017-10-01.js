var allpitches = [100,86,100,-0.7795045612473792,8.059672994283096,92.1,100,57,84,-6.3857096153457,13.13618036639952,96.9,100,38,95,-7.591261446443196,10.113069983247936,97.0,111,8,58,-7.8734888225109,11.203171158731328,96.3,111,37,19,-6.761064412779072,11.19152382909102,97.1,111,43,39,-2.667872225767872,11.111242966701228,97.1,111,28,68,-0.869287272823254,5.042482028725956,91.2,100,69,100,-1.719381580277748,5.197600606097244,93.0,111,34,21,-7.249368996560436,9.97770976828188,96.9,100,9,60,1.335494766460548,2.980319012372832,92.2,111,27,41,-8.913678481753813,9.079106162858869,97.1,110,56,55,-7.36042910289876,12.4115073182214,94.8,211,88,83,2.333131713262116,-0.8131394286673764,83.3,211,47,93,6.1092243836445235,-3.01579506321234,82.5,110,35,46,4.379611866884856,8.165185700213987,92.5,400,48,91,-7.8727774915665005,8.63634467332363,90.4,411,12,87,-7.772756808772115,9.139920780141372,91.4,100,92,51,-9.038307277299685,11.816479707833917,98.6,211,32,38,1.5837301697640243,-2.042724565957644,82.9,411,46,92,-9.579016517814647,8.04587227342188,91.8,100,0,30,-3.0847894339192923,12.165117523878479,95.6,111,24,65,-5.76993813483468,10.562900419205544,97.1,111,18,30,-2.597499023427564,12.19579787617248,97.5,111,28,0,-4.562737043127252,11.142635583476988,96.9,111,45,0,2.318404326104736,5.131259750763264,91.1,400,31,98,-8.9961738772371,8.840085980480243,91.2,110,47,73,-10.683734053116131,9.888826856885352,97.2,111,76,48,-7.493036994977519,11.835956947120092,97.6];
var allabs = [0,2,572191,3,5,3,461829,3,9,2,607208,3,11,3,547180,4,14,2,543685,4,19,20,502517,4,25,2,452252,4,28,0,0,0];
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