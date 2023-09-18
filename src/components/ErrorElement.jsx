import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error =useRouteError()
  console.log(error);
return (
  <div>
      <h1 className="text-6xl">This something error...</h1>
  </div>
)
}

export default ErrorElement