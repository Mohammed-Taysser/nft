class Random {
  static randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  static randomItemsFromArray<T>(array: T[], count: number = 1): T[] {
    const items: T[] = [];

    for (let i = 0; i < count; i++) {
      items.push(array[this.randomInteger(0, array.length - 1)]);
    }

    return items;
  }

  static randomItemFromArray<T>(array: T[]): T {
    return array[this.randomInteger(0, array.length - 1)];
  }
}

export default Random;
