#!/usr/bin/env python3
"""
Module containing the Server class for hypermedia pagination of popular baby names dataset.
"""

import csv
from typing import List, Dict, Optional
import math
index_range = __import__('0-simple_helper_function').index_range

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

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Optional[int]]:
        """
        Returns a dictionary containing pagination information.

        Args:
            page (int): The page number (1-indexed).
            page_size (int): The number of items per page.

        Returns:
            Dict[str, Optional[int]]: A dictionary containing pagination information including:
                - page_size: the length of the returned dataset page
                - page: the current page number
                - data: the dataset page
                - next_page: number of the next page, None if no next page
                - prev_page: number of the previous page, None if no previous page
                - total_pages: the total number of pages in the dataset
        """
        # Validate input arguments
        assert isinstance(page, int) and page > 0, "Page number must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, "Page size must be a positive integer"

        # Get the dataset and total number of records
        dataset = self.dataset()
        total_records = len(dataset)
        
        # Calculate total pages
        total_pages = math.ceil(total_records / page_size)
        
        # Get the current page data
        data = self.get_page(page, page_size)

        # Determine next and previous page numbers
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages
        }
