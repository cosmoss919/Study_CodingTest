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

/*
using System;
using System.Collections.Generic;

public class Solution 
{
    public int[] solution(int[] progresses, int[] speeds)
    {
        var answer = new List<int>();
        var queue = new Queue<int>();

        // 1. 완료까지 걸리는 날짜 계산해서 큐에 저장
        for (int i = 0; i < progresses.Length; i++)
        {
            int day = (int)Math.Ceiling((100.0 - progresses[i]) / speeds[i]);
            queue.Enqueue(day);
        }

        // 2. 배포 묶기
        while (queue.Count > 0)
        {
            int current = queue.Dequeue();
            int count = 1;

            while (queue.Count > 0 && queue.Peek() <= current)
            {
                queue.Dequeue();
                count++;
            }

            answer.Add(count);
        }

        return answer.ToArray();
    }
}
*/