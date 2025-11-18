"""
Logger for the backend
"""

import logging
import sys

# Get logger
logger = logging.getLogger()

# Create formatter
formatter = logging.Formatter(
    fmt="%(asctime)s - %(levelname)s - %(message)s"
)

# Create handlers
stream_handler = logging.StreamHandler(sys.stdout)
stream_handler.setFormatter(formatter)

# Create file handler
file_handler = logging.FileHandler('app.log')
file_handler.setFormatter(formatter)

# Add handlers to logger
logger.handlers = [stream_handler, file_handler]

# Set log level
logger.setLevel(logging.INFO)