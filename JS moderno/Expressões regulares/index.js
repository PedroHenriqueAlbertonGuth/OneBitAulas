function phoneNumber(numberString) {
  // Clean the input string by removing spaces and letters
  const fixedString = numberString.replace(/[\sa-zA-Z]/g, "");
  // Extract country code, DDD, and number using lookarounds
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/);
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/);
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}

console.log(new phoneNumber("+55 (11) 91234-5678")); // PhoneNumber { countryCode: '55' }
