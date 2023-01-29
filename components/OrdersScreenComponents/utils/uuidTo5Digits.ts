export function uuidTo5Digits(uuid: string): string {
  var s = "00000" + uuid.replace(/\D/g, "").substring(0, 5);
  return s.substring(s.length - 5);
}
