import random

def guess_number_game():

   
    
    secret_number = random.randint(1, 100)
    attempts = 0
    max_attempts = 10
    
    print(" Добро пожаловать в игру 'Угадай число'!")
    print(f"Я загадал число от 1 до 100. У тебя есть {max_attempts} попыток!")
    print("-" * 50)
    
    while attempts < max_attempts:
        try:
            guess = int(input("Введи свою догадку: "))
            attempts += 1
            
            
            if guess < secret_number:
                print(" Слишком маленькое число! Попробуй больше.")
            elif guess > secret_number:
                print(" Слишком большое число! Попробуй меньше.")
            else:
                print(f" Поздравляю! Ты угадал число {secret_number} за {attempts} попыток!")
                return
            
            
            remaining = max_attempts - attempts
            if remaining > 0:
                print(f" Осталось попыток: {remaining}")
            print("-" * 30)
                
        except ValueError:
            print("Пожалуйста, вводи только целые числа!")
            continue
    
    # Если попытки закончились
    print(f" К сожалению, попытки закончились! Загаданное число было: {secret_number}")

# Запускаем игру
if __name__ == "main":
    guess_number_game()