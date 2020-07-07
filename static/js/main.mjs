const updateTime = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  document.getElementById("time").textContent = `${
    hours > 12 ? hours - 12 : hours
  }:${minutes < 10 ? "0" + minutes : minutes}${hours < 13 ? "am" : "pm"}`;
};

const updateWeather = () => {
  fetch(`${window.location.pathname}/update`).then((response) =>
    response.text()
  ).then(
    (html) => {
      if (html) {
        document.body.innerHTML = html;
        updateTime();
      }
    },
  ).catch((error) => console.log("Cannot update weather"));
};

updateTime();

setInterval(updateTime, 10 * 1000);
setInterval(updateWeather, 10 * 60 * 1000);
