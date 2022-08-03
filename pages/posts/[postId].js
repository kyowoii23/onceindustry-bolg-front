import { useRouter } from "next/router";

export const PostDetailPage = ({postId}) => {
    console.log(postId)

    return (
        <div>
            <h1>상세 페이지</h1>
            <p>안녕</p>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const {postId} = context.query;

    return {
        props: {
            postId
        }
    }
}

export default PostDetailPage;