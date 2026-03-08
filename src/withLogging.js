function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    // Affiche les props reçues dans la console
    console.log('Props reçues :', props);

    return <WrappedComponent {...props} />;
  };
}

export default withLogging;