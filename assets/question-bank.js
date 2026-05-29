const MODERN_TECH_EXAM_QUESTION_BANK = [
  {
    "id": "q1-001",
    "sourceId": "quiz1",
    "promptHtml": "Что означает девиз Java?",
    "options": [
      "Скомпилируй один раз — отлаживай везде",
      "Напиши код один раз — развёртывай где угодно",
      "Напиши один раз — запускай где угодно",
      "Собери один раз — тестируй где угодно"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-002",
    "sourceId": "quiz1",
    "promptHtml": "Во что компилятор <code>javac</code> превращает исходный код Java?",
    "options": [
      "В машинный код (.exe)",
      "В байт-код (.class)",
      "В ассемблерный код (.asm)",
      "В JavaScript (.js)"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-003",
    "sourceId": "quiz1",
    "promptHtml": "Какое учебное соотношение между JDK, JRE и JVM верно?",
    "options": [
      "JVM содержит JRE, JRE содержит JDK",
      "JRE содержит JDK, JDK содержит JVM",
      "JDK и JRE — это одно и то же",
      "JDK содержит средства разработки и среду выполнения; JVM является частью среды выполнения"
    ],
    "correctIndex": 3
  },
  {
    "id": "q1-004",
    "sourceId": "quiz1",
    "promptHtml": "Какой загрузчик классов загружает класс <code>String</code>?",
    "options": [
      "Bootstrap ClassLoader (начальный загрузчик классов)",
      "Platform ClassLoader (платформенный загрузчик классов)",
      "Application ClassLoader (загрузчик классов приложения)",
      "Custom ClassLoader (пользовательский загрузчик классов)"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-005",
    "sourceId": "quiz1",
    "promptHtml": "Что вернёт <code>String.class.getClassLoader()</code>?",
    "options": [
      "PlatformClassLoader (платформенный загрузчик)",
      "AppClassLoader (загрузчик приложения)",
      "null",
      "BootstrapClassLoader (начальный загрузчик)"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-006",
    "sourceId": "quiz1",
    "promptHtml": "Что выведет <code>System.out.println(10 / 3)</code>?",
    "options": [
      "3.33",
      "3",
      "3.0",
      "4"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-007",
    "sourceId": "quiz1",
    "promptHtml": "Что произойдёт при выполнении: <code>byte b = 127; b++;</code>?",
    "options": [
      "Ошибка компиляции",
      "b станет 128",
      "Будет выброшено исключение",
      "b станет -128 (переполнение)"
    ],
    "correctIndex": 3
  },
  {
    "id": "q1-008",
    "sourceId": "quiz1",
    "promptHtml": "Почему <code>0.1 + 0.2 == 0.3</code> возвращает <code>false</code>?",
    "options": [
      "Оператор == не работает с типом double",
      "Нужно использовать float вместо double",
      "Из-за погрешности формата IEEE 754",
      "Java округляет дробные числа при сложении"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-009",
    "sourceId": "quiz1",
    "promptHtml": "Каков размер типа <code>int</code> в Java?",
    "options": [
      "32 бита",
      "16 бит",
      "64 бита",
      "Зависит от платформы"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-010",
    "sourceId": "quiz1",
    "promptHtml": "Что выведет код: <code>int x = 5; System.out.println(x++);</code>?",
    "options": [
      "6",
      "5",
      "4",
      "Ошибка компиляции"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-011",
    "sourceId": "quiz1",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">String s1 = new String(&quot;Hello&quot;); String s2 = new String(&quot;Hello&quot;); System.out.println(s1 == s2);</code></pre>",
    "options": [
      "true",
      "Ошибка компиляции",
      "false",
      "Hello"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-012",
    "sourceId": "quiz1",
    "promptHtml": "Какой метод является точкой входа в Java-программу?",
    "options": [
      "public static void main(String[] args)",
      "public void main(String[] args)",
      "static void main()",
      "public static int main(String[] args)"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-013",
    "sourceId": "quiz1",
    "promptHtml": "Что хранит переменная ссылочного типа?",
    "options": [
      "Само значение объекта",
      "Копию объекта",
      "Имя класса объекта",
      "Ссылку на объект в памяти"
    ],
    "correctIndex": 3
  },
  {
    "id": "q1-014",
    "sourceId": "quiz1",
    "promptHtml": "Какой результат выражения <code>5 &amp; 3</code> (побитовое И)?",
    "options": [
      "7",
      "1",
      "6",
      "8"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-015",
    "sourceId": "quiz1",
    "promptHtml": "Где обычно хранятся объекты в JVM?",
    "options": [
      "В стеке (Stack)",
      "В Metaspace",
      "В куче (Heap)",
      "В PC Register"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-016",
    "sourceId": "quiz1",
    "promptHtml": "Сколько примитивных типов данных в Java?",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-017",
    "sourceId": "quiz1",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">String s1 = &quot;Java&quot;; String s2 = &quot;Java&quot;; System.out.println(s1 == s2);</code></pre>",
    "options": [
      "true",
      "false",
      "Ошибка компиляции",
      "Java"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-018",
    "sourceId": "quiz1",
    "promptHtml": "Какой инструмент JDK используется для интерактивных экспериментов с кодом?",
    "options": [
      "javac",
      "javadoc",
      "jshell",
      "jdb"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-019",
    "sourceId": "quiz1",
    "promptHtml": "Какое значение по умолчанию у переменной типа <code>boolean</code> как поля класса?",
    "options": [
      "true",
      "null",
      "0",
      "false"
    ],
    "correctIndex": 3
  },
  {
    "id": "q1-020",
    "sourceId": "quiz1",
    "promptHtml": "Что означает запись <code>0b101010</code> в Java?",
    "options": [
      "Восьмеричное число",
      "Двоичное число",
      "Шестнадцатеричное число",
      "Десятичное число"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-021",
    "sourceId": "quiz1",
    "promptHtml": "Какой суффикс используется, чтобы явно записать целочисленный литерал типа <code>long</code>?",
    "options": [
      "L",
      "D",
      "F",
      "Суффикс не нужен"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-022",
    "sourceId": "quiz1",
    "promptHtml": "Что делает Garbage Collector в JVM?",
    "options": [
      "Компилирует байт-код в машинный код",
      "Загружает классы в память",
      "Автоматически освобождает память от неиспользуемых объектов",
      "Проверяет байт-код на безопасность"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-023",
    "sourceId": "quiz1",
    "promptHtml": "Что выведет код: <code>int x = 5; System.out.println(++x);</code>?",
    "options": [
      "5",
      "6",
      "4",
      "Ошибка компиляции"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-024",
    "sourceId": "quiz1",
    "promptHtml": "Какой результат выражения <code>5 | 3</code> (побитовое ИЛИ)?",
    "options": [
      "1",
      "3",
      "5",
      "7"
    ],
    "correctIndex": 3
  },
  {
    "id": "q1-025",
    "sourceId": "quiz1",
    "promptHtml": "Что такое JIT-компилятор?",
    "options": [
      "Компилирует часто выполняемый байт-код в машинный код для ускорения",
      "Компилирует .java файлы в .class файлы",
      "Загружает классы из JAR-файлов",
      "Проверяет код на ошибки перед запуском"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-026",
    "sourceId": "quiz1",
    "promptHtml": "Какой результат выражения <code>5 ^ 3</code> (побитовое XOR)?",
    "options": [
      "1",
      "7",
      "6",
      "8"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-027",
    "sourceId": "quiz1",
    "promptHtml": "Какое правило действует для имени файла и публичного класса в Java?",
    "options": [
      "Имя файла может быть любым",
      "Имя файла должно совпадать с именем публичного класса",
      "Имя класса должно начинаться с маленькой буквы",
      "В файле может быть только один класс"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-028",
    "sourceId": "quiz1",
    "promptHtml": "Что произойдёт при выполнении <code>false &amp;&amp; someMethod()</code>?",
    "options": [
      "someMethod() выполнится и вернёт false",
      "Ошибка компиляции",
      "someMethod() выполнится и результат будет false",
      "someMethod() не будет вызван (короткое замыкание)"
    ],
    "correctIndex": 3
  },
  {
    "id": "q1-029",
    "sourceId": "quiz1",
    "promptHtml": "Какой размер типа <code>char</code> в Java?",
    "options": [
      "16 бит (UTF-16 code unit)",
      "8 бит (ASCII)",
      "32 бита",
      "Зависит от символа"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-030",
    "sourceId": "quiz1",
    "promptHtml": "Что такое Metaspace в JVM?",
    "options": [
      "Область для хранения объектов",
      "Стек вызовов методов",
      "Область для хранения метаданных классов",
      "Кэш для JIT-компилятора"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-031",
    "sourceId": "quiz1",
    "promptHtml": "Какой результат выражения <code>5 &lt;&lt; 2</code> (сдвиг влево)?",
    "options": [
      "10",
      "20",
      "2",
      "25"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-032",
    "sourceId": "quiz1",
    "promptHtml": "Какой класс рекомендуется использовать для точных десятичных финансовых расчётов?",
    "options": [
      "BigDecimal",
      "double",
      "float",
      "long"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-033",
    "sourceId": "quiz1",
    "promptHtml": "Из каких трёх основных подсистем обычно описывают JVM в учебной схеме?",
    "options": [
      "Компилятор, компоновщик, отладчик",
      "JRE, JDK, JAR",
      "Стек, куча, Metaspace",
      "Загрузчик классов, области данных времени выполнения, исполнительный механизм"
    ],
    "correctIndex": 3
  },
  {
    "id": "q1-034",
    "sourceId": "quiz1",
    "promptHtml": "Какое ключевое слово используется для объявления нативного метода (JNI)?",
    "options": [
      "extern",
      "foreign",
      "native",
      "jni"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-035",
    "sourceId": "quiz1",
    "promptHtml": "Какая команда JShell показывает все объявленные переменные?",
    "options": [
      "/list",
      "/vars",
      "/show",
      "/variables"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-036",
    "sourceId": "quiz1",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">int a = 10; int b = 3; System.out.println(10.0 / 3);</code></pre>",
    "options": [
      "3.3333333333333335",
      "3",
      "3.0",
      "3.33"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-037",
    "sourceId": "quiz1",
    "promptHtml": "Какой принцип обычно используют загрузчики классов при поиске класса?",
    "options": [
      "Каждый загрузчик ищет класс самостоятельно",
      "Класс всегда загружает Application ClassLoader",
      "Загрузчики ищут класс снизу вверх и сверху вниз одновременно",
      "Делегирование сначала родителю (parent-first delegation)"
    ],
    "correctIndex": 3
  },
  {
    "id": "q1-038",
    "sourceId": "quiz1",
    "promptHtml": "Чему равно значение <code>Integer.MAX_VALUE + 1</code>?",
    "options": [
      "2147483648",
      "0",
      "-2147483648 (Integer.MIN_VALUE)",
      "Будет выброшено исключение"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-039",
    "sourceId": "quiz1",
    "promptHtml": "Что делает подчёркивание в числовом литерале <code>1_000_000</code>?",
    "options": [
      "Превращает число в строку",
      "Улучшает читаемость, не влияя на значение",
      "Разделяет число на части для вычисления",
      "Это синтаксическая ошибка"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-040",
    "sourceId": "quiz1",
    "promptHtml": "Какой метод нужно использовать для сравнения содержимого двух строк?",
    "options": [
      ".equals()",
      "==",
      ".compare()",
      ".match()"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-041",
    "sourceId": "quiz1",
    "promptHtml": "Для чего используется ключевое слово <code>package</code> в Java?",
    "options": [
      "Для импорта внешних библиотек",
      "Для группировки связанных классов по логическим пакетам",
      "Для создания JAR-архива",
      "Для указания версии Java"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-042",
    "sourceId": "quiz1",
    "promptHtml": "Чем отличается <code>System.out.println()</code> от <code>System.out.print()</code>?",
    "options": [
      "println выводит числа, print — строки",
      "print добавляет перенос строки, println — нет",
      "Ничем не отличаются",
      "println добавляет перенос строки после вывода, print — нет"
    ],
    "correctIndex": 3
  },
  {
    "id": "q1-043",
    "sourceId": "quiz1",
    "promptHtml": "Зачем метод <code>main</code> объявлен как <code>static</code>?",
    "options": [
      "Чтобы JVM могла вызвать его без создания объекта класса",
      "Чтобы метод работал быстрее",
      "Чтобы метод был доступен из других классов",
      "Это необязательно, просто соглашение"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-044",
    "sourceId": "quiz1",
    "promptHtml": "Что содержит параметр <code>String[] args</code> в методе <code>main</code>?",
    "options": [
      "Имена всех переменных программы",
      "Список импортированных пакетов",
      "Аргументы, переданные из командной строки",
      "Пути к файлам .class"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-045",
    "sourceId": "quiz1",
    "promptHtml": "Какие три этапа проходит класс при загрузке в JVM?",
    "options": [
      "Компиляция, оптимизация, выполнение",
      "Загрузка, связывание, инициализация",
      "Чтение, разбор, запуск",
      "Проверка, подготовка, разрешение ссылок"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-046",
    "sourceId": "quiz1",
    "promptHtml": "Что происходит на этапе Verification при загрузке класса?",
    "options": [
      "Выделяется память для статических переменных",
      "Выполняются статические блоки инициализации",
      "Символические ссылки заменяются на прямые",
      "JVM проверяет корректность и безопасность байт-кода"
    ],
    "correctIndex": 3
  },
  {
    "id": "q1-047",
    "sourceId": "quiz1",
    "promptHtml": "Что хранится в стеке (Stack) потока?",
    "options": [
      "Локальные переменные, параметры методов, адреса возврата",
      "Все объекты программы",
      "Метаданные загруженных классов",
      "Скомпилированный машинный код"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-048",
    "sourceId": "quiz1",
    "promptHtml": "Чем отличается <code>System.load()</code> от <code>System.loadLibrary()</code>?",
    "options": [
      "load() загружает Java-классы, loadLibrary() — нативные библиотеки",
      "Ничем, это синонимы",
      "load() принимает полный путь к файлу, loadLibrary() ищет библиотеку по имени",
      "loadLibrary() работает только на Windows"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-049",
    "sourceId": "quiz1",
    "promptHtml": "Что такое JAR-файл?",
    "options": [
      "Исходный код Java в текстовом формате",
      "ZIP-архив, содержащий скомпилированные .class файлы и ресурсы",
      "Конфигурационный файл JVM",
      "Лог-файл компилятора javac"
    ],
    "correctIndex": 1
  },
  {
    "id": "q1-050",
    "sourceId": "quiz1",
    "promptHtml": "Для переменной <code>int x</code>, чему эквивалентна запись <code>x += 3</code>?",
    "options": [
      "x = x + 3",
      "x = 3",
      "x = x * 3",
      "x + 3"
    ],
    "correctIndex": 0
  },
  {
    "id": "q1-051",
    "sourceId": "quiz1",
    "promptHtml": "Какой результат выражения <code>10 &gt;= 10</code>?",
    "options": [
      "false",
      "Ошибка компиляции",
      "true",
      "10"
    ],
    "correctIndex": 2
  },
  {
    "id": "q1-052",
    "sourceId": "quiz1",
    "promptHtml": "Кто создал язык Java и в каком году язык был впервые официально выпущен?",
    "options": [
      "Линус Торвальдс, 1991",
      "Бьярне Страуструп, 1985",
      "Гвидо ван Россум, 1991",
      "Джеймс Гослинг, 1995"
    ],
    "correctIndex": 3
  },
  {
    "id": "q2-1-001",
    "sourceId": "quiz2-1",
    "promptHtml": "Что такое класс в Java?",
    "options": [
      "Готовый объект в памяти",
      "Шаблон (чертёж), по которому создаются объекты",
      "Набор статических методов",
      "Файл с расширением .class"
    ],
    "correctIndex": 1
  },
  {
    "id": "q2-1-002",
    "sourceId": "quiz2-1",
    "promptHtml": "Сколько классов может наследовать Java-класс через <code>extends</code>?",
    "options": [
      "Неограниченное количество",
      "Два",
      "Ноль — наследование запрещено",
      "Только один"
    ],
    "correctIndex": 3
  },
  {
    "id": "q2-1-003",
    "sourceId": "quiz2-1",
    "promptHtml": "Какой модификатор доступа делает поле видимым только внутри своего класса?",
    "options": [
      "protected",
      "private",
      "default (без модификатора)",
      "public"
    ],
    "correctIndex": 1
  },
  {
    "id": "q2-1-004",
    "sourceId": "quiz2-1",
    "promptHtml": "Где можно использовать ключевое слово <code>var</code> в Java?",
    "options": [
      "В полях класса и параметрах методов",
      "Только для локальных переменных с инициализацией",
      "Везде, где допустимо объявление переменной",
      "Только в возвращаемых типах методов"
    ],
    "correctIndex": 1
  },
  {
    "id": "q2-1-005",
    "sourceId": "quiz2-1",
    "promptHtml": "Какие поля может содержать интерфейс в Java?",
    "options": [
      "Любые поля, как у обычного класса",
      "Только private static final",
      "Только public static final (константы)",
      "Интерфейсы не могут содержать полей"
    ],
    "correctIndex": 2
  },
  {
    "id": "q2-1-006",
    "sourceId": "quiz2-1",
    "promptHtml": "С какого индекса начинается нумерация элементов массива в Java?",
    "options": [
      "С 1",
      "С -1",
      "С 0",
      "Зависит от типа массива"
    ],
    "correctIndex": 2
  },
  {
    "id": "q2-1-007",
    "sourceId": "quiz2-1",
    "promptHtml": "Что произойдёт при обращении к <code>arr[arr.length]</code>?",
    "options": [
      "ArrayIndexOutOfBoundsException",
      "Вернётся null",
      "Вернётся значение последнего элемента",
      "Ошибка компиляции"
    ],
    "correctIndex": 0
  },
  {
    "id": "q2-1-008",
    "sourceId": "quiz2-1",
    "promptHtml": "Являются ли строки <code>String</code> в Java изменяемыми?",
    "options": [
      "Да, строки можно изменять",
      "Нет, String — неизменяемый (immutable) класс",
      "Только при использовании new String()",
      "Зависит от версии Java"
    ],
    "correctIndex": 1
  },
  {
    "id": "q2-1-009",
    "sourceId": "quiz2-1",
    "promptHtml": "Что вернёт <code>\"Java\".substring(1, 3)</code>?",
    "options": [
      "\"av\"",
      "\"ava\"",
      "\"Ja\"",
      "\"Jav\""
    ],
    "correctIndex": 0
  },
  {
    "id": "q2-2-001",
    "sourceId": "quiz2-2",
    "promptHtml": "Что делает директива <code>exports</code> в <code>module-info.java</code>?",
    "options": [
      "Импортирует пакет из другого модуля",
      "Делает пакет доступным для других модулей",
      "Открывает пакет для рефлексии",
      "Удаляет пакет из модуля"
    ],
    "correctIndex": 1
  },
  {
    "id": "q2-2-002",
    "sourceId": "quiz2-2",
    "promptHtml": "Что делает директива <code>requires</code> в <code>module-info.java</code>?",
    "options": [
      "Указывает зависимость от другого модуля",
      "Экспортирует пакет",
      "Открывает пакет для рефлексии",
      "Объявляет сервис"
    ],
    "correctIndex": 0
  },
  {
    "id": "q2-2-003",
    "sourceId": "quiz2-2",
    "promptHtml": "Какой результат вызова <code>String.join(\"-\", \"A\", \"B\", \"C\")</code>?",
    "options": [
      "\"A-B-C\"",
      "\"-A-B-C-\"",
      "\"ABC-\"",
      "\"A B C\""
    ],
    "correctIndex": 0
  },
  {
    "id": "q2-2-004",
    "sourceId": "quiz2-2",
    "promptHtml": "Что произойдёт при конфликте одинаковых <code>default</code>-методов из двух интерфейсов?",
    "options": [
      "Компилятор выберет метод из первого интерфейса",
      "Класс обязан переопределить конфликтующий метод",
      "Ошибка времени выполнения",
      "Оба метода будут доступны автоматически"
    ],
    "correctIndex": 1
  },
  {
    "id": "q2-2-005",
    "sourceId": "quiz2-2",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">class Demo {\n    static { System.out.print(&quot;A &quot;); }\n    { System.out.print(&quot;B &quot;); }\n    Demo() { System.out.print(&quot;C &quot;); }\n}\nnew Demo();\nnew Demo();</code></pre>",
    "options": [
      "A B C A B C",
      "A B C B C",
      "B C B C A",
      "A A B C B C"
    ],
    "correctIndex": 1
  },
  {
    "id": "q2-2-006",
    "sourceId": "quiz2-2",
    "promptHtml": "Что произойдёт при компиляции?<pre><code class=\"language-java\">var x;\nx = 10;</code></pre>",
    "options": [
      "Код скомпилируется, x будет int",
      "Код скомпилируется, x будет Object",
      "Ошибка выполнения",
      "Ошибка компиляции — var требует инициализации при объявлении"
    ],
    "correctIndex": 3
  },
  {
    "id": "q2-2-007",
    "sourceId": "quiz2-2",
    "promptHtml": "Что произойдёт при выполнении кода?<pre><code class=\"language-java\">int[] arr = {1, 2, 3};\nint[] arr2 = arr;\narr2[0] = 99;\nSystem.out.println(arr[0]);</code></pre>",
    "options": [
      "1 — массивы копируются при присваивании",
      "Ошибка компиляции",
      "99 — arr и arr2 ссылаются на один массив",
      "0 — значение сбрасывается"
    ],
    "correctIndex": 2
  },
  {
    "id": "q2-2-008",
    "sourceId": "quiz2-2",
    "promptHtml": "Что особенного в текстовых блоках (text blocks)?",
    "options": [
      "Они изменяемые, в отличие от обычных строк",
      "Они хранятся вне String Pool",
      "Они поддерживают только ASCII-символы",
      "Они могут содержать переносы строк, кавычки и табуляции без лишнего экранирования"
    ],
    "correctIndex": 3
  },
  {
    "id": "q3-001",
    "sourceId": "quiz3",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">int x = 10;\nif (x &gt; 5) System.out.print(&quot;A&quot;);\nSystem.out.print(&quot;B&quot;);</code></pre>",
    "options": [
      "A",
      "B",
      "AB",
      "Ошибка компиляции"
    ],
    "correctIndex": 2
  },
  {
    "id": "q3-002",
    "sourceId": "quiz3",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">int day = 2;\nswitch (day) {\n    case 1: System.out.print(&quot;Пн&quot;);\n    case 2: System.out.print(&quot;Вт&quot;);\n    case 3: System.out.print(&quot;Ср&quot;); break;\n    default: System.out.print(&quot;?&quot;);\n}</code></pre>",
    "options": [
      "Вт",
      "ПнВт",
      "ПнВтСр",
      "ВтСр"
    ],
    "correctIndex": 3
  },
  {
    "id": "q3-003",
    "sourceId": "quiz3",
    "promptHtml": "Чем цикл <code>do-while</code> отличается от <code>while</code>?",
    "options": [
      "do-while выполняется быстрее",
      "do-while не поддерживает break",
      "do-while проверяет условие перед телом цикла",
      "do-while гарантирует выполнение тела хотя бы один раз"
    ],
    "correctIndex": 3
  },
  {
    "id": "q3-004",
    "sourceId": "quiz3",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">int sum = 0;\nfor (int i = 1; i &lt;= 5; i++) {\n    if (i % 2 == 0) continue;\n    sum += i;\n}\nSystem.out.println(sum);</code></pre>",
    "options": [
      "15",
      "6",
      "9",
      "5"
    ],
    "correctIndex": 2
  },
  {
    "id": "q3-005",
    "sourceId": "quiz3",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">for (int i = 0; i &lt; 5; i++) {\n    if (i == 3) break;\n    System.out.print(i + &quot; &quot;);\n}</code></pre>",
    "options": [
      "0 1 2",
      "0 1 2 3",
      "0 1 2 4",
      "0 1 2 3 4"
    ],
    "correctIndex": 0
  },
  {
    "id": "q3-006",
    "sourceId": "quiz3",
    "promptHtml": "Какое ключевое слово используется для наследования класса в Java?",
    "options": [
      "extends",
      "implements",
      "inherits",
      "super"
    ],
    "correctIndex": 0
  },
  {
    "id": "q3-007",
    "sourceId": "quiz3",
    "promptHtml": "Для чего используется вызов <code>super()</code> в конструкторе подкласса?",
    "options": [
      "Для вызова метода суперкласса",
      "Для обращения к полю суперкласса",
      "Для создания нового объекта суперкласса",
      "Для вызова конструктора суперкласса"
    ],
    "correctIndex": 3
  },
  {
    "id": "q3-008",
    "sourceId": "quiz3",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">class Animal { String speak() { return &quot;...&quot;; } }\nclass Cat extends Animal { @Override String speak() { return &quot;Мяу&quot;; } }\nAnimal a = new Cat();\nSystem.out.println(a.speak());</code></pre>",
    "options": [
      "...",
      "Ошибка компиляции",
      "null",
      "Мяу"
    ],
    "correctIndex": 3
  },
  {
    "id": "q4-001",
    "sourceId": "quiz4",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">class Outer {\n    int x = 10;\n    class Inner {\n        int x = 20;\n        void show() { System.out.println(Outer.this.x + &quot; &quot; + this.x); }\n    }\n}\nOuter outer = new Outer();\nOuter.Inner inner = outer.new Inner();\ninner.show();</code></pre>",
    "options": [
      "20 10",
      "10 20",
      "10 10",
      "Ошибка компиляции"
    ],
    "correctIndex": 1
  },
  {
    "id": "q4-002",
    "sourceId": "quiz4",
    "promptHtml": "Как правильно создать экземпляр нестатического внутреннего класса <code>Inner</code>, если он объявлен внутри класса <code>Outer</code>?",
    "options": [
      "Inner i = new Inner();",
      "Outer.Inner i = new Outer.Inner();",
      "Inner i = Outer.new Inner();",
      "Outer o = new Outer(); Outer.Inner i = o.new Inner();"
    ],
    "correctIndex": 3
  },
  {
    "id": "q4-003",
    "sourceId": "quiz4",
    "promptHtml": "К каким членам внешнего класса имеет доступ статический вложенный класс?",
    "options": [
      "Ко всем членам, включая private нестатические",
      "Только к статическим членам внешнего класса",
      "Только к public членам внешнего класса",
      "Ни к каким — он полностью изолирован"
    ],
    "correctIndex": 1
  },
  {
    "id": "q4-004",
    "sourceId": "quiz4",
    "promptHtml": "Какую основную проблему решают обобщения (generics) в Java?",
    "options": [
      "Ускоряют выполнение программы за счёт специализации кода",
      "Позволяют использовать примитивные типы в коллекциях",
      "Обеспечивают типобезопасность на этапе компиляции и уменьшают необходимость явного приведения типов",
      "Автоматически сериализуют объекты в JSON"
    ],
    "correctIndex": 2
  },
  {
    "id": "q4-005",
    "sourceId": "quiz4",
    "promptHtml": "Что происходит с обобщёнными типами в процессе стирания типов (type erasure)?",
    "options": [
      "Параметры типов сохраняются в байткоде для проверки во время выполнения",
      "Типы заменяются на void",
      "Компилятор создаёт отдельный класс для каждого параметра типа",
      "Параметры типов существуют при компиляции и заменяются на Object или на указанную границу в байткоде"
    ],
    "correctIndex": 3
  },
  {
    "id": "q4-006",
    "sourceId": "quiz4",
    "promptHtml": "Какое исключение является проверяемым (checked)?",
    "options": [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "IOException",
      "StackOverflowError"
    ],
    "correctIndex": 2
  },
  {
    "id": "q4-007",
    "sourceId": "quiz4",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">try {\n    System.out.print(&quot;A&quot;);\n    int x = 1 / 0;\n    System.out.print(&quot;B&quot;);\n} catch (ArithmeticException e) {\n    System.out.print(&quot;C&quot;);\n} finally {\n    System.out.print(&quot;D&quot;);\n}</code></pre>",
    "options": [
      "ABCD",
      "ACD",
      "AD",
      "ACD, но D не выполнится если catch бросит исключение"
    ],
    "correctIndex": 1
  },
  {
    "id": "q4-008",
    "sourceId": "quiz4",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">class MyRes implements AutoCloseable {\n    public void close() { System.out.print(&quot;closed &quot;); }\n}\ntry (MyRes r = new MyRes()) {\n    System.out.print(&quot;used &quot;);\n}</code></pre>",
    "options": [
      "used closed",
      "closed used",
      "used",
      "Ошибка компиляции"
    ],
    "correctIndex": 0
  },
  {
    "id": "q5-001",
    "sourceId": "quiz5",
    "promptHtml": "Какое утверждение верно об интерфейсе <code>Map</code> в иерархии Java Collections Framework?",
    "options": [
      "Map наследует интерфейс Collection",
      "Map наследует интерфейс Iterable",
      "Map является подтипом интерфейса Set",
      "Map не наследует Collection — это отдельная ветвь иерархии"
    ],
    "correctIndex": 3
  },
  {
    "id": "q5-002",
    "sourceId": "quiz5",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">List&lt;String&gt; list = new ArrayList&lt;&gt;();\nlist.add(&quot;A&quot;);\nlist.add(&quot;B&quot;);\nlist.add(&quot;A&quot;);\nSystem.out.println(list.size() + &quot; &quot; + list.get(2));</code></pre>",
    "options": [
      "2 B",
      "3 A",
      "2 A",
      "Ошибка: дубликат не добавится"
    ],
    "correctIndex": 1
  },
  {
    "id": "q5-003",
    "sourceId": "quiz5",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">Set&lt;String&gt; set = new HashSet&lt;&gt;();\nset.add(&quot;Java&quot;);\nset.add(&quot;Python&quot;);\nset.add(&quot;Java&quot;);\nSystem.out.println(set.size());</code></pre>",
    "options": [
      "3",
      "1",
      "Ошибка: дубликат вызовет исключение",
      "2"
    ],
    "correctIndex": 3
  },
  {
    "id": "q5-004",
    "sourceId": "quiz5",
    "promptHtml": "Какая реализация <code>Set</code> сохраняет порядок вставки элементов?",
    "options": [
      "HashSet",
      "LinkedHashSet",
      "TreeSet",
      "EnumSet"
    ],
    "correctIndex": 1
  },
  {
    "id": "q5-005",
    "sourceId": "quiz5",
    "promptHtml": "Какая реализация <code>Map</code> хранит записи отсортированными по ключам?",
    "options": [
      "HashMap",
      "LinkedHashMap",
      "Hashtable",
      "TreeMap"
    ],
    "correctIndex": 3
  },
  {
    "id": "q5-006",
    "sourceId": "quiz5",
    "promptHtml": "В чём ключевое отличие <code>Comparable</code> от <code>Comparator</code>?",
    "options": [
      "Comparable задаёт естественный порядок внутри класса, а Comparator — внешний объект для альтернативной сортировки",
      "Comparable может сравнивать любые типы, а Comparator — только один",
      "Comparable находится в java.util, а Comparator — в java.lang",
      "Comparable работает только с числами, а Comparator — со строками"
    ],
    "correctIndex": 0
  },
  {
    "id": "q5-007",
    "sourceId": "quiz5",
    "promptHtml": "Что выведет следующий код?<pre><code class=\"language-java\">Queue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;();\npq.add(30);\npq.add(10);\npq.add(20);\nSystem.out.println(pq.poll() + &quot; &quot; + pq.poll());</code></pre>",
    "options": [
      "30 10",
      "30 20",
      "10 20",
      "20 10"
    ],
    "correctIndex": 2
  },
  {
    "id": "q5-008",
    "sourceId": "quiz5",
    "promptHtml": "Какие два базовых абстрактных класса представляют байтовые потоки в Java?",
    "options": [
      "FileReader и FileWriter",
      "BufferedReader и BufferedWriter",
      "DataInputStream и DataOutputStream",
      "InputStream и OutputStream"
    ],
    "correctIndex": 3
  },
  {
    "id": "q6-001",
    "sourceId": "quiz6",
    "promptHtml": "Какую основную проблему решают системы сборки Maven и Gradle?",
    "options": [
      "Запуск IDE и подключение к серверу",
      "Написание исходного кода на Java",
      "Автоматизация компиляции, управления зависимостями, тестирования и упаковки",
      "Создание графического интерфейса пользователя"
    ],
    "correctIndex": 2
  },
  {
    "id": "q6-002",
    "sourceId": "quiz6",
    "promptHtml": "В стандартной структуре Maven-проекта где размещаются исходные Java-файлы приложения?",
    "options": [
      "src/test/java",
      "src/main/java",
      "src/main/resources",
      "target/classes"
    ],
    "correctIndex": 1
  },
  {
    "id": "q6-003",
    "sourceId": "quiz6",
    "promptHtml": "Что такое GAV-координаты в Maven?",
    "options": [
      "groupId, artifactId, version — уникальный идентификатор проекта или зависимости",
      "goal, action, value — параметры запуска плагинов",
      "gradle, ant, version — совместимость систем сборки",
      "git, archive, validate — команды контроля версий"
    ],
    "correctIndex": 0
  },
  {
    "id": "q6-004",
    "sourceId": "quiz6",
    "promptHtml": "Что произойдёт при выполнении команды <code>mvn package</code>?",
    "options": [
      "Выполнится только упаковка в JAR без компиляции и тестирования",
      "Последовательно выполнятся фазы validate, compile, test, package",
      "Выполнится только package и deploy",
      "Будет загружен JAR-файл в Maven Central"
    ],
    "correctIndex": 1
  },
  {
    "id": "q6-005",
    "sourceId": "quiz6",
    "promptHtml": "Что делает Gradle Wrapper (<code>gradlew</code>/<code>gradlew.bat</code>)?",
    "options": [
      "Шифрует исходный код перед сборкой",
      "Упаковывает проект в Docker-контейнер",
      "Позволяет запускать сборку без предварительной установки Gradle — скачивает нужную версию",
      "Создаёт оболочку вокруг Maven для совместимости"
    ],
    "correctIndex": 2
  },
  {
    "id": "q6-006",
    "sourceId": "quiz6",
    "promptHtml": "Какова правильная последовательность компонентов в архитектуре JDBC?",
    "options": [
      "Java-приложение → База данных → JDBC Driver → DriverManager",
      "JDBC Driver → DriverManager → Java-приложение → База данных",
      "Java-приложение → JDBC API → DriverManager → JDBC Driver → База данных",
      "База данных → JDBC API → Java-приложение → DriverManager"
    ],
    "correctIndex": 2
  },
  {
    "id": "q6-007",
    "sourceId": "quiz6",
    "promptHtml": "Чем <code>PreparedStatement</code> отличается от <code>Statement</code>?",
    "options": [
      "PreparedStatement работает только с SELECT-запросами",
      "Statement быстрее, так как не требует компиляции",
      "PreparedStatement не поддерживает параметры",
      "PreparedStatement использует параметризованные запросы и помогает предотвращать SQL-инъекции"
    ],
    "correctIndex": 3
  },
  {
    "id": "q6-008",
    "sourceId": "quiz6",
    "promptHtml": "Какой метод <code>ResultSet</code> используется для перехода к следующей строке результата?",
    "options": [
      "next()",
      "moveNext()",
      "hasNext()",
      "advance()"
    ],
    "correctIndex": 0
  },
  {
    "id": "q7-001",
    "sourceId": "quiz7",
    "promptHtml": "Что такое Inversion of Control (IoC)?",
    "options": [
      "Метод оптимизации SQL-запросов в Hibernate",
      "Шаблон для реализации многопоточности",
      "Принцип, при котором управление жизненным циклом объектов передаётся внешнему фреймворку или контейнеру",
      "Способ инверсии порядка выполнения методов в стеке вызовов"
    ],
    "correctIndex": 2
  },
  {
    "id": "q7-002",
    "sourceId": "quiz7",
    "promptHtml": "Что такое Dependency Injection (DI)?",
    "options": [
      "Способ внедрения SQL-запросов в код приложения",
      "Техника реализации IoC: объект получает зависимости извне, а не создаёт их сам",
      "Метод тестирования, при котором в код впрыскиваются проверки",
      "Алгоритм автоматического разрешения циклических зависимостей в SQL"
    ],
    "correctIndex": 1
  },
  {
    "id": "q7-003",
    "sourceId": "quiz7",
    "promptHtml": "Какой способ DI в Spring рекомендуется как предпочтительный?",
    "options": [
      "Конструкторное внедрение (Constructor Injection)",
      "Внедрение через поле с @Autowired",
      "Внедрение через setter с @Autowired",
      "Внедрение через статический инициализатор"
    ],
    "correctIndex": 0
  },
  {
    "id": "q7-004",
    "sourceId": "quiz7",
    "promptHtml": "Что такое Spring Boot?",
    "options": [
      "Самостоятельный фреймворк, не связанный со Spring",
      "Утилита миграции с Spring 2 на Spring 3",
      "Виртуальная машина, оптимизированная для Spring-приложений",
      "Расширение Spring Framework, упрощающее разработку: автоконфигурация, встроенные серверы, starter-модули"
    ],
    "correctIndex": 3
  },
  {
    "id": "q7-005",
    "sourceId": "quiz7",
    "promptHtml": "Какая аннотация запускает Spring Boot приложение и активирует автоконфигурацию?",
    "options": [
      "@SpringBootApplication",
      "@EnableSpring",
      "@RunSpringBoot",
      "@SpringStarter"
    ],
    "correctIndex": 0
  },
  {
    "id": "q7-006",
    "sourceId": "quiz7",
    "promptHtml": "Какой scope используется для Spring Bean по умолчанию?",
    "options": [
      "prototype",
      "request",
      "session",
      "singleton"
    ],
    "correctIndex": 3
  },
  {
    "id": "q7-007",
    "sourceId": "quiz7",
    "promptHtml": "Чем <code>@RestController</code> отличается от <code>@Controller</code>?",
    "options": [
      "@RestController работает только с XML, @Controller — с JSON",
      "@RestController предназначен для статических ресурсов",
      "@Controller не поддерживает GET-запросы",
      "@RestController = @Controller + @ResponseBody на всех методах; ответ сериализуется в тело HTTP-ответа"
    ],
    "correctIndex": 3
  },
  {
    "id": "q7-008",
    "sourceId": "quiz7",
    "promptHtml": "Какая аннотация извлекает значение переменной из части пути URL?",
    "options": [
      "@PathVariable",
      "@RequestParam",
      "@RequestBody",
      "@PathParam"
    ],
    "correctIndex": 0
  },
  {
    "id": "q7-009",
    "sourceId": "quiz7",
    "promptHtml": "Что такое Spring Security?",
    "options": [
      "Утилита для шифрования файлов на диске",
      "Фреймворк для реализации аутентификации, авторизации и защиты от распространённых веб-уязвимостей",
      "Расширение JDBC для шифрования SQL-запросов",
      "Антивирус для проверки артефактов сборки"
    ],
    "correctIndex": 1
  }
];

window.MODERN_TECH_EXAM_QUESTION_BANK = MODERN_TECH_EXAM_QUESTION_BANK;
