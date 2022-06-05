import React, { useState } from "react";
import "./App.css";
import AddCommentCard from "./Components/AddCommentCard/AddCommentCard";
import CommentCard from "./Components/CommentCard";

const data = [
  {
    id: 1,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    username: "amyrobson",
    votes: 20
  },
  {
    id: 2,
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    username: "maxblagun",
    votes: 6
  }
];

function App() {
  const [dataList, setDataList] = useState(data);

  const changeVoteCount = (userId, newVotes) => {
    for (const userElement of dataList) {
      if (userElement.id === userId) {
        userElement.votes = newVotes;
      }
    }
  }

  return (
    <>
      {dataList.map((user) => (
        <CommentCard
          username={user.username}
          text={user.content}
          key={Math.random().toString()}
          id={user.id}
          votes={user.votes}
          changeVoteCount={changeVoteCount}
        />
      ))}
      <AddCommentCard data={dataList} setData={setDataList} />
    </>
  );
}

export default App;
