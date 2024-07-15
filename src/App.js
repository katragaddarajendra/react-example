import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:8080/product")
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const json = await response.json()
      setPosts(json)
      console.log(json)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() =>
  {
    getPosts();
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <table className="table-auto py-4 border-gray-500">
          <thead>
          <tr className="bg-gray-500">
            <th className="px-4 py-2 border-gray-600">Id</th>
            <th className="px-4 py-2 border-gray-600">pname</th>
            <th className="px-4 py-2 border-gray-600">batchno</th>
            <th className="px-4 py-2 border-gray-600">price</th>
            <th className="px-4 py-2 border-gray-600">noofproduct</th>
          </tr>
          </thead>
          <tbody>
          {posts.map((post) => (
              <tr key={post.id}>
                <td className="border px-4 py-2 border-gray-600">{post.id}</td>
                <td className="border px-4 py-2 border-gray-600">{post.pname}</td>
                <td className="border px-4 py-2 border-gray-600">{post.batchno}</td>
                <td className="border px-4 py-2 border-gray-600">{post.price}</td>
                <td className="border px-4 py-2 border-gray-600">{post.noofproduct}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
