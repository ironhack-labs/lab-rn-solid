export class Animal {
  getInfo(): string {
    return 'This is an animal'
  }
}

export class Dog extends Animal {
  private name: string

  constructor(name: string) {
    super()
    this.name = name
  }

  getInfo(): string {
    return `This is a dog named ${this.name}`
  }
}

export class Fish extends Animal {
  private type: string

  constructor(type: string) {
    super()
    this.type = type
  }

  getInfo(): string {
    return `This is a fish of type ${this.type}`
  }
}

// Example Usage:
export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`)
}
