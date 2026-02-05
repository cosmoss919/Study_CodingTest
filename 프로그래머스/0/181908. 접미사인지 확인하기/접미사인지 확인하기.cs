using System;
using System.Linq;

public class Solution {
    public int solution(string my_string, string is_suffix)
    {
        string[] stirngArr = new string[my_string.Length];
        for (int i = 0; i < my_string.Length; i++)
        {
            stirngArr[i] = my_string.Substring(i);
        }

        return stirngArr.Contains(is_suffix) ? 1 : 0;
    }
}