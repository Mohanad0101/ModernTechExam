// ModernTechExam verified local question bank.
// The public quiz Markdown files contain questions/options but not reliable answer keys, so this bank stores explicit verified keys.
const MODERN_TECH_EXAM_QUESTION_BANK = [
  {
    "id": "q1-001",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что означает девиз Java?",
    "options": [
      "Compile once — debug everywhere",
      "Code once — deploy anywhere",
      "Write once — run anywhere",
      "Build once — test anywhere"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The slogan describes Java bytecode portability across JVM implementations.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-002",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Во что компилятор <code>javac</code> превращает исходный код Java?",
    "options": [
      "В машинный код (.exe)",
      "В байт-код (.class)",
      "В ассемблерный код (.asm)",
      "В JavaScript (.js)"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Oracle javac documentation states that javac compiles Java definitions into bytecode class files.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-003",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какое учебное соотношение между JDK, JRE и JVM верно?",
    "options": [
      "JVM содержит JRE, JRE содержит JDK",
      "JRE содержит JDK, JDK содержит JVM",
      "JDK и JRE — это одно и то же",
      "JDK содержит средства разработки и среду выполнения; JVM является частью среды выполнения"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The wording was corrected to avoid the outdated strict nested model used in older teaching material.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-004",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой загрузчик классов загружает класс <code>String</code>?",
    "options": [
      "Bootstrap ClassLoader",
      "Platform ClassLoader",
      "Application ClassLoader",
      "Custom ClassLoader"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Core Java platform classes such as java.lang.String are loaded by the bootstrap loader.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-005",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что вернёт <code>String.class.getClassLoader()</code>?",
    "options": [
      "PlatformClassLoader",
      "AppClassLoader",
      "null",
      "BootstrapClassLoader"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Bootstrap-loaded classes report null from Class.getClassLoader().",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-006",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что выведет <code>System.out.println(10 / 3)</code>?",
    "options": [
      "3.33",
      "3",
      "3.0",
      "4"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Integer division between int operands discards the fractional part.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-007",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что произойдёт при выполнении: <code>byte b = 127; b++;</code>?",
    "options": [
      "Ошибка компиляции",
      "b станет 128",
      "Будет выброшено исключение",
      "b станет -128 (переполнение)"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "byte wraps modulo 256 when incremented with the postfix operator.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-008",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Почему <code>0.1 + 0.2 == 0.3</code> возвращает <code>false</code>?",
    "options": [
      "Оператор == не работает с типом double",
      "Нужно использовать float вместо double",
      "Из-за погрешности формата IEEE 754",
      "Java округляет дробные числа при сложении"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "double values use binary IEEE 754 floating-point representation, so decimal fractions may not be exact.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-009",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Каков размер типа <code>int</code> в Java?",
    "options": [
      "32 бита",
      "16 бит",
      "64 бита",
      "Зависит от платформы"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "JLS defines int as a 32-bit signed two's-complement integer.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-010",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что выведет код: <code>int x = 5; System.out.println(x++);</code>?",
    "options": [
      "6",
      "5",
      "4",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Post-increment returns the old value, then increments the variable.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-011",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что выведет код: <code>String s1 = new String(\"Hello\"); String s2 = new String(\"Hello\"); System.out.println(s1 == s2);</code>",
    "options": [
      "true",
      "Ошибка компиляции",
      "false",
      "Hello"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The == operator compares object references; these are two distinct objects.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-012",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой метод является точкой входа в Java-программу?",
    "options": [
      "public static void main(String[] args)",
      "public void main(String[] args)",
      "static void main()",
      "public static int main(String[] args)"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The Java launcher looks for a public static void main(String[] args) entry point.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-013",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что хранит переменная ссылочного типа?",
    "options": [
      "Само значение объекта",
      "Копию объекта",
      "Имя класса объекта",
      "Ссылку на объект в памяти"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "A reference variable stores a reference value, not the object body itself.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-014",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой результат выражения <code>5 &amp; 3</code> (побитовое И)?",
    "options": [
      "7",
      "1",
      "6",
      "8"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "0101 & 0011 = 0001.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-015",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Где обычно хранятся объекты в JVM?",
    "options": [
      "В стеке (Stack)",
      "В Metaspace",
      "В куче (Heap)",
      "В PC Register"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Objects are allocated on the heap in the JVM runtime data areas.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-016",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Сколько примитивных типов данных в Java?",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The primitive types are byte, short, int, long, char, float, double, and boolean.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-017",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что выведет код: <code>String s1 = \"Java\"; String s2 = \"Java\"; System.out.println(s1 == s2);</code>",
    "options": [
      "true",
      "false",
      "Ошибка компиляции",
      "Java"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Identical string literals are interned and refer to the same String object.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-018",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой инструмент JDK используется для интерактивных экспериментов с кодом?",
    "options": [
      "javac",
      "javadoc",
      "jshell",
      "jdb"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "jshell is the Java REPL tool.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-019",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какое значение по умолчанию у переменной типа <code>boolean</code> как поля класса?",
    "options": [
      "true",
      "null",
      "0",
      "false"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "JLS default value for boolean fields is false.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-020",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что означает запись <code>0b101010</code> в Java?",
    "options": [
      "Восьмеричное число",
      "Двоичное число",
      "Шестнадцатеричное число",
      "Десятичное число"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The 0b prefix denotes a binary integer literal.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-021",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой суффикс используется, чтобы явно записать целочисленный литерал типа <code>long</code>?",
    "options": [
      "L",
      "D",
      "F",
      "Суффикс не нужен"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The L or l suffix makes an integer literal a long literal; uppercase L is recommended.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-022",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что делает Garbage Collector в JVM?",
    "options": [
      "Компилирует байт-код в машинный код",
      "Загружает классы в память",
      "Автоматически освобождает память от неиспользуемых объектов",
      "Проверяет байт-код на безопасность"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Garbage collection reclaims memory from objects that are no longer reachable.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-023",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что выведет код: <code>int x = 5; System.out.println(++x);</code>?",
    "options": [
      "5",
      "6",
      "4",
      "Ошибка компиляции"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Pre-increment increments first, then returns the new value.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-024",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой результат выражения <code>5 | 3</code> (побитовое ИЛИ)?",
    "options": [
      "1",
      "3",
      "5",
      "7"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "0101 | 0011 = 0111.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-025",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что такое JIT-компилятор?",
    "options": [
      "Компилирует часто выполняемый байт-код в машинный код для ускорения",
      "Компилирует .java файлы в .class файлы",
      "Загружает классы из JAR-файлов",
      "Проверяет код на ошибки перед запуском"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "JIT compilation converts hot bytecode to native machine code at run time.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-026",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой результат выражения <code>5 ^ 3</code> (побитовое XOR)?",
    "options": [
      "1",
      "7",
      "6",
      "8"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "0101 ^ 0011 = 0110.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-027",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какое правило действует для имени файла и публичного класса в Java?",
    "options": [
      "Имя файла может быть любым",
      "Имя файла должно совпадать с именем публичного класса",
      "Имя класса должно начинаться с маленькой буквы",
      "В файле может быть только один класс"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "A public top-level class is declared in a source file with the same name.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-028",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что произойдёт при выполнении <code>false &amp;&amp; someMethod()</code>?",
    "options": [
      "someMethod() выполнится и вернёт false",
      "Ошибка компиляции",
      "someMethod() выполнится и результат будет false",
      "someMethod() не будет вызван (короткое замыкание)"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The conditional-and operator evaluates the right operand only if the left operand is true.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-029",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой размер типа <code>char</code> в Java?",
    "options": [
      "16 бит (UTF-16 code unit)",
      "8 бит (ASCII)",
      "32 бита",
      "Зависит от символа"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "JLS defines char values as 16-bit unsigned integers representing UTF-16 code units.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-030",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что такое Metaspace в JVM?",
    "options": [
      "Область для хранения объектов",
      "Стек вызовов методов",
      "Область для хранения метаданных классов",
      "Кэш для JIT-компилятора"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Metaspace stores class metadata in modern HotSpot JVMs.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-031",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой результат выражения <code>5 &lt;&lt; 2</code> (сдвиг влево)?",
    "options": [
      "10",
      "20",
      "2",
      "25"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Left shifting 5 by 2 bits multiplies it by 4, giving 20.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-032",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой класс рекомендуется использовать для точных десятичных финансовых расчётов?",
    "options": [
      "BigDecimal",
      "double",
      "float",
      "long"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "BigDecimal provides arbitrary-precision decimal arithmetic.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-033",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Из каких трёх основных подсистем обычно описывают JVM в учебной схеме?",
    "options": [
      "Compiler, Linker, Debugger",
      "JRE, JDK, JAR",
      "Stack, Heap, Metaspace",
      "Class Loader, Runtime Data Areas, Execution Engine"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "A standard JVM teaching model includes class loading, runtime data areas, and execution engine.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-034",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какое ключевое слово используется для объявления нативного метода (JNI)?",
    "options": [
      "extern",
      "foreign",
      "native",
      "jni"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Java uses the native keyword for methods implemented in platform-specific code.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-035",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какая команда JShell показывает все объявленные переменные?",
    "options": [
      "/list",
      "/vars",
      "/show",
      "/variables"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The /vars command lists declared variables in JShell.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-036",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что выведет код: <code>int a = 10; int b = 3; System.out.println(10.0 / 3);</code>",
    "options": [
      "3.3333333333333335",
      "3",
      "3.0",
      "3.33"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "10.0 is double, so the expression uses double division.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-037",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой принцип обычно используют загрузчики классов при поиске класса?",
    "options": [
      "Каждый загрузчик ищет класс самостоятельно",
      "Класс всегда загружает Application ClassLoader",
      "Загрузчики ищут класс снизу вверх и сверху вниз одновременно",
      "Parent-first delegation (делегирование родительскому загрузчику)"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The standard class loader delegation model delegates loading requests to the parent first.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-038",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Чему равно значение <code>Integer.MAX_VALUE + 1</code>?",
    "options": [
      "2147483648",
      "0",
      "-2147483648 (Integer.MIN_VALUE)",
      "Будет выброшено исключение"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "int arithmetic overflows modulo 2^32 without throwing an exception.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-039",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что делает подчёркивание в числовом литерале <code>1_000_000</code>?",
    "options": [
      "Превращает число в строку",
      "Улучшает читаемость, не влияя на значение",
      "Разделяет число на части для вычисления",
      "Это синтаксическая ошибка"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Underscores in numeric literals improve readability and do not affect value.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-040",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой метод нужно использовать для сравнения содержимого двух строк?",
    "options": [
      ".equals()",
      "==",
      ".compare()",
      ".match()"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "String.equals compares content; == compares references.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-041",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Для чего используется ключевое слово <code>package</code> в Java?",
    "options": [
      "Для импорта внешних библиотек",
      "Для группировки связанных классов по логическим пакетам",
      "Для создания JAR-архива",
      "Для указания версии Java"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The package declaration groups related classes and defines their namespace.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-042",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Чем отличается <code>System.out.println()</code> от <code>System.out.print()</code>?",
    "options": [
      "println выводит числа, print — строки",
      "print добавляет перенос строки, println — нет",
      "Ничем не отличаются",
      "println добавляет перенос строки после вывода, print — нет"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "println terminates the current line after printing; print does not.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-043",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Зачем метод <code>main</code> объявлен как <code>static</code>?",
    "options": [
      "Чтобы JVM могла вызвать его без создания объекта класса",
      "Чтобы метод работал быстрее",
      "Чтобы метод был доступен из других классов",
      "Это необязательно, просто соглашение"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The static modifier lets the launcher call main without constructing an object.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-044",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что содержит параметр <code>String[] args</code> в методе <code>main</code>?",
    "options": [
      "Имена всех переменных программы",
      "Список импортированных пакетов",
      "Аргументы, переданные из командной строки",
      "Пути к файлам .class"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "args holds command-line arguments passed to the program.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-045",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какие три этапа проходит класс при загрузке в JVM?",
    "options": [
      "Compilation, Optimization, Execution",
      "Loading, Linking, Initialization",
      "Reading, Parsing, Running",
      "Verification, Preparation, Resolution"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The class life cycle includes loading, linking, and initialization; verification/preparation/resolution are parts of linking.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-046",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что происходит на этапе Verification при загрузке класса?",
    "options": [
      "Выделяется память для статических переменных",
      "Выполняются статические блоки инициализации",
      "Символические ссылки заменяются на прямые",
      "JVM проверяет корректность и безопасность байт-кода"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Verification checks that bytecode satisfies structural and safety constraints.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-047",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что хранится в стеке (Stack) потока?",
    "options": [
      "Локальные переменные, параметры методов, адреса возврата",
      "Все объекты программы",
      "Метаданные загруженных классов",
      "Скомпилированный машинный код"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Each thread stack contains frames with local variables, operand stack, and return information.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-048",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Чем отличается <code>System.load()</code> от <code>System.loadLibrary()</code>?",
    "options": [
      "load() загружает Java-классы, loadLibrary() — нативные библиотеки",
      "Ничем, это синонимы",
      "load() принимает полный путь к файлу, loadLibrary() ищет библиотеку по имени",
      "loadLibrary() работает только на Windows"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "System.load uses an absolute filename, while loadLibrary maps a library name through the native library path.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-049",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Что такое JAR-файл?",
    "options": [
      "Исходный код Java в текстовом формате",
      "ZIP-архив, содержащий скомпилированные .class файлы и ресурсы",
      "Конфигурационный файл JVM",
      "Лог-файл компилятора javac"
    ],
    "correctIndex": 1,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "A JAR is an archive format used to package Java classes and resources.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-050",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Для переменной <code>int x</code>, чему эквивалентна запись <code>x += 3</code>?",
    "options": [
      "x = x + 3",
      "x = 3",
      "x = x * 3",
      "x + 3"
    ],
    "correctIndex": 0,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "For int x and int literal 3, compound addition gives the same result as x = x + 3.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-051",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Какой результат выражения <code>10 &gt;= 10</code>?",
    "options": [
      "false",
      "Ошибка компиляции",
      "true",
      "10"
    ],
    "correctIndex": 2,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "The relational expression is true because 10 is equal to 10.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  },
  {
    "id": "q1-052",
    "sourceId": "quiz1",
    "sourceTitle": "Verified local bank from Test 1: Introduction to Java",
    "promptHtml": "Кто создал язык Java и в каком году язык был впервые официально выпущен?",
    "options": [
      "Линус Торвальдс, 1991",
      "Бьярне Страуструп, 1985",
      "Гвидо ван Россум, 1991",
      "Джеймс Гослинг, 1995"
    ],
    "correctIndex": 3,
    "scientificStatus": "verified",
    "reviewPhase": "Phase 2: scientific/content validation",
    "rationale": "Java was created by James Gosling at Sun Microsystems and publicly released in 1995.",
    "sourceRefs": [
      "quiz1.md",
      "Oracle javac",
      "JLS §4",
      "JLS §15",
      "Oracle BigDecimal"
    ]
  }
];

const MODERN_TECH_EXAM_QUESTION_BANK_METADATA = {
  "bankName": "ModernTechExam verified Java basics bank",
  "sourceBasis": "Curated from available course quiz1.md questions with corrected wording where needed for scientific precision.",
  "questionCount": 52,
  "requiredExamQuestions": 40,
  "scientificValidation": "Each included item has an explicit answer key and rationale; publication audit requires all items to be verified.",
  "referenceUrls": [
    "https://raw.githubusercontent.com/AliEbraheem-fun/Modern-Programming-Technologies/refs/heads/main/quiz1.md",
    "https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javac.html",
    "https://docs.oracle.com/javase/specs/jls/se8/html/jls-4.html",
    "https://docs.oracle.com/javase/specs/jls/se8/html/jls-15.html",
    "https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html"
  ]
};

if (typeof window !== 'undefined') {
  window.MODERN_TECH_EXAM_QUESTION_BANK = MODERN_TECH_EXAM_QUESTION_BANK;
  window.MODERN_TECH_EXAM_QUESTION_BANK_METADATA = MODERN_TECH_EXAM_QUESTION_BANK_METADATA;
}
if (typeof module !== 'undefined') {
  module.exports = { MODERN_TECH_EXAM_QUESTION_BANK, MODERN_TECH_EXAM_QUESTION_BANK_METADATA };
}
