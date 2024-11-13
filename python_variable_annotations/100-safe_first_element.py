#!/usr/bin/env python3
"""
Duck typing - retrieve the first element of a sequence safely.
"""
from typing import Sequence, Any, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """
    Return the first element of a sequence if it exists, otherwise None.
    """
    return lst[0] if lst else None
