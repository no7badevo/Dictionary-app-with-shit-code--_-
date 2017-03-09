                                    /*  RUSSIAN TAGS  */

$(document).ready(function() {
    
    var ruTags = ["Клавиатура ", "Браузер ", "Мышь", "Компьютер ", "Блок питания", "Монитор ", "Колонки", "Наушники", "Роутер ", "Процессор ", "Язык программирования", "Материнская плата.", "Оперативная память ", "Жесткий диск", "Видеокарта ", "Дисковод ", "Кнопка", "Камера ", "Принтер", "Сканер ", "Устройство ввода", "Устройство ввывода", "Клавиша", "Программа ", "Операционная система", "IP Адрес", "Стек", "Программирование", "Разработка", "Переменная ", "Алгоритм ", "Цикл ", "Функция", "Массив", "Объект", "Иерархия ", "Событие", 'Инструмент ', 'Оператор ', 'Инструкция ', 'Логика ', 'Парадигма ', 'Сервер ', 'Виртуальность ', 'Локальный ', 'Региональный ', 'Глобальный ', 'Телефон ', 'Транзакция ', 'Иньекция ', 'База данных ', 'Данные ', 'Протокол ', 'Библиотека ', 'Графика ', 'Вектор ', 'Наследование ', 'Изоляция '];
    
    console.log('ruTags length is = ' + ruTags.length);

    $('#ru').click(function() {
        $('.show').slideToggle();
   $('#search').autocomplete({
      source: ruTags
        }); 
    });
    
        var searchValue = document.getElementById('search');

        $('#translate').click(function() {
            for (var i = 0; i < ruTags.length; i++) {
                if (searchValue.value === 'Мышь') {
                    $('#word').html('English : ' + 'Mouse' + '<br />' + '<br />' + 'Кыргызский : ' + 'Чычкан');
                } 
                else if (searchValue.value === 'Браузер ') {
                    $('#word').html('English : ' + 'Browser' + '<br />' + '<br />' + 'Кыргызский : ' + 'Браузер');
                }
                else if (searchValue.value === 'Клавиатура ') {
                    $('#word').html('English : ' + 'Keyboard' + '<br />' + '<br />' + 'Кыргызский : ' + 'Клавиатура');
                }
                else if (searchValue.value === 'Компьютер ') {
                    $('#word').html('English : ' + 'Computer' + '<br />' + '<br />' + 'Кыргызский : ' + 'Компьютер');
                }
                else if (searchValue.value === 'Блок питания') {
                    $('#word').html('English : ' + 'Power Supply' + '<br />' + '<br />' + 'Кыргызский : ' + 'Электр менен камсыз кылуу бөлүмү');
                }
                else if (searchValue.value === 'Монитор ') {
                    $('#word').html('English : ' + 'Display' + '<br />' + '<br />' + 'Кыргызский : ' + 'Монитор');
                } 
                else if (searchValue.value === 'Колонки') {
                    $('#word').html('English : ' + 'Loudspeakers' + '<br />' + '<br />' + 'Кыргызский : ' + 'Колонки');
                }
                else if (searchValue.value === 'Наушники') {
                    $('#word').html('English : ' + 'Earphones' + '<br />' + '<br />' + 'Кыргызский : ' + 'Наушники');
                }
                else if (searchValue.value === 'Роутер ') {
                    $('#word').html('English : ' + 'Router' + '<br />' + '<br />' + 'Кыргызский : ' + 'Роутер');
                }      
                else if (searchValue.value === 'Процессор ') {
                    $('#word').html('English : ' + 'Processor (CPU)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Процессор');
                }       
                else if (searchValue.value === 'Язык программирования') {
                    $('#word').html('English : ' + 'Programming language' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программалоо тили');
                }             
                else if (searchValue.value === 'Материнская плата.') {
                    $('#word').html('English : ' + 'Motherboard' + '<br />' + '<br />' + 'Кыргызский : ' + 'Материнская плата.');
                }  
                else if (searchValue.value === 'Оперативная память ') {
                    $('#word').html('English : ' + 'RAM (Random Access Memory)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Оперативная память ');
                } 
                else if (searchValue.value === 'Жесткий диск') {
                    $('#word').html('English : ' + 'HDD (Hard Disk Drive)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Катуу диск');
                } 
                else if (searchValue.value === 'Видеокарта ') {
                    $('#word').html('English : ' + 'Videocard' + '<br />' + '<br />' + 'Кыргызский : ' + 'Видеокарта');
                }   
                else if (searchValue.value === 'Дисковод ') {
                    $('#word').html('English : ' + 'Drive' + '<br />' + '<br />' + 'Кыргызский : ' + 'Дисковод');
                } 
                else if (searchValue.value === 'Кнопка') {
                    $('#word').html('English : ' + 'Button' + '<br />' + '<br />' + 'Кыргызский : ' + 'Баскычы');
                } 
                else if (searchValue.value === 'Камера ') {
                    $('#word').html('English : ' + 'Camera' + '<br />' + '<br />' + 'Кыргызский : ' + 'Камера');
                }   
                else if (searchValue.value === 'Принтер') {
                    $('#word').html('English : ' + 'Printer' + '<br />' + '<br />' + 'Кыргызский : ' + 'Басуучу машина');
                }  
                else if (searchValue.value === 'Сканер ') {
                    $('#word').html('English : ' + 'Scanner' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сканер');
                }  
                else if (searchValue.value === 'Устройство ввода') {
                    $('#word').html('English : ' + 'Input device' + '<br />' + '<br />' + 'Кыргызский : ' + 'Киргизүүчү түзмөк');
                }  
                else if (searchValue.value === 'Устройство ввывода') {
                    $('#word').html('English : ' + 'Output device' + '<br />' + '<br />' + 'Кыргызский : ' + 'Көрсөтүү түзмөк');
                }      
                else if (searchValue.value === 'Клавиша') {
                    $('#word').html('English : ' + 'Key' + '<br />' + '<br />' + 'Кыргызский : ' + 'Ачкыч');
                } 
                else if (searchValue.value === 'Программа ') {
                    $('#word').html('English : ' + 'Programm' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программа');
                } 
                else if (searchValue.value === 'Операционная система') {
                    $('#word').html('English : ' + 'OS (Operating System)' + '<br />' + '<br />' + 'Кыргызский : ' + 'Операциондук система');
                } 
                else if (searchValue.value === 'IP Адрес') {
                    $('#word').html('English : ' + 'IP (Internet Protocol) Address' + '<br />' + '<br />' + 'Кыргызский : ' + 'IP дареги');
                }  
                else if (searchValue.value === 'Стек') {
                    $('#word').html('English : ' + 'Stack' + '<br />' + '<br />' + 'Кыргызский : ' + 'Стек');
                } 
                else if (searchValue.value === 'Программирование') {
                    $('#word').html('English : ' + 'Programming' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программалоо');
                } 
                else if (searchValue.value === 'Разработка') {
                    $('#word').html('English : ' + 'Development' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иштеп чыгуу');
                } 
                else if (searchValue.value === 'Переменная ') {
                    $('#word').html('English : ' + 'Variable' + '<br />' + '<br />' + 'Кыргызский : ' + 'Переменная');
                }  
                else if (searchValue.value === 'Алгоритм ') {
                    $('#word').html('English : ' + 'Algorithm' + '<br />' + '<br />' + 'Кыргызский : ' + 'Алгоритм');
                } 
                else if (searchValue.value === 'Цикл ') {
                    $('#word').html('English : ' + 'Loop' + '<br />' + '<br />' + 'Кыргызский : ' + 'Цикл');
                } 
                else if (searchValue.value === 'Функция') {
                    $('#word').html('English : ' + 'Function' + '<br />' + '<br />' + 'Кыргызский : ' + 'Милдети');
                }                   
                else if (searchValue.value === 'Массив') {
                    $('#word').html('English : ' + 'Array' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тизме');
                }     
                else if (searchValue.value === 'Объект') {
                    $('#word').html('English : ' + 'Object' + '<br />' + '<br />' + 'Кыргызский : ' + 'Зат');
                }  
                else if (searchValue.value === 'Иерархия ') {
                    $('#word').html('English : ' + 'Hierarchy' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иерархия');
                }   
                else if (searchValue.value === 'Событие') {
                    $('#word').html('English : ' + 'Event' + '<br />' + '<br />' + 'Кыргызский : ' + 'Окуя');
                } 
                else if (searchValue.value === 'Оператор ') {
                    $('#word').html('English : ' + 'Operator' + '<br />' + '<br />' + 'Кыргызский : ' + 'Оператор');
                }  
                else if (searchValue.value === 'Инструмент ') {
                    $('#word').html('English : ' + 'Tool' + '<br />' + '<br />' + 'Кыргызский : ' + 'Аспап');
                }   
                else if (searchValue.value === 'Инструкция ') {
                    $('#word').html('English : ' + 'Instruction' + '<br />' + '<br />' + 'Кыргызский : ' + 'Инструкция');
                } 
                else if (searchValue.value === 'Логика ') {
                    $('#word').html('English : ' + 'Logic' + '<br />' + '<br />' + 'Кыргызский : ' + 'Логикалык');
                }  
                else if (searchValue.value === 'Парадигма ') {
                    $('#word').html('English : ' + 'Paradigm' + '<br />' + '<br />' + 'Кыргызский : ' + 'Парадигма');
                }   
                else if (searchValue.value === 'Сервер ') {
                    $('#word').html('English : ' + 'Server' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сервер');
                } 
                else if (searchValue.value === 'Виртуальность ') {
                    $('#word').html('English : ' + 'Virtuality' + '<br />' + '<br />' + 'Кыргызский : ' + 'Виртуальность');
                }  
                else if (searchValue.value === 'Локальный ') {
                    $('#word').html('English : ' + 'Local' + '<br />' + '<br />' + 'Кыргызский : ' + 'Локалдык');
                }   
                else if (searchValue.value === 'Региональный ') {
                    $('#word').html('English : ' + 'Regional' + '<br />' + '<br />' + 'Кыргызский : ' + 'Регионалдык');
                } 
                else if (searchValue.value === 'Глобальный ') {
                    $('#word').html('English : ' + 'Global' + '<br />' + '<br />' + 'Кыргызский : ' + 'Глобалдык');
                }  
                else if (searchValue.value === 'Телефон ') {
                    $('#word').html('English : ' + 'Phone' + '<br />' + '<br />' + 'Кыргызский : ' + 'Телефон');
                }   
                else if (searchValue.value === 'Транзакция ') {
                    $('#word').html('English : ' + 'Transaction' + '<br />' + '<br />' + 'Кыргызский : ' + 'Транзакция');
                } 
                else if (searchValue.value === 'Иньекция ') {
                    $('#word').html('English : ' + 'Injection' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иньекция');
                }  
                else if (searchValue.value === 'База данных ') {
                    $('#word').html('English : ' + 'Database' + '<br />' + '<br />' + 'Кыргызский : ' + 'Маалыматтар базасы');
                }   
                else if (searchValue.value === 'Данные ') {
                    $('#word').html('English : ' + 'Data' + '<br />' + '<br />' + 'Кыргызский : ' + 'Маалыматтар');
                } 
                else if (searchValue.value === 'Протокол ') {
                    $('#word').html('English : ' + 'Protocol' + '<br />' + '<br />' + 'Кыргызский : ' + 'Протокол');
                }  
                else if (searchValue.value === 'Библиотека ') {
                    $('#word').html('English : ' + 'Library' + '<br />' + '<br />' + 'Кыргызский : ' + 'Китеп кана');
                }   
                else if (searchValue.value === 'Графика ') {
                    $('#word').html('English : ' + 'Graphic' + '<br />' + '<br />' + 'Кыргызский : ' + 'Графика');
                } 
                else if (searchValue.value === 'Вектор ') {
                    $('#word').html('English : ' + 'Vector' + '<br />' + '<br />' + 'Кыргызский : ' + 'Вектор');
                }  
                else if (searchValue.value === 'Наследование ') {
                    $('#word').html('English : ' + 'Inheritance' + '<br />' + '<br />' + 'Кыргызский : ' + 'Мураска ээ болуу');
                }   
                else if (searchValue.value === 'Изоляция ') {
                    $('#word').html('English : ' + 'Insulation' + '<br />' + '<br />' + 'Кыргызский : ' + 'Бөлүп коюу');
                } else {console.log('No mathces');}
                
                return false;
        }
     });
    
});
    

                                    /*  KYRGYZ TAGS  */


$(document).ready(function(){
    
    var kgTags = ["Клавиатура", "Браузер", "Чычкан", "Компьютер", "Электр менен камсыз кылуу бөлүмү", "Монитор", "Сүйлөмөлөрдү", "Наушник", "Роутер", "Процессор", "Программалоо тили", "Материнская плата", "Оперативная память", "Катуу диск", "Видеокарта", "Дисковод", "Баскычы", "Камера", "Басуучу машина", "Сканер", "Киргизүүчү түзмөк", "Көрсөтүү түзмөк", "Ачкыч", "Программа", "Операциондук система", "IP дареги", "Чөмөлө", "Программалоо", "Иштеп чыгуу", "Переменная", "Алгоритм", "Цикл", "Милдети", "Тизме", "Зат", "Иерархия", "Окуя", 'Аспап', 'Оператор', 'Инструкция', 'Логикалык', 'Парадигма', 'Сервер', 'Виртуальность', 'Локалдык', 'Регионалдык', 'Глобалдык', 'Телефон', 'Транзакция', 'Иньекция', 'Маалыматтар базасы', 'Маалыматтар', 'Протокол', 'Китеп кана', 'Графика', 'Вектор', 'Мураска ээ болуу', 'Бөлүп коюу'];
    
    console.log('kgTags length is = ' + kgTags.length);
    
    $('#kg').click(function() {
    $('.show').slideToggle();
   $('#search').autocomplete({
      source: kgTags
        }); 
    });
    
     var searchValue = document.getElementById('search');

        $('#translate').click(function() {
            for (var i = 0; i < kgTags.length; i++) {
                if (searchValue.value === 'Чычкан') {
                    $('#word').html('Русский : ' + 'Мышь' + '<br />' + '<br />' + 'English : ' + 'Mouse');
                } 
                else if (searchValue.value === 'Браузер') {
                    $('#word').html('Русский : ' + 'Браузер' + '<br />' + '<br />' + 'English : ' + 'Browser');
                } 
                else if (searchValue.value === 'Клавиатура') {
                    $('#word').html('Русский : ' + 'Клавиатура' + '<br />' + '<br />' + 'English : ' + 'Keyboard');
                }
                else if (searchValue.value === 'Компьютер') {
                    $('#word').html('Русский : ' + 'Компьютер' + '<br />' + '<br />' + 'English : ' + 'Computer');
                }
                else if (searchValue.value === 'Электр менен камсыз кылуу бөлүмү') {
                    $('#word').html('Русский : ' + 'Блок Питания' + '<br />' + '<br />' + 'English : ' + 'Power Supply');
                }
                else if (searchValue.value === 'Монитор') {
                    $('#word').html('Русский : ' + 'Монитор' + '<br />' + '<br />' + 'English : ' + 'Display');
                }
                else if (searchValue.value === 'Сүйлөмөлөрдү') {
                    $('#word').html('Русский : ' + 'Колонки' + '<br />' + '<br />' + 'English : ' + 'Loudspeakers');
                }
                else if (searchValue.value === 'Наушник') {
                    $('#word').html('Русский : ' + 'Наушники' + '<br />' + '<br />' + 'English : ' + 'Earphones');
                }
                else if (searchValue.value === 'Роутер') {
                    $('#word').html('Русский : ' + 'Роутер' + '<br />' + '<br />' + 'English : ' + 'Router');
                }
                else if (searchValue.value === 'Процессор') {
                    $('#word').html('Русский : ' + 'Процессор' + '<br />' + '<br />' + 'English : ' + 'Processor (CPU)');
                }
                else if (searchValue.value === 'Программалоо тили') {
                    $('#word').html('Русский : ' + 'Язык программирования' + '<br />' + '<br />' + 'English : ' + 'Programming language');
                }
                else if (searchValue.value === 'Материнская плата') {
                    $('#word').html('Русский : ' + 'Материнская плата' + '<br />' + '<br />' + 'English : ' + 'Motherboard');
                }
                else if (searchValue.value === 'Оперативная память') {
                    $('#word').html('Русский : ' + 'Оперативная память' + '<br />' + '<br />' + 'English : ' + 'RAM (Random Access Memory)');
                }
                else if (searchValue.value === 'Катуу диск') {
                    $('#word').html('Русский : ' + 'Жесткий диск' + '<br />' + '<br />' + 'English : ' + 'HDD (Hard Disk Drive)');
                }
                else if (searchValue.value === 'Дисковод') {
                    $('#word').html('Русский : ' + 'Дисковод' + '<br />' + '<br />' + 'English : ' + 'Drive');
                }
                else if (searchValue.value === 'Видеокарта') {
                    $('#word').html('Русский : ' + 'Видеокарта' + '<br />' + '<br />' + 'English : ' + 'Videocard');
                }
                else if (searchValue.value === 'Баскычы') {
                    $('#word').html('Русский : ' + 'Кнопка' + '<br />' + '<br />' + 'English : ' + 'Button');
                }
                else if (searchValue.value === 'Камера') {
                    $('#word').html('Русский : ' + 'Камера' + '<br />' + '<br />' + 'English : ' + 'Camera');
                }
                else if (searchValue.value === 'Басуучу машина') {
                    $('#word').html('Русский : ' + 'Принтер' + '<br />' + '<br />' + 'English : ' + 'Printer');
                }
                else if (searchValue.value === 'Сканер') {
                    $('#word').html('Русский : ' + 'Сканер' + '<br />' + '<br />' + 'English : ' + 'Scanner');
                }
                else if (searchValue.value === 'Киргизүүчү түзмөк') {
                    $('#word').html('Русский : ' + 'Устройство ввода' + '<br />' + '<br />' + 'English : ' + 'Input device');
                }
                else if (searchValue.value === 'Көрсөтүү түзмөк') {
                    $('#word').html('Русский : ' + 'Устройство ввывода' + '<br />' + '<br />' + 'English : ' + 'Output device');
                }
                else if (searchValue.value === 'Ачкыч') {
                    $('#word').html('Русский : ' + 'Клавиша' + '<br />' + '<br />' + 'English : ' + 'Key');
                } 
                else if (searchValue.value === 'Программа') {
                    $('#word').html('Русский : ' + 'Программа' + '<br />' + '<br />' + 'English : ' + 'Program');
                } 
                else if (searchValue.value === 'Операциондук система') {
                    $('#word').html('Русский : ' + 'Операционная система' + '<br />' + '<br />' + 'English : ' + 'OS (Operating System)');
                } 
                else if (searchValue.value === 'IP дареги') {
                    $('#word').html('Русский : ' + 'IP Адрес' + '<br />' + '<br />' + 'English : ' + 'IP (Internet Protocol) Address');
                } 
                else if (searchValue.value === 'Чөмөлө') {
                    $('#word').html('Русский : ' + 'Стек' + '<br />' + '<br />' + 'English : ' + 'Stack');
                } 
                else if (searchValue.value === 'Программалоо') {
                    $('#word').html('Русский : ' + 'Программирование' + '<br />' + '<br />' + 'English : ' + 'Programming');
                } 
                else if (searchValue.value === 'Иштеп чыгуу') {
                    $('#word').html('Русский : ' + 'Разработка' + '<br />' + '<br />' + 'English : ' + 'Development');
                } 
                else if (searchValue.value === 'Переменная') {
                    $('#word').html('Русский : ' + 'Переменная' + '<br />' + '<br />' + 'English : ' + 'Variable');
                } 
                else if (searchValue.value === 'Алгоритм') {
                    $('#word').html('Русский : ' + 'Алгоритм' + '<br />' + '<br />' + 'English : ' + 'Algorithm');
                } 
                else if (searchValue.value === 'Милдети') {
                    $('#word').html('Русский : ' + 'Функция' + '<br />' + '<br />' + 'English : ' + 'Function');
                } 
                else if (searchValue.value === 'Цикл') {
                    $('#word').html('Русский : ' + 'Цикл' + '<br />' + '<br />' + 'English : ' + 'Loop');
                } 
                else if (searchValue.value === 'Тизме') {
                    $('#word').html('Русский : ' + 'Массив' + '<br />' + '<br />' + 'English : ' + 'Array');
                } 
                else if (searchValue.value === 'Зат') {
                    $('#word').html('Русский : ' + 'Объект' + '<br />' + '<br />' + 'English : ' + 'Object');
                } 
                else if (searchValue.value === 'Иерархия') {
                    $('#word').html('Русский : ' + 'Иерархия' + '<br />' + '<br />' + 'English : ' + 'Hierarchy');
                } 
                else if (searchValue.value === 'Окуя') {
                    $('#word').html('Русский : ' + 'Событие' + '<br />' + '<br />' + 'English : ' + 'Event');
                }
                else if (searchValue.value === 'Аспап') {
                    $('#word').html('Русский : ' + 'Инструмент' + '<br />' + '<br />' + 'English : ' + 'Tool');
                }
                else if (searchValue.value === 'Оператор') {
                    $('#word').html('Русский : ' + 'Оператор' + '<br />' + '<br />' + 'English : ' + 'Operator');
                }
                else if (searchValue.value === 'Инструкция') {
                    $('#word').html('Русский : ' + 'Инструкция' + '<br />' + '<br />' + 'English : ' + 'Instruction');
                }
                else if (searchValue.value === 'Логикалык') {
                    $('#word').html('Русский : ' + 'Логика' + '<br />' + '<br />' + 'English : ' + 'Logic');
                }
                else if (searchValue.value === 'Парадигма') {
                    $('#word').html('Русский : ' + 'Парадигма' + '<br />' + '<br />' + 'English : ' + 'Paradigm');
                }
                else if (searchValue.value === 'Окуя') {
                    $('#word').html('Русский : ' + 'Событие' + '<br />' + '<br />' + 'English : ' + 'Event');
                }
                else if (searchValue.value === 'Сервер') {
                    $('#word').html('Русский : ' + 'Сервер' + '<br />' + '<br />' + 'English : ' + 'Server');
                }
                else if (searchValue.value === 'Виртуальность') {
                    $('#word').html('Русский : ' + 'Виртуальность' + '<br />' + '<br />' + 'English : ' + 'Virtuality');
                }
                else if (searchValue.value === 'Локалдык') {
                    $('#word').html('Русский : ' + 'Локаьный' + '<br />' + '<br />' + 'English : ' + 'Local');
                }
                else if (searchValue.value === 'Регионалдык') {
                    $('#word').html('Русский : ' + 'Региональный' + '<br />' + '<br />' + 'English : ' + 'Regional');
                }
                else if (searchValue.value === 'Глобалдык') {
                    $('#word').html('Русский : ' + 'Глобальный' + '<br />' + '<br />' + 'English : ' + 'Global');
                }
                else if (searchValue.value === 'Телефон') {
                    $('#word').html('Русский : ' + 'Телефон' + '<br />' + '<br />' + 'English : ' + 'Phone');
                }
                else if (searchValue.value === 'Транзакция') {
                    $('#word').html('Русский : ' + 'Транзакция' + '<br />' + '<br />' + 'English : ' + 'Transaction');
                }
                else if (searchValue.value === 'Иньекция') {
                    $('#word').html('Русский : ' + 'Иньекция' + '<br />' + '<br />' + 'English : ' + 'Injection');
                }
                else if (searchValue.value === 'Маалыматтар базасы') {
                    $('#word').html('Русский : ' + 'База данных' + '<br />' + '<br />' + 'English : ' + 'Database');
                }
                else if (searchValue.value === 'Маалыматтар') {
                    $('#word').html('Русский : ' + 'Данные' + '<br />' + '<br />' + 'English : ' + 'Data');
                }
                else if (searchValue.value === 'Протокол') {
                    $('#word').html('Русский : ' + 'Протокол' + '<br />' + '<br />' + 'English : ' + 'Protocol');
                }
                else if (searchValue.value === 'Китеп кана') {
                    $('#word').html('Русский : ' + 'Библиотека' + '<br />' + '<br />' + 'English : ' + 'Library');
                }
                else if (searchValue.value === 'Графика') {
                    $('#word').html('Русский : ' + 'Графика' + '<br />' + '<br />' + 'English : ' + 'Graphic');
                }
                else if (searchValue.value === 'Вектор') {
                    $('#word').html('Русский : ' + 'Вектор' + '<br />' + '<br />' + 'English : ' + 'Vector');
                }
                else if (searchValue.value === 'Мураска ээ болуу') {
                    $('#word').html('Русский : ' + 'Наследование' + '<br />' + '<br />' + 'English : ' + 'Inheritance');
                }
                else if (searchValue.value === 'Бөлүп коюу') {
                    $('#word').html('Русский : ' + 'Изоляция' + '<br />' + '<br />' + 'English : ' + 'Insulation');
                }else {console.log('No matches');}
            }
            return false;
        });
});
    


                                    /*  ENGLISH TAGS  */


$(document).ready(function(){
    
    var engTags = ["Keyboard", "Browser", "Mouse", "Computer", "Power Supply", "Display", "Loudspeakers", "Earphones", "Router", "Processor (CPU)", "Programming language", "Motherboard", "RAM (Random Access Memory)", "HDD (Hard Disk Drive)", "Videocard", "Drive", "Button", "Camera", "Printer", "Scanner", "Input device", "Output device", "Key", "Program", "OS (Operating System)", "IP (Internet Protocol) Address", "Stack", "Programming", "Development", "Variable", "Loop", "Function", "Array", "Object", "Hierarchy", "Event", 'Tool', 'Operator', 'Instruction', 'Logic', 'Paradigm', 'Server', 'Virtuality', 'Local', 'Regional', 'Global', 'Phone', 'Transaction', 'Injection', 'Database', 'Data', 'Protocol', 'Library', 'Graphic', 'Vector', 'Inheritance', 'Insulation'];
    
    console.log('engTags length is = ' + engTags.length);
    
    $('#eng').click(function() {
    $('.show').slideToggle();
   $('#search').autocomplete({
      source: engTags
        }); 
    });
    
    var searchValue = document.getElementById('search');

        $('#translate').click(function() {
            for (var i = 0; i < engTags.length; i++) {
                if (searchValue.value === 'Mouse') {
                    $('#word').html('Русский : ' + 'Мышь' + '<br />' + '<br />' + 'Кыргызский : ' + 'Чычкан');
                } 
                else if (searchValue.value === 'Browser') {
                    $('#word').html('Русский : ' + 'Браузер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Бразуер');
                } 
                else if (searchValue.value === 'Keyboard') {
                    $('#word').html('Русский : ' + 'Клавиатура' + '<br />' + '<br />' + 'Кыргызский : ' + 'Клавиатурасы');
                }
                else if (searchValue.value === 'Computer') {
                    $('#word').html('Русский : ' + 'Компьютер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Компьютер');
                }
                else if (searchValue.value === 'Power Supply') {
                    $('#word').html('Русский : ' + 'Блок Питания' + '<br />' + '<br />' + 'Кыргызский : ' + 'Электр менен камсыз кылуу бөлүмү');
                }
                else if (searchValue.value === 'Display') {
                    $('#word').html('Русский : ' + 'Монитор' + '<br />' + '<br />' + 'Кыргызский : ' + 'Монитор');
                }
                else if (searchValue.value === 'Loudspeakers') {
                    $('#word').html('Русский : ' + 'Колонки' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сүйлөмөлөрдү');
                }
                else if (searchValue.value === 'Earphones') {
                    $('#word').html('Русский : ' + 'Наушники' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сурактары');
                }
                else if (searchValue.value === 'Router') {
                    $('#word').html('Русский : ' + 'Роутер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Роутер');
                }
                else if (searchValue.value === 'Processor (CPU)') {
                    $('#word').html('Русский : ' + 'Процессор' + '<br />' + '<br />' + 'Кыргызский : ' + 'Процессор');
                }
                else if (searchValue.value === 'Programming language') {
                    $('#word').html('Русский : ' + 'Язык программирования' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программалоо тили');
                }
                else if (searchValue.value === 'Motherboard') {
                    $('#word').html('Русский : ' + 'Материнская плата' + '<br />' + '<br />' + 'Кыргызский : ' + 'Материнская плата');
                }
                else if (searchValue.value === 'RAM (Random Access Memory)') {
                    $('#word').html('Русский : ' + 'Оперативная память' + '<br />' + '<br />' + 'Кыргызский : ' + 'Оперативная память');
                }
                else if (searchValue.value === 'Videocard') {
                    $('#word').html('Русский : ' + 'Видеокарта' + '<br />' + '<br />' + 'Кыргызский : ' + 'Видеокарта');
                }
                else if (searchValue.value === 'HDD (Hard Disk Drive)') {
                    $('#word').html('Русский : ' + 'Жесткий диск' + '<br />' + '<br />' + 'Кыргызский : ' + 'Катуу диск');
                }
                else if (searchValue.value === 'Drive') {
                    $('#word').html('Русский : ' + 'Дисковод' + '<br />' + '<br />' + 'Кыргызский : ' + 'Дисковод');
                }
                else if (searchValue.value === 'Button') {
                    $('#word').html('Русский : ' + 'Кнопка' + '<br />' + '<br />' + 'Кыргызский : ' + 'Баскычы');
                }
                else if (searchValue.value === 'Camera') {
                    $('#word').html('Русский : ' + 'Камера' + '<br />' + '<br />' + 'Кыргызский : ' + 'Камера');
                }
                else if (searchValue.value === 'Printer') {
                    $('#word').html('Русский : ' + 'Принтер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Басуучу машина');
                }
                else if (searchValue.value === 'Scanner') {
                    $('#word').html('Русский : ' + 'Сканер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сканер');
                }
                else if (searchValue.value === 'Input device') {
                    $('#word').html('Русский : ' + 'Устройство ввода' + '<br />' + '<br />' + 'Кыргызский : ' + 'Киргизүүчү түзмөк');
                }
                else if (searchValue.value === 'Output device') {
                    $('#word').html('Русский : ' + 'Устройство ввывода' + '<br />' + '<br />' + 'Кыргызский : ' + 'Көрсөтүү түзмөк');
                }
                else if (searchValue.value === 'Key') {
                    $('#word').html('Русский : ' + 'Клавиша' + '<br />' + '<br />' + 'Кыргызский : ' + 'Ачкыч');
                } 
                else if (searchValue.value === 'Program') {
                    $('#word').html('Русский : ' + 'Программа' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программа');
                } 
                else if (searchValue.value === 'OS (Operating System)') {
                    $('#word').html('Русский : ' + 'Операционная система' + '<br />' + '<br />' + 'Кыргызский : ' + 'Операциондук система');
                } 
                else if (searchValue.value === 'IP (Internet Protocol) Address') {
                    $('#word').html('Русский : ' + 'IP Адрес' + '<br />' + '<br />' + 'Кыргызский : ' + 'IP дареги');
                } 
                else if (searchValue.value === 'Stack') {
                    $('#word').html('Русский : ' + 'Стек' + '<br />' + '<br />' + 'Кыргызский : ' + 'Стек');
                } 
                else if (searchValue.value === 'Programming') {
                    $('#word').html('Русский : ' + 'Программирование' + '<br />' + '<br />' + 'Кыргызский : ' + 'Программалоо');
                } 
                else if (searchValue.value === 'Development') {
                    $('#word').html('Русский : ' + 'Разработка' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иштеп чыгуу');
                } 
                else if (searchValue.value === 'Variable') {
                    $('#word').html('Русский : ' + 'Переменная' + '<br />' + '<br />' + 'Кыргызский : ' + 'Переменная');
                } 
                else if (searchValue.value === 'Algorithm') {
                    $('#word').html('Русский : ' + 'Алгоритм' + '<br />' + '<br />' + 'Кыргызский : ' + 'Алгоритм');
                } 
                else if (searchValue.value === 'Function') {
                    $('#word').html('Русский : ' + 'Функция' + '<br />' + '<br />' + 'Кыргызский : ' + 'Милдети');
                } 
                else if (searchValue.value === 'Loop') {
                    $('#word').html('Русский : ' + 'Цикл' + '<br />' + '<br />' + 'Кыргызский : ' + 'Цикл');
                } 
                else if (searchValue.value === 'Array') {
                    $('#word').html('Русский : ' + 'Массив' + '<br />' + '<br />' + 'Кыргызский : ' + 'Тизме');
                } 
                else if (searchValue.value === 'Object') {
                    $('#word').html('Русский : ' + 'Объект' + '<br />' + '<br />' + 'Кыргызский : ' + 'Зат');
                } 
                else if (searchValue.value === 'Hierarchy') {
                    $('#word').html('Русский : ' + 'Иерархия' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иерархия');
                } 
                else if (searchValue.value === 'Event') {
                    $('#word').html('Русский : ' + 'Событие' + '<br />' + '<br />' + 'Кыргызский : ' + 'Окуя');
                } 
                else if (searchValue.value === 'Tool') {
                    $('#word').html('Русский : ' + 'Инструмент' + '<br />' + '<br />' + 'Кыргызский : ' + 'Аспап');
                } 
                else if (searchValue.value === 'Operator') {
                    $('#word').html('Русский : ' + 'Оператор' + '<br />' + '<br />' + 'Кыргызский : ' + 'Оператор');
                } 
                else if (searchValue.value === 'Instruction') {
                    $('#word').html('Русский : ' + 'Инструкция' + '<br />' + '<br />' + 'Кыргызский : ' + 'Инструкция');
                } 
                else if (searchValue.value === 'Logic') {
                    $('#word').html('Русский : ' + 'Логика' + '<br />' + '<br />' + 'Кыргызский : ' + 'Логикалык');
                } 
                else if (searchValue.value === 'Transaction') {
                    $('#word').html('Русский : ' + 'Транзакция' + '<br />' + '<br />' + 'Кыргызский : ' + 'Транзакция');
                } 
                else if (searchValue.value === 'Injection') {
                    $('#word').html('Русский : ' + 'Иньекция' + '<br />' + '<br />' + 'Кыргызский : ' + 'Иньекция');
                } 
                else if (searchValue.value === 'Database') {
                    $('#word').html('Русский : ' + 'База данных' + '<br />' + '<br />' + 'Кыргызский : ' + 'Маалыматтар базасы');
                } 
                else if (searchValue.value === 'Data') {
                    $('#word').html('Русский : ' + 'Данные' + '<br />' + '<br />' + 'Кыргызский : ' + 'Маалыматтар');
                } 
                else if (searchValue.value === 'Protocol') {
                    $('#word').html('Русский : ' + 'Протокол' + '<br />' + '<br />' + 'Кыргызский : ' + 'Протокол');
                } 
                else if (searchValue.value === 'Library') {
                    $('#word').html('Русский : ' + 'Библиотека' + '<br />' + '<br />' + 'Кыргызский : ' + 'Китеп кана');
                } 
                else if (searchValue.value === 'Graphic') {
                    $('#word').html('Русский : ' + 'Графика' + '<br />' + '<br />' + 'Кыргызский : ' + 'Графика');
                } 
                else if (searchValue.value === 'Vector') {
                    $('#word').html('Русский : ' + 'Вектор' + '<br />' + '<br />' + 'Кыргызский : ' + 'Вектор');
                } 
                else if (searchValue.value === 'Inheritance') {
                    $('#word').html('Русский : ' + 'Наследование' + '<br />' + '<br />' + 'Кыргызский : ' + 'Мураска ээ болуу');
                } 
                else if (searchValue.value === 'Insulation') {
                    $('#word').html('Русский : ' + 'Изоляция' + '<br />' + '<br />' + 'Кыргызский : ' + 'Бөлүп коюу');
                } 
                else if (searchValue.value === 'Paradigm') {
                    $('#word').html('Русский : ' + 'Парадигма' + '<br />' + '<br />' + 'Кыргызский : ' + 'Парадигма');
                } 
                else if (searchValue.value === 'Server') {
                    $('#word').html('Русский : ' + 'Сервер' + '<br />' + '<br />' + 'Кыргызский : ' + 'Сервер');
                } 
                else if (searchValue.value === 'Virtuality') {
                    $('#word').html('Русский : ' + 'Виртуальность' + '<br />' + '<br />' + 'Кыргызский : ' + 'Виртуальность');
                } 
                else if (searchValue.value === 'Local') {
                    $('#word').html('Русский : ' + 'Локальный' + '<br />' + '<br />' + 'Кыргызский : ' + 'Локалдык');
                } 
                else if (searchValue.value === 'Regional') {
                    $('#word').html('Русский : ' + 'Региональный' + '<br />' + '<br />' + 'Кыргызский : ' + 'Регионалдык');
                } 
                else if (searchValue.value === 'Global') {
                    $('#word').html('Русский : ' + 'Глобальный' + '<br />' + '<br />' + 'Кыргызский : ' + 'Глобалдык');
                } 
                else if (searchValue.value === 'Phone') {
                    $('#word').html('Русский : ' + 'Телефон' + '<br />' + '<br />' + 'Кыргызский : ' + 'Телефон');
                } else {console.log('No matches');}
            }
            return false;
        });
});