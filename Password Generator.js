// This is my first independent project :)
const password = {
  password: [],
  alphabetList : [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ],
  symbolList: [
    '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', 
    '_', '=', '+', ':', ',', '<', '.', '>', '/', '?'
  ],
  passwordGenerator(length, complexity) {
    // Creates an array of random characters
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * this.alphabetList.length);
      this.password += this.alphabetList[char] + ''
    };
    //Checks if password generated (true) correctly before adding complexity
    if (this.password) {
    //Turns password into an array so that it can be manipulated
      this.password = this.password.split('')
    //Picks out a random index within the password array and picks out random Numbers or Symbols from the list then adds them there
      for (let i = 0; i < complexity; i++) {
        const randomIndex = Math.floor(Math.random() * this.password.length);
        const randomSymbol = this.symbolList[Math.floor(Math.random() * this.symbolList.length)];
        const randomNumber = Math.floor(Math.random() * 10);
        this.password[randomIndex] = randomNumber;
        this.password[randomIndex] = randomSymbol;
      };
    console.log(`Password length specified: ${length}\nPassword complexity specified: ${complexity}\nPassword: ${this.password.join('')}`);
    };
    if (this.password.length < 12) {
      console.log(`Suggestion: Make your password longer! It contains less than 12 characters`)
    } else {
      console.log('Your password is good!')
    }
  },
};

//First argument determines the password length, second argumentthe password complexity
password.passwordGenerator(13, 5);

