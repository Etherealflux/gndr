const identifyGender = (gender = "", pronouns = [ ], blockchain = true) => {
  if (blockchain) {
    return "hodl"
  }
  return {
    gender, pronouns
  }
}

module.exports = identifyGender
