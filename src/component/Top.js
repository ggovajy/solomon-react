import { Header } from "semantic-ui-react";
import Gnb from "./Gnb"
import ImageSliders from "./ImageSliders";

function Top() {
    return (
        <div>
            <ImageSliders></ImageSliders>
            <Header as="h1">solomon HomePage</Header>
            <Gnb/>
        </div>
    )
}

export default Top