// https://leetcode.com/problems/number-of-1-bits/
int hammingWeight(uint32_t n) {
    int result = 0;
    while(n>0){
        if(n%2==1){
            result++;
        }
        n=n>>1;
    }
    return result;
}
