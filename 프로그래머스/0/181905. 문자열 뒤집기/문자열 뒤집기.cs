using System;
using System.Linq;

public class Solution {
    public string solution(string my_string, int s, int e) {
        var temp = my_string.Substring(s, e - s + 1);
        my_string = my_string.Replace(temp, String.Join("", temp.Reverse()));
        return my_string;
    }
}