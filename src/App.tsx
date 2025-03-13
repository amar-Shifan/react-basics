import { useRef, useState , useEffect} from 'react'
import Child from './child';
import UI from './assets/ui';

function App() {
  const [count, setCount] = useState(0);
  const [data , setData] = useState('');
  const [text , setText] = useState('')

  interface counter{
    count: number
  }

  const textRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    textRef.current?.focus()
  })

  const DisplayCount = ({count}: counter) => {
    return <h1 className='text-teal-600'>Count : {count}</h1>
  }

  const Welcome = ({ isLoggedIn }: {isLoggedIn: number}) => {
    if (isLoggedIn > 0) {
      return <h1>Welcome Back, User! 🎉</h1>;
    } else {
      return <h1>Please Log In 🔑</h1>;
    }
  };

  const prevCountRef = useRef<null | number>(null);

  useEffect(() => {
    prevCountRef.current = count; 
  });


  const handleChild = (childData: string) => {
    setData(childData);
  }

  // useEffect(() => {
  //   const interval = setInterval(()=>{
  //     setCount((prev) => prev + 1 );
  //   },1000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // },[])

  // cleanup Function
  // const [seconds , setSec] = useState<number>(0)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSec((prev) => prev + 1)
  //   },1000)

  //   return () => {
  //     clearInterval(interval);
  //     console.log('clean up ')
  //   }
  // },[])

  const users:string[] = ['amar' , 'sajjad' , 'fayis'];

  return (
    <div className='flex justify-center items-center w-full min-h-screen  bg-teal-200'>
      <div className='flex flex-col justify-around items-center w-full max-w-md h-52 bg-white rounded-lg shadow-md p-6'>
        <h1 className='text-4xl font-semibold'>Counter</h1>
        <Welcome isLoggedIn={count}/>
        <h3>Previous: {prevCountRef.current}</h3>
        <DisplayCount count={count}/>
        <div>

        <button className='px-4 py-2 border rounded-md shadow-sm mx-2' onClick={()=> setCount(count + 1)}>plus</button>
        <button className='px-4 py-2 border rounded-md shadow-sm' onClick={()=> setCount(count - 1)}>minus</button>

        </div>

      </div>

      <div>
      {/* <h2>Timer: {seconds} seconds</h2>; */}
      <h2>Parent Component</h2>
      <p>Data from Child: {data}</p> 
      <Child sendData={handleChild} />

      <input 
        type="text"
        ref={textRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Please enter....'
        />
        <h1>Value : {text}</h1>
    </div>
    <ul>
      {users.map((user) => (
        <li>{user}</li>
      ))}
    </ul> 
    <UI name= 'amar' email = 'amar@gmail.com' />
    <UI name= 'fayis' email = 'amar@gmail.com' />

    </div>
  )
}

export default App
