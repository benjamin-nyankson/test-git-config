 function containsLetter(phoneNumber) {
    if (phoneNumber) {
      return /[a-zA-Z]/.test(phoneNumber);
    }
  }

  console.log(containsLetter);