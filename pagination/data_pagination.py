#!/usr/bin/env python3
"""
Script to demonstrate pagination with Popular_Baby_Names.csv.
"""

import pandas as pd
from typing import Tuple
from  _0_simple_helper_function import index_range

def load_data(filename: str) -> pd.DataFrame:
    """
    Loads the CSV data into a pandas DataFrame.

    Args:
        filename (str): The path to the CSV file.

    Returns:
        pd.DataFrame: A DataFrame containing the data from the CSV file.
    """
    return pd.read_csv(filename)

def paginate_data(df: pd.DataFrame, page: int, page_size: int) -> pd.DataFrame:
    """
    Paginates the DataFrame based on the given page and page size.

    Args:
        df (pd.DataFrame): The DataFrame to paginate.
        page (int): The page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        pd.DataFrame: A DataFrame containing the data for the specified page.
    """
    start_index, end_index = index_range(page, page_size)
    return df.iloc[start_index:end_index]

def main() -> None:
    """
    Main function to demonstrate pagination on Popular_Baby_Names.csv.
    """
    # Load the data
    filename = 'Popular_Baby_Names.csv'
    df = load_data(filename)

    # Pagination parameters
    page = 1
    page_size = 10

    # Get paginated data
    paginated_df = paginate_data(df, page, page_size)

    # Print the results
    print(f"Page {page} with page size {page_size}:")
    print(paginated_df)

if __name__ == '__main__':
    main()
