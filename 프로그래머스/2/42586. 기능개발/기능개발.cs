using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int[] solution(int[] progresses, int[] speeds)
    {
        var answer = new List<int>();
        var remainList = new List<double>();
        for (int i = 0; i < progresses.Count(); i++)
        {
            var remain = Math.Ceiling((100.0 - progresses[i]) / speeds[i]);
            if (i == 0)
            {
                answer.Add(1);
            }
            else
            {
                if (remainList.Max() >= remain)
                {
                    answer[answer.Count - 1]++;
                }
                else
                {
                    answer.Add(1);
                }
            }
            
            remainList.Add(remain);
        }

        return answer.ToArray();
    }
}