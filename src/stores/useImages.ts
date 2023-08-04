const front = "https://xiaolai0913.oss-cn-shenzhen.aliyuncs.com/%20";

export const getAllImageLinks = () => {
  const imageLinks = [];
  for (let i = 1; i < 28; i++) {
    if (i === 24 || i === 11 || i === 5||i===14) continue;
    imageLinks.push(`${front}${i}.jpg`);
  }
  return imageLinks;
};
