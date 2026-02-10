using System;
using System.Linq;

public class Solution {
    public string[] solution(string[] strings, int n)
    {
        return strings.OrderBy(s => s[n]).ThenBy(s => s).ToArray();
    }
}