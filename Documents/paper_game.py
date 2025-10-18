p_user: str = input("выберите: камень, ножницы, бумага: ")
pc_user: str = "камень"
if p_user == "бумага" and pc_user == "камень":
    print("Вы выиграли")
elif p_user == "камень" and pc_user == "камень":
    print("Ничья")
else:
    print('Вы проиграли')