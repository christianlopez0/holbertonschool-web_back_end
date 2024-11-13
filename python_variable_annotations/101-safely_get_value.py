#!/usr/bin/env python3
"""
More involved type annotations for safely retrieving a value from a dictionary.
"""
from typing import Mapping, Any, Union, TypeVar

T = TypeVar('T')


def safely_get_value(
    dct: Mapping[Any, Any], key: Any, default: Union[T, None] = None
) -> Union[Any, T]:
    """
    Safely get a value from the dictionary, returning the default if the key is not found.
    """
    return dct.get(key, default)
