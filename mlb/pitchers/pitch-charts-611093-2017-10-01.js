var allpitches = [411,41,47,-2.0937960039283126,0.9262419858992983,82.6,411,72,48,-0.47577803425620635,-0.026744784665800186,83.2,411,25,42,-11.204288672039024,3.546918465613711,84.8,400,74,100,-2.036879679711808,0.6783338848967202,83.2,400,56,79,-11.733177971393129,3.152882838152041,83.9,400,0,21,-7.564131098516529,2.479592262258558,83.6,410,40,69,-10.981313214211,1.5748021787187305,83.0,411,7,51,-11.459093224645553,1.546294048025491,84.6,111,72,42,-5.8904973468928175,6.274374698956322,93.5,110,19,38,-8.497132771201533,7.640264960489416,92.9,411,39,34,-12.040901320743876,1.4512576277610796,85.1,100,32,5,-5.7280773445850155,6.05183223719095,93.9,100,53,1,-4.158875378411307,5.562518062990236,92.9,411,0,35,-11.504417488072919,0.7242485619408129,85.3,400,86,62,-2.995063542104449,0.06695160843969175,83.9,410,85,58,-2.4395624306970927,0.7560338985324947,83.5,410,70,70,-10.928587796677824,4.512482355669349,84.4,111,79,32,-6.539814192403061,6.804455113897182,94.1,100,100,60,-6.063129651808673,6.408377538604354,93.1,410,8,42,-10.6336466172673,-0.08069229486579446,82.5,110,58,58,-5.841879353333814,8.386672153980214,93.8,111,93,48,-5.862772429586323,8.338926950469597,94.2,111,72,22,-5.877238318178518,10.338388506555974,94.5,400,97,90,-9.756206478134857,4.2750949711374755,84.2,411,57,97,-12.39077611143264,2.257786471987354,85.8,410,56,64,-0.5052688191105348,1.4051149628968225,84.2,111,42,6,-6.852173212583013,8.835104373734474,93.4,311,42,64,2.9596325407116755,-3.479178533056463,83.1,111,58,23,-5.149572184145454,6.001809213871907,94.3];
var allabs = [0,3,596144,5,3,3,593528,5,9,21,609275,6,14,3,624585,6,18,3,460077,6,26,3,449181,6,29,0,0,0];
var num_abs = 6;
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