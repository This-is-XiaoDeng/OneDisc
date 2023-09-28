from http_server import create_http_server
from logger import get_logger

logger = get_logger()


def init_connections(connection_list: list[dict]) -> None:
    for connection in connection_list:
        logger.debug(connection)
        match connection["type"]:
            case "http":
                create_http_server(connection)