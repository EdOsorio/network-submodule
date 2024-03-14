interface props {
  onClick: () => void;
}
const NetworkButon = ({ onClick }: props) => {
  return <button onClick={onClick}>Network Button v2</button>;
};

export default NetworkButon;
