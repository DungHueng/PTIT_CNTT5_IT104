function greetingWithWeather(person, weather) {
    let message = "";
    if (weather === "Sunny") {
            message = `Chào ${person.name}! Hôm nay trời nắng tuyệt vời!`;
        } else if (weather === "Rainy") {
            message = `Chào ${person.name}! Hôm nay trời mưa, hãy mang theo ô!`;
        } else {
            message = `Chào ${person.name}! Hôm nay thời tiết không xác định.`;
        }
        console.log(message);
}
greetingWithWeather({ name: "Nguyễn An" }, "Sunny");
greetingWithWeather({ name: "Lê Nam" }, "Rainy");
greetingWithWeather({ name: "Trần Tâm" }, "Cloudy");