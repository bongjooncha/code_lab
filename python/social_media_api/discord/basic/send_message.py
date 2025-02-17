import discord

async def send_message(client, channel_id, message):
    channel = client.get_channel(channel_id)
    if channel:
        await channel.send(message)
    else:
        print("채널을 찾을 수 없습니다.")


async def send_embed_messsage(client, channel_id, title, description, color):
    channel = client.get_channel(channel_id)
    if channel:
        embed = discord.Embed(title=title, description=description, color=color)
        await channel.send(embed=embed)
    else:
        print("채널을 찾을 수 없습니다.")
