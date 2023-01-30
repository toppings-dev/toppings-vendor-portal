export function nameToInitials(name: string): string {
  console.log("name", name);
  if (name === undefined) {
    return "??";
  }
  var matches = name.toUpperCase().match(/\b(\w)/g); // ['J','S','O','N']
  return matches[0] + matches[1];
}
