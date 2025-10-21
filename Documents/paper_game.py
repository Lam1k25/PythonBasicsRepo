p_user: str = input("выберите: камень, ножницы, бумага: ")
pc_user: str = input()
if p_user == "бумага" and pc_user == "камень" or p_user == "камень" and pc_user == "ножницы" or p_user == "ножницы" and pc_user == "бумага":
    print("Вы выиграли")
elif p_user == "камень" and pc_user == "камень" or p_user == "ножницы" and pc_user == "ножницы" or p_user == "бумага" and pc_user == "бумага":
    print("Ничья")
else:
    print('Вы проиграли')