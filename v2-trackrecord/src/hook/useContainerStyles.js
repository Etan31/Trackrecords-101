function useContainerStyles(menuActive) {
    return {
      width: menuActive ? '100%' : 'calc(100% - 250px)',
      marginLeft: menuActive ? 'unset' : '250px',
      transition: 'all 0.3s ease',
    };
  }
  
  export default useContainerStyles;
  