#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict, Optional


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = 0, page_size: int = 10) -> Dict[str, Optional[int]]:
        """
        Returns a dictionary containing pagination information with deletion resilience.

        Args:
            index (int): The starting index of the current page.
            page_size (int): The number of items per page.

        Returns:
            Dict[str, Optional[int]]: A dictionary containing:
                - index: The current starting index of the page
                - next_index: The next index to query
                - page_size: The number of items per page
                - data: The dataset page
        """
        # Validate index and page_size
        assert isinstance(index, int) and index >= 0, "Index must be a non-negative integer"
        assert isinstance(page_size, int) and page_size > 0, "Page size must be a positive integer"

        # Get the indexed dataset
        dataset_indexed = self.indexed_dataset()

        # Get the current page data
        data = []
        for i in range(index, index + page_size):
            if i in dataset_indexed:
                data.append(dataset_indexed[i])

        # Determine the next index
        next_index = index + page_size
        if next_index not in dataset_indexed:
            next_index = None

        return {
            'index': index,
            'next_index': next_index,
            'page_size': page_size,
            'data': data
        }
