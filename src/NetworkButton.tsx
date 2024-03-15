interface props {
  onClick: () => void;
}
const NetworkButon = ({ onClick }: props) => {
  return <button onClick={onClick}>Network Button v4</button>;
};

export default NetworkButon;
