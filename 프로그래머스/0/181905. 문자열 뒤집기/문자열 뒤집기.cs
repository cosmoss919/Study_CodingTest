using System;
using System.Linq;

public class Solution {
    public string solution(string my_string, int s, int e) {
        var temp = my_string.Substring(s, e - s + 1);
        my_string = my_string.Replace(temp, String.Join("", temp.Reverse()));
        return my_string;
    }
}

/*
using System;

public class Solution {
    public string solution(string my_string, int s, int e) {
        char[] chr = my_string.ToCharArray();
        Array.Reverse(chr,s,e-s+1);
        return new string(chr);
    }
}
*/