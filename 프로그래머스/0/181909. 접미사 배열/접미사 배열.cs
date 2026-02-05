using System;
using System.Linq;

public class Solution {
    public string[] solution(string my_string) {
        string[] answer = new string[my_string.Length];

        for (int i = 0; i < my_string.Length; i++)
        {
            answer[i] = my_string.Substring(i);
        }

        return answer.OrderBy(t => t).ToArray();
    }
}