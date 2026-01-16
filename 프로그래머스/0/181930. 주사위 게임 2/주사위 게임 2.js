function solution(a, b, c) {
   if(((a+b+c) / a )=== 3) {
        return (a + b + c) * (a*a + b*b + c*c ) * (a*a*a + b*b*b + c*c*c );
   } else if(a !== b && a !== c && b !== c) {
        return a + b + c;
   } else {
        return (a + b + c) * (a*a + b*b + c*c );
   }
}