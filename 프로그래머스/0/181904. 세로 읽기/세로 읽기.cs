using System;
using System.Text;

public class Solution {
    public string solution(string my_string, int m, int c) {
        var sb = new StringBuilder();
        for(int i = c; i <= my_string.Length; i+= m)
        {
            sb.Append(my_string[i - 1]);
        }
        return sb.ToString();
    }
}