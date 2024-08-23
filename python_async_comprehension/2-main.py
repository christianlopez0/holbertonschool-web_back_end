#!/usr/bin/env python3

import asyncio

measure_runtime = __import__('2-measure_runtime').measure_runtime

async def main() -> float:
    """
    Calls measure_runtime coroutine and returns the runtime.

    This function awaits the measure_runtime coroutine to get the total runtime and
    returns the measured runtime.
    """
    return await measure_runtime()

print(
    asyncio.run(main())
)
