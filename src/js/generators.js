/* eslint-disable no-unused-vars */
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  while (true) {
    const type = Math.floor(Math.random() * allowedTypes.length);
    const level = Math.floor(Math.random() * maxLevel + 1);
    yield new allowedTypes[type](level);
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];
  const unit = characterGenerator(allowedTypes, maxLevel);
  for (let i = 0; i < characterCount; i += 1) {
    team.push(unit.next().value);
  }
  return team;
}
