interface props {
  onClick: () => void;
}
const NetworkButon = ({ onClick }: props) => {
  return <button onClick={onClick}>Network Button</button>;
};

export default NetworkButon;
