const data = [
  {
    author: "Павел Федотов",
    name: "Сватовство майора",
    year: "1852",
    imageNum: "0",
    category: "realism",
  },
  {
    author: "Эдгар Дега",
    name: "Голубые танцовщицы",
    year: "1897",
    imageNum: "1",
    category: "impressionism",
  },
  {
    author: "Веронезе",
    name: "Пир в доме Левия",
    year: "1563",
    imageNum: "2",
    category: "religion",
  },
  {
    author: "Илья Репин",
    name: "Иван Грозный и сын его Иван",
    year: "1885",
    imageNum: "3",
    category: "realism",
  },
  {
    author: "Константин Маковский",
    name: "Портрет графини Софьи",
    year: "1890",
    imageNum: "4",
    category: "portrait",
  },
  {
    author: "Василий Перов",
    name: "Приезд гувернантки в купеческий дом",
    year: "1866",
    imageNum: "5",
    category: "realism",
  },
  {
    author: "Микеланджело",
    name: "Сотворение Адама",
    year: "1511",
    imageNum: "6",
    category: "renaissance",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Прогулка в Булонском лесу",
    year: "1873",
    imageNum: "7",
    category: "impressionism",
  },
  {
    author: "Ян Вермеер",
    name: "Хозяйка и служанка",
    year: "1667",
    imageNum: "8",
    category: "painting",
  },
  {
    author: "Василий Поленов",
    name: "Московский дворик",
    year: "1877",
    imageNum: "9",
    category: "landscape",
  },
  {
    author: "Фёдор Васильев",
    name: "Мокрый луг",
    year: "1872",
    imageNum: "10",
    category: "landscape",
  },
  {
    author: "Илья Репин",
    name: "Проводы новобранца",
    year: "1879",
    imageNum: "11",
    category: "painting",
  },
  {
    author: "Веронезе",
    name: "Марс и Венера",
    year: "1560",
    imageNum: "12",
    category: "renaissance",
  },
  {
    author: "Виктор Васнецов",
    name: "Аленушка",
    year: "1881",
    imageNum: "13",
    category: "painting",
  },
  {
    author: "Клод Лоррен",
    name: "Отплытие святой Урсулы",
    year: "1614",
    imageNum: "14",
    category: "marine",
  },
  {
    author: "Илья Репин",
    name: "Вечорници",
    year: "1881",
    imageNum: "15",
    category: "painting",
  },
  {
    author: "Жан Фрагонар",
    name: "Качели",
    year: "1767",
    imageNum: "16",
    category: "renaissance",
  },
  {
    author: "Архип Куинджи",
    name: "Берёзовая роща",
    year: "1879",
    imageNum: "17",
    category: "landscape",
  },
  {
    author: "Пабло Пикассо",
    name: "Герника",
    year: "1937",
    imageNum: "18",
    category: "avant-garde",
  },
  {
    author: "Поль Гоген",
    name: "Откуда мы пришли? Кто мы? Куда мы идём?",
    year: "1898",
    imageNum: "19",
    category: "painting",
  },
  {
    author: "Бартоломео Мурильо",
    name: "Мадонна с четками",
    year: "1655",
    imageNum: "20",
    category: "renaissance",
  },
  {
    author: "Питер Брейгель",
    name: "Фламандские пословицы",
    year: "1559",
    imageNum: "21",
    category: "renaissance",
  },
  {
    author: "Ян ван Эйк",
    name: "Портрет четы Арнольфини",
    year: "1434",
    imageNum: "22",
    category: "renaissance",
  },
  {
    author: "Питер Брейгель",
    name: "Избиение младенцев",
    year: "1567",
    imageNum: "23",
    category: "renaissance",
  },
  {
    author: "Константин Маковский",
    name: "Дети, бегущие от грозы",
    year: "1872",
    imageNum: "24",
    category: "painting",
  },
  {
    author: "Рембрандт",
    name: "Даная",
    year: "1647",
    imageNum: "25",
    category: "renaissance",
  },
  {
    author: "Рафаель",
    name: "Мадонна в кресле",
    year: "1514",
    imageNum: "26",
    category: "portrait",
  },
  {
    author: "Василий Суриков",
    name: "Взятие снежного городка",
    year: "1891",
    imageNum: "27",
    category: "realism",
  },
  {
    author: "Иван Шишкин",
    name: "Ручей в берёзовом лесу",
    year: "1883",
    imageNum: "28",
    category: "landscape",
  },
  {
    author: "Василий Суриков",
    name: "Покорение Сибири Ермаком Тимофеевичем",
    year: "1895",
    imageNum: "29",
    category: "realism",
  },
  {
    author: "Владимир Боровиковский",
    name: "Портрет Лопухиной",
    year: "1797",
    imageNum: "30",
    category: "portrait",
  },
  {
    author: "Рене Магритт",
    name: "Сын человеческий",
    year: "1964",
    imageNum: "31",
    category: "surrealism",
  },
  {
    author: "Веласкес",
    name: "Венера с зеркалом",
    year: "1651",
    imageNum: "32",
    category: "painting",
  },
  {
    author: "Иван Богданов",
    name: "За расчётом",
    year: "1890",
    imageNum: "33",
    category: "realism",
  },
  {
    author: "Рембрандт",
    name: "Христос и грешница",
    year: "1644",
    imageNum: "34",
    category: "renaissance",
  },
  {
    author: "Джон Уильям Уотерхаус",
    name: "Волшебница Шалот",
    year: "1888",
    imageNum: "35",
    category: "portrait",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Большие купальщицы",
    year: "1887",
    imageNum: "36",
    category: "painting",
  },
  {
    author: "Бартоломео Мурильо",
    name: "Мальчик с собакой",
    year: "1650",
    imageNum: "37",
    category: "portrait",
  },
  {
    author: "Василий Перов",
    name: "Тройка",
    year: "1866",
    imageNum: "38",
    category: "realism",
  },
  {
    author: "Николай Богданов-Бельский",
    name: "Устный счёт",
    year: "1895",
    imageNum: "39",
    category: "realism",
  },
  {
    author: "Виктор Васнецов",
    name: "Три царевны подземного царства",
    year: "1884",
    imageNum: "40",
    category: "romanticism",
  },
  {
    author: "Анри Матисс",
    name: "Танец",
    year: "1910",
    imageNum: "41",
    category: "avant-garde",
  },
  {
    author: "Эдвард Мунк",
    name: "Мадонна",
    year: "1894",
    imageNum: "42",
    category: "expressionism",
  },
  {
    author: "Марк Шагал",
    name: "Прогулка",
    year: "1918",
    imageNum: "43",
    category: "expressionism",
  },
  {
    author: "Василий Перов",
    name: "Сельский крестный ход на Пасхе",
    year: "1861",
    imageNum: "44",
    category: "realism",
  },
  {
    author: "Иероним Босх",
    name: "Страшный суд",
    year: "1504",
    imageNum: "45",
    category: "renaissance",
  },
  {
    author: "Карл Лемох",
    name: "Варька",
    year: "1893",
    imageNum: "46",
    category: "portrait",
  },
  {
    author: "Жан Фрагонар",
    name: "Поцелуй украдкой",
    year: "1788",
    imageNum: "47",
    category: "romanticism",
  },
  {
    author: "Франсуа Буше",
    name: "Венера, утешающая Амура",
    year: "1751",
    imageNum: "48",
    category: "renaissance",
  },
  {
    author: "Иван Шишкин",
    name: "Корабельная роща",
    year: "1898",
    imageNum: "49",
    category: "landscape",
  },
  {
    author: "Густав Климт",
    name: "Золотая Адель",
    year: "1907",
    imageNum: "50",
    category: "portrait",
  },
  {
    author: "Виктор Васнецов",
    name: "Богатыри",
    year: "1898",
    imageNum: "51",
    category: "painting",
  },
  {
    author: "Вильгельм фон Каульбах",
    name: "Разрушение Иерусалима",
    year: "1846",
    imageNum: "52",
    category: "renaissance",
  },
  {
    author: "Веронезе",
    name: "Брак в Кане Галилейской",
    year: "1562",
    imageNum: "53",
    category: "renaissance",
  },
  {
    author: "Андрей Рублев",
    name: "Троица",
    year: "1411",
    imageNum: "54",
    category: "religion",
  },
  {
    author: "Василий Суриков",
    name: "Утро стрелецкой казни",
    year: "1881",
    imageNum: "55",
    category: "realism",
  },
  {
    author: "Тициан",
    name: "Вакханалия",
    year: "1526",
    imageNum: "56",
    category: "renaissance",
  },
  {
    author: "Веласкес",
    name: "Вилла Медичи в Риме. Полдень",
    year: "1630",
    imageNum: "57",
    category: "painting",
  },
  {
    author: "Эдуард Мане",
    name: "Ланч на траве",
    year: "1863",
    imageNum: "58",
    category: "impressionism",
  },
  {
    author: "Сальвадор Дали",
    name: "Постоянство памяти",
    year: "1931",
    imageNum: "59",
    category: "avant-garde",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Две девушки",
    year: "1892",
    imageNum: "60",
    category: "romanticism",
  },
  {
    author: "Александр Маковский",
    name: "Надоела",
    year: "1897",
    imageNum: "61",
    category: "realism",
  },
  {
    author: "Веласкес",
    name: "Менины",
    year: "1656",
    imageNum: "62",
    category: "renaissance",
  },
  {
    author: "Антонис ван Дейк",
    name: "Самсон и Далила",
    year: "1628",
    imageNum: "63",
    category: "renaissance",
  },
  {
    author: "Пабло Пикассо",
    name: "Девочка на шаре",
    year: "1905",
    imageNum: "64",
    category: "expressionism",
  },
  {
    author: "Джованни Беллини",
    name: "Пир богов",
    year: "1514",
    imageNum: "65",
    category: "renaissance",
  },
  {
    author: "Леонардо да Винчи",
    name: "Дама с горностаем",
    year: "1490",
    imageNum: "66",
    category: "portrait",
  },
  {
    author: "Веласкес",
    name: "Бахус",
    year: "1628",
    imageNum: "67",
    category: "renaissance",
  },
  {
    author: "Бартоломео Мурильо",
    name: "Непорочное зачатие",
    year: "1678",
    imageNum: "68",
    category: "religion",
  },
  {
    author: "Теодор Жерико",
    name: 'Плот "Медузы"',
    year: "1819",
    imageNum: "69",
    category: "romanticism",
  },
  {
    author: "Иван Шишкин",
    name: "Утро в сосновом лесу",
    year: "1889",
    imageNum: "70",
    category: "landscape",
  },
  {
    author: "Жан Этьен Лиотар",
    name: "Шоколадница",
    year: "1745",
    imageNum: "71",
    category: "romanticism",
  },
  {
    author: "Рембрандт",
    name: "Автопортрет с Саскией",
    year: "1635",
    imageNum: "72",
    category: "portrait",
  },
  {
    author: "Илья Репин",
    name: "Крестный ход",
    year: "1883",
    imageNum: "73",
    category: "realism",
  },
  {
    author: "Алексей Венециановн",
    name: "Спящий пастушок",
    year: "1826",
    imageNum: "74",
    category: "portrait",
  },
  {
    author: "Иван Богданов",
    name: "Новичок",
    year: "1893",
    imageNum: "75",
    category: "realism",
  },
  {
    author: "Анри де Тулуз-Лотрек",
    name: "Угол Мулен де ла Галет",
    year: "1892",
    imageNum: "76",
    category: "impressionism",
  },
  {
    author: "Тициан",
    name: "Кающаяся Марина Магдалина",
    year: "1565",
    imageNum: "77",
    category: "religion",
  },
  {
    author: "Веласкес",
    name: "Инфанта Маргарита",
    year: "1654",
    imageNum: "78",
    category: "portrait",
  },
  {
    author: "Тициан",
    name: "Динарий Кесаря",
    year: "1516",
    imageNum: "79",
    category: "religion",
  },
  {
    author: "Карл Брюллов",
    name: "Всадница",
    year: "1832",
    imageNum: "80",
    category: "romanticism",
  },
  {
    author: "Василий Верещагин",
    name: "Апофеоз войны",
    year: "1817",
    imageNum: "81",
    category: "surrealism",
  },
  {
    author: "Леонардо да Винчи",
    name: "Благовещение",
    year: "1475",
    imageNum: "82",
    category: "renaissance",
  },
  {
    author: "Алексей Саврасов",
    name: "Грачи прилетели",
    year: "1871",
    imageNum: "83",
    category: "landscape",
  },
  {
    author: "Тициан",
    name: "Любовь земная и Любовь небесная",
    year: "1516",
    imageNum: "84",
    category: "renaissance",
  },
  {
    author: "Жан Батист Грёз",
    name: "Деревенская помолвка",
    year: "1761",
    imageNum: "85",
    category: "romanticism",
  },
  {
    author: "Пабло Пикассо",
    name: "Авиньонские девицы",
    year: "1907",
    imageNum: "86",
    category: "avant-garde",
  },
  {
    author: "Илья Репин",
    name: "Бурлаки на Волге",
    year: "1873",
    imageNum: "87",
    category: "realism",
  },
  {
    author: "Михаил Нестеров",
    name: "Видение отроку Варфоломею",
    year: "1890",
    imageNum: "88",
    category: "painting",
  },
  {
    author: "Рафаэль",
    name: "Мадонна Бельведерская",
    year: "1506",
    imageNum: "89",
    category: "renaissance",
  },
  {
    author: "Василий тропинин",
    name: "Девушка с горшком роз",
    year: "1850",
    imageNum: "90",
    category: "portrait",
  },
  {
    author: "Караваджо",
    name: "Лютнист",
    year: "1596",
    imageNum: "91",
    category: "portrait",
  },
  {
    author: "Василий Перов",
    name: "Охотники на привале",
    year: "1871",
    imageNum: "92",
    category: "painting",
  },
  {
    author: "Леонардо да Винчи",
    name: "Тайная вечеря",
    year: "1498",
    imageNum: "93",
    category: "religion",
  },
  {
    author: "Жан Батист Грёз",
    name: "Избалованное дитя",
    year: "1765",
    imageNum: "94",
    category: "painting",
  },
  {
    author: "Адольф Вильям Бугро",
    name: "Волна",
    year: "1896",
    imageNum: "95",
    category: "marine",
  },
  {
    author: "Кузьма Петров-Водкин",
    name: "Купание красного коня",
    year: "1912",
    imageNum: "96",
    category: "expressionism",
  },
  {
    author: "Густав Климт",
    name: "Поцелуй",
    year: "1908",
    imageNum: "97",
    category: "expressionism",
  },
  {
    author: "Иван Шишкин",
    name: "Рожь",
    year: "1878",
    imageNum: "98",
    category: "landscape",
  },
  {
    author: "Жан-Леон Жером",
    name: "Бой гладиаторов",
    year: "1872",
    imageNum: "99",
    category: "painting",
  },
  {
    author: "Василий Суриков",
    name: "Боярыня Морозова",
    year: "1887",
    imageNum: "100",
    category: "painting",
  },
  {
    author: "Исаак Левитан",
    name: "Над вечным покоем",
    year: "1894",
    imageNum: "101",
    category: "landscape",
  },
  {
    author: "Гейнсборо",
    name: "Дама в голубом",
    year: "1780",
    imageNum: "102",
    category: "portrait",
  },
  {
    author: "Алексей Венецианов",
    name: "На пашне. Весна",
    year: "1820",
    imageNum: "103",
    category: "realism",
  },
  {
    author: "Тициан",
    name: "Саломея",
    year: "1515",
    imageNum: "104",
    category: "religion",
  },
  {
    author: "Василий Кандинский",
    name: "Композиция VIII",
    year: "1923",
    imageNum: "105",
    category: "avant-garde",
  },
  {
    author: "Василий Поленов",
    name: "В парке",
    year: "1874",
    imageNum: "106",
    category: "landscape",
  },
  {
    author: "Луи Лагрене",
    name: "Марс и Венера",
    year: "1770",
    imageNum: "107",
    category: "renaissance",
  },
  {
    author: "Сальвадор Дали",
    name: "Сон, вызванный полётом пчелы вокруг граната, за секунду до пробуждения",
    year: "1944",
    imageNum: "108",
    category: "surrealism",
  },
  {
    author: "Ян Вермеер",
    name: "Девушка с жемчужной серёжкой",
    year: "1665",
    imageNum: "109",
    category: "portrait",
  },
  {
    author: "Анри Руссо",
    name: "Спящая цыганка",
    year: "1897",
    imageNum: "110",
    category: "surrealism",
  },
  {
    author: "Василий Поленов",
    name: "Переправа через реку",
    year: "1872",
    imageNum: "111",
    category: "realism",
  },
  {
    author: "Эдвард Мунк",
    name: "Крик",
    year: "1893",
    imageNum: "112",
    category: "expressionism",
  },
  {
    author: "Карл Брюллов",
    name: "Последний день Помпеи",
    year: "1833",
    imageNum: "113",
    category: "realism",
  },
  {
    author: "Илья Репин",
    name: "Летний пейзаж",
    year: "1879",
    imageNum: "114",
    category: "impressionism",
  },
  {
    author: "Ян Вермеер",
    name: "Молочница",
    year: "1660",
    imageNum: "115",
    category: "impressionism",
  },
  {
    author: "Иван Айвазовский",
    name: "Девятый вал",
    year: "1850",
    imageNum: "116",
    category: "marine",
  },
  {
    author: "Винсент ван Гог",
    name: "Подсолнухи",
    year: "1888",
    imageNum: "117",
    category: "expressionism",
  },
  {
    author: "Валентин Серов",
    name: "Девочка с персиками",
    year: "1887",
    imageNum: "118",
    category: "impressionism",
  },
  {
    author: "Караваджо",
    name: "Обращение Савла",
    year: "1601",
    imageNum: "119",
    category: "painting",
  },
  {
    author: "Альбрехт Дюрер",
    name: "Праздник венков из роз",
    year: "1506",
    imageNum: "120",
    category: "religion",
  },
  {
    author: "Эль Греко",
    name: "Изгнание торгующих из храма",
    year: "1600",
    imageNum: "121",
    category: "religion",
  },
  {
    author: "Илья Репин",
    name: "Приготовление к экзамену",
    year: "1864",
    imageNum: "122",
    category: "painting",
  },
  {
    author: "Исаак Левитан",
    name: "Март",
    year: "1895",
    imageNum: "123",
    category: "landscape",
  },
  {
    author: "Адольф Вильям Бугро",
    name: "Девушка и Амур",
    year: "1880",
    imageNum: "124",
    category: "renaissance",
  },
  {
    author: "Леонардо да Винчи",
    name: "Мадонна Литта",
    year: "1491",
    imageNum: "125",
    category: "renaissance",
  },
  {
    author: "Казимир Малевич",
    name: "Черный квадрат",
    year: "1915",
    imageNum: "126",
    category: "avant-garde",
  },
  {
    author: "Эль Греко",
    name: "Апостолы Петр и Павел",
    year: "1592",
    imageNum: "127",
    category: "renaissance",
  },
  {
    author: "Виктор Васнецов",
    name: "Витязь на распутье",
    year: "1878",
    imageNum: "128",
    category: "romanticism",
  },
  {
    author: "Константин Маковский",
    name: "Боярский свадебный пир",
    year: "1883",
    imageNum: "129",
    category: "romanticism",
  },
  {
    author: "Эжен Делакруа",
    name: "Свобода, ведущая народ",
    year: "1830",
    imageNum: "130",
    category: "romanticism",
  },
  {
    author: "Василий Поленов",
    name: "Бабушкин сад",
    year: "1878",
    imageNum: "131",
    category: "impressionism",
  },
  {
    author: "Анри Матисс",
    name: "Семейный портрет",
    year: "1911",
    imageNum: "132",
    category: "expressionism",
  },
  {
    author: "Константин Маковский",
    name: "Гадание",
    year: "1890",
    imageNum: "133",
    category: "romanticism",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Мост в Шату",
    year: "1875",
    imageNum: "134",
    category: "marine",
  },
  {
    author: "Сандро Боттичелли",
    name: "Весна",
    year: "1482",
    imageNum: "135",
    category: "renaissance",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Зонтики",
    year: "1886",
    imageNum: "136",
    category: "impressionism",
  },
  {
    author: "Гюстав Курбе",
    name: "Мастерская художника",
    year: "1855",
    imageNum: "137",
    category: "renaissance",
  },
  {
    author: "Василий Поленов",
    name: "Деревня Окулова гора",
    year: "1860",
    imageNum: "138",
    category: "landscape",
  },
  {
    author: "Константин Маковский",
    name: "Перемещение ковра Мухаммеда из Мекки в Каир",
    year: "1875",
    imageNum: "139",
    category: "realism",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Бал в Мулен де ла Галетт",
    year: "1876",
    imageNum: "140",
    category: "impressionism",
  },
  {
    author: "Иван Крамской",
    name: "Неизвестная",
    year: "1883",
    imageNum: "141",
    category: "portrait",
  },
  {
    author: "Веласкес",
    name: "Кузница вулкана",
    year: "1630",
    imageNum: "142",
    category: "renaissance",
  },
  {
    author: "Илья Репин",
    name: "Запорожцы",
    year: "1891",
    imageNum: "143",
    category: "realism",
  },
  {
    author: "Рафаэль",
    name: "Дама с единорогом",
    year: "1506",
    imageNum: "144",
    category: "portrait",
  },
  {
    author: "Александр Иванов",
    name: "Явление Христа народу",
    year: "1857",
    imageNum: "145",
    category: "renaissance",
  },
  {
    author: "Эдуард Мане",
    name: "Женщина с кувшином",
    year: "1858",
    imageNum: "146",
    category: "portrait",
  },
  {
    author: "Тициан",
    name: "Конный портрет Карла V",
    year: "1548",
    imageNum: "147",
    category: "portrait",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Завтрак гребцов",
    year: "1881",
    imageNum: "148",
    category: "expressionism",
  },
  {
    author: "Карл Брюллов",
    name: "Итальянский полдень",
    year: "1827",
    imageNum: "149",
    category: "portrait",
  },
  {
    author: "Виктор Васнецов",
    name: "Царь Иван Васильевич Грозный",
    year: "1896",
    imageNum: "150",
    category: "portrait",
  },
  {
    author: "Питер Брейгель",
    name: "Охотники на снегу",
    year: "1565",
    imageNum: "151",
    category: "painting",
  },
  {
    author: "Виктор Васнецов",
    name: "Ковер-самолёт",
    year: "1880",
    imageNum: "152",
    category: "romanticism",
  },
  {
    author: "Марк Шагал",
    name: "Я и деревня",
    year: "1911",
    imageNum: "153",
    category: "surrealism",
  },
  {
    author: "Леонардо да Винчи",
    name: "Мона Лиза",
    year: "1505",
    imageNum: "154",
    category: "portrait",
  },
  {
    author: "Франческо Баккьякка",
    name: "Мадонна с младенцем",
    year: "1520",
    imageNum: "155",
    category: "renaissance",
  },
  {
    author: "Жак-Луи Давид",
    name: "Клятва Горациев",
    year: "1784",
    imageNum: "156",
    category: "renaissance",
  },
  {
    author: "Альбрехт Дюрер",
    name: "Адам и Ева",
    year: "1507",
    imageNum: "157",
    category: "religion",
  },
  {
    author: "Бартоломео Мурильо",
    name: "Явление и дар Богородицы",
    year: "1655",
    imageNum: "158",
    category: "religion",
  },
  {
    author: "Василий Перов",
    name: "Птицелов",
    year: "1870",
    imageNum: "159",
    category: "painting",
  },
  {
    author: "Караваджо",
    name: "Отдых на пути в Египет",
    year: "1596",
    imageNum: "160",
    category: "renaissance",
  },
  {
    author: "Франциско Гоя",
    name: "Расстрел повстанцев",
    year: "1808",
    imageNum: "161",
    category: "avant-garde",
  },
  {
    author: "Рафаэль",
    name: "Триумф Галатеи",
    year: "1512",
    imageNum: "162",
    category: "renaissance",
  },
  {
    author: "Михаил Врубель",
    name: "Демон сидящий",
    year: "1890",
    imageNum: "163",
    category: "expressionism",
  },
  {
    author: "Винсент ван Гог",
    name: "Ирисы",
    year: "1889",
    imageNum: "164",
    category: "expressionism",
  },
  {
    author: "Поль Деларош",
    name: "Казнь Джейн Грей",
    year: "1833",
    imageNum: "165",
    category: "romanticism",
  },
  {
    author: "Джон Констебл",
    name: "Вид на собор в Солсбери из епископского сада",
    year: "1823",
    imageNum: "166",
    category: "impressionism",
  },
  {
    author: "Винсент ван Гог",
    name: "Звёздная ночь",
    year: "1889",
    imageNum: "167",
    category: "expressionism",
  },
  {
    author: "Франсуа Буше",
    name: "Четыре сезона - Весна",
    year: "1755",
    imageNum: "168",
    category: "romanticism",
  },
  {
    author: "Рафаэль",
    name: "Мадонна с розой",
    year: "1518",
    imageNum: "169",
    category: "religion",
  },
  {
    author: "Василий Тропинин",
    name: "Кружевница",
    year: "1823",
    imageNum: "170",
    category: "portrait",
  },
  {
    author: "Рембрандт",
    name: "Пир Вальтасара",
    year: "1635",
    imageNum: "171",
    category: "portrait",
  },
  {
    author: "Василий Суриков",
    name: "Переход Суворова через Альпы",
    year: "1899",
    imageNum: "172",
    category: "realism",
  },
  {
    author: "Исаак Левитан",
    name: "Золотая осень",
    year: "1895",
    imageNum: "173",
    category: "landscape",
  },
  {
    author: "Архип Куинджи",
    name: "На острове Валааме",
    year: "1873",
    imageNum: "174",
    category: "landscape",
  },
  {
    author: "Веласкес",
    name: "Сдача Бреды",
    year: "1635",
    imageNum: "175",
    category: "realism",
  },
  {
    author: "Илья Репин",
    name: "Не ждали",
    year: "1888",
    imageNum: "176",
    category: "realism",
  },
  {
    author: "Франсуа Буше",
    name: "Купание Дианы",
    year: "1742",
    imageNum: "177",
    category: "renaissance",
  },
  {
    author: "Альбрехт Дюрер",
    name: "Праздник четок",
    year: "1506",
    imageNum: "178",
    category: "religion",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Портрет Жанны Самари",
    year: "1877",
    imageNum: "179",
    category: "portrait",
  },
  {
    author: "Илья Репин",
    name: "Садко",
    year: "1876",
    imageNum: "180",
    category: "surrealism",
  },
  {
    author: "Архип Куинджи",
    name: "Лунная ночь на Днепре",
    year: "1880",
    imageNum: "181",
    category: "marine",
  },
  {
    author: "Веласкес",
    name: "Поклонение волхвов",
    year: "1619",
    imageNum: "182",
    category: "renaissance",
  },
  {
    author: "Николай Богданов-Бельский",
    name: "У дверей школы",
    year: "1897",
    imageNum: "183",
    category: "painting",
  },
  {
    author: "Иероним Босх",
    name: "Сад земных наслаждений",
    year: "1510",
    imageNum: "184",
    category: "surrealism",
  },
  {
    author: "Корреджо",
    name: "Даная",
    year: "1530",
    imageNum: "185",
    category: "renaissance",
  },
  {
    author: "Питер Пауль Рубенс",
    name: "Похищение дочерей Левкиппа",
    year: "1618",
    imageNum: "186",
    category: "renaissance",
  },
  {
    author: "Жан Энгр",
    name: "Большая одалиска",
    year: "1814",
    imageNum: "187",
    category: "portrait",
  },
  {
    author: "Рафаэль",
    name: "Сикстинская Мадонна",
    year: "1520",
    imageNum: "188",
    category: "religion",
  },
  {
    author: "Рембрандт",
    name: "Похищение Европы",
    year: "1632",
    imageNum: "189",
    category: "renaissance",
  },
  {
    author: "Питер Пауль Рубенс",
    name: "Похищение Орфии Бореем",
    year: "1615",
    imageNum: "190",
    category: "renaissance",
  },
  {
    author: "Архип Куинджи",
    name: "Украинская ночь",
    year: "1876",
    imageNum: "191",
    category: "landscape",
  },
  {
    author: "Эдгар Дега",
    name: "Танцовщицы у станка",
    year: "1877",
    imageNum: "192",
    category: "impressionism",
  },
  {
    author: "Алексей Венецианов",
    name: "На жатве. Лето",
    year: "1827",
    imageNum: "193",
    category: "romanticism",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Две сестры",
    year: "1881",
    imageNum: "194",
    category: "impressionism",
  },
  {
    author: "Рембрандт",
    name: "Ночной дозор",
    year: "1642",
    imageNum: "195",
    category: "realism",
  },
  {
    author: "Эдуар Мане",
    name: "Бар в «Фоли-Бержер»",
    year: "1882",
    imageNum: "196",
    category: "expressionism",
  },
  {
    author: "Никола Пуссен",
    name: "Пейзаж с Полифемом",
    year: "1649",
    imageNum: "197",
    category: "landscape",
  },
  {
    author: "Питер Брейгель",
    name: "Притча о слепых",
    year: "1568",
    imageNum: "198",
    category: "renaissance",
  },
  {
    author: "Виктор Васнецов",
    name: "Иван-царевич на Сером Волке",
    year: "1888",
    imageNum: "199",
    category: "painting",
  },
  {
    author: "Сандро Боттичелли",
    name: "Рождение Венеры",
    year: "1486",
    imageNum: "200",
    category: "renaissance",
  },
  {
    author: "Леонардо да Винчи",
    name: "Мадонна в скалах",
    year: "1486",
    imageNum: "201",
    category: "religion",
  },
  {
    author: "Аксели Галлен-Каллела",
    name: "Любовники",
    year: "1916",
    imageNum: "202",
    category: "avant-garde",
  },
  {
    author: "Винсент Ван Гог",
    name: "Автопортрет с перевязанным ухом",
    year: "1889",
    imageNum: "203",
    category: "expressionism",
  },
  {
    author: "Клод Моне",
    name: "Впечатление. Восходящее солнце",
    year: "1882",
    imageNum: "204",
    category: "marine",
  },
  {
    author: "Рембрандт",
    name: "Возвращение блудного сына",
    year: "1662",
    imageNum: "205",
    category: "painting",
  },
  {
    author: "Караваджо",
    name: "Больной вакх",
    year: "1593",
    imageNum: "206",
    category: "portrait",
  },
  {
    author: "Иван Айвазовский",
    name: "Лунная дорожка",
    year: "1886",
    imageNum: "207",
    category: "marine",
  },
  {
    author: "Винсент Ван Гог",
    name: "Пшеничное поле с кипарисами",
    year: "1889",
    imageNum: "208",
    category: "expressionism",
  },
  {
    author: "Аксели Галлен-Каллела",
    name: "Мальчик и ворона",
    year: "1884",
    imageNum: "209",
    category: "painting",
  },
  {
    author: "Ян Вермеер",
    name: "Астроном",
    year: "1668",
    imageNum: "210",
    category: "renaissance",
  },
  {
    author: "Питер Пауль Рубенс",
    name: "Союз Земли и Воды",
    year: "1618",
    imageNum: "211",
    category: "renaissance",
  },
  {
    author: "Клод Моне",
    name: "Стог сена в Живерни",
    year: "1886",
    imageNum: "212",
    category: "landscape",
  },
  {
    author: "Жан Фрагонар",
    name: "Задвижка",
    year: "1777",
    imageNum: "213",
    category: "renaissance",
  },
  {
    author: "Эдуард Мане",
    name: "Бар в Фоли-Бержер",
    year: "1882",
    imageNum: "214",
    category: "avant-garde",
  },
  {
    author: "Винсент Ван Гог",
    name: "Ночное кафе в Арле",
    year: "1888",
    imageNum: "215",
    category: "expressionism",
  },
  {
    author: "Клод Моне",
    name: "Пруд с кувшинками",
    year: "1899",
    imageNum: "216",
    category: "expressionism",
  },
  {
    author: "Иван Айвазовский",
    name: "Буря",
    year: "1868",
    imageNum: "217",
    category: "marine",
  },
  {
    author: "Ян Вермеер",
    name: "Кружевница",
    year: "1671",
    imageNum: "218",
    category: "portrait",
  },
  {
    author: "Карл Брюллов",
    name: "Автопортрет",
    year: "1848",
    imageNum: "219",
    category: "portrait",
  },
  {
    author: "Питер Брейгель",
    name: "Вавилонская башня",
    year: "1563",
    imageNum: "220",
    category: "surrealism",
  },
  {
    author: "Поль Гоген",
    name: "Кафе в Арле",
    year: "1888",
    imageNum: "221",
    category: "avant-garde",
  },
  {
    author: "Иван Шишкин",
    name: "Сосновый бор",
    year: "1895",
    imageNum: "222",
    category: "landscape",
  },
  {
    author: "Клод Моне",
    name: "Завтрак на траве",
    year: "1865",
    imageNum: "223",
    category: "impressionism",
  },
  {
    author: "Рафаэль",
    name: "Святой Георгий и дракон",
    year: "1506",
    imageNum: "224",
    category: "renaissance",
  },
  {
    author: "Пабло Пикассо",
    name: "Любительница абсента",
    year: "1901",
    imageNum: "225",
    category: "surrealism",
  },
  {
    author: "Эдгар Дега",
    name: "Перед репетицией",
    year: "1880",
    imageNum: "226",
    category: "expressionism",
  },
  {
    author: "Николай Рерих",
    name: "Помни!",
    year: "1924",
    imageNum: "227",
    category: "surrealism",
  },
  {
    author: "Илья Репин",
    name: "Стрекоза",
    year: "1884",
    imageNum: "228",
    category: "romanticism",
  },
  {
    author: "Клод Моне",
    name: "Мост Ватерлоо, туман",
    year: "1903",
    imageNum: "229",
    category: "impressionism",
  },
  {
    author: "Исаак Левитан",
    name: "Весна – большая вода",
    year: "1897",
    imageNum: "230",
    category: "landscape",
  },
  {
    author: "Аксели Галлен-Каллела",
    name: "Первый урок",
    year: "1889",
    imageNum: "231",
    category: "realism",
  },
  {
    author: "Иван Айвазовский",
    name: "Буря на море",
    year: "1873",
    imageNum: "232",
    category: "marine",
  },
  {
    author: "Эдгар Дега",
    name: "Балетный класс",
    year: "1874",
    imageNum: "233",
    category: "expressionism",
  },
  {
    author: "Николай Рерих",
    name: "Горная обитель",
    year: "1933",
    imageNum: "234",
    category: "impressionism",
  },
  {
    author: "Леонардо да Винчи",
    name: "Святая Анна с Мадонной",
    year: "1510",
    imageNum: "235",
    category: "religion",
  },
  {
    author: "Эль Греко",
    name: "Мальчик, зажигающий свечу",
    year: "1572",
    imageNum: "236",
    category: "painting",
  },
  {
    author: "Пабло Пикассо",
    name: "Дружба",
    year: "1908",
    imageNum: "237",
    category: "avant-garde",
  },
  {
    author: "Аксели Галлен-Каллела",
    name: "Девушка на ветру",
    year: "1893",
    imageNum: "238",
    category: "romanticism",
  },
  {
    author: "Иван Айвазовский",
    name: "Волна",
    year: "1889",
    imageNum: "239",
    category: "marine",
  },
];
export default data;
