import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document  {
    
    render(){
        return (
            <Html lang="ko">
                <Head/>
                    <body>
                <Main></Main>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
