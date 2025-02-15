const description = "Reactの基本的なコンポーネント作成と状態管理を勉強して理解したい"
export const fetchPostData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Reactを理解したい",
        requester: {
          name: "Ludwig",
          avatar: "https://cdn.usegalileo.ai/sdxl10/913ab275-47b7-45f0-a7fd-bb7c50968339.png",
          description: description
        },
        contentImage: "https://cdn.midjourney.com/10a3f23e-eac5-4621-9bee-ff107d3bb282/0_3.png",
        buyMeUrl: "https://gift.starbucks.co.jp/c/xxx"
      });
    }, 500);
  });
};
