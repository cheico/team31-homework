console.log("homework week3");
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
function removeName(nameToRemove) {
  return names.filter((name) => name !== nameToRemove);
}

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
console.log(removeName(nameToRemove));
console.log("when we will be there");
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function calculateTravelTime(travelInfo) {
  const { speed, destinationDistance } = travelInfo;
  const totalTime = destinationDistance / speed;
  console.log(totalTime);
  const hours = Math.floor(totalTime);
  console.log(hours);
  const minutes = Math.round((totalTime - hours) * 60);
  console.log(minutes);
  return `${hours} hours & ${minutes} minutes`;
}
const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);
console.log("durationMyLife");
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
function formatPercentage(value) {
  return value.toFixed(3);
}
function logOutSeriesText() {
  const avgLifespanInMinutes = 80 * 365 * 24 * 60;
  let totalPercentage = 0;
  seriesDurations.forEach((series) => {
    const seriesTimeInMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    const percentage = (seriesTimeInMinutes / avgLifespanInMinutes) * 100;
    totalPercentage += percentage;
    console.log(
      `${series.title} took ${formatPercentage(percentage)}% of my life`
    );
  });
  console.log(
    `In total that is ${formatPercentage(totalPercentage)}% of my life`
  );
}
logOutSeriesText();
