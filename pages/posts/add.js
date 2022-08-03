import { useRouter } from "next/router";
import { useState } from "react";
import { API_HOST } from "../../common";
import { marked } from "marked";
import styled from "@emotion/styled";

const PostAddPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await fetch(`${API_HOST}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    alert("게시글 성공");
    router.push("/posts");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" value={title} onChange={titleHandler} />
      </div>
      <div>
        <label htmlFor="content">본문</label>
        <Container>
          <textarea
            id="content"
            cols="30"
            rows="10"
            onChange={contentHandler}
            defaultValue={content}
          ></textarea>
          <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
        </Container>
      </div>
      <button>게시글 작성</button>
    </form>
  );
};

export default PostAddPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`;
