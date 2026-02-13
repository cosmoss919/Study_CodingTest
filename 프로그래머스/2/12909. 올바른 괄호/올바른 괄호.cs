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

/*
올바른 풀이
public bool solution(string s)
{
    var stack = new Stack<char>();

    foreach (var c in s)
    {
        if (c == '(')
        {
            stack.Push(c);
        }
        else // ')'
        {
            if (stack.Count == 0)
                return false;

            stack.Pop();
        }
    }

    return stack.Count == 0;
}

스택없이 풀이
public bool solution(string s)
{
    int count = 0;

    foreach (var c in s)
    {
        if (c == '(')
            count++;
        else
        {
            count--;
            if (count < 0)
                return false;
        }
    }

    return count == 0;
}


*/