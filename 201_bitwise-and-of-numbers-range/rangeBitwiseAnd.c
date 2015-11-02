// https://leetcode.com/problems/bitwise-and-of-numbers-range/
int rangeBitwiseAnd(int m, int n) {
    int i;
for(i=0;m!=n;i++){
	m=m>>1;
	n=n>>1;
}
if(n==0){
	return 0;
}
return n<<i;
}
