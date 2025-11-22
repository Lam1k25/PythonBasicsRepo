products = {"хлеб": 60, "молоко": 80, "сыр": 150}

def get_total(products):
    count: int = 0
    for i in products:
        count += 1
    print(f"Всего товаров: {count}")
    sum_products = sum(products.values())
    print(f"Общая сумма: {sum_products}")


get_total(products)