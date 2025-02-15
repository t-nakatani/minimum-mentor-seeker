import { useState, useEffect } from 'react'
import './App.css'
import { fetchPostData } from './api/mockApi'
import { Header } from './components/Header'
import { RequesterProfile } from './components/RequesterProfile'
import { ContentImage } from './components/ContentImage'
import { BuyMeCoffeeButton } from './components/BuyMeCoffeeButton'

function App() {
  const [messages, setMessages] = useState([]);
  const [postData, setPostData] = useState({
    title: "",
    requester: {
      name: "",
      avatar: "",
      description: ""
    },
    contentImage: "",
    buyMeUrl: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPostData();
        setPostData(data);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-[#131C24]">
      <p className="text-[#F8F9FB]">Loading...</p>
    </div>;
  }

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#131C24] dark justify-between group/design-root overflow-x-hidden max-w-[480px] mx-auto"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div>
        <Header title={postData.title} />
        <RequesterProfile requester={postData.requester} />
        <ContentImage imageUrl={postData.contentImage} />
      </div>
      <BuyMeCoffeeButton url={postData.buyMeUrl} />
    </div>
  );
}

export default App
