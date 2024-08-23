#!/usr/bin/env python3
"""
This module provides a helper function for pagination.
"""

from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculates the start and end index for pagination.

    Given a page number and page size, this function returns a tuple
    containing the start and end indexes of the range of items to be
    displayed on that page.

    Args:
        page (int): The page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple with the start index and end index.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
