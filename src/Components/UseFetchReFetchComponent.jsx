import useFetchReFetch from './UseFetchReFetch'

const UseFetchReFetchComponent = () => {

  const {data, loading, error} = useFetchReFetch('https://jsonplaceholder.typicode.com/posts/1')

if(loading){
  return <p className='bg-green-500 text-white p-1'>Loading...</p>
}

if(error){
  return <p className='bg-red-500 text-white p-1'>Error: {error.message}</p>
}

  return (
    <>
    {data && (
      <div className='bg-yellow-400'>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    )}
    </>
  )
}

export default UseFetchReFetchComponent