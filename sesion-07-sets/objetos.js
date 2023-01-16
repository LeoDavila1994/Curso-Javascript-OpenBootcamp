const me = {
  my_name: "Leonardo",
  lastname: "Dávila",
  age: 28,
  heigth: 173,
  isDeveloper: true
};

const my_age = me.age;

const social = [me,
  {
    my_name: "Alex",
    lastname: "Rizo",
    age: 48,
    heigth: 172,
    isDeveloper: false
  },
  {
    my_name: "William",
    lastname: "Cervantes",
    age: 29,
    heigth: 170,
    isDeveloper: false
  }];

const new_list = social.sort((a, b) => b.age - a.age);
