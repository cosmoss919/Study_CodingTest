using System;
using System.Collections.Generic;

public class Solution {
    public bool solution(string s)
    {
        var stack = new Stack<char>();
        foreach (var c in s)
        {   
            if(stack.Count == 0 || c == '(')
            {
                stack.Push(c);
            }
            else if (c == ')' && stack.Peek() == '(')
            {
                stack.Pop();
            }
        }

        return stack.Count == 0;
    }
}