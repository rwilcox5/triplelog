int allpitches[] = {111,35,58,210,44,72,111,99,66,311,15,99,100,0,93,100,26,21,111,22,47,111,39,65,211,26,85,111,35,68,110,85,62,110,40,58,300,56,100,111,9,95,100,41,1,111,84,63,111,71,18,100,94,100,311,0,100,111,45,55,100,78,100,100,100,89,111,89,82,111,54,52,110,48,74,110,53,62,300,100,63,311,14,50,300,38,100,110,38,73,310,45,48,110,59,80,311,25,100,100,82,100,110,84,86,311,45,62,111,61,65,110,91,73,300,93,57,111,71,66,111,25,81,110,36,54,311,32,59,100,100,96,300,39,100,210,31,73,100,0,73,110,73,68,211,53,34,110,61,58,111,46,52,100,4,75,100,17,93,111,48,16,311,44,99,110,37,60,311,93,81,110,53,64,100,91,78,111,44,89,100,27,23,111,51,75,411,57,78,111,6,30,100,0,34,411,62,70,310,81,66,100,33,100,111,42,39,310,43,22,100,38,85,200,87,45,300,100,51,311,50,80,310,65,86,210,36,44,310,58,72,210,69,43,100,58,91,311,22,81,111,54,5,311,51,88,110,36,42,300,100,100,111,40,42,100,83,100,110,35,89,300,15,100,111,78,66,311,23,73,100,0,70,100,55,100,100,26,18,110,56,76,411,51,69,300,33,100,111,23,42,311,29,18,110,27,67,110,10,78,110,64,71,110,83,40,110,77,59,300,22,100,411,62,100,111,93,63,100,100,63,110,58,67,300,94,75,111,36,86,111,17,53,100,90,53,111,29,10,110,74,46,200,36,100,110,62,73,300,70,100,300,100,52,311,77,87,110,60,79,311,63,54,200,12,88,311,76,97,110,90,71,200,65,16,200,27,95,311,59,100,111,61,65,100,66,100,100,20,100,110,78,57,111,100,63,300,56,97,100,0,65,111,23,43,400,68,100,100,87,26,100,5,72,111,0,73,110,84,91,111,28,29,310,51,63,100,11,87,111,22,51,311,0,100,311,49,31,300,100,78,200,80,19,311,49,75,311,50,59,111,52,65,300,78,36,311,36,59,100,100,42,111,13,37,100,95,87,100,3,67,110,46,70,111,2,68,111,49,38,100,55,100,311,44,93,100,100,83,311,65,100,111,73,55,300,26,100,311,41,72,100,0,32,110,81,55,300,100,100,300,90,100,100,95,84,110,78,56,410,69,75,300,100,90,100,100,85,300,100,100,411,53,59,111,81,65,111,80,14,110,49,68,111,90,46,111,70,12,300,99,99,100,7,40,111,20,37,100,48,100,111,54,69,111,18,44,111,7,7,400,85,100,311,100,90,111,75,61,310,55,80,100,67,18,310,73,69,411,60,71,110,36,67,111,76,80,100,100,100,100,95,0,110,78,25,100,100,12,100,100,20,111,51,32,111,74,26,111,100,40,100,100,97,111,68,79,111,79,95,111,78,44};
int allabs[] = {0,477132,543807,1,4,477132,608324,1,7,477132,514888,1,9,572971,621035,1,10,572971,457759,1,17,572971,641355,1,20,572971,624577,1,23,477132,621043,2,24,477132,493329,2,30,477132,435263,2,33,572971,571771,2,36,572971,608369,2,37,572971,523253,2,41,477132,503556,3,46,477132,502210,3,49,477132,572971,3,54,477132,543807,3,57,572971,605131,3,60,572971,477132,3,63,572971,621035,3,66,477132,608324,4,69,477132,514888,4,75,477132,621043,4,78,477132,493329,4,82,572971,457759,4,85,572971,641355,4,90,572971,624577,4,95,477132,435263,5,97,477132,503556,5,98,477132,502210,5,101,572971,571771,5,105,572971,608369,5,106,572971,523253,5,111,477132,572971,6,116,477132,543807,6,123,477132,608324,6,127,572971,605131,6,128,572971,477132,6,132,572971,621035,6,137,572971,457759,6,141,572971,641355,6,145,477132,514888,7,149,477132,621043,7,150,477132,493329,7,151,477132,435263,7,155,572971,624577,7,160,572971,571771,7,165,572971,608369,7,167,502748,523253,7,172,502748,605131,7,178,453344,503556,8,180,453344,502210,8,186,453344,136860,8,188,606965,518586,8,192,606965,621035,8,193,606965,457759,8,197,445276,543807,9,202,445276,608324,9,210,445276,514888,9,211,0,0,0};
int num_abs = 59;
int nabs[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
int returnabs[200];

int getData(){
	int i; int iii = 0; int iiii; int ii = 477132;
	for (i=0;i<num_abs;i++){
		if (iii<100){
			if (allabs[i*4+1]==ii){
				returnabs[2*iii]=i*4;
				returnabs[2*iii+1]=i*4+4;
				for (iiii=allabs[i*4+3];iiii<30;iiii++){	nabs[iiii]+=1;}
				iii++;
			}
		}

	}
	return iii;
}

int sendAb(int i){
	return allabs[returnabs[2*i+1]]-allabs[returnabs[2*i]];
}
int sendAge(int i, int ii){
	int firstp = allabs[returnabs[2*i]];
	return allpitches[(firstp+ii)*3];
}

int sendX(int i, int ii){
	int firstp = allabs[returnabs[2*i]];
	return allpitches[(firstp+ii)*3+1];
}
int sendY(int i, int ii){
	int firstp = allabs[returnabs[2*i]];
	return allpitches[(firstp+ii)*3+2];
}
int sendInn(int i){
	return nabs[i];
}
int sendBatter(int i){
	int abn = returnabs[2*i];
	return allabs[abn+2];
}