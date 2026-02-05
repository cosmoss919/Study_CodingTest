using System;
using System.Collections.Generic;

public class Solution {
    public List<int> solution(string[] intStrs, int k, int s, int l)
    {
        var answer = new List<int>();

        foreach (var intStr in intStrs)
        {
            int temp = int.Parse(intStr.Substring(s, l));
            if(temp > k)
            {
                answer.Add(temp);
            }
        }

        return answer;
    }
}