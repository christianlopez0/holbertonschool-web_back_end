#!/usr/bin/env python3
import asyncio
from wait_random import wait_random  # Import wait_random from the previous file

def task_wait_random(max_delay: int) -> asyncio.Task:
    return asyncio.create_task(wait_random(max_delay))

