import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from "./firebase";
import { getDocs } from "firebase/firestore";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
function Feed() {
  const [posts, setPosts] = useState([]);
  const postRef = collection(db, "posts");

  useEffect(() => {
    // onSnapshot(postRef, (snapshot) => {
    //   const items = [];
    //   snapshot.docs.forEach((doc) => {
    //     items.push(doc.data());
    //     console.log(items);
    //   });
    //   //console.log(items);
    //   setPosts(items);
    //   //console.log(items);
    // });
    const getPosts = async () => {
      const data = await getDocs(postRef);
      setPosts(
        data.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }))
      );
    };
    getPosts();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => {
        return (
          <Post
            key={post.data.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timeStamp={post.data.timeStamp}
            username={post.data.username}
            image={post.data.image}
          />
        );
      })}
      {/* <Post
        profilePic={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F24712956%3Fs%3D400%26u%3Db71527e605ae1b748fc2d4157a842e57e427ad44%26v%3D4&f=1&nofb=1&ipt=68825e393ae358869434bb29de67592731fbb4bb32cc7da793dee29bff0dad36&ipo=images"
        }
        message={"posts pagee built"}
        timeStamp={"this is the time stamp"}
        username={"sssangha"}
        image={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YePVzjkjsadOqzQ03wl5kAHaEO%26pid%3DApi&f=1&ipt=dd3397b1d19f277c505a0a38317e6a3ce5e72e4603ab1cca5a3387acf5a3bbf2&ipo=images"
        }
      />
      <Post
        profilePic={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._SLV9BoBgrXCLuuO4dDH2gHaE8%26pid%3DApi&f=1&ipt=72d9114b8e3a84aa476eae5f21d6413e2312c356ee55f698bf144f2bd32c3bc9&ipo=images"
        }
        message={"Welocme to metaverse"}
        timeStamp={"this is the time stamp"}
        username={"Mark"}
        image={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7UpnUJzJqNbdr5l-Cr-fmQHaEK%26pid%3DApi&f=1&ipt=fa07449f25ee16fd1f0caef0579bc33e279e5ac7e2cabf42ae147613addd96dc&ipo=images"
        }
      />
      <Post
        profilePic={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WWrMiP4iKmR8nOIsl4QgiQHaE8%26pid%3DApi&f=1&ipt=51e5707b43161f0970e671d1b387fcaabf1a505b90ad950579b224b97c194954&ipo=images"
        }
        message={"Current CEO"}
        timeStamp={"this is the time stamp"}
        username={"Tim"}
        image={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.of8IfE14Oo20RyqZ1resGwHaEo%26pid%3DApi&f=1&ipt=c25aad9d13dce7da99137ce9936550b7e51dfa5342775fc1c406734fe39a334a&ipo=images"
        }
      /> */}
    </div>
  );
}

export default Feed;
