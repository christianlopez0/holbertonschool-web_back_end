#!/usr/bin/env python3

import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension

async def main() -> None:
    """
    Calls async_comprehension coroutine and prints the result.

    This function awaits the async_comprehension coroutine and prints
    the list of random numbers that it returns.
    """
    result = await async_comprehension()
    print(result)

asyncio.run(main())
