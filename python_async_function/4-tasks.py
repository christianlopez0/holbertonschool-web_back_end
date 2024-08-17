#!/usr/bin/env python3
import asyncio
import heapq
from typing import List
from task_wait_random import task_wait_random  # Import task_wait_random

async def task_wait_n(n: int, max_delay: int) -> List[float]:
    delays = []
    heap = []

    # Create a list of tasks to execute
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    
    # Gather results in order of completion
    for task in asyncio.as_completed(tasks):
        delay = await task
        heapq.heappush(heap, delay)
    
    # Convert heap to a sorted list
    while heap:
        delays.append(heapq.heappop(heap))
    
    return delays
