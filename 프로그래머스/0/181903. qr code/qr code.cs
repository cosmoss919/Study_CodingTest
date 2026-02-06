using System;
using System.Text;

public class Solution {
    public string solution(int q, int r, string code) {
        var sb = new StringBuilder();
        for (int i = 0; i < code.Length; i++)
        {
            if (i % q == r)
            {
                sb.Append(code[i]);
            }
        }
        return sb.ToString();
    }
}