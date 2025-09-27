import { statuses } from '../components/Lesson/Lesson';

class Lesson {
  constructor(title, room, teacher, start, end) {
    this.title = title;
    this.room = room;
    this.teacher = teacher;
    this.start = start;
    this.end = end;
    this.status = statuses.DEFAULT;
  }

  getData() {
    return this;
  }
}

// new Lesson("Dasi anuny", lsarani hamary, "Dasaxos", "Skizb", "Avart"),

export default [
  [ // Понедельник
    new Lesson("Շինարարական աշխատանքների գնահատում և մշտադիտարկում", null, "Գալոյան Հ.", "15:40", "18:30"),
    new Lesson("BIM-ը շինարարական արտադրության կառավարիչների համար", null, "Սիրունյան Դ.", "18:40", "20:00"),
  ],

  [ // Вторник
    new Lesson("Շինարարական նախագծերի կառավարում", null, "Հայրապետյան Ս.", "17:50", "20:40"),
    
  ],

  [ // Среда
   
  ],

  [ // Четверг
    
  ],

  [ // Пятница
    new Lesson("BIM-ը շինարարական արտադրության կառավարիչների համար", null, "Սիրունյան Դ.", "17:50", "20:40"),

  ],

  [ // shabat
    new Lesson("Շինարարական նախագծերի կառավարում", null, "Հայրապետյան Ս.", "12:40", "17:00"),

  ]
];