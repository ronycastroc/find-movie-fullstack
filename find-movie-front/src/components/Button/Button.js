import "@ui5/webcomponents/dist/Button";
import './button.scss';

export const Button = ({ children, ...otherProps }) => {
  return (
    <ui5-button design="Emphasized" class='button' {...otherProps}>{children}</ui5-button>
  );
}