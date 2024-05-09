import { useEffect } from "react";
import fetchTrends from "./fetch/fetch";

export default function App() {

  useEffect(() => {
    fetchTrends('day')
  }, [])

  return (
    <p></p>
  )
}