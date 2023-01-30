export function foodOptionsToString(foodOptions: any): string {
  var string = foodOptions
    .map(function (foodOption) {
      return foodOption.options.reduce(function (acc, option) {
        return acc + option.name + ", ";
      }, "");
    })
    .join("");
  return string.substr(0, string.length - 2);
}
