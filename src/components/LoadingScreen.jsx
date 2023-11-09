import { useProgress } from "@react-three/drei";

export const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();
  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen_progress">
        <div
          className="loadingScreen__progress__value"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="loadingScreen__board">
        <h1 className="loadingScreen__title">Please help me!</h1>
        <button
          className="loadingScreen__button"
          disabled={progress < 100}
          onClick={onStarted}
        >
          Start
        </button>
      </div>
    </div>
  );
};
