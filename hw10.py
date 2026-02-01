import sqlite3

# Подключение к базе данных SQLite
conn = sqlite3.connect('shop.db')
cursor = conn.cursor()

# Создание таблицы Products
cursor.execute('''
CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    quantity INTEGER
)
''')

# Очистка таблицы (чтобы при повторном запуске не было дублей)
cursor.execute('DELETE FROM Products')
conn.commit()

# Вставка данных
cursor.execute(
    "INSERT INTO Products (name, price, quantity) VALUES (?, ?, ?)",
    ('Laptop', 1200.5, 5)
)
cursor.execute(
    "INSERT INTO Products (name, price, quantity) VALUES (?, ?, ?)",
    ('Phone', 800.0, 10)
)
cursor.execute(
    "INSERT INTO Products (name, price, quantity) VALUES (?, ?, ?)",
    ('Tablet', 300.0, 0)
)
conn.commit()

# Обновление количества Laptop до 10
cursor.execute(
    "UPDATE Products SET quantity = ? WHERE name = ?",
    (10, 'Laptop')
)
conn.commit()

# Удаление товаров с количеством 0
cursor.execute(
    "DELETE FROM Products WHERE quantity = 0"
)
conn.commit()

# Получение итоговых данных
cursor.execute("SELECT * FROM Products")
result = cursor.fetchall()

print(result)

# Закрытие соединения
conn.close()