from config import get_config
import message_parser
import event
from logger import get_logger, init_logger
import discord
import api
from connection import init_connections

CONFIG = get_config()
VERSION = "0.1.0"

init_logger(CONFIG["system"]["logger"])
logger = get_logger()
logger.info("OneDisc (By This-is-XiaoDeng)")
logger.info(f"当前版本：{VERSION}")

intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents, proxy=CONFIG["system"]["proxy"])


@client.event
async def on_ready() -> None:
    api.init(client, CONFIG)
    event.init(str(client.user.id))
    logger.info(f"成功登陆到 {client.user}")
    await init_connections(CONFIG["servers"])


@client.event
async def on_message(message: discord.Message) -> None:
    if message.guild and CONFIG["system"].get("enable_channel_event"):
        event.new_event(
            _type="message",
            detail_type="channel",
            _time=message.created_at.timestamp(),
            message_id=str(message.id),
            message=message_parser.parse_string(message.content),
            alt_message="",
            guild_id=str(message.guild.id),
            channel_id=str(message.channel.id),
            user_id=message.author.id
        )
    elif message.guild:
        event.new_event(
            _type="message",
            detail_type="group",
            _time=message.created_at.timestamp(),
            message_id=str(message.id),
            message=message_parser.parse_string(message.content),
            alt_message="",
            group_id=str(message.channel.id),
            user_id=message.author.id
        )
    else:
        event.new_event(
            _type="message",
            detail_type="private",
            _time=message.created_at.timestamp(),
            message_id=str(message.id),
            message=message_parser.parse_string(message.content),
            alt_message="",
            user_id=message.author.id
        )

client.run(CONFIG["account_token"], log_handler=None)

