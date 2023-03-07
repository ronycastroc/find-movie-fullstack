import "@ui5/webcomponents/dist/Button";
import './button.scss';

export const Button = ({ children }) => {
  return (
    <ui5-button design="Emphasized" class='button'>{children}</ui5-button>
  );
}