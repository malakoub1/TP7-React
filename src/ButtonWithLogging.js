import withLogging from './withLogging';
import Button from './Button';

// Application du HOC au composant Button
const ButtonWithLogging = withLogging(Button);

export default ButtonWithLogging;