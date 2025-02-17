from telethon import events

async def read_chat_ids(client):
    dialogs = await client.get_dialogs()
    channel_info = [
        {
            "name": dialog.name,
            "id": dialog.id
        }
        for dialog in dialogs
    ]
    return channel_info

async def monitor_chat(client, chat_id):
    @client.on(events.NewMessage(chats=chat_id))
    async def handler(event):
        message = event.message
        message_info = {
            "sender": message.sender.username,
            "text": message.text,
        }
        return message_info
    await client.run_until_disconnected()

