import { useProgress } from "@react-three/drei";

export const LoadingScreen = () => {
  const { progress } = useProgress();
  return (
    <div className={"loadingScreen"}>
      <div className="loadingScreen_progress">
        <div
          className="loadingScreen_progress_value"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div className="loadingScreen_board">
        <h1 className="loadingScreen_title">Please help me!</h1>
        <button className="loadingScreen_button" disabled={progress < 100}>
          Start
        </button>
      </div>
    </div>
  );
};
