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
}

// new Lesson("Dasi anuny", lsarani hamary, "Dasaxos", "Skizb", "Avart"),

export default [
  [ // Понедельник
    new Lesson("Գրաֆ․ ինտեր․ ծրագր․ Լաբ․", 5401, "Մանւկյան Վ․ Սաֆարյան Ա․", "09:30", "10:50"),
    new Lesson("Կիրառ․ Հավելվ․ ստեղծ․ միջոց Լաբ․2", 57001, "Թումանյան Լ․", "09:30", "10:50"),
    new Lesson("Գրաֆ․ ինտեր․ ծրագր․ Դաս", 5401, "Մանւկյան Վ․", "11:00", "12:20"),
    new Lesson("Ֆիզկուլտուրա", null, "Ինյան", "12:50", "14:10"),
    new Lesson("Տեղեկատվ․ անվտանգություն․ Լաբ․", 5401, "Մինասյան Լ․", "14:20", "15:40"),
    new Lesson("Դինամիկ վեբ կայքերի նախագծում դաս", 51009, "Պողոսյան Մ․", "14:20", "15:40")
  ],

  [ // Вторник
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
  ],

  [ // Среда
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
  ],

  [ // Четверг
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
  ],

  [ // Пятница
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
    new Lesson("", 0, "", "", ""),
  ],
];