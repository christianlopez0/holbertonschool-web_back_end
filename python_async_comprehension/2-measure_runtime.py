#!/usr/bin/env python3

import asyncio
import time
from typing import Any

# Import the async_comprehension coroutine from the previous module
async_comprehension = __import__('1-async_comprehension').async_comprehension
async def measure_runtime() -> float:
    """
    Measures the total runtime of executing async_comprehension four times in parallel.

    This coroutine uses asyncio.gather to run async_comprehension four times concurrently,
    measures the total time taken for all four executions, and returns the runtime in seconds.

    Returns:
        float: The total runtime for executing async_comprehension four times.
    """
    start_time = time.time()
    
    # Run async_comprehension four times concurrently
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    
    end_time = time.time()
    
    return end_time - start_time
