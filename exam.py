# ===== Исключения =====

class BookAlreadyLentError(Exception):
    """Исключение, возникающее при попытке выдать книгу, которая уже выдана."""
    pass


class BookNotFoundError(Exception):
    """Исключение, возникающее когда книга не найдена в библиотеке."""
    pass


class ReaderNotRegisteredError(Exception):
    """Исключение, возникающее когда читатель не зарегистрирован в библиотеке."""
    pass


# ===== Базовые классы =====

class Item:
    """Базовый класс для объектов библиотечного фонда."""
    
    def __init__(self, item_id: int, title: str, year: int):
        """
        Инициализирует объект библиотечного фонда.
        
        Args:
            item_id (int): Уникальный идентификатор объекта
            title (str): Название объекта
            year (int): Год издания/создания
        """
        self.id = item_id
        self.title = title
        self.year = year

    def __str__(self):
        """
        Возвращает строковое представление объекта.
        
        Returns:
            str: Строка в формате "[ID] Название (Год)"
        """
        return f"[{self.id}] {self.title} ({self.year})"


class Book(Item):
    """Класс, представляющий книгу в библиотеке."""
    
    def __init__(self, item_id: int, title: str, year: int, author: str, isbn: str):
        """
        Инициализирует объект книги.
        
        Args:
            item_id (int): Уникальный идентификатор книги
            title (str): Название книги
            year (int): Год издания
            author (str): Автор книги
            isbn (str): ISBN книги
        """
        super().__init__(item_id, title, year)
        self.author = author
        self.isbn = isbn
        self.is_lent = False  # Флаг, указывающий выдана ли книга

    def __str__(self):
        """
        Возвращает подробное строковое представление книги.
        
        Returns:
            str: Многострочное описание книги с информацией о статусе
        """
        status = "выдана" if self.is_lent else "доступна"
        return (
            f"Книга: {self.title}\n"
            f"Автор: {self.author}\n"
            f"Год: {self.year}\n"
            f"ISBN: {self.isbn}\n"
            f"Статус: {status}"
        )


class Reader:
    """Класс, представляющий читателя библиотеки."""
    
    def __init__(self, reader_id: int, name: str):
        """
        Инициализирует объект читателя.
        
        Args:
            reader_id (int): Уникальный идентификатор читателя
            name (str): Имя читателя
        """
        self.id = reader_id
        self.name = name
        self.books = []  # Список книг, которые читатель взял

    def __str__(self):
        """
        Возвращает строковое представление читателя и его книг.
        
        Returns:
            str: Информация о читателе и список взятых книг
        """
        book_titles = ", ".join(book.title for book in self.books) or "нет книг"
        return f"Читатель [{self.id}]: {self.name}, книги: {book_titles}"


# ===== Класс библиотеки =====

class Library:
    """Основной класс библиотеки, управляющий книгами и читателями."""
    
    def __init__(self):
        """Инициализирует пустую библиотеку."""
        self.books = {}      # Словарь книг: {id: Book}
        self.readers = {}    # Словарь читателей: {id: Reader}

    def add_book(self, book: Book):
        """
        Добавляет книгу в библиотечный фонд.
        
        Args:
            book (Book): Объект книги для добавления
        """
        self.books[book.id] = book

    def register_reader(self, reader: Reader):
        """
        Регистрирует нового читателя в библиотеке.
        
        Args:
            reader (Reader): Объект читателя для регистрации
        """
        self.readers[reader.id] = reader

    def lend_book(self, book_id: int, reader_id: int):
        """
        Выдает книгу читателю.
        
        Args:
            book_id (int): ID книги для выдачи
            reader_id (int): ID читателя, которому выдается книга
            
        Raises:
            BookNotFoundError: Если книга не найдена
            ReaderNotRegisteredError: Если читатель не зарегистрирован
            BookAlreadyLentError: Если книга уже выдана
        """
        book = self.books.get(book_id)
        if not book:
            raise BookNotFoundError("Книга не найдена")

        reader = self.readers.get(reader_id)
        if not reader:
            raise ReaderNotRegisteredError("Читатель не зарегистрирован")

        if book.is_lent:
            raise BookAlreadyLentError("Книга уже выдана")

        book.is_lent = True
        reader.books.append(book)

    def return_book(self, book_id: int, reader_id: int):
        """
        Принимает книгу от читателя.
        
        Args:
            book_id (int): ID возвращаемой книги
            reader_id (int): ID читателя, возвращающего книгу
            
        Raises:
            BookNotFoundError: Если книга не найдена или не числится у читателя
            ReaderNotRegisteredError: Если читатель не зарегистрирован
        """
        book = self.books.get(book_id)
        if not book:
            raise BookNotFoundError("Книга не найдена")

        reader = self.readers.get(reader_id)
        if not reader:
            raise ReaderNotRegisteredError("Читатель не зарегистрирован")

        if book not in reader.books:
            raise BookNotFoundError("Эта книга не числится у читателя")

        book.is_lent = False
        reader.books.remove(book)

    def find_books_by_author(self, author: str):
        """
        Находит все книги указанного автора.
        
        Args:
            author (str): Имя автора для поиска
            
        Returns:
            list: Список книг указанного автора
        """
        return [book for book in self.books.values() if book.author == author]

    def get_reader_books(self, reader_id: int):
        """
        Получает список книг, взятых читателем.
        
        Args:
            reader_id (int): ID читателя
            
        Returns:
            list: Список книг, которые взял читатель
            
        Raises:
            ReaderNotRegisteredError: Если читатель не зарегистрирован
        """
        reader = self.readers.get(reader_id)
        if not reader:
            raise ReaderNotRegisteredError("Читатель не зарегистрирован")
        return reader.books


# ===== Пример использования =====

if __name__ == "__main__":
    """Пример работы библиотечной системы."""
    
    # Создаем библиотеку
    library = Library()

    # Создаем книги
    book1 = Book(1, "Война и мир", 1869, "Л.Н. Толстой", "978-5-17-082347-1")
    book2 = Book(2, "Анна Каренина", 1877, "Л.Н. Толстой", "978-5-17-082348-8")

    # Создаем читателя
    reader1 = Reader(1, "Иван Иванов")

    # Добавляем книги и регистрируем читателя
    library.add_book(book1)
    library.add_book(book2)
    library.register_reader(reader1)

    # Выдаем книгу читателю
    library.lend_book(1, 1)

    # Выводим книги, которые взял читатель
    print("Книги читателя:")
    for book in library.get_reader_books(1):
        print(book)
        print()  # пустая строка для разделения

    # Ищем книги по автору
    print("\nКниги Толстого:")
    for book in library.find_books_by_author("Л.Н. Толстой"):
        print(book)
        print()  # пустая строка для разделения

    # Возвращаем книгу
    library.return_book(1, 1)

    # Выводим информацию о читателе после возврата книги
    print("\nПосле возврата:")
    print(reader1)# ===== Исключения =====

class BookAlreadyLentError(Exception):
    """Исключение, возникающее при попытке выдать книгу, которая уже выдана."""
    pass


class BookNotFoundError(Exception):
    """Исключение, возникающее когда книга не найдена в библиотеке."""
    pass


class ReaderNotRegisteredError(Exception):
    """Исключение, возникающее когда читатель не зарегистрирован в библиотеке."""
    pass


# ===== Базовые классы =====

class Item:
    """Базовый класс для объектов библиотечного фонда."""
    
    def __init__(self, item_id: int, title: str, year: int):
        """
        Инициализирует объект библиотечного фонда.
        
        Args:
            item_id (int): Уникальный идентификатор объекта
            title (str): Название объекта
            year (int): Год издания/создания
        """
        self.id = item_id
        self.title = title
        self.year = year

    def __str__(self):
        """
        Возвращает строковое представление объекта.
        
        Returns:
            str: Строка в формате "[ID] Название (Год)"
        """
        return f"[{self.id}] {self.title} ({self.year})"


class Book(Item):
    """Класс, представляющий книгу в библиотеке."""
    
    def __init__(self, item_id: int, title: str, year: int, author: str, isbn: str):
        """
        Инициализирует объект книги.
        
        Args:
            item_id (int): Уникальный идентификатор книги
            title (str): Название книги
            year (int): Год издания
            author (str): Автор книги
            isbn (str): ISBN книги
        """
        super().__init__(item_id, title, year)
        self.author = author
        self.isbn = isbn
        self.is_lent = False  # Флаг, указывающий выдана ли книга

    def __str__(self):
        """
        Возвращает подробное строковое представление книги.
        
        Returns:
            str: Многострочное описание книги с информацией о статусе
        """
        status = "выдана" if self.is_lent else "доступна"
        return (
            f"Книга: {self.title}\n"
            f"Автор: {self.author}\n"
            f"Год: {self.year}\n"
            f"ISBN: {self.isbn}\n"
            f"Статус: {status}"
        )


class Reader:
    """Класс, представляющий читателя библиотеки."""
    
    def __init__(self, reader_id: int, name: str):
        """
        Инициализирует объект читателя.
        
        Args:
            reader_id (int): Уникальный идентификатор читателя
            name (str): Имя читателя
        """
        self.id = reader_id
        self.name = name
        self.books = []  # Список книг, которые читатель взял

    def __str__(self):
        """
        Возвращает строковое представление читателя и его книг.
        
        Returns:
            str: Информация о читателе и список взятых книг
        """
        book_titles = ", ".join(book.title for book in self.books) or "нет книг"
        return f"Читатель [{self.id}]: {self.name}, книги: {book_titles}"


# ===== Класс библиотеки =====

class Library:
    """Основной класс библиотеки, управляющий книгами и читателями."""
    
    def __init__(self):
        """Инициализирует пустую библиотеку."""
        self.books = {}      # Словарь книг: {id: Book}
        self.readers = {}    # Словарь читателей: {id: Reader}

    def add_book(self, book: Book):
        """
        Добавляет книгу в библиотечный фонд.
        
        Args:
            book (Book): Объект книги для добавления
        """
        self.books[book.id] = book

    def register_reader(self, reader: Reader):
        """
        Регистрирует нового читателя в библиотеке.
        
        Args:
            reader (Reader): Объект читателя для регистрации
        """
        self.readers[reader.id] = reader

    def lend_book(self, book_id: int, reader_id: int):
        """
        Выдает книгу читателю.
        
        Args:
            book_id (int): ID книги для выдачи
            reader_id (int): ID читателя, которому выдается книга
            
        Raises:
            BookNotFoundError: Если книга не найдена
            ReaderNotRegisteredError: Если читатель не зарегистрирован
            BookAlreadyLentError: Если книга уже выдана
        """
        book = self.books.get(book_id)
        if not book:
            raise BookNotFoundError("Книга не найдена")

        reader = self.readers.get(reader_id)
        if not reader:
            raise ReaderNotRegisteredError("Читатель не зарегистрирован")

        if book.is_lent:
            raise BookAlreadyLentError("Книга уже выдана")

        book.is_lent = True
        reader.books.append(book)

    def return_book(self, book_id: int, reader_id: int):
        """
        Принимает книгу от читателя.
        
        Args:
            book_id (int): ID возвращаемой книги
            reader_id (int): ID читателя, возвращающего книгу
            
        Raises:
            BookNotFoundError: Если книга не найдена или не числится у читателя
            ReaderNotRegisteredError: Если читатель не зарегистрирован
        """
        book = self.books.get(book_id)
        if not book:
            raise BookNotFoundError("Книга не найдена")

        reader = self.readers.get(reader_id)
        if not reader:
            raise ReaderNotRegisteredError("Читатель не зарегистрирован")

        if book not in reader.books:
            raise BookNotFoundError("Эта книга не числится у читателя")

        book.is_lent = False
        reader.books.remove(book)

    def find_books_by_author(self, author: str):
        """
        Находит все книги указанного автора.
        
        Args:
            author (str): Имя автора для поиска
            
        Returns:
            list: Список книг указанного автора
        """
        return [book for book in self.books.values() if book.author == author]

    def get_reader_books(self, reader_id: int):
        """
        Получает список книг, взятых читателем.
        
        Args:
            reader_id (int): ID читателя
            
        Returns:
            list: Список книг, которые взял читатель
            
        Raises:
            ReaderNotRegisteredError: Если читатель не зарегистрирован
        """
        reader = self.readers.get(reader_id)
        if not reader:
            raise ReaderNotRegisteredError("Читатель не зарегистрирован")
        return reader.books


# ===== Пример использования =====

if __name__ == "__main__":
    """Пример работы библиотечной системы."""
    
    # Создаем библиотеку
    library = Library()

    # Создаем книги
    book1 = Book(1, "Война и мир", 1869, "Л.Н. Толстой", "978-5-17-082347-1")
    book2 = Book(2, "Анна Каренина", 1877, "Л.Н. Толстой", "978-5-17-082348-8")

    # Создаем читателя
    reader1 = Reader(1, "Иван Иванов")

    # Добавляем книги и регистрируем читателя
    library.add_book(book1)
    library.add_book(book2)
    library.register_reader(reader1)

    # Выдаем книгу читателю
    library.lend_book(1, 1)

    # Выводим книги, которые взял читатель
    print("Книги читателя:")
    for book in library.get_reader_books(1):
        print(book)
        print()  # пустая строка для разделения

    # Ищем книги по автору
    print("\nКниги Толстого:")
    for book in library.find_books_by_author("Л.Н. Толстой"):
        print(book)
        print()  # пустая строка для разделения

    # Возвращаем книгу
    library.return_book(1, 1)

    # Выводим информацию о читателе после возврата книги
    print("\nПосле возврата:")
    print(reader1)