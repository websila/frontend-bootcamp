const getIPData = async (ip) => {
  const data = await fetch(
    `http://apiip.net/api/check?ip=${ip}&accessKey=b0c6cdca-b496-4d72-b773-6405670e0fdb`
  );
  const result = await data.json();
  console.log(result);
};
getIPData("2.178.151.162");
