var allpitches = [110,44,25,-4.914464945153496,11.999788087021765,89.3,300,100,70,2.125124468913,6.868130536304532,83.0,100,62,81,-4.193566142257501,10.643057378568649,90.9,310,93,73,2.71461067407792,4.508851508650836,84.2,100,100,96,-3.289083039651228,12.468638993441278,91.0,311,59,68,-0.4361869646961228,3.6043412093208476,84.9,311,54,48,0.6502372946127564,4.009337808652548,83.4,100,88,89,-5.150903115628812,12.1755307307292,91.0,110,11,63,-3.9799562267496125,7.124740289704704,90.3,100,18,25,-3.424924653293892,9.526423303475772,90.5,311,27,65,2.478344575209816,4.582455542852545,84.3,100,53,9,-2.543076193913184,10.688947540347133,91.1,311,77,30,0.17346559569063358,3.840738435746568,85.2,311,100,58,0.6584833913216832,3.55463257655472,85.9,111,99,33,-5.0733199067318875,11.57002881892824,90.7,310,50,40,-0.6508360002410328,6.328602682121929,87.0,200,100,100,1.77274309264098,-5.2259740145391245,78.8,300,100,54,2.5478989786734116,3.9548854736266197,84.4,311,66,57,-0.6557768088937345,2.772015788806608,85.1,110,18,64,-3.51742260790974,13.868554206075599,90.8,100,12,88,-4.69865177913282,10.09534688020938,89.7,111,56,39,-3.677637620824188,9.800620745725752,89.5,300,100,83,1.994206230224052,5.981774417644236,86.4,300,100,100,3.1155985725766677,8.46083968232556,86.3,311,64,29,0.96860163633456,5.069536693100041,85.3,311,100,85,1.702296588112236,6.442442475289969,85.2,111,25,49,-6.029975848272096,11.926540292896393,91.2,311,64,59,-0.0577975561097028,7.495245643603044,85.8,111,49,64,-5.301407734877472,9.780170459091085,90.6,100,38,83,-5.5331450896201195,9.334529294855411,91.3,300,100,98,0.9701938624894908,7.2472584420513115,86.6,311,88,94,3.0376302910314115,6.370350687524963,84.8,111,52,18,-4.3457116680537125,12.05025341938848,91.1,311,60,28,1.290560225514108,0.1505333986890288,83.2,211,38,44,2.752833940549908,-3.472934976389988,76.7];
var allabs = [0,14,457727,7,8,3,543807,7,14,2,608324,7,15,2,514888,7,19,2,621043,8,29,2,493329,8,34,2,594828,8,35,0,0,0];
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