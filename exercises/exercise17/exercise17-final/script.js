// ? selecting elements
const resultContainerEL = document.querySelector(".result-container");
const resultEL = document.getElementById("result");
const submitEL = document.getElementById("submit");
const inputEL = document.getElementById("ip-input");

// ! method 1 : promise
const getIPDataWithPromise = (ip) => {
  return fetch(
    `http://apiip.net/api/check?ip=${ip}&accessKey=b0c6cdca-b496-4d72-b773-6405670e0fdb`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
};

// ! method 2 : async / await
const getIPDataWithAsyncAwait = async (ip) => {
  const request = await fetch(
    `http://apiip.net/api/check?ip=${ip}&accessKey=b0c6cdca-b496-4d72-b773-6405670e0fdb`
  );
  const result = await request.json();
  return result;
};

// ! calling method 1
submitEL.addEventListener("click", async () => {
  resultContainerEL.style.display = "block";
  resultEL.innerHTML = "loading...";
  const ipData = await getIPDataWithAsyncAwait(inputEL.value);
  resultEL.innerHTML = ipData.officialCountryName;
});

// ! calling method 2
/* submitEL.addEventListener("click", () => {
  resultContainerEL.style.display = "block";
  resultEL.innerHTML = "loading...";
  getIPDataWithPromise(inputEL.value).then((res) => {
    resultEL.innerHTML = res.officialCountryName;
  });
}); */
