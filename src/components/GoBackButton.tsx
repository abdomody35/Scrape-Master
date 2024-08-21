import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
    const navigate = useNavigate();

    return (
    <button className="App-button" onClick={() => navigate("/")}>
        Go back
    </button>
    );
}

export default GoBackButton;