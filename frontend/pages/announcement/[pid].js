import { useRouter } from 'next/router'
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
  
    return <p>Post: {pid}</p>
  }
  
  export default Post