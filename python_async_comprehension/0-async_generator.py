#!/usr/bin/env python3

import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronously generates random numbers between 0 and 10.

    This coroutine repeatedly waits for 1 second and then yields a
    random float between 0 and 10. It performs this operation 10 times.

    Yields:
        float: A random float value between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
