/*  RUSSIAN TAGS  */

$(document).ready(function () {

    var ruTags = ["Клавиатура ", "Браузер ", "Мышь", "Компьютер ", "Блок питания", "Монитор ", "Колонки", "Наушники", "Роутер ", "Процессор ", "Язык программирования", "Материнская плата.", "Оперативная память ", "Жесткий диск", "Видеокарта.", "Дисковод ", "Кнопка", "Камера ", "Принтер", "Сканер ", "Устройство ввода", "Устройство ввывода", "Клавиша", "Программа ", "Операционная система", "IP Адрес", "Стек", "Программирование", "Разработка", "Переменная ", "Алгоритм ", "Цикл ", "Функция", "Массив", "Объект", "Иерархия ", "Событие", 'Инструмент ', 'Оператор ', 'Инструкция ', 'Логика ', 'Парадигма ', 'Сервер ', 'Виртуальность ', 'Локальный ', 'Региональный ', 'Глобальный ', 'Телефон ', 'Транзакция ', 'Иньекция ', 'База данных ', 'Данные ', 'Протокол ', 'Библиотека ', 'Графика ', 'Вектор ', 'Наследование ', 'Изоляция ', 'Переместить ', 'Стереть ', 'Управлять ', 'Копировать', 'Формат', 'Директория', 'Путь ', 'Окружение', 'Консоль', 'Платформа', 'Генератор', 'Произвольный', 'Пользовательский интерфейс', 'Пользовательский опыт', 'Графический интерфейс', 'Планшет', 'Стационар', 'Тестирование ', 'Неисправность ', 'Поток ', 'Синхронизация', 'Асинхронный', 'Многопоточный', 'Режим ', 'Экономия ', 'Шина', 'Шлюз', 'Горячие клавиши ', 'Комбинация', 'Разрешение', 'Прагматика ', 'Акцент', 'Анаграмма ', 'Драмма ', 'Эпитет', 'Фонология ', 'Антропоним ', 'Аппликация ', 'Ареал', 'Архетип ', 'Аффикс', 'Фонема ', 'Префикс ', 'Деепричастие', 'Дефис', 'Диалект ', 'Дискурс ', 'Дополнение', 'Жаргон ', 'Звукопись', 'Идиома ', 'Императив ', 'Инверсия ', 'Индикатив ', 'Инфикс ', 'Инфинитив', 'Каллиграфия ', 'Кельтология ', 'Клише ', 'Клинопись ', 'Коммуникация', 'Конверсия ', 'Контекст ', 'Курсив ', 'Лексема ', 'Лексика', 'Лексикон ', 'Литота ', 'Местоимение', 'Метафора ', 'Метаязык ', 'Метатеза ', 'Метонимия ', 'Монолог ', 'Морфема ', 'Неологизм ', 'Номинатив ', 'Обращение', 'Оксюморон ', 'Омонимы ', 'Орфограмма ', 'Палиндром ', 'Палеография ', 'Пауза', 'Пиктография ', 'Поговорка', 'Шутка', 'Предикат ', 'Предлог ', 'Редукция ', 'Реплика ', 'Речь', 'Сегмент ', 'Семиотика ', 'Сленг', 'Слог', 'Смысл', 'Стилистика ', 'Субъект ', 'Суффикс ', 'Тавтология ', 'Такт ', 'Тембр', 'Тильда ', 'Тон ', 'Транскрипция ', 'Ударение ', 'Устав ', 'Цитата ', 'Шепот', 'Шум', 'Эквивалент', 'Экспрессия ', 'Отрицание', 'Глагол', 'Прилагательное', 'Наречие', 'Приставка ', 'Корень', 'Окончание', 'Часть речи', 'Падеж', 'Гласная буква', 'Согласная буква', 'Параграф ', 'Абзац ', 'Литература', 'Аббревиатура ', 'Язык'];

    console.log(ruTags.length + 24);

    $('#ru').click(function () {
        $('.show').slideToggle();
        $('#search').autocomplete({
            source: ruTags
        });
    });

    var searchValue = document.getElementById('search');

    $('#translate').click(function () {
        
            if (searchValue.value === 'Мышь') {
                $('#word').html('English : ' + 'Mouse' + '<br />' + '<br />' + 'Кыргызский : ' + 'Чычкан');
            } else if (searchValue.value === 'Браузер ') {
                $('#word').html('English : ' + 'Browser' + '<br />' + '<br />' + 'Кыргызский : ' + 'Браузер');
            } else if (searchValue.value === 'Клавиатура ') {
                $('#word').html('English : ' + 'Keyboard' + '<br />' + '<br />' + 'Кыргызский : ' + 'Клавиатура');
            } else if (searchValue.value === 'Компьютер ') {
                $('#word').html('English : ' + 'Computer' + '<br />' + '<br />' + 'Кыргызский : ' + 'Компьютер');
            } else if (searchValue.value === 'Блок питания') {
                $('#word').html('English : ' + 'Power Supply' + '<br />' + '<br />' + 'Кыргызский : ' + 'Электр менен камсыз кылуу бөлүмү');
            } else if (searchValue.value === 'Монитор ') {
                $('#word').html('English : ' + 'Display' + '<br />' + '<br />' + 'Кыргызский : ' + 'Монитор');
            } else if (searchValue.value === 'Колонки') {
                $('#word').html('English : ' + 'Loudspeakers' + '<br />' + '<br />' + 'Кыргызский : ' + 'Колонки');
            } else if (searchValue.value === 'Наушники') {
                $('#word').html('English : ' + 'Earphones' + '<br />' + '<br />' + 'Кыргызский : ' + 'Наушники');
            } else if (searchValue.value === 'Роутер ') {
                $('#word').html('English : ' + 'Router' + '<br />' + '<br />' + 'Кыргызский : ' + 'Роутер');
            } else if (searchValue.value === 'Процессор ') {
                $('#word').html('English : ' + 'Processor (CPU)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Процессор');
            } else if (searchValue.value === 'Язык программирования') {
                $('#word').html('English : ' + 'Programming language' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программалоо тили');
            } else if (searchValue.value === 'Материнская плата.') {
                $('#word').html('English : ' + 'Motherboard' + '<br />' + '<br />' + 'Кыргызский : ' + 'Материнская плата.');
            } else if (searchValue.value === 'Оперативная память ') {
                $('#word').html('English : ' + 'RAM (Random Access Memory)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Оперативная память ');
            } else if (searchValue.value === 'Жесткий диск') {
                $('#word').html('English : ' + 'HDD (Hard Disk Drive)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Катуу диск');
            } else if (searchValue.value === 'Видеокарта.') {
                $('#word').html('English : ' + 'Videocard' + '<br />' + '<br />' + 'Кыргызский : ' + 'Видеокарта');
            } else if (searchValue.value === 'Дисковод ') {
                $('#word').html('English : ' + 'Drive' + '<br />' + '<br />' + 'Кыргызский : ' + 'Дисковод');
            } else if (searchValue.value === 'Кнопка') {
                $('#word').html('English : ' + 'Button' + '<br />' + '<br />' + 'Кыргызский : ' + 'Баскычы');
            } else if (searchValue.value === 'Камера ') {
                $('#word').html('English : ' + 'Camera' + '<br />' + '<br />' + 'Кыргызский : ' + 'Камера');
            } else if (searchValue.value === 'Принтер') {
                $('#word').html('English : ' + 'Printer' + '<br />' + '<br />' + 'Кыргызский : ' + 'Басуучу машина');
            } else if (searchValue.value === 'Сканер ') {
                $('#word').html('English : ' + 'Scanner' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сканер');
            } else if (searchValue.value === 'Устройство ввода') {
                $('#word').html('English : ' + 'Input device' + '<br />' + '<br />' + 'Кыргызский : ' + 'Киргизүүчү түзмөк');
            } else if (searchValue.value === 'Устройство ввывода') {
                $('#word').html('English : ' + 'Output device' + '<br />' + '<br />' + 'Кыргызский : ' + 'Көрсөтүү түзмөк');
            } else if (searchValue.value === 'Клавиша') {
                $('#word').html('English : ' + 'Key' + '<br />' + '<br />' + 'Кыргызский : ' + 'Ачкыч');
            } else if (searchValue.value === 'Программа ') {
                $('#word').html('English : ' + 'Programm' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программа');
            } else if (searchValue.value === 'Операционная система') {
                $('#word').html('English : ' + 'OS (Operating System)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Операциондук система');
            } else if (searchValue.value === 'IP Адрес') {
                $('#word').html('English : ' + 'IP (Internet Protocol) Address' + '<br />' + '<br />' + 'Кыргызский : ' + 'IP дареги');
            } else if (searchValue.value === 'Стек') {
                $('#word').html('English : ' + 'Stack' + '<br />' + '<br />' + 'Кыргызский : ' + 'Стек');
            } else if (searchValue.value === 'Программирование') {
                $('#word').html('English : ' + 'Programming' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программалоо');
            } else if (searchValue.value === 'Разработка') {
                $('#word').html('English : ' + 'Development' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иштеп чыгуу');
            } else if (searchValue.value === 'Переменная ') {
                $('#word').html('English : ' + 'Variable' + '<br />' + '<br />' + 'Кыргызский : ' + 'Переменная');
            } else if (searchValue.value === 'Алгоритм ') {
                $('#word').html('English : ' + 'Algorithm' + '<br />' + '<br />' + 'Кыргызский : ' + 'Алгоритм');
            } else if (searchValue.value === 'Цикл ') {
                $('#word').html('English : ' + 'Loop' + '<br />' + '<br />' + 'Кыргызский : ' + 'Цикл');
            } else if (searchValue.value === 'Функция') {
                $('#word').html('English : ' + 'Function' + '<br />' + '<br />' + 'Кыргызский : ' + 'Милдети');
            } else if (searchValue.value === 'Массив') {
                $('#word').html('English : ' + 'Array' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тизме');
            } else if (searchValue.value === 'Объект') {
                $('#word').html('English : ' + 'Object' + '<br />' + '<br />' + 'Кыргызский : ' + 'Зат');
            } else if (searchValue.value === 'Иерархия ') {
                $('#word').html('English : ' + 'Hierarchy' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иерархия');
            } else if (searchValue.value === 'Событие') {
                $('#word').html('English : ' + 'Event' + '<br />' + '<br />' + 'Кыргызский : ' + 'Окуя');
            } else if (searchValue.value === 'Оператор ') {
                $('#word').html('English : ' + 'Operator' + '<br />' + '<br />' + 'Кыргызский : ' + 'Оператор');
            } else if (searchValue.value === 'Инструмент ') {
                $('#word').html('English : ' + 'Tool' + '<br />' + '<br />' + 'Кыргызский : ' + 'Аспап');
            } else if (searchValue.value === 'Инструкция ') {
                $('#word').html('English : ' + 'Instruction' + '<br />' + '<br />' + 'Кыргызский : ' + 'Инструкция');
            } else if (searchValue.value === 'Логика ') {
                $('#word').html('English : ' + 'Logic' + '<br />' + '<br />' + 'Кыргызский : ' + 'Логикалык');
            } else if (searchValue.value === 'Парадигма ') {
                $('#word').html('English : ' + 'Paradigm' + '<br />' + '<br />' + 'Кыргызский : ' + 'Парадигма');
            } else if (searchValue.value === 'Сервер ') {
                $('#word').html('English : ' + 'Server' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сервер');
            } else if (searchValue.value === 'Виртуальность ') {
                $('#word').html('English : ' + 'Virtuality' + '<br />' + '<br />' + 'Кыргызский : ' + 'Виртуальность');
            } else if (searchValue.value === 'Локальный ') {
                $('#word').html('English : ' + 'Local' + '<br />' + '<br />' + 'Кыргызский : ' + 'Локалдык');
            } else if (searchValue.value === 'Региональный ') {
                $('#word').html('English : ' + 'Regional' + '<br />' + '<br />' + 'Кыргызский : ' + 'Регионалдык');
            } else if (searchValue.value === 'Глобальный ') {
                $('#word').html('English : ' + 'Global' + '<br />' + '<br />' + 'Кыргызский : ' + 'Глобалдык');
            } else if (searchValue.value === 'Телефон ') {
                $('#word').html('English : ' + 'Phone' + '<br />' + '<br />' + 'Кыргызский : ' + 'Телефон');
            } else if (searchValue.value === 'Транзакция ') {
                $('#word').html('English : ' + 'Transaction' + '<br />' + '<br />' + 'Кыргызский : ' + 'Транзакция');
            } else if (searchValue.value === 'Иньекция ') {
                $('#word').html('English : ' + 'Injection' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иньекция');
            } else if (searchValue.value === 'База данных ') {
                $('#word').html('English : ' + 'Database' + '<br />' + '<br />' + 'Кыргызский : ' + 'Маалыматтар базасы');
            } else if (searchValue.value === 'Данные ') {
                $('#word').html('English : ' + 'Data' + '<br />' + '<br />' + 'Кыргызский : ' + 'Маалыматтар');
            } else if (searchValue.value === 'Протокол ') {
                $('#word').html('English : ' + 'Protocol' + '<br />' + '<br />' + 'Кыргызский : ' + 'Протокол');
            } else if (searchValue.value === 'Библиотека ') {
                $('#word').html('English : ' + 'Library' + '<br />' + '<br />' + 'Кыргызский : ' + 'Китеп кана');
            } else if (searchValue.value === 'Графика ') {
                $('#word').html('English : ' + 'Graphic' + '<br />' + '<br />' + 'Кыргызский : ' + 'Графика');
            } else if (searchValue.value === 'Вектор ') {
                $('#word').html('English : ' + 'Vector' + '<br />' + '<br />' + 'Кыргызский : ' + 'Вектор');
            } else if (searchValue.value === 'Наследование ') {
                $('#word').html('English : ' + 'Inheritance' + '<br />' + '<br />' + 'Кыргызский : ' + 'Мураска ээ болуу');
            } else if (searchValue.value === 'Изоляция ') {
                $('#word').html('English : ' + 'Insulation' + '<br />' + '<br />' + 'Кыргызский : ' + 'Бөлүп коюу');
            } else if (searchValue.value === 'Переместить ') {
                $('#word').html('English : ' + 'Move' + '<br />' + '<br />' + 'Кыргызский : ' + 'Жылдыруу');
            } else if (searchValue.value === 'Управлять ') {
                $('#word').html('English : ' + 'Manage' + '<br />' + '<br />' + 'Кыргызский : ' + 'Башкаруу');
            } else if (searchValue.value === 'Копировать') {
                $('#word').html('English : ' + 'Copy' + '<br />' + '<br />' + 'Кыргызский : ' + 'Копировать');
            } else if (searchValue.value === 'Формат') {
                $('#word').html('English : ' + 'Format' + '<br />' + '<br />' + 'Кыргызский : ' + 'Формат');
            } else if (searchValue.value === 'Директория') {
                $('#word').html('English : ' + 'Directory' + '<br />' + '<br />' + 'Кыргызский : ' + 'Директория');
            } else if (searchValue.value === 'Путь ') {
                $('#word').html('English : ' + 'Path' + '<br />' + '<br />' + 'Кыргызский : ' + 'Жол');
            } else if (searchValue.value === 'Окружение') {
                $('#word').html('English : ' + 'Environment' + '<br />' + '<br />' + 'Кыргызский : ' + 'Окружение');
            } else if (searchValue.value === 'Консоль') {
                $('#word').html('English : ' + 'Console' + '<br />' + '<br />' + 'Кыргызский : ' + 'Консоль');
            } else if (searchValue.value === 'Платформа') {
                $('#word').html('English : ' + 'Platform' + '<br />' + '<br />' + 'Кыргызский : ' + 'Платформа');
            } else if (searchValue.value === 'Генератор') {
                $('#word').html('English : ' + 'Generator' + '<br />' + '<br />' + 'Кыргызский : ' + 'Генератор');
            } else if (searchValue.value === 'Стереть ') {
                $('#word').html('English : ' + 'Erase' + '<br />' + '<br />' + 'Кыргызский : ' + 'өчуруу');
            } else if (searchValue.value === 'Произвольный') {
                $('#word').html('English : ' + 'Random' + '<br />' + '<br />' + 'Кыргызский : ' + 'Произвольный');
            } else if (searchValue.value === 'Пользовательский интерфейс') {
                $('#word').html('English : ' + 'UI (User Interface)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Пользовательский интерфейс');
            } else if (searchValue.value === 'Пользовательский опыт' ) {
                $('#word').html('English : ' + 'UX (User Expirience)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Пользовательский опыт ');
            } else if (searchValue.value === 'Графический интерфейс') {
                $('#word').html('English : ' + 'GUI (Graphic User Interface)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Графический интерфейс');
            } else if (searchValue.value === 'Планшет') {
                $('#word').html('English : ' + 'Tablet' + '<br />' + '<br />' + 'Кыргызский : ' + 'Планшет');
            } else if (searchValue.value === 'Стационар') {
                $('#word').html('English : ' + 'Static' + '<br />' + '<br />' + 'Кыргызский : ' + 'Стационар');
            } else if (searchValue.value === 'Тестирование ') {
                $('#word').html('English : ' + 'Unit Test' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тестирлөө');
            } else if (searchValue.value === 'Неисправность ') {
                $('#word').html('English : ' + 'Bug' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иштебегени');
            } else if (searchValue.value === 'Поток ') {
                $('#word').html('English : ' + 'Stream' + '<br />' + '<br />' + 'Кыргызский : ' + 'Агым');
            } else if (searchValue.value === 'Синхронизация') {
                $('#word').html('English : ' + 'Synchronization' + '<br />' + '<br />' + 'Кыргызский : ' + 'Синхронизация');
            } else if (searchValue.value === 'Асинхронный') {
                $('#word').html('English : ' + 'Asynchronous' + '<br />' + '<br />' + 'Кыргызский : ' + 'Асинхронный');
            } else if (searchValue.value === 'Многопоточный') {
                $('#word').html('English : ' + 'Multithreaded' + '<br />' + '<br />' + 'Кыргызский : ' + 'Многопоточный');
            } else if (searchValue.value === 'Режим ') {
                $('#word').html('English : ' + 'Mode' + '<br />' + '<br />' + 'Кыргызский : ' + 'Режими');
            } else if (searchValue.value === 'Экономия ') {
                $('#word').html('English : ' + 'Saving' + '<br />' + '<br />' + 'Кыргызский : ' + 'Cактык');
            } else if (searchValue.value === 'Шина') {
                $('#word').html('English : ' + 'Bus' + '<br />' + '<br />' + 'Кыргызский : ' + 'Шина');
            } else if (searchValue.value === 'Шлюз') {
                $('#word').html('English : ' + 'Floodgate' + '<br />' + '<br />' + 'Кыргызский : ' + 'Шлюз');
            } else if (searchValue.value === 'Горячие клавиши ') {
                $('#word').html('English : ' + 'Hotkeys' + '<br />' + '<br />' + 'Кыргызский : ' + 'Ысык баскычылар');
            } else if (searchValue.value === 'Комбинация') {
                $('#word').html('English : ' + 'Combination' + '<br />' + '<br />' + 'Кыргызский : ' + 'Комбинация');
            } else if (searchValue.value === 'Разрешение') {
                $('#word').html('English : ' + 'Resolution' + '<br />' + '<br />' + 'Кыргызский : ' + 'Разрешение');
            }

            //////////////////////////////// LIGUISTIC WORDS
            else if (searchValue.value === 'Прагматика ') {
                $('#word').html('English : ' + 'Pragmatics' + '<br />' + '<br />' + 'Кыргызский : ' + 'Прагматика');
            } else if (searchValue.value === 'Акцент') {
                $('#word').html('English : ' + 'Accent' + '<br />' + '<br />' + 'Кыргызский : ' + 'Туура айтуу');
            } else if (searchValue.value === 'Анаграмма ') {
                $('#word').html('English : ' + 'Anagram' + '<br />' + '<br />' + 'Кыргызский : ' + 'Анаграмма');
            } else if (searchValue.value === 'Драмма ') {
                $('#word').html('English : ' + 'Drama' + '<br />' + '<br />' + 'Кыргызский : ' + 'Драмма');
            } else if (searchValue.value === 'Эпитет') {
                $('#word').html('English : ' + 'Epithet' + '<br />' + '<br />' + 'Кыргызский : ' + 'Куп');
            } else if (searchValue.value === 'Фонология ') {
                $('#word').html('English : ' + 'Phonology' + '<br />' + '<br />' + 'Кыргызский : ' + 'Фонология');
            } else if (searchValue.value === 'Антропоним ') {
                $('#word').html('English : ' + 'Anthroponym' + '<br />' + '<br />' + 'Кыргызский : ' + 'Антропоним');
            } else if (searchValue.value === 'Аппликация ') {
                $('#word').html('English : ' + 'Applique' + '<br />' + '<br />' + 'Кыргызский : ' + 'Аппликация');
            } else if (searchValue.value === 'Ареал') {
                $('#word').html('English : ' + 'Areal' + '<br />' + '<br />' + 'Кыргызский : ' + 'Аймак');
            } else if (searchValue.value === 'Архетип ') {
                $('#word').html('English : ' + 'Archetype' + '<br />' + '<br />' + 'Кыргызский : ' + 'Архетип');
            } else if (searchValue.value === 'Аффикс') {
                $('#word').html('English : ' + 'Affix' + '<br />' + '<br />' + 'Кыргызский : ' + 'Бириктирүү');
            } else if (searchValue.value === 'Фонема ') {
                $('#word').html('English : ' + 'Phoneme' + '<br />' + '<br />' + 'Кыргызский : ' + 'Фонема');
            } else if (searchValue.value === 'Префикс ') {
                $('#word').html('English : ' + 'Prefix' + '<br />' + '<br />' + 'Кыргызский : ' + 'Префикс');
            } else if (searchValue.value === 'Деепричастие') {
                $('#word').html('English : ' + 'Participle' + '<br />' + '<br />' + 'Кыргызский : ' + 'Атоочтуктар');
            } else if (searchValue.value === 'Дефис') {
                $('#word').html('English : ' + 'Hyphen' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сызыкча');
            } else if (searchValue.value === 'Диалект ') {
                $('#word').html('English : ' + 'Dialect' + '<br />' + '<br />' + 'Кыргызский : ' + 'Диалект');
            } else if (searchValue.value === 'Дискурс ') {
                $('#word').html('English : ' + 'Discourse' + '<br />' + '<br />' + 'Кыргызский : ' + 'Дискурс');
            } else if (searchValue.value === 'Дополнение') {
                $('#word').html('English : ' + 'Addition' + '<br />' + '<br />' + 'Кыргызский : ' + 'Кошуу');
            } else if (searchValue.value === 'Жаргон ') {
                $('#word').html('English : ' + 'Jargon' + '<br />' + '<br />' + 'Кыргызский : ' + 'Жаргон');
            } else if (searchValue.value === 'Звукопись') {
                $('#word').html('English : ' + 'Sound recording' + '<br />' + '<br />' + 'Кыргызский : ' + 'үн жазуу');
            } else if (searchValue.value === 'Идиома ') {
                $('#word').html('English : ' + 'Idiom' + '<br />' + '<br />' + 'Кыргызский : ' + 'Идиома');
            } else if (searchValue.value === 'Императив ') {
                $('#word').html('English : ' + 'Imperative' + '<br />' + '<br />' + 'Кыргызский : ' + 'Императив');
            } else if (searchValue.value === 'Инверсия ') {
                $('#word').html('English : ' + 'Inversion' + '<br />' + '<br />' + 'Кыргызский : ' + 'Инверсия');
            } else if (searchValue.value === 'Индикатив ') {
                $('#word').html('English : ' + 'Indicative' + '<br />' + '<br />' + 'Кыргызский : ' + 'Индикатив');
            } else if (searchValue.value === 'Инфикс ') {
                $('#word').html('English : ' + 'Infix' + '<br />' + '<br />' + 'Кыргызский : ' + 'Инфикс');
            } else if (searchValue.value === 'Инфинитив') {
                $('#word').html('English : ' + 'Infinitive' + '<br />' + '<br />' + 'Кыргызский : ' + 'Түбөлүктүү');
            } else if (searchValue.value === 'Каллиграфия ') {
                $('#word').html('English : ' + 'Calligraphy' + '<br />' + '<br />' + 'Кыргызский : ' + 'Каллиграфия');
            } else if (searchValue.value === 'Кельтология ') {
                $('#word').html('English : ' + 'Celtology' + '<br />' + '<br />' + 'Кыргызский : ' + 'Кельтология');
            } else if (searchValue.value === 'Клише ') {
                $('#word').html('English : ' + 'Cliche' + '<br />' + '<br />' + 'Кыргызский : ' + 'Клише');
            } else if (searchValue.value === 'Клинопись ') {
                $('#word').html('English : ' + 'Cuneiform' + '<br />' + '<br />' + 'Кыргызский : ' + 'Клинопись');
            } else if (searchValue.value === 'Коммуникация') {
                $('#word').html('English : ' + 'Communication' + '<br />' + '<br />' + 'Кыргызский : ' + 'Байланыш');
            } else if (searchValue.value === 'Конверсия ') {
                $('#word').html('English : ' + 'Conversion' + '<br />' + '<br />' + 'Кыргызский : ' + 'Конверсия');
            } else if (searchValue.value === 'Контекст ') {
                $('#word').html('English : ' + 'Context' + '<br />' + '<br />' + 'Кыргызский : ' + 'Контекст');
            } else if (searchValue.value === 'Курсив ') {
                $('#word').html('English : ' + 'Italics' + '<br />' + '<br />' + 'Кыргызский : ' + 'Курсив');
            } else if (searchValue.value === 'Лексема ') {
                $('#word').html('English : ' + 'Lexeme' + '<br />' + '<br />' + 'Кыргызский : ' + 'Лексема');
            } else if (searchValue.value === 'Лексика') {
                $('#word').html('English : ' + 'Vocabulary' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сөздүк');
            } else if (searchValue.value === 'Лексикон ') {
                $('#word').html('English : ' + 'Lexicon' + '<br />' + '<br />' + 'Кыргызский : ' + 'Лексикон');
            } else if (searchValue.value === 'Литота ') {
                $('#word').html('English : ' + 'Litotes' + '<br />' + '<br />' + 'Кыргызский : ' + 'Литота');
            } else if (searchValue.value === 'Местоимение') {
                $('#word').html('English : ' + 'Pronoun' + '<br />' + '<br />' + 'Кыргызский : ' + 'Aт атооч');
            } else if (searchValue.value === 'Метафора ') {
                $('#word').html('English : ' + 'Metaphor' + '<br />' + '<br />' + 'Кыргызский : ' + 'Метафора');
            } else if (searchValue.value === 'Метаязык ') {
                $('#word').html('English : ' + 'Metalanguage' + '<br />' + '<br />' + 'Кыргызский : ' + 'Метаязык');
            } else if (searchValue.value === 'Метатеза ') {
                $('#word').html('English : ' + 'Metathesis' + '<br />' + '<br />' + 'Кыргызский : ' + 'Метатеза');
            } else if (searchValue.value === 'Метонимия ') {
                $('#word').html('English : ' + 'Metonymy' + '<br />' + '<br />' + 'Кыргызский : ' + 'Метонимия');
            } else if (searchValue.value === 'Монолог ') {
                $('#word').html('English : ' + 'Monologue' + '<br />' + '<br />' + 'Кыргызский : ' + 'Монолог');
            } else if (searchValue.value === 'Морфема ') {
                $('#word').html('English : ' + 'Morpheme' + '<br />' + '<br />' + 'Кыргызский : ' + 'Морфема');
            } else if (searchValue.value === 'Неологизм ') {
                $('#word').html('English : ' + 'Neologism' + '<br />' + '<br />' + 'Кыргызский : ' + 'Неологизм');
            } else if (searchValue.value === 'Номинатив ') {
                $('#word').html('English : ' + 'Nominee' + '<br />' + '<br />' + 'Кыргызский : ' + 'Номинатив');
            } else if (searchValue.value === 'Обращение') {
                $('#word').html('English : ' + 'Appeal' + '<br />' + '<br />' + 'Кыргызский : ' + 'Cуроо');
            } else if (searchValue.value === 'Оксюморон ') {
                $('#word').html('English : ' + 'Oxymoron' + '<br />' + '<br />' + 'Кыргызский : ' + 'Оксюморон');
            } else if (searchValue.value === 'Омонимы ') {
                $('#word').html('English : ' + 'Homonyms' + '<br />' + '<br />' + 'Кыргызский : ' + 'Омонимы');
            } else if (searchValue.value === 'Орфограмма ') {
                $('#word').html('English : ' + 'Orthogram' + '<br />' + '<br />' + 'Кыргызский : ' + 'Орфограмма');
            } else if (searchValue.value === 'Палиндром ') {
                $('#word').html('English : ' + 'Palindrome' + '<br />' + '<br />' + 'Кыргызский : ' + 'Палиндром');
            } else if (searchValue.value === 'Палеография ') {
                $('#word').html('English : ' + 'Paleography' + '<br />' + '<br />' + 'Кыргызский : ' + 'Палеография');
            } else if (searchValue.value === 'Пауза') {
                $('#word').html('English : ' + 'Pause' + '<br />' + '<br />' + 'Кыргызский : ' + 'Tоктоо');
            } else if (searchValue.value === 'Пиктография ') {
                $('#word').html('English : ' + 'Pictography' + '<br />' + '<br />' + 'Кыргызский : ' + 'Пиктография');
            } else if (searchValue.value === 'Поговорка') {
                $('#word').html('English : ' + 'Proverb' + '<br />' + '<br />' + 'Кыргызский : ' + 'Mакал');
            } else if (searchValue.value === 'Шутка') {
                $('#word').html('English : ' + 'Joke' + '<br />' + '<br />' + 'Кыргызский : ' + 'Tамаша');
            } else if (searchValue.value === 'Предикат ') {
                $('#word').html('English : ' + 'Predicate' + '<br />' + '<br />' + 'Кыргызский : ' + 'Предикат');
            } else if (searchValue.value === 'Предлог ') {
                $('#word').html('English : ' + 'Pretext' + '<br />' + '<br />' + 'Кыргызский : ' + 'Предлог');
            } else if (searchValue.value === 'Редукция ') {
                $('#word').html('English : ' + 'Reduction' + '<br />' + '<br />' + 'Кыргызский : ' + 'Редукция');
            } else if (searchValue.value === 'Реплика ') {
                $('#word').html('English : ' + 'Replica' + '<br />' + '<br />' + 'Кыргызский : ' + 'Реплика');
            } else if (searchValue.value === 'Речь') {
                $('#word').html('English : ' + 'Speech' + '<br />' + '<br />' + 'Кыргызский : ' + 'Cүйлөө');
            } else if (searchValue.value === 'Сегмент ') {
                $('#word').html('English : ' + 'Segment' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сегмент');
            } else if (searchValue.value === 'Семиотика ') {
                $('#word').html('English : ' + 'Semiotics' + '<br />' + '<br />' + 'Кыргызский : ' + 'Семиотика');
            } else if (searchValue.value === 'Сленг') {
                $('#word').html('English : ' + 'Slang' + '<br />' + '<br />' + 'Кыргызский : ' + 'Шарттуу сөздөр');
            } else if (searchValue.value === 'Слог') {
                $('#word').html('English : ' + 'Syllable' + '<br />' + '<br />' + 'Кыргызский : ' + 'Mуун');
            } else if (searchValue.value === 'Смысл') {
                $('#word').html('English : ' + 'Meaning' + '<br />' + '<br />' + 'Кыргызский : ' + 'Mаани');
            } else if (searchValue.value === 'Стилистика ') {
                $('#word').html('English : ' + 'Stylistics' + '<br />' + '<br />' + 'Кыргызский : ' + 'Стилистика');
            } else if (searchValue.value === 'Субъект ') {
                $('#word').html('English : ' + 'Subject' + '<br />' + '<br />' + 'Кыргызский : ' + 'Субъект');
            } else if (searchValue.value === 'Суффикс ') {
                $('#word').html('English : ' + 'Suffix' + '<br />' + '<br />' + 'Кыргызский : ' + 'Суффикс');
            } else if (searchValue.value === 'Тавтология ') {
                $('#word').html('English : ' + 'Tautology' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тавтология');
            } else if (searchValue.value === 'Такт ') {
                $('#word').html('English : ' + 'Tact' + '<br />' + '<br />' + 'Кыргызский : ' + 'Такт');
            } else if (searchValue.value === 'Тембр') {
                $('#word').html('English : ' + 'Timbre' + '<br />' + '<br />' + 'Кыргызский : ' + 'Tембри');
            } else if (searchValue.value === 'Тильда ') {
                $('#word').html('English : ' + 'Tilde' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тильда');
            } else if (searchValue.value === 'Тон ') {
                $('#word').html('English : ' + 'Tone' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тон');
            } else if (searchValue.value === 'Транскрипция ') {
                $('#word').html('English : ' + 'Transcription' + '<br />' + '<br />' + 'Кыргызский : ' + 'Транскрипция');
            } else if (searchValue.value === 'Ударение ') {
                $('#word').html('English : ' + 'Emphasis' + '<br />' + '<br />' + 'Кыргызский : ' + 'Басым');
            } else if (searchValue.value === 'Устав ') {
                $('#word').html('English : ' + 'Charter' + '<br />' + '<br />' + 'Кыргызский : ' + 'Устав');
            } else if (searchValue.value === 'Цитата ') {
                $('#word').html('English : ' + 'Quote' + '<br />' + '<br />' + 'Кыргызский : ' + 'Цитата');
            } else if (searchValue.value === 'Шепот') {
                $('#word').html('English : ' + 'Whisper' + '<br />' + '<br />' + 'Кыргызский : ' + 'Шыбыроо');
            } else if (searchValue.value === 'Шум') {
                $('#word').html('English : ' + 'Noise' + '<br />' + '<br />' + 'Кыргызский : ' + 'Ызы-чуу');
            } else if (searchValue.value === 'Эквивалент') {
                $('#word').html('English : ' + 'Equivalent' + '<br />' + '<br />' + 'Кыргызский : ' + 'Барабар');
            } else if (searchValue.value === 'Экспрессия ') {
                $('#word').html('English : ' + 'Expression' + '<br />' + '<br />' + 'Кыргызский : ' + 'Экспрессия');
            } else if (searchValue.value === 'Отрицание') {
                $('#word').html('English : ' + 'Negation' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тануу');
            } else if (searchValue.value === 'Глагол') {
                $('#word').html('English : ' + 'Verb' + '<br />' + '<br />' + 'Кыргызский : ' + 'Этиш');
            } else if (searchValue.value === 'Прилагательное') {
                $('#word').html('English : ' + 'Adjective' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сын атооч');
            } else if (searchValue.value === 'Наречие') {
                $('#word').html('English : ' + 'Adverb' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тактооч');
            } else if (searchValue.value === 'Приставка ') {
                $('#word').html('English : ' + 'Prefix' + '<br />' + '<br />' + 'Кыргызский : ' + 'Приставка');
            } else if (searchValue.value === 'Корень') {
                $('#word').html('English : ' + 'Root' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тамыр');
            } else if (searchValue.value === 'Окончание') {
                $('#word').html('English : ' + 'Ending' + '<br />' + '<br />' + 'Кыргызский : ' + 'Аякташы');
            } else if (searchValue.value === 'Часть речи') {
                $('#word').html('English : ' + 'Part of speech' + '<br />' + '<br />' + 'Кыргызский : ' + 'Бөлүгү сүйлөө');
            } else if (searchValue.value === 'Падеж') {
                $('#word').html('English : ' + 'Case' + '<br />' + '<br />' + 'Кыргызский : ' + 'Жөндөм');
            } else if (searchValue.value === 'Гласная буква') {
                $('#word').html('English : ' + 'Vowel' + '<br />' + '<br />' + 'Кыргызский : ' + 'үндүү тамга ');
            } else if (searchValue.value === 'Согласная буква') {
                $('#word').html('English : ' + 'Сonsonant' + '<br />' + '<br />' + 'Кыргызский : ' + 'үнсүз тамга');
            } else if (searchValue.value === 'Параграф ') {
                $('#word').html('English : ' + 'Paragraph' + '<br />' + '<br />' + 'Кыргызский : ' + 'Параграф');
            } else if (searchValue.value === 'Абзац ') {
                $('#word').html('English : ' + 'Indent' + '<br />' + '<br />' + 'Кыргызский : ' + 'Абзац');
            } else if (searchValue.value === 'Литература') {
                $('#word').html('English : ' + 'Literature' + '<br />' + '<br />' + 'Кыргызский : ' + 'Адабият');
            } else if (searchValue.value === 'Аббревиатура ') {
                $('#word').html('English : ' + 'Abbreviation' + '<br />' + '<br />' + 'Кыргызский : ' + 'Аббревиатура');
            } else if (searchValue.value === 'Язык') {
                $('#word').html('English : ' + 'Language' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тил');
            }
            return false;
        
    });

});


/*  KYRGYZ TAGS  */


$(document).ready(function () {

    var kgTags = ["Клавиатура", "Браузер", "Чычкан", "Компьютер", "Электр менен камсыз кылуу бөлүмү", "Монитор", "Сүйлөмөлөрдү", "Наушник", "Роутер", "Процессор", "Программалоо тили", "Материнская плата", "Оперативная память", "Катуу диск", "Видеокарта", "Дисковод", "Баскычы", "Камера", "Басуучу машина", "Сканер", "Киргизүүчү түзмөк", "Көрсөтүү түзмөк", "Ачкыч", "Программа", "Операциондук система", "IP дареги", "Чөмөлө", "Программалоо", "Иштеп чыгуу", "Переменная", "Алгоритм", "Цикл", "Милдети", "Тизме", "Зат", "Иерархия", "Окуя", 'Аспап', 'Оператор', 'Инструкция', 'Логикалык', 'Парадигма', 'Сервер', 'Виртуальность', 'Локалдык', 'Регионалдык', 'Глобалдык', 'Телефон', 'Транзакция', 'Иньекция', 'Маалыматтар базасы', 'Маалыматтар', 'Протокол', 'Китеп кана', 'Графика', 'Вектор', 'Мураска ээ болуу', 'Бөлүп коюу', 'Жылдыруу ', 'өчуруу ', 'Башкаруу ', 'Копировать ', 'Формат ', 'Директория ', 'Жол ', 'Окружение ', 'Консоль ', 'Платформа ', 'Генератор ', 'Произвольный ', 'Пользовательский интерфейс ', 'Пользовательский опыт ', 'Графический интерфейс ', 'Планшет ', 'Стационар ', 'Тестирлөө ', 'Иштебегени ', 'Агым ', 'Синхронизация ', 'Асинхронный ', 'Многопоточный ', 'Режими ', 'Cактык ', 'Шина ', 'Шлюз ', 'Ысык баскычылар ', 'Комбинация ', 'Разрешение ', 'Прагматика', 'Туура айтуу', 'Анаграмма', 'Драмма', 'Куп', 'Фонология', 'Антропоним', 'Аппликация', 'Аймак', 'Архетип', 'Бириктирүү', 'Фонема', 'Префикс', 'Атоочтуктар', 'Сызыкча', 'Диалект', 'Дискурс', 'Кошуу', 'Жаргон', 'үн жазуу', 'Идиома', 'Императив', 'Инверсия', 'Индикатив', 'Инфикс', 'Түбөлүктүү', 'Каллиграфия', 'Кельтология', 'Клише', 'Клинопись', 'Байланыш', 'Конверсия', 'Контекст', 'Курсив', 'Лексема', 'Сөздүк', 'Лексикон', 'Литота', 'Aт атооч', 'Метафора', 'Метаязык', 'Метатеза', 'Метонимия', 'Монолог', 'Морфема', 'Неологизм', 'Номинатив', 'Суроо', 'Оксюморон', 'Омонимы', 'Орфограмма', 'Палиндром', 'Палеография', 'Токтоо', 'Пиктография', 'Макал', 'Тамаша', 'Предикат', 'Предлог', 'Редукция', 'Реплика', 'Сүйлөө', 'Сегмент', 'Семиотика', 'Шарттуу сөздөр', 'Муун', 'Маани', 'Стилистика', 'Субъект', 'Суффикс', 'Тавтология', 'Такт', 'Тембри', 'Тильда', 'Тон', 'Транскрипция', 'Басым', 'Устав', 'Цитата', 'Шыбыроо', 'Ызы-чуу', 'Барабар', 'Экспрессия', 'Тануу', 'Этиш', 'Сын атооч', 'Тактооч', 'Приставка', 'Тамыр', 'Аякташы', 'Бөлүгү сүйлөө', 'Жөндөм', 'үндүү тамга', 'үнсүз тамга', 'Параграф', 'Абзац', 'Адабият', 'Аббревиатура', 'Тил'];

    console.log(kgTags.length + 24);

    $('#kg').click(function () {
        $('.show').slideToggle();
        $('#search').autocomplete({
            source: kgTags
        });
    });

    var searchValue = document.getElementById('search');

    $('#translate').click(function () {
            if (searchValue.value === 'Чычкан') {
                $('#word').html('Русский : ' + 'Мышь' + '<br />' + '<br />' + 'English : ' + 'Mouse');
            } else if (searchValue.value === 'Браузер') {
                $('#word').html('Русский : ' + 'Браузер' + '<br />' + '<br />' + 'English : ' + 'Browser');
            } else if (searchValue.value === 'Клавиатура') {
                $('#word').html('Русский : ' + 'Клавиатура' + '<br />' + '<br />' + 'English : ' + 'Keyboard');
            } else if (searchValue.value === 'Компьютер') {
                $('#word').html('Русский : ' + 'Компьютер' + '<br />' + '<br />' + 'English : ' + 'Computer');
            } else if (searchValue.value === 'Электр менен камсыз кылуу бөлүмү') {
                $('#word').html('Русский : ' + 'Блок Питания' + '<br />' + '<br />' + 'English : ' + 'Power Supply');
            } else if (searchValue.value === 'Монитор') {
                $('#word').html('Русский : ' + 'Монитор' + '<br />' + '<br />' + 'English : ' + 'Display');
            } else if (searchValue.value === 'Сүйлөмөлөрдү') {
                $('#word').html('Русский : ' + 'Колонки' + '<br />' + '<br />' + 'English : ' + 'Loudspeakers');
            } else if (searchValue.value === 'Наушник') {
                $('#word').html('Русский : ' + 'Наушники' + '<br />' + '<br />' + 'English : ' + 'Earphones');
            } else if (searchValue.value === 'Роутер') {
                $('#word').html('Русский : ' + 'Роутер' + '<br />' + '<br />' + 'English : ' + 'Router');
            } else if (searchValue.value === 'Процессор') {
                $('#word').html('Русский : ' + 'Процессор' + '<br />' + '<br />' + 'English : ' + 'Processor (CPU)');
            } else if (searchValue.value === 'Программалоо тили') {
                $('#word').html('Русский : ' + 'Язык программирования' + '<br />' + '<br />' + 'English : ' + 'Programming language');
            } else if (searchValue.value === 'Материнская плата') {
                $('#word').html('Русский : ' + 'Материнская плата' + '<br />' + '<br />' + 'English : ' + 'Motherboard');
            } else if (searchValue.value === 'Оперативная память') {
                $('#word').html('Русский : ' + 'Оперативная память' + '<br />' + '<br />' + 'English : ' + 'RAM (Random Access Memory)');
            } else if (searchValue.value === 'Катуу диск') {
                $('#word').html('Русский : ' + 'Жесткий диск' + '<br />' + '<br />' + 'English : ' + 'HDD (Hard Disk Drive)');
            } else if (searchValue.value === 'Дисковод') {
                $('#word').html('Русский : ' + 'Дисковод' + '<br />' + '<br />' + 'English : ' + 'Drive');
            } else if (searchValue.value === 'Видеокарта') {
                $('#word').html('Русский : ' + 'Видеокарта' + '<br />' + '<br />' + 'English : ' + 'Videocard');
            } else if (searchValue.value === 'Баскычы') {
                $('#word').html('Русский : ' + 'Кнопка' + '<br />' + '<br />' + 'English : ' + 'Button');
            } else if (searchValue.value === 'Камера') {
                $('#word').html('Русский : ' + 'Камера' + '<br />' + '<br />' + 'English : ' + 'Camera');
            } else if (searchValue.value === 'Басуучу машина') {
                $('#word').html('Русский : ' + 'Принтер' + '<br />' + '<br />' + 'English : ' + 'Printer');
            } else if (searchValue.value === 'Сканер') {
                $('#word').html('Русский : ' + 'Сканер' + '<br />' + '<br />' + 'English : ' + 'Scanner');
            } else if (searchValue.value === 'Киргизүүчү түзмөк') {
                $('#word').html('Русский : ' + 'Устройство ввода' + '<br />' + '<br />' + 'English : ' + 'Input device');
            } else if (searchValue.value === 'Көрсөтүү түзмөк') {
                $('#word').html('Русский : ' + 'Устройство ввывода' + '<br />' + '<br />' + 'English : ' + 'Output device');
            } else if (searchValue.value === 'Ачкыч') {
                $('#word').html('Русский : ' + 'Клавиша' + '<br />' + '<br />' + 'English : ' + 'Key');
            } else if (searchValue.value === 'Программа') {
                $('#word').html('Русский : ' + 'Программа' + '<br />' + '<br />' + 'English : ' + 'Program');
            } else if (searchValue.value === 'Операциондук система') {
                $('#word').html('Русский : ' + 'Операционная система' + '<br />' + '<br />' + 'English : ' + 'OS (Operating System)');
            } else if (searchValue.value === 'IP дареги') {
                $('#word').html('Русский : ' + 'IP Адрес' + '<br />' + '<br />' + 'English : ' + 'IP (Internet Protocol) Address');
            } else if (searchValue.value === 'Чөмөлө') {
                $('#word').html('Русский : ' + 'Стек' + '<br />' + '<br />' + 'English : ' + 'Stack');
            } else if (searchValue.value === 'Программалоо') {
                $('#word').html('Русский : ' + 'Программирование' + '<br />' + '<br />' + 'English : ' + 'Programming');
            } else if (searchValue.value === 'Иштеп чыгуу') {
                $('#word').html('Русский : ' + 'Разработка' + '<br />' + '<br />' + 'English : ' + 'Development');
            } else if (searchValue.value === 'Переменная') {
                $('#word').html('Русский : ' + 'Переменная' + '<br />' + '<br />' + 'English : ' + 'Variable');
            } else if (searchValue.value === 'Алгоритм') {
                $('#word').html('Русский : ' + 'Алгоритм' + '<br />' + '<br />' + 'English : ' + 'Algorithm');
            } else if (searchValue.value === 'Милдети') {
                $('#word').html('Русский : ' + 'Функция' + '<br />' + '<br />' + 'English : ' + 'Function');
            } else if (searchValue.value === 'Цикл') {
                $('#word').html('Русский : ' + 'Цикл' + '<br />' + '<br />' + 'English : ' + 'Loop');
            } else if (searchValue.value === 'Тизме') {
                $('#word').html('Русский : ' + 'Массив' + '<br />' + '<br />' + 'English : ' + 'Array');
            } else if (searchValue.value === 'Зат') {
                $('#word').html('Русский : ' + 'Объект' + '<br />' + '<br />' + 'English : ' + 'Object');
            } else if (searchValue.value === 'Иерархия') {
                $('#word').html('Русский : ' + 'Иерархия' + '<br />' + '<br />' + 'English : ' + 'Hierarchy');
            } else if (searchValue.value === 'Окуя') {
                $('#word').html('Русский : ' + 'Событие' + '<br />' + '<br />' + 'English : ' + 'Event');
            } else if (searchValue.value === 'Аспап') {
                $('#word').html('Русский : ' + 'Инструмент' + '<br />' + '<br />' + 'English : ' + 'Tool');
            } else if (searchValue.value === 'Оператор') {
                $('#word').html('Русский : ' + 'Оператор' + '<br />' + '<br />' + 'English : ' + 'Operator');
            } else if (searchValue.value === 'Инструкция') {
                $('#word').html('Русский : ' + 'Инструкция' + '<br />' + '<br />' + 'English : ' + 'Instruction');
            } else if (searchValue.value === 'Логикалык') {
                $('#word').html('Русский : ' + 'Логика' + '<br />' + '<br />' + 'English : ' + 'Logic');
            } else if (searchValue.value === 'Парадигма') {
                $('#word').html('Русский : ' + 'Парадигма' + '<br />' + '<br />' + 'English : ' + 'Paradigm');
            } else if (searchValue.value === 'Окуя') {
                $('#word').html('Русский : ' + 'Событие' + '<br />' + '<br />' + 'English : ' + 'Event');
            } else if (searchValue.value === 'Сервер') {
                $('#word').html('Русский : ' + 'Сервер' + '<br />' + '<br />' + 'English : ' + 'Server');
            } else if (searchValue.value === 'Виртуальность') {
                $('#word').html('Русский : ' + 'Виртуальность' + '<br />' + '<br />' + 'English : ' + 'Virtuality');
            } else if (searchValue.value === 'Локалдык') {
                $('#word').html('Русский : ' + 'Локаьный' + '<br />' + '<br />' + 'English : ' + 'Local');
            } else if (searchValue.value === 'Регионалдык') {
                $('#word').html('Русский : ' + 'Региональный' + '<br />' + '<br />' + 'English : ' + 'Regional');
            } else if (searchValue.value === 'Глобалдык') {
                $('#word').html('Русский : ' + 'Глобальный' + '<br />' + '<br />' + 'English : ' + 'Global');
            } else if (searchValue.value === 'Телефон') {
                $('#word').html('Русский : ' + 'Телефон' + '<br />' + '<br />' + 'English : ' + 'Phone');
            } else if (searchValue.value === 'Транзакция') {
                $('#word').html('Русский : ' + 'Транзакция' + '<br />' + '<br />' + 'English : ' + 'Transaction');
            } else if (searchValue.value === 'Иньекция') {
                $('#word').html('Русский : ' + 'Иньекция' + '<br />' + '<br />' + 'English : ' + 'Injection');
            } else if (searchValue.value === 'Маалыматтар базасы') {
                $('#word').html('Русский : ' + 'База данных' + '<br />' + '<br />' + 'English : ' + 'Database');
            } else if (searchValue.value === 'Маалыматтар') {
                $('#word').html('Русский : ' + 'Данные' + '<br />' + '<br />' + 'English : ' + 'Data');
            } else if (searchValue.value === 'Протокол') {
                $('#word').html('Русский : ' + 'Протокол' + '<br />' + '<br />' + 'English : ' + 'Protocol');
            } else if (searchValue.value === 'Китеп кана') {
                $('#word').html('Русский : ' + 'Библиотека' + '<br />' + '<br />' + 'English : ' + 'Library');
            } else if (searchValue.value === 'Графика') {
                $('#word').html('Русский : ' + 'Графика' + '<br />' + '<br />' + 'English : ' + 'Graphic');
            } else if (searchValue.value === 'Вектор') {
                $('#word').html('Русский : ' + 'Вектор' + '<br />' + '<br />' + 'English : ' + 'Vector');
            } else if (searchValue.value === 'Мураска ээ болуу') {
                $('#word').html('Русский : ' + 'Наследование' + '<br />' + '<br />' + 'English : ' + 'Inheritance');
            } else if (searchValue.value === 'Бөлүп коюу') {
                $('#word').html('Русский : ' + 'Изоляция' + '<br />' + '<br />' + 'English : ' + 'Insulation');
            } else if (searchValue.value === 'Жылдыруу ') {
                $('#word').html('English : ' + 'Move' + '<br />' + '<br />' + 'Русский : ' + 'Переместить');
            } else if (searchValue.value === 'Башкаруу ') {
                $('#word').html('English : ' + 'Manage' + '<br />' + '<br />' + 'Русский : ' + 'Управлять');
            } else if (searchValue.value === 'Копировать ') {
                $('#word').html('English : ' + 'Copy' + '<br />' + '<br />' + 'Русский : ' + 'Копировать');
            } else if (searchValue.value === 'Формат ') {
                $('#word').html('English : ' + 'Format' + '<br />' + '<br />' + 'Русский : ' + 'Формат');
            } else if (searchValue.value === 'Директория ') {
                $('#word').html('English : ' + 'Directory' + '<br />' + '<br />' + 'Русский : ' + 'Директория');
            } else if (searchValue.value === 'Жол ') {
                $('#word').html('English : ' + 'Path' + '<br />' + '<br />' + 'Русский : ' + 'Путь');
            } else if (searchValue.value === 'Окружение ') {
                $('#word').html('English : ' + 'Environment' + '<br />' + '<br />' + 'Русский : ' + 'Окружение');
            } else if (searchValue.value === 'Консоль ') {
                $('#word').html('English : ' + 'Console' + '<br />' + '<br />' + 'Русский : ' + 'Консоль');
            } else if (searchValue.value === 'Платформа ') {
                $('#word').html('English : ' + 'Platform' + '<br />' + '<br />' + 'Русский : ' + 'Платформа');
            } else if (searchValue.value === 'Генератор ') {
                $('#word').html('English : ' + 'Generator' + '<br />' + '<br />' + 'Русский : ' + 'Генератор');
            } else if (searchValue.value === 'өчуруу ') {
                $('#word').html('English : ' + 'Erase' + '<br />' + '<br />' + 'Русский : ' + 'Стереть');
            } else if (searchValue.value === 'Произвольный ') {
                $('#word').html('English : ' + 'Random' + '<br />' + '<br />' + 'Русский : ' + 'Произвольный');
            } else if (searchValue.value === 'Пользовательский интерфейс ') {
                $('#word').html('English : ' + 'UI (User Interface)' + '<br />' + '<br />' + 'Русский : ' + 'Пользовательский интерфейс');
            } else if (searchValue.value === 'Пользовательский опыт ') {
                $('#word').html('English : ' + 'UX (User Expirience)' + '<br />' + '<br />' + 'Русский : ' + 'Пользовательский опыт ');
            } else if (searchValue.value === 'Графический интерфейс ') {
                $('#word').html('English : ' + 'GUI (Graphic User Interface)' + '<br />' + '<br />' + 'Русский : ' + 'Графический интерфейс');
            } else if (searchValue.value === 'Планшет ') {
                $('#word').html('English : ' + 'Tablet' + '<br />' + '<br />' + 'Русский : ' + 'Планшет');
            } else if (searchValue.value === 'Стационар ') {
                $('#word').html('English : ' + 'Static' + '<br />' + '<br />' + 'Русский : ' + 'Стационар');
            } else if (searchValue.value === 'Тестирлөө ') {
                $('#word').html('English : ' + 'Unit Test' + '<br />' + '<br />' + 'Русский : ' + 'Тестирование');
            } else if (searchValue.value === 'Иштебегени ') {
                $('#word').html('English : ' + 'Bug' + '<br />' + '<br />' + 'Русский : ' + 'Неисправность');
            } else if (searchValue.value === 'Агым ') {
                $('#word').html('English : ' + 'Stream' + '<br />' + '<br />' + 'Русский : ' + 'Поток');
            } else if (searchValue.value === 'Синхронизация ') {
                $('#word').html('English : ' + 'Synchronization' + '<br />' + '<br />' + 'Русский : ' + 'Синхронизация');
            } else if (searchValue.value === 'Асинхронный ') {
                $('#word').html('English : ' + 'Asynchronous' + '<br />' + '<br />' + 'Русский : ' + 'Асинхронный');
            } else if (searchValue.value === 'Многопоточный ') {
                $('#word').html('English : ' + 'Multithreaded' + '<br />' + '<br />' + 'Русский : ' + 'Многопоточный');
            } else if (searchValue.value === 'Режими ') {
                $('#word').html('English : ' + 'Mode' + '<br />' + '<br />' + 'Русский : ' + 'Режим');
            } else if (searchValue.value === 'Cактык ') {
                $('#word').html('English : ' + 'Saving' + '<br />' + '<br />' + 'Русский : ' + 'Экономия');
            } else if (searchValue.value === 'Шина ') {
                $('#word').html('English : ' + 'Bus' + '<br />' + '<br />' + 'Русский : ' + 'Шина');
            } else if (searchValue.value === 'Шлюз ') {
                $('#word').html('English : ' + 'Floodgate' + '<br />' + '<br />' + 'Русский : ' + 'Шлюз');
            } else if (searchValue.value === 'Ысык баскычылар ') {
                $('#word').html('English : ' + 'Hotkeys' + '<br />' + '<br />' + 'Русский : ' + 'Горячие клавиши');
            } else if (searchValue.value === 'Комбинация ') {
                $('#word').html('English : ' + 'Combination' + '<br />' + '<br />' + 'Русский : ' + 'Комбинация');
            } else if (searchValue.value === 'Разрешение ') {
                $('#word').html('English : ' + 'Resolution' + '<br />' + '<br />' + 'Русский : ' + 'Разрешение');
            }


            ////////////////////////////////// LINGUISTIC WORDS
            else if (searchValue.value === 'Прагматика') {
                $('#word').html('English : ' + 'Pragmatics' + '<br />' + '<br />' + 'Русский : ' + 'Прагматика');
            } else if (searchValue.value === 'Туура айтуу') {
                $('#word').html('English : ' + 'Accent' + '<br />' + '<br />' + 'Русский : ' + 'Акцент');
            } else if (searchValue.value === 'Анаграмма') {
                $('#word').html('English : ' + 'Anagram' + '<br />' + '<br />' + 'Русский : ' + 'Анаграмма');
            } else if (searchValue.value === 'Драмма') {
                $('#word').html('English : ' + 'Drama' + '<br />' + '<br />' + 'Русский : ' + 'Драмма');
            } else if (searchValue.value === 'Куп') {
                $('#word').html('English : ' + 'Epithet' + '<br />' + '<br />' + 'Русский : ' + 'Эпитет');
            } else if (searchValue.value === 'Фонология') {
                $('#word').html('English : ' + 'Phonology' + '<br />' + '<br />' + 'Русский : ' + 'Фонология');
            } else if (searchValue.value === 'Антропоним') {
                $('#word').html('English : ' + 'Anthroponym' + '<br />' + '<br />' + 'Русский : ' + 'Антропоним');
            } else if (searchValue.value === 'Аппликация') {
                $('#word').html('English : ' + 'Applique' + '<br />' + '<br />' + 'Русский : ' + 'Аппликация');
            } else if (searchValue.value === 'Аймак') {
                $('#word').html('English : ' + 'Areal' + '<br />' + '<br />' + 'Русский : ' + 'Ареал');
            } else if (searchValue.value === 'Архетип') {
                $('#word').html('English : ' + 'Archetype' + '<br />' + '<br />' + 'Русский : ' + 'Архетип');
            } else if (searchValue.value === 'Бириктирүү') {
                $('#word').html('English : ' + 'Affix' + '<br />' + '<br />' + 'Русский : ' + 'Аффикс');
            } else if (searchValue.value === 'Фонема') {
                $('#word').html('English : ' + 'Phoneme' + '<br />' + '<br />' + 'Русский : ' + 'Фонема');
            } else if (searchValue.value === 'Префикс') {
                $('#word').html('English : ' + 'Prefix' + '<br />' + '<br />' + 'Русский : ' + 'Префикс');
            } else if (searchValue.value === 'Атоочтуктар') {
                $('#word').html('English : ' + 'Participle' + '<br />' + '<br />' + 'Русский : ' + 'Деепричастие');
            } else if (searchValue.value === 'Сызыкча') {
                $('#word').html('English : ' + 'Hyphen' + '<br />' + '<br />' + 'Русский : ' + 'Дефис');
            } else if (searchValue.value === 'Диалект') {
                $('#word').html('English : ' + 'Dialect' + '<br />' + '<br />' + 'Русский : ' + 'Диалект');
            } else if (searchValue.value === 'Дискурс') {
                $('#word').html('English : ' + 'Discourse' + '<br />' + '<br />' + 'Русский : ' + 'Дискурс');
            } else if (searchValue.value === 'Кошуу') {
                $('#word').html('English : ' + 'Addition' + '<br />' + '<br />' + 'Русский : ' + 'Дополнение');
            } else if (searchValue.value === 'Жаргон') {
                $('#word').html('English : ' + 'Jargon' + '<br />' + '<br />' + 'Русский : ' + 'Жаргон');
            } else if (searchValue.value === 'үн жазуу') {
                $('#word').html('English : ' + 'Sound recording' + '<br />' + '<br />' + 'Русский : ' + 'Звукопись');
            } else if (searchValue.value === 'Идиома') {
                $('#word').html('English : ' + 'Idiom' + '<br />' + '<br />' + 'Русский : ' + 'Идиома');
            } else if (searchValue.value === 'Императив') {
                $('#word').html('English : ' + 'Imperative' + '<br />' + '<br />' + 'Русский : ' + 'Императив');
            } else if (searchValue.value === 'Инверсия') {
                $('#word').html('English : ' + 'Inversion' + '<br />' + '<br />' + 'Русский : ' + 'Инверсия');
            } else if (searchValue.value === 'Индикатив') {
                $('#word').html('English : ' + 'Indicative' + '<br />' + '<br />' + 'Русский : ' + 'Индикатив');
            } else if (searchValue.value === 'Инфикс') {
                $('#word').html('English : ' + 'Infix' + '<br />' + '<br />' + 'Русский : ' + 'Инфикс');
            } else if (searchValue.value === 'Түбөлүктүү') {
                $('#word').html('English : ' + 'Infinitive' + '<br />' + '<br />' + 'Русский : ' + 'Инфинитив');
            } else if (searchValue.value === 'Каллиграфия') {
                $('#word').html('English : ' + 'Calligraphy' + '<br />' + '<br />' + 'Русский : ' + 'Каллиграфия');
            } else if (searchValue.value === 'Кельтология') {
                $('#word').html('English : ' + 'Celtology' + '<br />' + '<br />' + 'Русский : ' + 'Кельтология');
            } else if (searchValue.value === 'Клише') {
                $('#word').html('English : ' + 'Cliche' + '<br />' + '<br />' + 'Русский : ' + 'Клише');
            } else if (searchValue.value === 'Клинопись') {
                $('#word').html('English : ' + 'Cuneiform' + '<br />' + '<br />' + 'Русский : ' + 'Клинопись');
            } else if (searchValue.value === 'Байланыш') {
                $('#word').html('English : ' + 'Communication' + '<br />' + '<br />' + 'Русский : ' + 'Коммуникация');
            } else if (searchValue.value === 'Конверсия') {
                $('#word').html('English : ' + 'Conversion' + '<br />' + '<br />' + 'Русский : ' + 'Конверсия');
            } else if (searchValue.value === 'Контекст') {
                $('#word').html('English : ' + 'Context' + '<br />' + '<br />' + 'Русский : ' + 'Контекст');
            } else if (searchValue.value === 'Курсив') {
                $('#word').html('English : ' + 'Italics' + '<br />' + '<br />' + 'Русский : ' + 'Курсив');
            } else if (searchValue.value === 'Лексема') {
                $('#word').html('English : ' + 'Lexeme' + '<br />' + '<br />' + 'Русский : ' + 'Лексема');
            } else if (searchValue.value === 'Сөздүк') {
                $('#word').html('English : ' + 'Vocabulary' + '<br />' + '<br />' + 'Русский : ' + 'Лексика');
            } else if (searchValue.value === 'Лексикон') {
                $('#word').html('English : ' + 'Lexicon' + '<br />' + '<br />' + 'Русский : ' + 'Лексикон');
            } else if (searchValue.value === 'Литота') {
                $('#word').html('English : ' + 'Litotes' + '<br />' + '<br />' + 'Русский : ' + 'Литота');
            } else if (searchValue.value === 'Ат атооч') {
                $('#word').html('English : ' + 'Pronoun' + '<br />' + '<br />' + 'Русский : ' + 'Местоимение');
            } else if (searchValue.value === 'Метафора') {
                $('#word').html('English : ' + 'Metaphor' + '<br />' + '<br />' + 'Русский : ' + 'Метафора');
            } else if (searchValue.value === 'Метаязык') {
                $('#word').html('English : ' + 'Metalanguage' + '<br />' + '<br />' + 'Русский : ' + 'Метаязык');
            } else if (searchValue.value === 'Метатеза') {
                $('#word').html('English : ' + 'Metathesis' + '<br />' + '<br />' + 'Русский : ' + 'Метатеза');
            } else if (searchValue.value === 'Метонимия') {
                $('#word').html('English : ' + 'Metonymy' + '<br />' + '<br />' + 'Русский : ' + 'Метонимия');
            } else if (searchValue.value === 'Монолог') {
                $('#word').html('English : ' + 'Monologue' + '<br />' + '<br />' + 'Русский : ' + 'Монолог');
            } else if (searchValue.value === 'Морфема') {
                $('#word').html('English : ' + 'Morpheme' + '<br />' + '<br />' + 'Русский : ' + 'Морфема');
            } else if (searchValue.value === 'Неологизм') {
                $('#word').html('English : ' + 'Neologism' + '<br />' + '<br />' + 'Русский : ' + 'Неологизм');
            } else if (searchValue.value === 'Номинатив') {
                $('#word').html('English : ' + 'Nominee' + '<br />' + '<br />' + 'Русский : ' + 'Номинатив');
            } else if (searchValue.value === 'Суроо') {
                $('#word').html('English : ' + 'Appeal' + '<br />' + '<br />' + 'Русский : ' + 'Обращение');
            } else if (searchValue.value === 'Оксюморон') {
                $('#word').html('English : ' + 'Oxymoron' + '<br />' + '<br />' + 'Русский : ' + 'Оксюморон');
            } else if (searchValue.value === 'Омонимы') {
                $('#word').html('English : ' + 'Homonyms' + '<br />' + '<br />' + 'Русский : ' + 'Омонимы');
            } else if (searchValue.value === 'Орфограмма') {
                $('#word').html('English : ' + 'Orthogram' + '<br />' + '<br />' + 'Русский : ' + 'Орфограмма');
            } else if (searchValue.value === 'Палиндром') {
                $('#word').html('English : ' + 'Palindrome' + '<br />' + '<br />' + 'Русский : ' + 'Палиндром');
            } else if (searchValue.value === 'Палеография') {
                $('#word').html('English : ' + 'Paleography' + '<br />' + '<br />' + 'Русский : ' + 'Палеография');
            } else if (searchValue.value === 'Токтоо') {
                $('#word').html('English : ' + 'Pause' + '<br />' + '<br />' + 'Русский : ' + 'Пауза');
            } else if (searchValue.value === 'Пиктография') {
                $('#word').html('English : ' + 'Pictography' + '<br />' + '<br />' + 'Русский : ' + 'Пиктография');
            } else if (searchValue.value === 'Макал') {
                $('#word').html('English : ' + 'Proverb' + '<br />' + '<br />' + 'Русский : ' + 'Поговорка');
            } else if (searchValue.value === 'Тамаша') {
                $('#word').html('English : ' + 'Joke' + '<br />' + '<br />' + 'Русский : ' + 'Шутка');
            } else if (searchValue.value === 'Предикат') {
                $('#word').html('English : ' + 'Predicate' + '<br />' + '<br />' + 'Русский : ' + 'Предикат');
            } else if (searchValue.value === 'Предлог') {
                $('#word').html('English : ' + 'Pretext' + '<br />' + '<br />' + 'Русский : ' + 'Предлог');
            } else if (searchValue.value === 'Редукция') {
                $('#word').html('English : ' + 'Reduction' + '<br />' + '<br />' + 'Русский : ' + 'Редукция');
            } else if (searchValue.value === 'Реплика') {
                $('#word').html('English : ' + 'Replica' + '<br />' + '<br />' + 'Русский : ' + 'Реплика');
            } else if (searchValue.value === 'Сүйлөө') {
                $('#word').html('English : ' + 'Speech' + '<br />' + '<br />' + 'Русский : ' + 'Речь');
            } else if (searchValue.value === 'Сегмент') {
                $('#word').html('English : ' + 'Segment' + '<br />' + '<br />' + 'Русский : ' + 'Сегмент');
            } else if (searchValue.value === 'Семиотика') {
                $('#word').html('English : ' + 'Semiotics' + '<br />' + '<br />' + 'Русский : ' + 'Семиотика');
            } else if (searchValue.value === 'Шарттуу сөздөр') {
                $('#word').html('English : ' + 'Slang' + '<br />' + '<br />' + 'Русский : ' + 'Сленг');
            } else if (searchValue.value === 'Муун') {
                $('#word').html('English : ' + 'Syllable' + '<br />' + '<br />' + 'Русский : ' + 'Слог');
            } else if (searchValue.value === 'Маани') {
                $('#word').html('English : ' + 'Meaning' + '<br />' + '<br />' + 'Русский : ' + 'Смысл');
            } else if (searchValue.value === 'Стилистика') {
                $('#word').html('English : ' + 'Stylistics' + '<br />' + '<br />' + 'Русский : ' + 'Стилистика');
            } else if (searchValue.value === 'Субъект') {
                $('#word').html('English : ' + 'Subject' + '<br />' + '<br />' + 'Русский : ' + 'Субъект');
            } else if (searchValue.value === 'Суффикс') {
                $('#word').html('English : ' + 'Suffix' + '<br />' + '<br />' + 'Русский : ' + 'Суффикс');
            } else if (searchValue.value === 'Тавтология') {
                $('#word').html('English : ' + 'Tautology' + '<br />' + '<br />' + 'Русский : ' + 'Тавтология');
            } else if (searchValue.value === 'Такт') {
                $('#word').html('English : ' + 'Tact' + '<br />' + '<br />' + 'Русский : ' + 'Такт');
            } else if (searchValue.value === 'Тембри') {
                $('#word').html('English : ' + 'Timbre' + '<br />' + '<br />' + 'Русский : ' + 'Тембр');
            } else if (searchValue.value === 'Тильда') {
                $('#word').html('English : ' + 'Tilde' + '<br />' + '<br />' + 'Русский : ' + 'Тильда');
            } else if (searchValue.value === 'Тон') {
                $('#word').html('English : ' + 'Tone' + '<br />' + '<br />' + 'Русский : ' + 'Тон');
            } else if (searchValue.value === 'Транскрипция') {
                $('#word').html('English : ' + 'Transcription' + '<br />' + '<br />' + 'Русский : ' + 'Транскрипция');
            } else if (searchValue.value === 'Басым') {
                $('#word').html('English : ' + 'Emphasis' + '<br />' + '<br />' + 'Русский : ' + 'Ударение');
            } else if (searchValue.value === 'Устав') {
                $('#word').html('English : ' + 'Charter' + '<br />' + '<br />' + 'Русский : ' + 'Устав');
            } else if (searchValue.value === 'Цитата') {
                $('#word').html('English : ' + 'Quote' + '<br />' + '<br />' + 'Русский : ' + 'Цитата');
            } else if (searchValue.value === 'Шыбыроо') {
                $('#word').html('English : ' + 'Whisper' + '<br />' + '<br />' + 'Русский : ' + 'Шепот');
            } else if (searchValue.value === 'Ызы-чуу') {
                $('#word').html('English : ' + 'Noise' + '<br />' + '<br />' + 'Русский : ' + 'Шум');
            } else if (searchValue.value === 'Барабар') {
                $('#word').html('English : ' + 'Equivalent' + '<br />' + '<br />' + 'Русский : ' + 'Эквивалент');
            } else if (searchValue.value === 'Экспрессия') {
                $('#word').html('English : ' + 'Expression' + '<br />' + '<br />' + 'Русский : ' + 'Экспрессия');
            } else if (searchValue.value === 'Тануу') {
                $('#word').html('English : ' + 'Negation' + '<br />' + '<br />' + 'Русский : ' + 'Отрицание');
            } else if (searchValue.value === 'Этиш') {
                $('#word').html('English : ' + 'Verb' + '<br />' + '<br />' + 'Русский : ' + 'Глагол');
            } else if (searchValue.value === 'Сын атооч') {
                $('#word').html('English : ' + 'Adjective' + '<br />' + '<br />' + 'Русский : ' + 'Прилагательное');
            } else if (searchValue.value === 'Тактооч') {
                $('#word').html('English : ' + 'Adverb' + '<br />' + '<br />' + 'Русский : ' + 'Наречие');
            } else if (searchValue.value === 'Приставка') {
                $('#word').html('English : ' + 'Prefix' + '<br />' + '<br />' + 'Русский : ' + 'Приставка');
            } else if (searchValue.value === 'Тамыр') {
                $('#word').html('English : ' + 'Root' + '<br />' + '<br />' + 'Русский : ' + 'Корень');
            } else if (searchValue.value === 'Аякташы') {
                $('#word').html('English : ' + 'Ending' + '<br />' + '<br />' + 'Русский : ' + 'Окончание');
            } else if (searchValue.value === 'Бөлүгү сүйлөө') {
                $('#word').html('English : ' + 'Part of speech' + '<br />' + '<br />' + 'Русский : ' + 'Часть речи');
            } else if (searchValue.value === 'Жөндөм') {
                $('#word').html('English : ' + 'Case' + '<br />' + '<br />' + 'Русский : ' + 'Падеж');
            } else if (searchValue.value === 'үндүү тамга') {
                $('#word').html('English : ' + 'Vowel' + '<br />' + '<br />' + 'Русский : ' + 'Гласная буква');
            } else if (searchValue.value === 'үнсүз тамга') {
                $('#word').html('English : ' + 'Сonsonant' + '<br />' + '<br />' + 'Русский : ' + 'Согласная буква');
            } else if (searchValue.value === 'Параграф') {
                $('#word').html('English : ' + 'Paragraph' + '<br />' + '<br />' + 'Русский : ' + 'Параграф');
            } else if (searchValue.value === 'Абзац') {
                $('#word').html('English : ' + 'Indent' + '<br />' + '<br />' + 'Русский : ' + 'Абзац');
            } else if (searchValue.value === 'Адабият') {
                $('#word').html('English : ' + 'Literature' + '<br />' + '<br />' + 'Русский : ' + 'Литература');
            } else if (searchValue.value === 'Аббревиатура') {
                $('#word').html('English : ' + 'Abbreviation' + '<br />' + '<br />' + 'Русский : ' + 'Аббревиатура');
            } else if (searchValue.value === 'Тил') {
                $('#word').html('English : ' + 'Language' + '<br />' + '<br />' + 'Русский : ' + 'Язык');
            }
        
        return false;
    });
});



/*  ENGLISH TAGS  */


$(document).ready(function () {

    var engTags = ["Keyboard", "Browser", "Mouse", "Computer", "Power Supply", "Display", "Loudspeakers", "Earphones", "Router", "Processor (CPU)", "Programming language", "Motherboard", "RAM (Random Access Memory)", "HDD (Hard Disk Drive)", "Videocard", "Drive", "Button", "Camera", "Printer", "Scanner", "Input device", "Output device", "Key", "Program", "OS (Operating System)", "IP (Internet Protocol) Address", "Stack", "Programming", "Development", "Variable", "Loop", "Function", "Array", "Object", "Hierarchy", "Event", 'Tool', 'Operator', 'Instruction', 'Logic', 'Paradigm', 'Server', 'Virtuality', 'Local', 'Regional', 'Global', 'Phone', 'Transaction', 'Injection', 'Database', 'Data', 'Protocol', 'Library', 'Graphic', 'Vector', 'Inheritance', 'Insulation', 'Move ', 'Manage ', 'Copy ', 'Format ', 'Directory ', 'Path ', 'Environment ', 'Console ', 'Platform ', 'Generator ', 'Erase ', 'Random ', 'UI (User Interface) ', 'UX (User Expirience) ', 'GUI (Graphic User Interface) ', 'Tablet ', 'Static ', 'Unit Test ', 'Stream ', 'Bug', 'Synchronization ', 'Asynchronous ', 'Multithreaded ', 'Mode ', 'Saving ', 'Bus ', 'Floodgate ', 'Hotkeys ', 'Combination ', 'Resolution ', 'Pragmatics', 'Accent', 'Anagram', 'Drama', 'Epithet', 'Phonology', 'Anthroponym', 'Applique', 'Areal', 'Archetype', 'Affix', 'Phoneme', 'Prefix', 'Participle', 'Hyphen', 'Dialect', 'Discourse', 'Addition', 'Jargon', 'Sound recording', 'Idiom', 'Imperative', 'Inversion', 'Indicative', 'Infix', 'Infinitive', 'Calligraphy', 'Celtology', 'Cliche', 'Cuneiform', 'Communication', 'Conversion', 'Context', 'Italics', 'Lexeme', 'Vocabulary', 'Lexicon', 'Litotes', 'Pronoun', 'Metaphor', 'Metalanguage', 'Metathesis', 'Metonymy', 'Monologue', 'Morpheme', 'Neologism', 'Nominee', 'Appeal', 'Oxymoron', 'Homonyms', 'Orthogram', 'Palindrome', 'Paleography', 'Pause', 'Pictography', 'Proverb', 'Joke', 'Predicate', 'Pretext', 'Reduction', 'Replica', 'Speech', 'Segment', 'Semiotics', 'Slang', 'Syllable', 'Meaning', 'Stylistics', 'Subject', 'Suffix', 'Tautology', 'Tact', 'Timbre', 'Tilde', 'Tone', 'Transcription', 'Emphasis', 'Charter', 'Quote', 'Whisper', 'Noise', 'Equivalent', 'Expression', 'Negation', 'Verb', 'Adjective', 'Adverb', 'Prefix', 'Root', 'Ending', 'Part of speech', 'Case', 'Vowel', 'Сonsonant', 'Paragraph', 'Indent', 'Literature', 'Abbreviation', 'Language'];

    console.log(engTags.length + 24);

    $('#eng').click(function () {
        $('.show').slideToggle();
        $('#search').autocomplete({
            source: engTags
        });
    });

    var searchValue = document.getElementById('search');

    $('#translate').click(function () {
            if (searchValue.value === 'Mouse') {
                $('#word').html('Русский : ' + 'Мышь' + '<br />' + '<br />' + 'Кыргызский : ' + 'Чычкан');
            } else if (searchValue.value === 'Browser') {
                $('#word').html('Русский : ' + 'Браузер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Бразуер');
            } else if (searchValue.value === 'Keyboard') {
                $('#word').html('Русский : ' + 'Клавиатура' + '<br />' + '<br />' + 'Кыргызский : ' + 'Клавиатурасы');
            } else if (searchValue.value === 'Computer') {
                $('#word').html('Русский : ' + 'Компьютер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Компьютер');
            } else if (searchValue.value === 'Power Supply') {
                $('#word').html('Русский : ' + 'Блок Питания' + '<br />' + '<br />' + 'Кыргызский : ' + 'Электр менен камсыз кылуу бөлүмү');
            } else if (searchValue.value === 'Display') {
                $('#word').html('Русский : ' + 'Монитор' + '<br />' + '<br />' + 'Кыргызский : ' + 'Монитор');
            } else if (searchValue.value === 'Loudspeakers') {
                $('#word').html('Русский : ' + 'Колонки' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сүйлөмөлөрдү');
            } else if (searchValue.value === 'Earphones') {
                $('#word').html('Русский : ' + 'Наушники' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сурактары');
            } else if (searchValue.value === 'Router') {
                $('#word').html('Русский : ' + 'Роутер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Роутер');
            } else if (searchValue.value === 'Processor (CPU)') {
                $('#word').html('Русский : ' + 'Процессор' + '<br />' + '<br />' + 'Кыргызский : ' + 'Процессор');
            } else if (searchValue.value === 'Programming language') {
                $('#word').html('Русский : ' + 'Язык программирования' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программалоо тили');
            } else if (searchValue.value === 'Motherboard') {
                $('#word').html('Русский : ' + 'Материнская плата' + '<br />' + '<br />' + 'Кыргызский : ' + 'Материнская плата');
            } else if (searchValue.value === 'RAM (Random Access Memory)') {
                $('#word').html('Русский : ' + 'Оперативная память' + '<br />' + '<br />' + 'Кыргызский : ' + 'Оперативная память');
            } else if (searchValue.value === 'Videocard') {
                $('#word').html('Русский : ' + 'Видеокарта' + '<br />' + '<br />' + 'Кыргызский : ' + 'Видеокарта');
            } else if (searchValue.value === 'HDD (Hard Disk Drive)') {
                $('#word').html('Русский : ' + 'Жесткий диск' + '<br />' + '<br />' + 'Кыргызский : ' + 'Катуу диск');
            } else if (searchValue.value === 'Drive') {
                $('#word').html('Русский : ' + 'Дисковод' + '<br />' + '<br />' + 'Кыргызский : ' + 'Дисковод');
            } else if (searchValue.value === 'Button') {
                $('#word').html('Русский : ' + 'Кнопка' + '<br />' + '<br />' + 'Кыргызский : ' + 'Баскычы');
            } else if (searchValue.value === 'Camera') {
                $('#word').html('Русский : ' + 'Камера' + '<br />' + '<br />' + 'Кыргызский : ' + 'Камера');
            } else if (searchValue.value === 'Printer') {
                $('#word').html('Русский : ' + 'Принтер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Басуучу машина');
            } else if (searchValue.value === 'Scanner') {
                $('#word').html('Русский : ' + 'Сканер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сканер');
            } else if (searchValue.value === 'Input device') {
                $('#word').html('Русский : ' + 'Устройство ввода' + '<br />' + '<br />' + 'Кыргызский : ' + 'Киргизүүчү түзмөк');
            } else if (searchValue.value === 'Output device') {
                $('#word').html('Русский : ' + 'Устройство ввывода' + '<br />' + '<br />' + 'Кыргызский : ' + 'Көрсөтүү түзмөк');
            } else if (searchValue.value === 'Key') {
                $('#word').html('Русский : ' + 'Клавиша' + '<br />' + '<br />' + 'Кыргызский : ' + 'Ачкыч');
            } else if (searchValue.value === 'Program') {
                $('#word').html('Русский : ' + 'Программа' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программа');
            } else if (searchValue.value === 'OS (Operating System)') {
                $('#word').html('Русский : ' + 'Операционная система' + '<br />' + '<br />' + 'Кыргызский : ' + 'Операциондук система');
            } else if (searchValue.value === 'IP (Internet Protocol) Address') {
                $('#word').html('Русский : ' + 'IP Адрес' + '<br />' + '<br />' + 'Кыргызский : ' + 'IP дареги');
            } else if (searchValue.value === 'Stack') {
                $('#word').html('Русский : ' + 'Стек' + '<br />' + '<br />' + 'Кыргызский : ' + 'Стек');
            } else if (searchValue.value === 'Programming') {
                $('#word').html('Русский : ' + 'Программирование' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программалоо');
            } else if (searchValue.value === 'Development') {
                $('#word').html('Русский : ' + 'Разработка' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иштеп чыгуу');
            } else if (searchValue.value === 'Variable') {
                $('#word').html('Русский : ' + 'Переменная' + '<br />' + '<br />' + 'Кыргызский : ' + 'Переменная');
            } else if (searchValue.value === 'Algorithm') {
                $('#word').html('Русский : ' + 'Алгоритм' + '<br />' + '<br />' + 'Кыргызский : ' + 'Алгоритм');
            } else if (searchValue.value === 'Function') {
                $('#word').html('Русский : ' + 'Функция' + '<br />' + '<br />' + 'Кыргызский : ' + 'Милдети');
            } else if (searchValue.value === 'Loop') {
                $('#word').html('Русский : ' + 'Цикл' + '<br />' + '<br />' + 'Кыргызский : ' + 'Цикл');
            } else if (searchValue.value === 'Array') {
                $('#word').html('Русский : ' + 'Массив' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тизме');
            } else if (searchValue.value === 'Object') {
                $('#word').html('Русский : ' + 'Объект' + '<br />' + '<br />' + 'Кыргызский : ' + 'Зат');
            } else if (searchValue.value === 'Hierarchy') {
                $('#word').html('Русский : ' + 'Иерархия' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иерархия');
            } else if (searchValue.value === 'Event') {
                $('#word').html('Русский : ' + 'Событие' + '<br />' + '<br />' + 'Кыргызский : ' + 'Окуя');
            } else if (searchValue.value === 'Tool') {
                $('#word').html('Русский : ' + 'Инструмент' + '<br />' + '<br />' + 'Кыргызский : ' + 'Аспап');
            } else if (searchValue.value === 'Operator') {
                $('#word').html('Русский : ' + 'Оператор' + '<br />' + '<br />' + 'Кыргызский : ' + 'Оператор');
            } else if (searchValue.value === 'Instruction') {
                $('#word').html('Русский : ' + 'Инструкция' + '<br />' + '<br />' + 'Кыргызский : ' + 'Инструкция');
            } else if (searchValue.value === 'Logic') {
                $('#word').html('Русский : ' + 'Логика' + '<br />' + '<br />' + 'Кыргызский : ' + 'Логикалык');
            } else if (searchValue.value === 'Transaction') {
                $('#word').html('Русский : ' + 'Транзакция' + '<br />' + '<br />' + 'Кыргызский : ' + 'Транзакция');
            } else if (searchValue.value === 'Injection') {
                $('#word').html('Русский : ' + 'Иньекция' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иньекция');
            } else if (searchValue.value === 'Database') {
                $('#word').html('Русский : ' + 'База данных' + '<br />' + '<br />' + 'Кыргызский : ' + 'Маалыматтар базасы');
            } else if (searchValue.value === 'Data') {
                $('#word').html('Русский : ' + 'Данные' + '<br />' + '<br />' + 'Кыргызский : ' + 'Маалыматтар');
            } else if (searchValue.value === 'Protocol') {
                $('#word').html('Русский : ' + 'Протокол' + '<br />' + '<br />' + 'Кыргызский : ' + 'Протокол');
            } else if (searchValue.value === 'Library') {
                $('#word').html('Русский : ' + 'Библиотека' + '<br />' + '<br />' + 'Кыргызский : ' + 'Китеп кана');
            } else if (searchValue.value === 'Graphic') {
                $('#word').html('Русский : ' + 'Графика' + '<br />' + '<br />' + 'Кыргызский : ' + 'Графика');
            } else if (searchValue.value === 'Vector') {
                $('#word').html('Русский : ' + 'Вектор' + '<br />' + '<br />' + 'Кыргызский : ' + 'Вектор');
            } else if (searchValue.value === 'Inheritance') {
                $('#word').html('Русский : ' + 'Наследование' + '<br />' + '<br />' + 'Кыргызский : ' + 'Мураска ээ болуу');
            } else if (searchValue.value === 'Insulation') {
                $('#word').html('Русский : ' + 'Изоляция' + '<br />' + '<br />' + 'Кыргызский : ' + 'Бөлүп коюу');
            } else if (searchValue.value === 'Paradigm') {
                $('#word').html('Русский : ' + 'Парадигма' + '<br />' + '<br />' + 'Кыргызский : ' + 'Парадигма');
            } else if (searchValue.value === 'Server') {
                $('#word').html('Русский : ' + 'Сервер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сервер');
            } else if (searchValue.value === 'Virtuality') {
                $('#word').html('Русский : ' + 'Виртуальность' + '<br />' + '<br />' + 'Кыргызский : ' + 'Виртуальность');
            } else if (searchValue.value === 'Local') {
                $('#word').html('Русский : ' + 'Локальный' + '<br />' + '<br />' + 'Кыргызский : ' + 'Локалдык');
            } else if (searchValue.value === 'Regional') {
                $('#word').html('Русский : ' + 'Региональный' + '<br />' + '<br />' + 'Кыргызский : ' + 'Регионалдык');
            } else if (searchValue.value === 'Global') {
                $('#word').html('Русский : ' + 'Глобальный' + '<br />' + '<br />' + 'Кыргызский : ' + 'Глобалдык');
            } else if (searchValue.value === 'Phone') {
                $('#word').html('Русский : ' + 'Телефон' + '<br />' + '<br />' + 'Кыргызский : ' + 'Телефон');
            } else if (searchValue.value === 'Move ') {
                $('#word').html('Кыргызский : ' + 'Жылдыруу' + '<br />' + '<br />' + 'Русский : ' + 'Переместить');
            } else if (searchValue.value === 'Manage ') {
                $('#word').html('Кыргызский : ' + 'Башкаруу' + '<br />' + '<br />' + 'Русский : ' + 'Управлять');
            } else if (searchValue.value === 'Copy ') {
                $('#word').html('Кыргызский : ' + 'Копировать' + '<br />' + '<br />' + 'Русский : ' + 'Копировать');
            } else if (searchValue.value === 'Format ') {
                $('#word').html('Кыргызский : ' + 'Формат' + '<br />' + '<br />' + 'Русский : ' + 'Формат');
            } else if (searchValue.value === 'Directory ') {
                $('#word').html('Кыргызский : ' + 'Директория' + '<br />' + '<br />' + 'Русский : ' + 'Директория');
            } else if (searchValue.value === 'Path ') {
                $('#word').html('Кыргызский : ' + 'Жол' + '<br />' + '<br />' + 'Русский : ' + 'Путь');
            } else if (searchValue.value === 'Environment ') {
                $('#word').html('Кыргызский : ' + 'Окружение' + '<br />' + '<br />' + 'Русский : ' + 'Окружение');
            } else if (searchValue.value === 'Console ') {
                $('#word').html('Кыргызский : ' + 'Консоль' + '<br />' + '<br />' + 'Русский : ' + 'Консоль');
            } else if (searchValue.value === 'Platform ') {
                $('#word').html('Кыргызский : ' + 'Платформа' + '<br />' + '<br />' + 'Русский : ' + 'Платформа');
            } else if (searchValue.value === 'Generator ') {
                $('#word').html('Кыргызский : ' + 'Генератор' + '<br />' + '<br />' + 'Русский : ' + 'Генератор');
            } else if (searchValue.value === 'Erase ') {
                $('#word').html('Кыргызский : ' + 'өчуруу' + '<br />' + '<br />' + 'Русский : ' + 'Стереть');
            } else if (searchValue.value === 'Random ') {
                $('#word').html('Кыргызский : ' + 'Произвольный' + '<br />' + '<br />' + 'Русский : ' + 'Произвольный');
            } else if (searchValue.value === 'UI (User Interface) ') {
                $('#word').html('Кыргызский : ' + 'Пользовательский интерфейс' + '<br />' + '<br />' + 'Русский : ' + 'Пользовательский интерфейс');
            } else if (searchValue.value === 'UX (User Expirience) ') {
                $('#word').html('Кыргызский : ' + 'Пользовательский опыт ' + '<br />' + '<br />' + 'Русский : ' + 'Пользовательский опыт ');
            } else if (searchValue.value === 'GUI (Graphic User Interface) ') {
                $('#word').html('Кыргызский : ' + 'Графический интерфейс' + '<br />' + '<br />' + 'Русский : ' + 'Графический интерфейс');
            } else if (searchValue.value === 'Tablet ') {
                $('#word').html('Кыргызский : ' + 'Планшет' + '<br />' + '<br />' + 'Русский : ' + 'Планшет');
            } else if (searchValue.value === 'Static ') {
                $('#word').html('Кыргызский : ' + 'Стационар' + '<br />' + '<br />' + 'Русский : ' + 'Стационар');
            } else if (searchValue.value === 'Unit Test ') {
                $('#word').html('Кыргызский : ' + 'Тестирлөө' + '<br />' + '<br />' + 'Русский : ' + 'Тестирование');
            } else if (searchValue.value === 'Bug') {
                $('#word').html('Кыргызский : ' + 'Иштебегени' + '<br />' + '<br />' + 'Русский : ' + 'Неисправность');
            } else if (searchValue.value === 'Stream ') {
                $('#word').html('Кыргызский : ' + 'Агым' + '<br />' + '<br />' + 'Русский : ' + 'Поток');
            } else if (searchValue.value === 'Synchronization ') {
                $('#word').html('Кыргызский : ' + 'Синхронизация' + '<br />' + '<br />' + 'Русский : ' + 'Синхронизация');
            } else if (searchValue.value === 'Asynchronous ') {
                $('#word').html('Кыргызский : ' + 'Асинхронный' + '<br />' + '<br />' + 'Русский : ' + 'Асинхронный');
            } else if (searchValue.value === 'Multithreaded ') {
                $('#word').html('Кыргызский : ' + 'Многопоточный' + '<br />' + '<br />' + 'Русский : ' + 'Многопоточный');
            } else if (searchValue.value === 'Mode ') {
                $('#word').html('Кыргызский : ' + 'Режими' + '<br />' + '<br />' + 'Русский : ' + 'Режим');
            } else if (searchValue.value === 'Saving ') {
                $('#word').html('Кыргызский : ' + ' Cактык' + '<br />' + '<br />' + 'Русский : ' + 'Экономия');
            } else if (searchValue.value === 'Bus ') {
                $('#word').html('Кыргызский : ' + 'Шина' + '<br />' + '<br />' + 'Русский : ' + 'Шина');
            } else if (searchValue.value === 'Floodgate ') {
                $('#word').html('Кыргызский : ' + 'Шлюз' + '<br />' + '<br />' + 'Русский : ' + 'Шлюз');
            } else if (searchValue.value === 'Hotkeys ') {
                $('#word').html('Кыргызский : ' + 'Ысык баскычылар' + '<br />' + '<br />' + 'Русский : ' + 'Горячие клавиши');
            } else if (searchValue.value === 'Combination ') {
                $('#word').html('Кыргызский : ' + 'Комбинация' + '<br />' + '<br />' + 'Русский : ' + 'Комбинация');
            } else if (searchValue.value === 'Resolution ') {
                $('#word').html('Кыргызский : ' + 'Разрешение' + '<br />' + '<br />' + 'Русский : ' + 'Разрешение');
            }


            /////////////////////////////// LIGNUISTIC WORDS
            else if (searchValue.value === 'Pragmatics') {
                $('#word').html('Кыргызский : ' + 'Прагматика' + '<br />' + '<br />' + 'Русский : ' + 'Прагматика');
            } else if (searchValue.value === 'Accent') {
                $('#word').html('Кыргызский : ' + 'Туура айтуу' + '<br />' + '<br />' + 'Русский : ' + 'Акцент');
            } else if (searchValue.value === 'Anagram') {
                $('#word').html('Кыргызский : ' + 'Анаграмма' + '<br />' + '<br />' + 'Русский : ' + 'Анаграмма');
            } else if (searchValue.value === 'Drama') {
                $('#word').html('Кыргызский : ' + 'Драмма' + '<br />' + '<br />' + 'Русский : ' + 'Драмма');
            } else if (searchValue.value === 'Epithet') {
                $('#word').html('Кыргызский : ' + 'Куп' + '<br />' + '<br />' + 'Русский : ' + 'Эпитет');
            } else if (searchValue.value === 'Phonology') {
                $('#word').html('Кыргызский : ' + 'Фонология' + '<br />' + '<br />' + 'Русский : ' + 'Фонология');
            } else if (searchValue.value === 'Anthroponym') {
                $('#word').html('Кыргызский : ' + 'Антропоним' + '<br />' + '<br />' + 'Русский : ' + 'Антропоним');
            } else if (searchValue.value === 'Applique') {
                $('#word').html('Кыргызский : ' + 'Аппликация' + '<br />' + '<br />' + 'Русский : ' + 'Аппликация');
            } else if (searchValue.value === 'Areal') {
                $('#word').html('Кыргызский : ' + 'Аймак' + '<br />' + '<br />' + 'Русский : ' + 'Ареал');
            } else if (searchValue.value === 'Archetype') {
                $('#word').html('Кыргызский : ' + 'Архетип' + '<br />' + '<br />' + 'Русский : ' + 'Архетип');
            } else if (searchValue.value === 'Affix') {
                $('#word').html('Кыргызский : ' + 'Бириктирүү' + '<br />' + '<br />' + 'Русский : ' + 'Аффикс');
            } else if (searchValue.value === 'Phoneme') {
                $('#word').html('Кыргызский : ' + 'Фонема' + '<br />' + '<br />' + 'Русский : ' + 'Фонема');
            } else if (searchValue.value === 'Prefix') {
                $('#word').html('Кыргызский : ' + 'Префикс' + '<br />' + '<br />' + 'Русский : ' + 'Префикс');
            } else if (searchValue.value === 'Participle') {
                $('#word').html('Кыргызский : ' + 'Атоочтуктар' + '<br />' + '<br />' + 'Русский : ' + 'Деепричастие');
            } else if (searchValue.value === 'Hyphen') {
                $('#word').html('Кыргызский : ' + 'Сызыкча' + '<br />' + '<br />' + 'Русский : ' + 'Дефис');
            } else if (searchValue.value === 'Dialect') {
                $('#word').html('Кыргызский : ' + 'Диалект' + '<br />' + '<br />' + 'Русский : ' + 'Диалект');
            } else if (searchValue.value === 'Discourse') {
                $('#word').html('Кыргызский : ' + 'Дискурс' + '<br />' + '<br />' + 'Русский : ' + 'Дискурс');
            } else if (searchValue.value === 'Addition') {
                $('#word').html('Кыргызский : ' + 'Кошуу' + '<br />' + '<br />' + 'Русский : ' + 'Дополнение');
            } else if (searchValue.value === 'Jargon') {
                $('#word').html('Кыргызский : ' + 'Жаргон' + '<br />' + '<br />' + 'Русский : ' + 'Жаргон');
            } else if (searchValue.value === 'Sound recording') {
                $('#word').html('Кыргызский : ' + 'үн жазуу' + '<br />' + '<br />' + 'Русский : ' + 'Звукопись');
            } else if (searchValue.value === 'Idiom') {
                $('#word').html('Кыргызский : ' + 'Идиома' + '<br />' + '<br />' + 'Русский : ' + 'Идиома');
            } else if (searchValue.value === 'Imperative') {
                $('#word').html('Кыргызский : ' + 'Императив' + '<br />' + '<br />' + 'Русский : ' + 'Императив');
            } else if (searchValue.value === 'Inversion') {
                $('#word').html('Кыргызский : ' + 'Инверсия' + '<br />' + '<br />' + 'Русский : ' + 'Инверсия');
            } else if (searchValue.value === 'Indicative') {
                $('#word').html('Кыргызский : ' + 'Индикатив' + '<br />' + '<br />' + 'Русский : ' + 'Индикатив');
            } else if (searchValue.value === 'Infix') {
                $('#word').html('Кыргызский : ' + 'Инфикс' + '<br />' + '<br />' + 'Русский : ' + 'Инфикс');
            } else if (searchValue.value === 'Infinitive') {
                $('#word').html('Кыргызский : ' + 'Түбөлүктүү' + '<br />' + '<br />' + 'Русский : ' + 'Инфинитив');
            } else if (searchValue.value === 'Calligraphy') {
                $('#word').html('Кыргызский : ' + 'Каллиграфия' + '<br />' + '<br />' + 'Русский : ' + 'Каллиграфия');
            } else if (searchValue.value === 'Celtology') {
                $('#word').html('Кыргызский : ' + 'Кельтология' + '<br />' + '<br />' + 'Русский : ' + 'Кельтология');
            } else if (searchValue.value === 'Cliche') {
                $('#word').html('Кыргызский : ' + 'Клише' + '<br />' + '<br />' + 'Русский : ' + 'Клише');
            } else if (searchValue.value === 'Cuneiform') {
                $('#word').html('Кыргызский : ' + 'Клинопись' + '<br />' + '<br />' + 'Русский : ' + 'Клинопись');
            } else if (searchValue.value === 'Communication') {
                $('#word').html('Кыргызский : ' + 'Байланыш' + '<br />' + '<br />' + 'Русский : ' + 'Коммуникация');
            } else if (searchValue.value === 'Conversion') {
                $('#word').html('Кыргызский : ' + 'Конверсия' + '<br />' + '<br />' + 'Русский : ' + 'Конверсия');
            } else if (searchValue.value === 'Context') {
                $('#word').html('Кыргызский : ' + 'Контекст' + '<br />' + '<br />' + 'Русский : ' + 'Контекст');
            } else if (searchValue.value === 'Italics') {
                $('#word').html('Кыргызский : ' + 'Курсив' + '<br />' + '<br />' + 'Русский : ' + 'Курсив');
            } else if (searchValue.value === 'Lexeme') {
                $('#word').html('Кыргызский : ' + 'Лексема' + '<br />' + '<br />' + 'Русский : ' + 'Лексема');
            } else if (searchValue.value === 'Vocabulary') {
                $('#word').html('Кыргызский : ' + 'Сөздүк' + '<br />' + '<br />' + 'Русский : ' + 'Лексика');
            } else if (searchValue.value === 'Lexicon') {
                $('#word').html('Кыргызский : ' + 'Лексикон' + '<br />' + '<br />' + 'Русский : ' + 'Лексикон');
            } else if (searchValue.value === 'Litotes') {
                $('#word').html('Кыргызский : ' + 'Литота' + '<br />' + '<br />' + 'Русский : ' + 'Литота');
            } else if (searchValue.value === 'Pronoun') {
                $('#word').html('Кыргызский : ' + 'Aт атооч' + '<br />' + '<br />' + 'Русский : ' + 'Местоимение');
            } else if (searchValue.value === 'Metaphor') {
                $('#word').html('Кыргызский : ' + 'Метафора' + '<br />' + '<br />' + 'Русский : ' + 'Метафора');
            } else if (searchValue.value === 'Metalanguage') {
                $('#word').html('Кыргызский : ' + 'Метаязык' + '<br />' + '<br />' + 'Русский : ' + 'Метаязык');
            } else if (searchValue.value === 'Metathesis') {
                $('#word').html('Кыргызский : ' + 'Метатеза' + '<br />' + '<br />' + 'Русский : ' + 'Метатеза');
            } else if (searchValue.value === 'Metonymy') {
                $('#word').html('Кыргызский : ' + 'Метонимия' + '<br />' + '<br />' + 'Русский : ' + 'Метонимия');
            } else if (searchValue.value === 'Monologue') {
                $('#word').html('Кыргызский : ' + 'Монолог' + '<br />' + '<br />' + 'Русский : ' + 'Монолог');
            } else if (searchValue.value === 'Morpheme') {
                $('#word').html('Кыргызский : ' + 'Морфема' + '<br />' + '<br />' + 'Русский : ' + 'Морфема');
            } else if (searchValue.value === 'Neologism') {
                $('#word').html('Кыргызский : ' + 'Неологизм' + '<br />' + '<br />' + 'Русский : ' + 'Неологизм');
            } else if (searchValue.value === 'Nominee') {
                $('#word').html('Кыргызский : ' + 'Номинатив' + '<br />' + '<br />' + 'Русский : ' + 'Номинатив');
            } else if (searchValue.value === 'Appeal') {
                $('#word').html('Кыргызский : ' + 'Cуроо' + '<br />' + '<br />' + 'Русский : ' + 'Обращение');
            } else if (searchValue.value === 'Oxymoron') {
                $('#word').html('Кыргызский : ' + 'Оксюморон' + '<br />' + '<br />' + 'Русский : ' + 'Оксюморон');
            } else if (searchValue.value === 'Homonyms') {
                $('#word').html('Кыргызский : ' + 'Омонимы' + '<br />' + '<br />' + 'Русский : ' + 'Омонимы');
            } else if (searchValue.value === 'Orthogram') {
                $('#word').html('Кыргызский : ' + 'Орфограмма' + '<br />' + '<br />' + 'Русский : ' + 'Орфограмма');
            } else if (searchValue.value === 'Palindrome') {
                $('#word').html('Кыргызский : ' + 'Палиндром' + '<br />' + '<br />' + 'Русский : ' + 'Палиндром');
            } else if (searchValue.value === 'Paleography') {
                $('#word').html('Кыргызский : ' + 'Палеография' + '<br />' + '<br />' + 'Русский : ' + 'Палеография');
            } else if (searchValue.value === 'Pause') {
                $('#word').html('Кыргызский : ' + 'Tоктоо' + '<br />' + '<br />' + 'Русский : ' + 'Пауза');
            } else if (searchValue.value === 'Pictography') {
                $('#word').html('Кыргызский : ' + 'Пиктография' + '<br />' + '<br />' + 'Русский : ' + 'Пиктография');
            } else if (searchValue.value === 'Proverb') {
                $('#word').html('Кыргызский : ' + 'Mакал' + '<br />' + '<br />' + 'Русский : ' + 'Поговорка');
            } else if (searchValue.value === 'Joke') {
                $('#word').html('Кыргызский : ' + 'Tамаша' + '<br />' + '<br />' + 'Русский : ' + 'Шутка');
            } else if (searchValue.value === 'Predicate') {
                $('#word').html('Кыргызский : ' + 'Предикат' + '<br />' + '<br />' + 'Русский : ' + 'Предикат');
            } else if (searchValue.value === 'Pretext') {
                $('#word').html('Кыргызский : ' + 'Предлог' + '<br />' + '<br />' + 'Русский : ' + 'Предлог');
            } else if (searchValue.value === 'Reduction') {
                $('#word').html('Кыргызский : ' + 'Редукция' + '<br />' + '<br />' + 'Русский : ' + 'Редукция');
            } else if (searchValue.value === 'Replica') {
                $('#word').html('Кыргызский : ' + 'Реплика' + '<br />' + '<br />' + 'Русский : ' + 'Реплика');
            } else if (searchValue.value === 'Speech') {
                $('#word').html('Кыргызский : ' + 'Cүйлөө' + '<br />' + '<br />' + 'Русский : ' + 'Речь');
            } else if (searchValue.value === 'Segment') {
                $('#word').html('Кыргызский : ' + 'Сегмент' + '<br />' + '<br />' + 'Русский : ' + 'Сегмент');
            } else if (searchValue.value === 'Semiotics') {
                $('#word').html('Кыргызский : ' + 'Семиотика' + '<br />' + '<br />' + 'Русский : ' + 'Семиотика');
            } else if (searchValue.value === 'Slang') {
                $('#word').html('Кыргызский : ' + 'Шарттуу сөздөр ' + '<br />' + '<br />' + 'Русский : ' + 'Сленг');
            } else if (searchValue.value === 'Syllable') {
                $('#word').html('Кыргызский : ' + 'Mуун' + '<br />' + '<br />' + 'Русский : ' + 'Слог');
            } else if (searchValue.value === 'Meaning') {
                $('#word').html('Кыргызский : ' + 'Mаани' + '<br />' + '<br />' + 'Русский : ' + 'Смысл');
            } else if (searchValue.value === 'Stylistics') {
                $('#word').html('Кыргызский : ' + 'Стилистика' + '<br />' + '<br />' + 'Русский : ' + 'Стилистика');
            } else if (searchValue.value === 'Subject') {
                $('#word').html('Кыргызский : ' + 'Субъект' + '<br />' + '<br />' + 'Русский : ' + 'Субъект');
            } else if (searchValue.value === 'Suffix') {
                $('#word').html('Кыргызский : ' + 'Суффикс' + '<br />' + '<br />' + 'Русский : ' + 'Суффикс');
            } else if (searchValue.value === 'Tautology') {
                $('#word').html('Кыргызский : ' + 'Тавтология' + '<br />' + '<br />' + 'Русский : ' + 'Тавтология');
            } else if (searchValue.value === 'Tact') {
                $('#word').html('Кыргызский : ' + 'Такт' + '<br />' + '<br />' + 'Русский : ' + 'Такт');
            } else if (searchValue.value === 'Timbre') {
                $('#word').html('Кыргызский : ' + 'Тембри' + '<br />' + '<br />' + 'Русский : ' + 'Тембр');
            } else if (searchValue.value === 'Tilde') {
                $('#word').html('Кыргызский : ' + 'Тильда' + '<br />' + '<br />' + 'Русский : ' + 'Тильда');
            } else if (searchValue.value === 'Tone') {
                $('#word').html('Кыргызский : ' + 'Тон' + '<br />' + '<br />' + 'Русский : ' + 'Тон');
            } else if (searchValue.value === 'Transcription') {
                $('#word').html('Кыргызский : ' + 'Транскрипция' + '<br />' + '<br />' + 'Русский : ' + 'Транскрипция');
            } else if (searchValue.value === 'Emphasis') {
                $('#word').html('Кыргызский : ' + 'Басым' + '<br />' + '<br />' + 'Русский : ' + 'Ударение');
            } else if (searchValue.value === 'Charter') {
                $('#word').html('Кыргызский : ' + 'Устав' + '<br />' + '<br />' + 'Русский : ' + 'Устав');
            } else if (searchValue.value === 'Quote') {
                $('#word').html('Кыргызский : ' + 'Цитата' + '<br />' + '<br />' + 'Русский : ' + 'Цитата');
            } else if (searchValue.value === 'Whisper') {
                $('#word').html('Кыргызский : ' + 'Шыбыроо' + '<br />' + '<br />' + 'Русский : ' + 'Шепот');
            } else if (searchValue.value === 'Noise') {
                $('#word').html('Кыргызский : ' + 'Ызы-чуу' + '<br />' + '<br />' + 'Русский : ' + 'Шум');
            } else if (searchValue.value === 'Equivalent') {
                $('#word').html('Кыргызский : ' + 'Барабар' + '<br />' + '<br />' + 'Русский : ' + 'Эквивалент');
            } else if (searchValue.value === 'Expression') {
                $('#word').html('Кыргызский : ' + 'Экспрессия' + '<br />' + '<br />' + 'Русский : ' + 'Экспрессия');
            } else if (searchValue.value === 'Negation') {
                $('#word').html('Кыргызский : ' + 'Тануу' + '<br />' + '<br />' + 'Русский : ' + 'Отрицание');
            } else if (searchValue.value === 'Verb') {
                $('#word').html('Кыргызский : ' + 'Этиш' + '<br />' + '<br />' + 'Русский : ' + 'Глагол');
            } else if (searchValue.value === 'Adjective') {
                $('#word').html('Кыргызский : ' + 'Сын атооч' + '<br />' + '<br />' + 'Русский : ' + 'Прилагательное');
            } else if (searchValue.value === 'Adverb') {
                $('#word').html('Кыргызский : ' + 'Тактооч' + '<br />' + '<br />' + 'Русский : ' + 'Наречие');
            } else if (searchValue.value === 'Prefix') {
                $('#word').html('Кыргызский : ' + 'Приставка' + '<br />' + '<br />' + 'Русский : ' + 'Приставка');
            } else if (searchValue.value === 'Root') {
                $('#word').html('Кыргызский : ' + 'Тамыр' + '<br />' + '<br />' + 'Русский : ' + 'Корень');
            } else if (searchValue.value === 'Ending') {
                $('#word').html('Кыргызский : ' + 'Аякташы' + '<br />' + '<br />' + 'Русский : ' + 'Окончание');
            } else if (searchValue.value === 'Part of speech') {
                $('#word').html('Кыргызский : ' + 'Бөлүгү сүйлөө' + '<br />' + '<br />' + 'Русский : ' + 'Часть речи');
            } else if (searchValue.value === 'Case') {
                $('#word').html('Кыргызский : ' + 'Жөндөм' + '<br />' + '<br />' + 'Русский : ' + 'Падеж');
            } else if (searchValue.value === 'Vowel') {
                $('#word').html('Кыргызский : ' + 'үндүү тамга' + '<br />' + '<br />' + 'Русский : ' + 'Гласная буква');
            } else if (searchValue.value === 'Сonsonant') {
                $('#word').html('Кыргызский : ' + 'үнсүз тамга' + '<br />' + '<br />' + 'Русский : ' + 'Согласная буква');
            } else if (searchValue.value === 'Paragraph') {
                $('#word').html('Кыргызский : ' + 'Параграф' + '<br />' + '<br />' + 'Русский : ' + 'Параграф');
            } else if (searchValue.value === 'Indent') {
                $('#word').html('Кыргызский : ' + 'Абзац' + '<br />' + '<br />' + 'Русский : ' + 'Абзац');
            } else if (searchValue.value === 'Literature') {
                $('#word').html('Кыргызский : ' + 'Адабият' + '<br />' + '<br />' + 'Русский : ' + 'Литература');
            } else if (searchValue.value === 'Abbreviation') {
                $('#word').html('Кыргызский : ' + 'Abbreviation' + '<br />' + '<br />' + 'Русский : ' + 'Аббревиатура');
            } else if (searchValue.value === 'Language') {
                $('#word').html('Кыргызский : ' + 'Тил' + '<br />' + '<br />' + 'Русский : ' + 'Язык');
            }
        return false;
    });
});