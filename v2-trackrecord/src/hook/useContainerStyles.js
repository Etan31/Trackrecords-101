function useContainerStyles(menuActive) {
    return {
      marginLeft: menuActive ? '50px' : '50px',
      transition: 'all 0.3s ease',
    };
  }
  
  export default useContainerStyles;
  