#!/usr/bin/env python3
import asyncio
import time
from wait_n import wait_n  # Import wait_n from the previous file

def measure_time(n: int, max_delay: int) -> float:
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    
    total_time = end_time - start_time
    return total_time / n
