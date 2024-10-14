import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id="header">
      <img
        src={logo}
        alt="Logo for the investment calculator showing a money bag"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}