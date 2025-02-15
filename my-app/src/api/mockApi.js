const description = "Reactの基本的なコンポーネント作成と状態管理が理解できるようになりたい"
export const fetchPostData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Reactを勉強したい",
        requester: {
          name: "Ludwig",
          avatar: "https://cdn.usegalileo.ai/sdxl10/913ab275-47b7-45f0-a7fd-bb7c50968339.png",
          description: description
        },
        contentImage: "https://cdn.usegalileo.ai/sdxl10/7f0d9340-271c-4689-b116-27da2cc77943.png",
        buyMeUrl: "https://gift.starbucks.co.jp/c/xxx"
      });
    }, 500);
  });
};
