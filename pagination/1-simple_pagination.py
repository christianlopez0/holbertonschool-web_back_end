#!/usr/bin/env python3
"""
Module containing the Server class for paginating popular baby names dataset.
"""

import csv
from typing import List
from _0_simple_helper_function import index_range

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skip header row

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Returns the appropriate page of the dataset.

        Args:
            page (int): The page number (1-indexed).
            page_size (int): The number of items per page.

        Returns:
            List[List]: A list of rows for the specified page, or an empty list if out of range.

        Raises:
            AssertionError: If page or page_size are not positive integers.
        """
        # Validate input arguments
        assert isinstance(page, int) and page > 0, "Page number must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, "Page size must be a positive integer"

        # Get the dataset
        dataset = self.dataset()
        
        # Calculate the start and end index
        start_index, end_index = index_range(page, page_size)

        # Return the appropriate page or an empty list if out of range
        if start_index >= len(dataset):
            return []
        return dataset[start_index:end_index]
