import React from 'react'

const ErrorBoundary = () => {
  
  return (
    <div className='flex gap-8'>
      <ErrorBoundaryCard>
      <Card1 />
      </ErrorBoundaryCard>
      <Card2 />
    </div>
  )
}


function Card1(){

  throw new Error('Error in Card 1!')

  return(
    <div className='bg-red-200 w-32 h-40'>
        <h1>It Works!</h1>
    </div>
  )
}
function Card2(){
  return(
    <div className='bg-yellow-200 w-32 h-40'>

      <h1>Card2</h1>

    </div>
  )
}

class ErrorBoundaryCard extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  componentDidCatch(error, info) {
      console.error("Error caught:", error, info);
  }

  render() {
      if (this.state.hasError) {
          return <div className='bg-red-600 w-fit h-40'>Something went wrong.</div>;
      }

      return this.props.children; 
  }
}

export default ErrorBoundary