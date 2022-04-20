export function setParable(numberToPow: number): number {
  return numberToPow ** 2;
}

type TRegions = "Americas" | "Europe" | "Asia" | "Africa" | "Oceania";

export interface IUser {
  id?: number;
  name: string;
  age: number;
  isLoggedIn: boolean;
  message: string;
  region: TRegions;
}

export function setUser(user: IUser): IUser {
  return {
    id: Number((Math.random() * 1000).toFixed(0)),
    ...user,
  };
}

export function structuredPrinter(arrayOfUsers: Array<IUser>) {
  for (let i = 0; i < arrayOfUsers.length; i++) {
    if (arrayOfUsers[i].age < 20) {
      return [arrayOfUsers[i]];
    }
  }
}

export function functionalPrinter(arrayOfUsers: IUser[]) {
  return arrayOfUsers.filter((user) => user.age > 19);
}
