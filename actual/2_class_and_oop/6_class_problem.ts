// 아이브는 한국 아이돌이고
// 아이브라는 이름의 걸그룹이다.
// 아이브는 여자 아이돌이다.
const iveMembers = [
  {
    name: "안유진",
    year: 2003,
  },
  {
    name: "가을",
    year: 2002,
  },
  {
    name: "레이",
    year: 2004,
  },
  {
    name: "장원영",
    year: 2004,
  },
  {
    name: "리즈",
    year: 2004,
  },
  {
    name: "이서",
    year: 2007,
  },
];

// BTS는 한국 아이돌이고
// 방탄소년단이라는 이름의 보이그룹이다.
// BTS는 남자 아이돌이다.
const btsMembers = [
  {
    name: "진",
    year: 1992,
  },
  {
    name: "슈가",
    year: 1993,
  },
  {
    name: "제이홉",
    year: 1994,
  },
  {
    name: "RM",
    year: 1994,
  },
  {
    name: "지민",
    year: 1995,
  },
  {
    name: "뷔",
    year: 1995,
  },
  {
    name: "정국",
    year: 1997,
  },
];

// const MALE = "Male";
// const FEMALE = "Female";
enum Gender {
  Male = "Male",
  Female = "Female",
}

abstract class Idol {
  name: string;
  year: number;

  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }

  abstract perform(): string;
}

class MaleIdol extends Idol {
  perform() {
    return `${this.name}이 노래를 합니다.`;
  }
}

class FemaleIdol extends Idol {
  perform() {
    return `${this.name}이 춤을 춥니다.`;
  }
}

class IdolGroup {
  name: string;
  members: Idol[];

  constructor(name: string, members: Idol[]) {
    this.name = name;
    this.members = members;
  }
}

class Country {
  name: string;
  idolGroups: IdolGroup[];

  constructor(name: string, idolGroups: IdolGroup[]) {
    this.name = name;
    this.idolGroups = idolGroups;
  }
}

function parseIdolGroup(
  groupList: { name: string; year: number }[],
  gender: Gender.Male | Gender.Female,
  group: IdolGroup
) {
  groupList.forEach((member) => {
    const idol =
      gender === Gender.Male
        ? new MaleIdol(member.name, member.year)
        : new FemaleIdol(member.name, member.year);

    group.members.push(idol);
  });
}

function parseCountry(country: Country, group: IdolGroup) {
  country.idolGroups.push(group);
}

function testIdolGroup(group: IdolGroup) {
  console.log(group.name);

  for (let i = 0; i < group.members.length; i++) {
    console.log(group.members[i].perform());
  }
}

function testCountry(country: Country) {
  console.log(country.name);

  for (let i = 0; i < country.idolGroups.length; i++) {
    console.log(country.idolGroups[i].name);
  }
}

function main() {
  const ive = new IdolGroup("Ive", []);
  const bts = new IdolGroup("BTS", []);
  const korea = new Country("Korea", []);

  parseIdolGroup(iveMembers, Gender.Female, ive);
  parseIdolGroup(btsMembers, Gender.Male, bts);

  parseCountry(korea, ive);
  parseCountry(korea, bts);

  testIdolGroup(ive);
  console.log("----------------------");
  testIdolGroup(bts);
  console.log("----------------------");
  testCountry(korea);
}

main();
