import './RightSection.css';
import { RightBottomContainer } from "./right-bottom-container/RightBottomContainer"
import { RightTopContainer } from "./right-top-container/RightTopContainer"

export const RightSection = () => {
    return (
        <div className="right-section">
            <RightTopContainer />
            <RightBottomContainer />
        </div>
    )
}