var allpitches = [111,81,64,-9.813256178183336,5.456298262817247,94.2,100,37,0,-10.409540566989143,4.819140234724392,94.6,200,100,100,8.300599822024195,1.7653043925370822,85.0,210,61,74,7.172240989270108,1.9397965071532037,85.3,211,80,55,11.27694979476428,0.7241730238675572,84.7,200,100,84,8.496342212800773,1.9140981698677253,86.9,211,94,72,10.123015331474,1.7902843628377496,86.8,110,91,37,-7.382094786861476,5.836774266032803,94.7,100,89,13,-4.303209737867468,7.7142509575906955,94.9,111,100,59,1.1985092249570393,4.379250409877416,90.8,111,75,54,-1.890173334715676,8.859561352006697,94.1,210,46,69,5.677571034635825,2.2610793955530215,86.0,211,38,31,7.501664072598809,1.2150050033870254,85.7,211,100,57,7.172090725047356,5.627164001785514,85.8,110,80,44,0.7876131904841825,4.420355585252613,89.9,210,39,66,6.863488902553087,2.6550400334555095,85.4,211,68,100,6.0167787613720485,4.392138137595841,85.9,200,100,82,9.498748000122927,1.1492131143104567,85.2,211,28,70,8.796407840896798,2.1666411936801753,84.6,211,90,72,6.439440957152969,0.6024303977424971,86.6,210,73,72,8.609838609056103,3.4505807183392223,85.9,100,52,0,-4.571369167492607,10.220905207405156,94.1,100,100,22,-10.702155719870994,5.761306783519894,93.7,100,52,1,-9.934220747906533,3.5780544267178405,95.2,200,100,86,7.95660401505382,2.9339339165294795,87.9,100,100,84,1.723097829709186,3.4526101787553545,88.8,410,68,36,-5.7791798445167695,2.6495675906879774,85.5,111,100,51,0.8493476520618966,6.957968139909779,90.2,100,100,80,2.5335350425485785,4.867498132096455,91.1,211,50,68,8.195509283989342,2.0981203008435734,86.2,200,100,70,6.200225468514006,4.889980867664501,85.9,211,80,46,5.710534690288253,3.3334844170974174,86.8,211,100,61,6.063121165453545,2.7619541077725245,86.7,100,48,0,1.8648414519506593,3.0511889669394323,89.7,111,84,34,0.3950977977925628,7.297707858508826,91.5,210,46,80,9.191785579528975,0.7023635337820688,84.9,100,54,9,-7.795292660236985,6.368835211114887,93.7,111,20,43,-7.868821773126971,6.578859715215806,94.7,111,43,33,-6.776479723207615,6.9883657802555685,93.9,111,61,71,0.6208178451910813,5.976558023595112,87.6,200,100,100,6.699355618793133,4.844679817350604,87.7,211,80,55,8.33907195569837,2.6067078465344853,85.7,211,91,85,9.34890261294293,3.189936366373841,85.7,111,73,53,1.7324398513569665,3.356304375564576,90.2,211,58,75,5.796289288558594,6.153948026708749,86.4,111,50,44,-8.553716479631575,2.623900058765315,94.4,211,60,76,6.465396454367433,4.284649871613677,87.2,200,100,88,5.2616220622833225,3.5864752461928413,86.2,211,88,61,9.958709447176743,1.7495932336827953,86.3,400,100,96,-3.9235262337171477,2.3523624958522524,83.9,111,59,46,1.56889839237413,5.354135259400914,90.3,110,48,22,-8.48479114698737,3.919442058331194,92.2,100,100,90,0.7651614902854751,5.269289859390193,90.4,200,100,81,10.023727026381998,1.392986703564644,85.4,100,100,78,-0.5745752122655693,5.462021467868619,91.2,111,93,53,1.0800855811129233,4.169121558580101,92.0,211,35,27,6.366848000691521,2.7440756147294056,86.3,410,11,27,-7.739324046262551,6.191706487043261,85.8,400,29,85,-7.266257143957982,4.689270168072322,87.1,400,0,18,-7.6439372320698045,3.307561367399753,86.1,100,49,12,2.590059190621316,3.088732570801059,90.8,111,63,56,-0.9605115506010634,7.425232473999248,91.6,100,58,5,-8.616640792003285,6.112607502927256,93.1,400,79,98,-6.246846478969238,3.15945002046524,86.4,111,40,35,-8.72799962465044,6.661595740722294,93.9,100,0,46,-8.965538308707387,5.078921950874065,93.9,100,35,11,2.668949396399423,3.424058677311127,90.9];
var allabs = [0,2,458731,1,1,3,592450,1,7,23,544369,1,11,3,596142,1,14,3,595885,2,17,2,516770,2,19,14,543305,2,25,17,453056,2,30,2,453943,2,33,20,458731,3,39,3,592450,3,43,23,544369,3,45,3,596142,3,49,2,595885,3,51,3,516770,4,57,2,543305,4,62,14,453056,4,67,0,0,0];
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