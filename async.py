import asyncio

async def send_notification(user, delay):
    print(f"Начинаю отправку уведомления для {user}...")
    await asyncio.sleep(delay)
    print(f"Уведомление для {user} отправлено!")



async def main():
    users = [
        ("Alice", 2),
        ("Bob", 3),
        ("Charlie", 1),
        ("Diana", 4)
    ]

    tasks = []
    for user, delay in users:
        task = asyncio.create_task(send_notification(user, delay))
        tasks.append(task)

    await asyncio.gather(*tasks)



if __name__ == "main":
    asyncio.run(main())