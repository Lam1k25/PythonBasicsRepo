def make_report(title, **sections): 
    print(f"Отчёт: {title}")  
      
    total = 0  
      
      
    for section, value in sections.items():  
        print(f"{section}: {value}")  
        total += value  
      
      
    print(f"Общая сумма: {total}")  
  
 
make_report(  
    "Продажи",  
    Север=12000,  
    Юг=8500,  
    Запад=9000  
)  

